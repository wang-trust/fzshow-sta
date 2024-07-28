const { app, BrowserWindow } = require('electron');
const path = require('node:path');



const createWindow = () => {
    const win = new BrowserWindow({
        webPreferences: {
            //   contextIsolation: true, // 是否开启隔离上下文
            //   nodeIntegration: true, // 渲染进程使用Node API
            preload: path.join(__dirname, "./preload.js"), // 需要引用js文件
        },
    })
    win.loadFile(path.join(__dirname, 'index.html'));
    win.webContents.openDevTools();

}

app.whenReady().then(() => {
    createWindow() // 创建窗口
    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// 关闭窗口
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit()
    }
}) 