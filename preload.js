const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  drag: (content) => {
    ipcRenderer.send('ondragstart', content);
  }
});