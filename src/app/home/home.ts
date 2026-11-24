import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatDivider} from '@angular/material/divider';

@Component({
  selector: 'app-home',
  imports: [
    MatButtonModule,
    MatIconModule,  
    RouterModule,
    MatTooltipModule,
    MatDivider,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {
  constructor() {
    
  }
}

