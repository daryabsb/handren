const { autoUpdater } = require("electron-updater");
autoUpdater.checkForUpdatesAndNotify();

const {
  app,
  BrowserWindow,
  ipcMain,
} = require('electron')
const path = require('path');
const express = require('express');
const serveStatic = require('serve-static');
const fs = require('fs');

const expressApp = express();
expressApp.use(serveStatic(path.join(__dirname, '.output/public'), { index: ['index.html'] }));

function createWindow () {
  const windows = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, `./preload.js`)
    }
  });
  // windows.loadFile(`./.output/public/index.html`);
  windows.loadURL('http://localhost:3000');
  return windows;
}
app.whenReady().then(() => {
  expressApp.listen(3000);
  const windows = createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  })
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('ondragstart', (event, content) => {
  fs.writeFileSync(path.join(__dirname, 'output.md'), content);
  event.sender.startDrag({
    file: path.join(__dirname, 'output.md'),
    icon: 'drag-and-drop.png',
  });
});
