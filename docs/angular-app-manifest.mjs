
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
  },
  {
    "renderMode": 2,
    "route": "/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 13751, hash: '4d50d0acb99cd568be1786d0978b90f735fbbc5473581610ea77a0c26f55d71d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5038, hash: '09c179d924e3453b95f9034c3eb45d1b5339f73f563719427c7235690c1c3e34', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 110564, hash: 'fcbee4db139b2be53aa547715a296ae347341ee7a97ef20325784bf3df926c82', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'art/index.html': {size: 119015, hash: '497d498c2479dba7ede1d9ea6c06f605b2d56df5e19e82ad7b4b2bb5428df4b8', text: () => import('./assets-chunks/art_index_html.mjs').then(m => m.default)},
    'index.html': {size: 110564, hash: 'fcbee4db139b2be53aa547715a296ae347341ee7a97ef20325784bf3df926c82', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'reading/index.html': {size: 151264, hash: '6e82c782844349f09b6c99bcd8df9de6a6e9bac9ddfb8f289cc55929b2dd3360', text: () => import('./assets-chunks/reading_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 108809, hash: '11b86e7045a20f54cae30a4170f23326f6f03df7e273404e5aaec82527405382', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'writing/index.html': {size: 109862, hash: '90d99fb4b7179595830d3f609c26ee59364b0284abe65ef8adeda92d7dd7cde6', text: () => import('./assets-chunks/writing_index_html.mjs').then(m => m.default)},
    'editing/index.html': {size: 109185, hash: 'c71c1c1de3e088f350904f6697edd2624d3d489b7d721b39f86c77546ab0fd55', text: () => import('./assets-chunks/editing_index_html.mjs').then(m => m.default)},
    'works/index.html': {size: 115832, hash: '0a43f3ad3c9708892e2dbb31e46218fb4d8d6d5938eb4ef2c885a5e72343b428', text: () => import('./assets-chunks/works_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 105978, hash: '646092805eacccd02437754f78a6800931b66ddbe98a862a5d45814e937abb96', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'shop/index.html': {size: 108835, hash: '165fe7718dde5a6eb9eafeab53a89bbdd2129109955acbc8b23f9ae999372073', text: () => import('./assets-chunks/shop_index_html.mjs').then(m => m.default)},
    'styles-QIBGLJ5Y.css': {size: 14844, hash: 'g7xD/xR8wW0', text: () => import('./assets-chunks/styles-QIBGLJ5Y_css.mjs').then(m => m.default)}
  },
};
