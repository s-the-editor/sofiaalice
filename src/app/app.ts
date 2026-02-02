import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { ViewportScroller } from '@angular/common';

import {MatExpansionModule} from '@angular/material/expansion';

import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: 
    [
      RouterOutlet,
      RouterModule,
      MatToolbarModule,
      MatTabsModule,
      MatSidenavModule,
      MatIconModule,
      MatButtonModule,
      MatToolbarModule, 
      MatListModule,
      Footer,
      MatExpansionModule
    ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  
  protected readonly title = signal('sofias-site');

  @ViewChild('sidenav') sidenav: MatSidenav;

  close() {
    this.sidenav.close();
  }

  constructor(private scroller: ViewportScroller) {}

  scrollToTop() {
    // Scrolls to coordinates X: 0, Y: 0
    this.scroller.scrollToPosition([0, 0]);
  }
}
