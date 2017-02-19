/**
 * Import decorators and services from angular
 */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

declare var Notification: any;

@Component({
  selector: 'ae-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name: string;

  constructor() { }

  ngOnInit() {
  }
  doNotify() {
    let message = {
      title: "Content-Image Notification",
      body: "Short message plus a custom content image",
    };
    new Notification(message.title, message);
  }
}
