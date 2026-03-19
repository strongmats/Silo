const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('silo', {
  newFile: () => ipcRenderer.invoke('file:new'),
  openFile: () => ipcRenderer.invoke('file:open'),
  saveFile: (data) => ipcRenderer.invoke('file:save', data),
  saveAsFile: (data) => ipcRenderer.invoke('file:save-as', data),
  openExternal: (url) => ipcRenderer.invoke('open-external', url),
  onMenuAction: (callback) => ipcRenderer.on('menu-action', (event, action) => callback(action)),
});
