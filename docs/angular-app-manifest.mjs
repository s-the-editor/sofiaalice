
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
    'index.csr.html': {size: 13692, hash: 'fb1ce36c7290ba650ef8e9a3439f9a319dc74515f389d5d7f993a6a2c5d2f72a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5038, hash: '15a51b304576894b5fbb050646701348167132ecf7d283592f05122f690d2dc4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 97228, hash: '680b431fea5d7f8734acd363bf0f36c73ee8f2be6ebab101ee0970f4fb84c10e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'art/index.html': {size: 96681, hash: 'cc9712427357d8d7ff4a3ac864a6c5198340d7457057b6be7a505568002ea3cf', text: () => import('./assets-chunks/art_index_html.mjs').then(m => m.default)},
    'reading/index.html': {size: 97322, hash: '6050f13676ee8718dd46fcfbe8e784804aad100e0cfb583a1489dcd88e995190', text: () => import('./assets-chunks/reading_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 97228, hash: '680b431fea5d7f8734acd363bf0f36c73ee8f2be6ebab101ee0970f4fb84c10e', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'editing/index.html': {size: 97807, hash: 'cc31d0e446d1ef326d6d5dc8cd7d7f571bb2185f9a531e7da7d68cfd7501cef7', text: () => import('./assets-chunks/editing_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 97266, hash: '396df6db56baa956e78e04191aac1cf137793104de7d55b6bd98660398c50bc7', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'shop/index.html': {size: 97355, hash: '92cc57713b7b37072615d1bff55d0a61951014ff7a983a2605ef8fb2cacd8f66', text: () => import('./assets-chunks/shop_index_html.mjs').then(m => m.default)},
    'writing/index.html': {size: 98637, hash: '6397eef7c94a8435463f3bdfb64018c3a902be62927807e1ee9e47680f116264', text: () => import('./assets-chunks/writing_index_html.mjs').then(m => m.default)},
    'styles-MAFAJZWZ.css': {size: 14186, hash: '0rZm8Qz7Z1c', text: () => import('./assets-chunks/styles-MAFAJZWZ_css.mjs').then(m => m.default)}
  },
};
