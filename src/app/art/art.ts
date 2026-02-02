import { Component } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-art',
  imports: [
    MatTooltipModule,
    MatCardModule
  ],
  templateUrl: './art.html',
  styleUrl: './art.css',
})
export class Art {
  cards = [
    {
      title: 'Wire-Wrapped Pendant',
      subtitle: '',
      imageUrl: 'art/pendant.jpeg',
      content: 'A malachite stone wrapped in copper wire. Completed in December, 2025.',
    },
    {
      title: 'Blue Sea Dragon Painting',
      subtitle: '',
      imageUrl: 'art/sea-dragon.jpeg',
      content: 'A painting of a blue sea dragon, acrylic on wood. Completed in September, 2024.',
    },
    {
      title: 'The Witch\'s Bookshelf Puzzle Stamp',
      subtitle: '',
      imageUrl: 'art/witch-shelf.jpeg',
      content: 'This stamp is actually comprised of four stamps! The stamps themselves were planted as letterboxes in Maine in September, 2025.',
    },
    {
      title: 'Wire-Wrapped Dragon',
      subtitle: '',
      imageUrl: 'art/dragon.jpeg',
      content: 'A dragon made out of copper wire. The wings were given a blue-green patina. Completed in June, 2022.',
    },
    {
      title: 'Leaf Bag',
      subtitle: '',
      imageUrl: 'art/leaf-bag.jpeg',
      content: 'A hand-sewn bag made for my elf Eenaissance Faire costume. Completed in October, 2025.',
    },
    {
      title: 'Raven Cosplay',
      subtitle: '',
      imageUrl: 'art/raven1.jpg',
      content: 'Raven from Teen Titans (2003)! I wore this on Halloween, 2025.',
    },
    {
      title: 'Liliana Cosplay',
      subtitle: '',
      imageUrl: 'art/liliana-card.PNG',
      content: 'Liliana the Necromancer from Magic:The Gathering! I wore this on Halloween, 2024.',
    },
    {
      title: 'Elf Costume',
      subtitle: '',
      imageUrl: 'art/elf1.jpeg',
      content: 'An elf costume I made for King Richard\'s Faire in September, 2025. I handmade the headpiece, which is gold-plated copper wire, the leaves on the cloak, and the leaf bag.',
    },
    
  ];
}
