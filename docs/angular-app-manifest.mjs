
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
    "route": "/art"
  },
  {
    "renderMode": 2,
    "route": "/reading"
  },
  {
    "renderMode": 2,
    "route": "/works"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 13777, hash: '06738f8feaac878620179f29c9eec6e7f98257b7bf5340c0d43858650dc16631', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5064, hash: 'da998e184ac5387fc0b30fde3ca2adc1f4d031d5245d660c2d71387c8f698c6d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'works/index.html': {size: 115338, hash: '6bdf2b0f9470622cc1d31764015cf9fb3b95d3ece9389e871f76cf3ebd006a94', text: () => import('./assets-chunks/works_index_html.mjs').then(m => m.default)},
    'index.html': {size: 113715, hash: '3a0e05f1dc8372bce52d058f6942c0fd74943306b335cef1fbb88560227ada52', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 109040, hash: '5c90ff1e6f9eb7dc9496d8d0195ca8ab4a67ce4c399dc28bdaf8ed0ee61e9b80', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 113715, hash: '3a0e05f1dc8372bce52d058f6942c0fd74943306b335cef1fbb88560227ada52', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'reading/index.html': {size: 154081, hash: 'c87e5be8fcc17ae3d8dc0a6b1e3b1f98a5096a15a6940f5a9350db7e04e5a62a', text: () => import('./assets-chunks/reading_index_html.mjs').then(m => m.default)},
    'writing/index.html': {size: 110006, hash: 'd9259faa8b30199b2bdf6b6b7d5743251a27e73b35acb9cc30f7ef76aba6d34c', text: () => import('./assets-chunks/writing_index_html.mjs').then(m => m.default)},
    'art/index.html': {size: 122948, hash: '6de6b9b3aefb7150af944543851b7f322f3283d7de75620a68e4abebe8e11055', text: () => import('./assets-chunks/art_index_html.mjs').then(m => m.default)},
    'styles-RLPAW2NF.css': {size: 15149, hash: 'nVc8FNPwjG4', text: () => import('./assets-chunks/styles-RLPAW2NF_css.mjs').then(m => m.default)}
  },
};
