import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-resume',
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './resume.html',
  styleUrl: './resume.css',
})
export class Resume {

}
