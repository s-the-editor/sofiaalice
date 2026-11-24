import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-works',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
  ],
  templateUrl: './works.html',
  styleUrl: './works.css',
})
export class Works {
  cards = [
    {
      title: 'Psychic Readings',
      subtitle: 'Bitter Magazine',
      imageUrl: 'myworks/psychic-readings.jpg',
      content: 'Published in Volume 1.2 in October, 2026',
      link: 'https://bittermag.com/psychic-readings/',
    },
    {
      title: 'How to Use AI to Commit Atrocities Against Mankind (And Profit!)',
      subtitle: 'Spoke Magazine',
      imageUrl: 'spoke/spokeai1.jpg',
      image2: 'spoke/spokeai2.jpg',
      content: 'Published in Sporbes ("Forbes" Parody) in Spring, 2024',
      link: 'https://emoryspoke.org/sporbes-spring-2024-magazine/',
    },
    {
      title: 'Five Ways to KNOW That Your Crush is into You!',
      subtitle: 'Spoke Magazine',
      imageUrl: 'spoke/spokej14.jpg',
      content: 'Published in S-14 / Spoke\'s Life ("J-14" and "Boys\' Life" Parody), Fall 2022',
      link: 'https://emoryspoke.org/emory-spoke-fall-2022-magazine-s14-and-spokes-life/',
    },
  ];
}

