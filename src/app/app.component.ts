import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'ae-app',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    nsxIP: string = "10.20.30.40";

    fileNames: string[];

    constructor() {
    }
    ngOnInit() {
        console.log("Retrieving file list!!");
    }

}
