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


import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './components/app.component';
import { MaterialModule } from '@angular/material';
import { routes } from './app.routes';


import '../styles.css';
import 'clarity-icons/clarity-icons.min.css';
import 'clarity-ui/clarity-ui.min.css';
import "@webcomponents/custom-elements/custom-elements.min.js";
// import "clarity-icons/clarity-icons.min.js";


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
    providers: [],
    declarations: [AppComponent, HomeComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
