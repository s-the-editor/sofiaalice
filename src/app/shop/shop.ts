import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-shop',
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop {

}
