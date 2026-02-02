
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/writing"
  },
  {
    "renderMode": 2,
    "route": "/editing"
  },
  {
    "renderMode": 2,
    "route": "/art"
  },
  {
    "renderMode": 2,
    "route": "/reading"
  },
  {
    "renderMode": 2,
    "route": "/shop"
  },
  {
    "renderMode": 2,
    "route": "/works"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 13751, hash: '9b2382effb7dd9225f8718e68f8f30644b95525256f08e81e442bf12256e9153', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5038, hash: 'cdb7c3175ab8f5682295c64ca0727e68baebbc715694c261686ab15dfe1ccd0d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 108608, hash: '175c0c889bfac24369d47d16e5a99730cc7babf30e8e5637fcd8d506c4d42a67', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'art/index.html': {size: 119579, hash: '22b5bc18a233ff87f0fa5588d634e448aa8eb17dd1ec9c6a3331b46109933a73', text: () => import('./assets-chunks/art_index_html.mjs').then(m => m.default)},
    'reading/index.html': {size: 108702, hash: '0dd92daf82b7f5fd9b22638132d108de3c717b6759b3562581cda720aebc500a', text: () => import('./assets-chunks/reading_index_html.mjs').then(m => m.default)},
    'index.html': {size: 108608, hash: '175c0c889bfac24369d47d16e5a99730cc7babf30e8e5637fcd8d506c4d42a67', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'shop/index.html': {size: 108831, hash: '8fe34683b9038c2782fa9e2538a8ea3e0a8207b9bbfbaa10e859e0d1279389ae', text: () => import('./assets-chunks/shop_index_html.mjs').then(m => m.default)},
    'works/index.html': {size: 115952, hash: '3a9f27292fcbc5c3c9e8c8e606056148771634577da0f5f04755a8c31b356075', text: () => import('./assets-chunks/works_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 108742, hash: '5e9de0d26e317ae3130636e0eb58a261e9ae4dee87c976d4245b7d051b4fe7ec', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'writing/index.html': {size: 110017, hash: '8165820f6008f6c786243715a247f4cccf4d4266eb931acbe236d4e03f956844', text: () => import('./assets-chunks/writing_index_html.mjs').then(m => m.default)},
    'editing/index.html': {size: 109319, hash: 'a3d873f14f3d4da0d557be708d6370cb245f40a006270778596e4b6e0fd5a03f', text: () => import('./assets-chunks/editing_index_html.mjs').then(m => m.default)},
    'styles-CND3DH6T.css': {size: 14952, hash: 'jBP0Cigjmgk', text: () => import('./assets-chunks/styles-CND3DH6T_css.mjs').then(m => m.default)}
  },
};
