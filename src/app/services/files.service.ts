import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
const {ipcRenderer} = require('electron')

@Injectable()
export class FilesService {
    constructor() { }

    getAllFiles(): Observable<string[]> {

        return Observable.create((observer) => {
            ipcRenderer.on('fileNamesRetrieved', (event, arg) => {
                observer.next(arg);
            });
            ipcRenderer.send('fileNamesRequested', 'nothing!');
        });

    }

}  