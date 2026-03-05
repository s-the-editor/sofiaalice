import { Component } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-reading',
  imports: [
    MatTooltipModule,
    MatCardModule,
    MatChipsModule,
  ],
  templateUrl: './reading.html',
  styleUrl: './reading.css',
})
export class Reading {
  cards = [
    {
      title: 'Uprooted',
      subtitle: 'Naomi Novik',
      imageUrl: 'bookcovers/Uprooted.jpg',
      content: '',
      genre: 'fantasy',
      series: 'standalone',
    },
    {
      title: 'Tress of the Emerald Sea',
      subtitle: 'Brandon Sanderson',
      imageUrl: 'bookcovers/Tress.jpg',
      content: '',
      genre: 'fantasy',
      series: 'standalone',
    },
    {
      title: 'Magic for Beginners',
      subtitle: 'Kelly Link',
      imageUrl: 'bookcovers/Magic.jpg',
      content: '',
      genre: 'magical realism',
      series: 'short story collection',
    },
    {
      title: 'The Language of the Night',
      subtitle: 'Ursula K. Le Guin',
      imageUrl: 'bookcovers/Language.jpg',
      content: '',
      genre: 'craft',
      series: 'essay collection',    
    },
    {
      title: 'The Cruel Prince',
      subtitle: 'Holly Black',
      imageUrl: 'bookcovers/CruelPrince.jpg',
      content: '',
      genre: 'fantasy',
      series: 'trilogy',    
    }, 
        {
      title: 'Thornhedge',
      subtitle: 'T. Kingfisher',
      imageUrl: 'bookcovers/Thornhedge.jpg',
      content: '',
      genre: 'fantasy',
      series: 'standalone novella',    
    }, 
        {
      title: 'The Hunger Games',
      subtitle: 'Suzanne Collins',
      imageUrl: 'bookcovers/HungerGames.jpg',
      content: '',
      genre: 'dystopian',
      series: 'trilogy',    
    },    
  ];
}

