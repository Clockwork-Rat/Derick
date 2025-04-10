const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 400,
        height: 300,
    })

    win.loadFile('app.html')
}

app.whenReady().then(() => {
    createWindow()
})