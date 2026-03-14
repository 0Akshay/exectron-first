const { contextBridge } = require("electron");
const path = require("path");
// const db = require(path.join(__dirname, "database", "db"));

// console.log("preload directory:", __dirname);

contextBridge.exposeInMainWorld("api", {
    hello: () => "Hello from Electron",
    // addUser: (name) => db.addUser(name)
});