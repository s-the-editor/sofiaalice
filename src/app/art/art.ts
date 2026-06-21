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
    /*{
      title: 'Wizard Costume',
      subtitle: '',
      imageUrl: '',
      content: 'I made the hat out of EVA foam and covered it in fabric. I also sewed the cloak and wire-wrapped the cloak clasps. I wore this costume to [event].',
    },*/
    {
      title: 'Beaded Orchid Necklace',
      subtitle: '',
      imageUrl: 'art/orchid.jpg',
      content: 'A beaded orchid I made to wear to a wedding in July, 2026.',
    },
    {
      title: 'Celestial Capelet',
      subtitle: '',
      imageUrl: 'art/cape.jpg',
      content: 'A hand-sewn capelet created for the Riverside Revelry Renfaire in April, 2026. I also made the cloak clasp using silver wire and abalone cabochons.',
    },
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
      imageUrl: 'art/wire-dragon.jpg',
      content: 'A dragon made out of copper wire. The wings were given a blue-green patina. Completed in June, 2022.',
    },
    /* {
      title: 'Leaf Bag',
      subtitle: '',
      imageUrl: 'art/leaf-bag.jpeg',
      content: 'A hand-sewn bag made for my elf Renaissance Faire costume. Completed in October, 2025.',
    }, */
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
    {
      title: 'The World Beyond the Woods Book',
      subtitle: '',
      imageUrl: 'art/twbtw.jpg',
      content: 'A hand-bound copy of my first completed novel, The World Beyond the Woods. The cover is hand-painted. Completed in August, 2021.',
    },
    {
      title: 'Alex Fallen Doll',
      subtitle: '',
      imageUrl: 'art/doll.jpg',
      content: 'A doll version of the main character of my first novel. The hair, face, and clothing are handmade. Completed in January of 2023.',
    },
  ];
}
