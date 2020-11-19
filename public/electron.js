const electron = require("electron");
const app = electron.app;
const globalShortcut=electron.globalShortcut;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");
let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({ width: 900, height: 680 });
    mainWindow.loadURL(
    isDev
    ? "http://localhost:3000"
    : `file://${path.join(__dirname, "../build/index.html")}`
    );
    mainWindow.removeMenu();
    mainWindow.maximize();
    mainWindow.on("closed", () => (mainWindow = null));
    
    globalShortcut.register('f5', function() {
        console.log('f5 is pressed')
        mainWindow.reload()
    })

    globalShortcut.register('CommandOrControl+R', function() {
		console.log('CommandOrControl+R is pressed')
		mainWindow.reload()
	})
}
app.on("ready", createWindow);
app.on("window-all-closed", () => {
if (process.platform !== "darwin") {
app.quit();
}
});
app.on("activate", () => {
if (mainWindow === null) {
createWindow();
}
});