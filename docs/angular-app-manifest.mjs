
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
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 13692, hash: '62786835a9e0be9003fd1d4739842efdddee69ae1eb8e2c93be5ec9a220b983c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5038, hash: 'cbe716f0189ef9266be6889ab3cc869163646fd916efaaaa892de7c50113d55c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'art/index.html': {size: 80971, hash: 'eeb7d7adc461faf7dafa63f2081d77fc5acba095ad25b181ae759663deb96149', text: () => import('./assets-chunks/art_index_html.mjs').then(m => m.default)},
    'reading/index.html': {size: 81666, hash: '9c3bae63a0777032d702c4c3fde59378b54101d4c9e7aec6c24046204a8f3719', text: () => import('./assets-chunks/reading_index_html.mjs').then(m => m.default)},
    'index.html': {size: 94716, hash: '11bc5c68060b9fd581d5ce329dcfd2c262d8119b31caa2d88af7238ac448cdcc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 94716, hash: '11bc5c68060b9fd581d5ce329dcfd2c262d8119b31caa2d88af7238ac448cdcc', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'editing/index.html': {size: 92728, hash: 'c161e57af094365796a7c8dca679506c08c8fe2a67cf57ce708c415687f42fad', text: () => import('./assets-chunks/editing_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 93020, hash: '2b9de7eed218207726a80fc9ab90bbf1660f08cfd2b3e3d0f0e6da9ad8a07bf5', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'shop/index.html': {size: 91688, hash: '51991efa3b7c441a9fe5b9b768048a05d28daef431fca3a41dc34def5bb63cb6', text: () => import('./assets-chunks/shop_index_html.mjs').then(m => m.default)},
    'writing/index.html': {size: 83497, hash: 'd0eaea24017c8dc64af4b23bfaf1d868ed74fe9302e9c7b4b9c08a4751ae8188', text: () => import('./assets-chunks/writing_index_html.mjs').then(m => m.default)},
    'styles-BASOZTS7.css': {size: 13993, hash: 'xtB0kGgsZ1s', text: () => import('./assets-chunks/styles-BASOZTS7_css.mjs').then(m => m.default)}
  },
};
