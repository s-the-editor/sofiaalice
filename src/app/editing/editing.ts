import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-editing',
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './editing.html',
  styleUrl: './editing.css',
})
export class Editing {

}
