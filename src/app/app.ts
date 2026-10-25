import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadBar } from './components/head-bar/head-bar';

@Component({
  imports: [HeadBar, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
