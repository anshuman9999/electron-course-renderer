const { app, BrowserWindow, webFrame } = require('electron');

global['myGlobalVar'] = 'A var set in main.js'

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        },
        backgroundColor: 'white'
    })

    mainWindow.loadFile('./index.html');

    mainWindow.on('closed', () => {
        mainWindow = null;
    })

    mainWindow.webContents.openDevTools();

}

app.on('ready', () => {
    createWindow();
})