import { app, BrowserWindow } from "electron"

const createWindow = () => {
  const window = new BrowserWindow({
    width: 1000,
    height: 600,
    titleBarStyle: "default",
    titleBarOverlay: true, //frame: false,
    show: false,
  })

  window.setTitle("ChatGPT Desktop")
  window.setFullScreenable(true)
  //window.setTrafficLightPosition()

  //window.loadFile("../public/index.html")
  window.loadURL("https://chat.openai.com/chat")

  window.once("ready-to-show", () => {
    window.show()
  })
}

app.whenReady().then(() => {
  createWindow()

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit()
})
