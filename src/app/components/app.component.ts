import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import * as fs from 'fs';

var app = require('electron').remote;
var dialog = app.dialog;

/*
 * App Component
 * Top Level Component
 */
@Component({
    // The selector is what angular internally uses
    selector: 'ae-app', // <app></app>
    encapsulation: ViewEncapsulation.None,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    //component initialization
    isDarkTheme: boolean = false;

    ngOnInit() {
        // dialog.showOpenDialog(function (fileNames) {
        //     // fileNames is an array that contains all the selected
        //     if (fileNames === undefined) {
        //         console.log("No file selected");
        //     } else {
        //         readFile(fileNames[0]);
        //     }
        // });

        // function readFile(filepath) {
        //     console.log("File Path " + filepath);
        //     fs.readFile(filepath, 'utf-8', function (err, data) {
        //         if (err) {
        //             alert("An error ocurred reading the file :" + err.message);
        //             return;
        //         }
        //         // Change how to handle the file content
        //         console.log("The file content is : " + data);
        //     });
        // }

    }

    checkAuthentication() { }
}
