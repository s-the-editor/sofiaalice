import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

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
      MatListModule
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
}
