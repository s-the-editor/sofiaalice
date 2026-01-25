import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-home',
  imports: [
    MatButtonModule,
    MatIconModule,  
    RouterModule,
    MatTooltipModule  
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {
  constructor() {
    
  }
}

