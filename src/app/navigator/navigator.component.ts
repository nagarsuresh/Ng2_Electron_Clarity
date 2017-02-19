import { FilesService } from './../services/files.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';


declare var Notification: any;

@Component({
    selector: 'ae-navigator',
    templateUrl: 'navigator.component.html'
})
export class NavigatorComponent implements OnInit {

    fileNames: any[] = [];

    constructor(
        private filesService: FilesService,
        private changeDetectionRef: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.filesService.getAllFiles().subscribe((files) => {
            this.fileNames = this.convertFileNames(files);
            this.changeDetectionRef.detectChanges();
        });
    }

    convertFileNames(files: Array<string>): Array<any> {
        let list = [];
        files.forEach((path) => {
            list.push({
                name: path.substr(path.lastIndexOf("/") + 1),
                path: path
            });
        });
        return list;
    }

    onFileClick(file): void {
        let message = {
            title: file.name,
            body: file.path,
        };
        new Notification(message.title, message);
    }
}