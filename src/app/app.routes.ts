import {Routes} from '@angular/router';

import {Home} from './home/home';
import {About} from './about/about';
import {Writing} from './writing/writing';
import {Editing} from './editing/editing';
import {Art} from './art/art';
import {Reading} from './reading/reading';
import {Shop} from './shop/shop';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'writing',
    component: Writing,
  },
  {
    path: 'editing',
    component: Editing,
  },
  {
    path: 'art',
    component: Art,
  },
  {
    path: 'reading',
    component: Reading,
  },
  {
    path: 'shop',
    component: Shop,
  },
];

