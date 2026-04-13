
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
    'index.csr.html': {size: 13751, hash: '24b181d4590c195919756832554caaedc5ff548e87404a739c403b37f86ad7c2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5038, hash: '8c4b1be57fc01a960c3aaf24ec98df00b2ef77b3d5c01361f9bb7135d2efc73e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 110185, hash: 'cd085d30d28ca9398fad1c58a579239a497f3c1d47a212c3180968629991aede', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'art/index.html': {size: 119652, hash: 'a9e18433dac2f059cea38e2f4db058a8b5e3dd87b27b01b59f89b1db258ef8a6', text: () => import('./assets-chunks/art_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 110185, hash: 'cd085d30d28ca9398fad1c58a579239a497f3c1d47a212c3180968629991aede', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'reading/index.html': {size: 153633, hash: 'e70093c8b8585982158d4e9721941fd6e8c67124f6fad515b5c0ca79069aeed4', text: () => import('./assets-chunks/reading_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 108649, hash: '00e3bee9e2d1f352836fdb127b1bb41029f9965e404f5381bbf9ec9366e29287', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'editing/index.html': {size: 108849, hash: '58bff1e6c280975217f74aced6ebb99ff0e274275b3acb46e5696b64f1c33411', text: () => import('./assets-chunks/editing_index_html.mjs').then(m => m.default)},
    'works/index.html': {size: 115499, hash: 'b7fd3a01b4274e642295c3027e15359bb580a81388ad47409071e145cac1eca9', text: () => import('./assets-chunks/works_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 105642, hash: 'e574ebc0d77b20d857382d2722dc44ec30c92756e1e8c4160ec96d62dae5f7e3', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'writing/index.html': {size: 109526, hash: 'fbc1cd6741704b7c0f9eb4c877db4e55248955f528b6860af6c0f7a1a21f8342', text: () => import('./assets-chunks/writing_index_html.mjs').then(m => m.default)},
    'shop/index.html': {size: 108499, hash: '1c26b2f98f8d82bd895fdfdd6796435cbcb5efe4ba3e7c8b238c03036cc22860', text: () => import('./assets-chunks/shop_index_html.mjs').then(m => m.default)},
    'styles-IZR6BMUH.css': {size: 14612, hash: '4qoNO0d+cZ8', text: () => import('./assets-chunks/styles-IZR6BMUH_css.mjs').then(m => m.default)}
  },
};
