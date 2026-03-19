const { app, BrowserWindow, Menu, dialog, ipcMain } = require('electron');
const { execFile } = require('child_process');
const fs = require('fs');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, 'assets', 'icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  mainWindow.loadFile('index.html');
  buildMenu();
}

function buildMenu() {
  const isMac = process.platform === 'darwin';

  const template = [
    {
      label: 'File',
      submenu: [
        {
          label: 'New',
          accelerator: 'CmdOrCtrl+N',
          click: () => mainWindow.webContents.send('menu-action', 'new'),
        },
        {
          label: 'Open...',
          accelerator: 'CmdOrCtrl+O',
          click: () => mainWindow.webContents.send('menu-action', 'open'),
        },
        { type: 'separator' },
        {
          label: 'Save',
          accelerator: 'CmdOrCtrl+S',
          click: () => mainWindow.webContents.send('menu-action', 'save'),
        },
        {
          label: 'Save As...',
          accelerator: 'CmdOrCtrl+Shift+S',
          click: () => mainWindow.webContents.send('menu-action', 'save-as'),
        },
        { type: 'separator' },
        isMac ? { role: 'close' } : { role: 'quit' },
      ],
    },
    { role: 'editMenu' },
    { role: 'viewMenu' },
    { role: 'windowMenu' },
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

// --- IPC Handlers ---

const siloFileFilters = [
  { name: 'Silo Projects', extensions: ['silo'] },
  { name: 'All Files', extensions: ['*'] },
];

ipcMain.handle('file:new', async () => {
  const { canceled, filePath } = await dialog.showSaveDialog(mainWindow, {
    title: 'Create New Silo Project',
    defaultPath: 'Untitled.silo',
    filters: siloFileFilters,
  });
  if (canceled || !filePath) return { cancelled: true };

  const finalPath = filePath.endsWith('.silo') ? filePath : filePath + '.silo';
  return { path: finalPath };
});

ipcMain.handle('file:open', async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog(mainWindow, {
    title: 'Open Silo Project',
    filters: siloFileFilters,
    properties: ['openFile'],
  });
  if (canceled || filePaths.length === 0) return { cancelled: true };

  try {
    const content = fs.readFileSync(filePaths[0], 'utf-8');
    return { path: filePaths[0], content: JSON.parse(content) };
  } catch (err) {
    return { error: err.message };
  }
});

ipcMain.handle('file:save', async (event, { filePath, data }) => {
  try {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    return { ok: true };
  } catch (err) {
    return { error: err.message };
  }
});

ipcMain.handle('file:save-as', async (event, { suggestedName, data }) => {
  const { canceled, filePath } = await dialog.showSaveDialog(mainWindow, {
    title: 'Save Silo Project As',
    defaultPath: suggestedName || 'Untitled.silo',
    filters: siloFileFilters,
  });
  if (canceled || !filePath) return { cancelled: true };

  const finalPath = filePath.endsWith('.silo') ? filePath : filePath + '.silo';
  try {
    fs.mkdirSync(path.dirname(finalPath), { recursive: true });
    fs.writeFileSync(finalPath, JSON.stringify(data, null, 2), 'utf-8');
    return { ok: true, path: finalPath };
  } catch (err) {
    return { error: err.message };
  }
});

ipcMain.handle('open-external', async (event, url) => {
  try {
    // Validate URL before opening
    const parsed = new URL(url);
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
      execFile('firefox', [url]);
    }
  } catch (err) {
    // invalid URL — ignore
  }
});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
