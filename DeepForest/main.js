const { app, BrowserWindow } = require('electron')
const path = require('path')

if (!app.isPackaged) {
  app.setPath('userData', path.join(__dirname, 'userdata'))
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  })

  win.loadURL('https://deep-forest-club.wikidot.com/')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})