const express = require('express');
const { exec, execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '50mb' }));
app.use(express.static(__dirname));

// Show a native open-file dialog, read the chosen .silo file, return path + content
app.post('/api/dialog/open', (req, res) => {
  try {
    const result = execSync(
      'zenity --file-selection --title="Open Silo Project" --file-filter="Silo files | *.silo" --file-filter="All files | *"',
      { encoding: 'utf-8', timeout: 60000 }
    ).trim();
    if (!result) return res.json({ cancelled: true });
    const content = fs.readFileSync(result, 'utf-8');
    res.json({ path: result, content: JSON.parse(content) });
  } catch (err) {
    // zenity returns exit code 1 on cancel
    if (err.status === 1) return res.json({ cancelled: true });
    res.status(500).json({ error: err.message });
  }
});

// Show a native save-file dialog, return chosen path
app.post('/api/dialog/save-as', (req, res) => {
  const suggested = req.body.suggestedName || 'Untitled.silo';
  try {
    const result = execSync(
      `zenity --file-selection --save --confirm-overwrite --title="Save Silo Project" --filename="${suggested}" --file-filter="Silo files | *.silo" --file-filter="All files | *"`,
      { encoding: 'utf-8', timeout: 60000 }
    ).trim();
    if (!result) return res.json({ cancelled: true });
    // Ensure .silo extension
    const filePath = result.endsWith('.silo') ? result : result + '.silo';
    res.json({ path: filePath });
  } catch (err) {
    if (err.status === 1) return res.json({ cancelled: true });
    res.status(500).json({ error: err.message });
  }
});

// Save data to a known file path
app.post('/api/save', (req, res) => {
  const { filePath, data } = req.body;
  if (!filePath) return res.status(400).json({ error: 'No file path provided' });
  try {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Silo running at http://localhost:${PORT}`);
  const openCmd = process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start' : 'xdg-open';
  exec(`${openCmd} http://localhost:${PORT}`);
});
