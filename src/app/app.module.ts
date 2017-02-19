import { FilesService } from './services/files.service';
import { HeaderComponent } from './header/header.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { ApiResultComponent } from './container/api-result/api-result.component';
import { ApiHeaderComponent } from './container/api-header/api-header.component';
import { ApiContainerComponent } from './container/api-container/api-container.component';
import { ClarityModule } from 'clarity-angular/clarity.module';
/*
 * Angular Modules
 */
import { enableProdMode, NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { routes } from './app.routes';
import '../styles.css';
import 'clarity-icons/clarity-icons.min.css';
import 'clarity-ui/clarity-ui.min.css';
import "@webcomponents/custom-elements/custom-elements.min.js";
import "clarity-icons";


import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        ClarityModule,
        MaterialModule.forRoot(),
        RouterModule.forRoot(routes, { useHash: true })

    ],
    providers: [FilesService],
    declarations: [AppComponent, HomeComponent, ApiContainerComponent, ApiHeaderComponent, ApiResultComponent, NavigatorComponent, HeaderComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }