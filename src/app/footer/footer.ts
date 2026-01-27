import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-footer',
  imports: [
    MatButtonModule, 
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

}
