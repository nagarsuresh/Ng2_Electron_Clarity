
const {app, BrowserWindow, ipcMain} = require('electron');
const {fs} = require('fs');

var fl = require('node-filelist');
var files = [app.getAppPath() + "/data"];
var option = { "ext": "json|js" };


function getAllFileNames(callback) {
    let fileNames = [];

    console.log(".......................... getting files " + files);

    fl.read(files, option, function (results) {
        for (var i = 0; i < results.length; i++) {
            console.log(results[i]);
            fileNames.push(results[i].path);
        }
        callback(fileNames);
    });

}


module.exports = {
    registerListeners: function () {
        ipcMain.on('fileNamesRequested', (event, arg) => {
            getAllFileNames((fileNames) => {
                event.sender.send('fileNamesRetrieved', fileNames);
            });

        });
    }
}