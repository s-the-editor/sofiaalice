
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
    'index.csr.html': {size: 13692, hash: '586baab3c90b56b834adb6dcc8c5fbda96e3e42bd6216e1bf9a38dc00673a5d9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5038, hash: '7a68e3d0db9532a815cc6814f0053a72513ea1dbed2ea744f76a91b3fcd15783', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'reading/index.html': {size: 82469, hash: '8bf9455d6fd4e822368808fbfd33484039f6a9458de9bf53487105bf4a72054b', text: () => import('./assets-chunks/reading_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 94930, hash: '473c881f3f267c574e3ff26b0492ce33d848306c601756f85352323f3e1e48a2', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'art/index.html': {size: 81616, hash: 'c1ba3007afe4b6e3c89ba2ddf5dfbcabd44995ed247c4cbbcac98287fb7847f4', text: () => import('./assets-chunks/art_index_html.mjs').then(m => m.default)},
    'index.html': {size: 94930, hash: '473c881f3f267c574e3ff26b0492ce33d848306c601756f85352323f3e1e48a2', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'editing/index.html': {size: 92728, hash: 'a922acf5d60e871e472aee95e2e58d6baaf240d088ca9ef466f5300f55096604', text: () => import('./assets-chunks/editing_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 93020, hash: '222ce7b557f4fa8ae672a466d530d7259deafa4e9c371bdc90a8e77bfe702dbf', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'shop/index.html': {size: 91688, hash: '86ed0d7a17b011d6e63922f76a06b591da98700226f8e0a28496d2fa1b9ed579', text: () => import('./assets-chunks/shop_index_html.mjs').then(m => m.default)},
    'writing/index.html': {size: 83497, hash: 'c36cef98247a5e6aca9e4bdf6aebc2374787a3c2794e950fc48c5a7098eb67ab', text: () => import('./assets-chunks/writing_index_html.mjs').then(m => m.default)},
    'styles-BASOZTS7.css': {size: 13993, hash: 'xtB0kGgsZ1s', text: () => import('./assets-chunks/styles-BASOZTS7_css.mjs').then(m => m.default)}
  },
};
