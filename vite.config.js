const {
  resolve
} = require('path')
const {
  defineConfig
} = require('vite')

module.exports = defineConfig({
  root: 'src',
  base: '/nft-layout/dist1/',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        'index': resolve(__dirname, 'src/index.html'),
        'best-seller': resolve(__dirname, 'src/best-seller.html'),
        'Discover': resolve(__dirname, 'src/Discover.html'),
        'Howitwork': resolve(__dirname, 'src/Howitwork.html'),
        'Productdetalis': resolve(__dirname, 'src/Productdetalis.html')
      }
    }
  }
})