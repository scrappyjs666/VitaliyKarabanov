module.exports = {
  root: 'src',
  build: {
    outDir: '../dist'
  }
}

const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        'index': resolve(__dirname, 'src/index.html'),
        'Productdetalis': resolve(__dirname, 'src/best-seller.html')
      }
    }
  }
})

module.exports = defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        'index': resolve(__dirname, 'src/index.html'),
        'Productdetalis': resolve(__dirname, 'src/Discover.html')
      }
    }
  }
})

module.exports = defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        'index': resolve(__dirname, 'src/index.html'),
        'Productdetalis': resolve(__dirname, 'src/Howitwork.html')
        // 'Productdetalis': resolve(__dirname, 'src/Productdetalis.html')
      }
    }
  }
})

module.exports = defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        'index': resolve(__dirname, 'src/index.html'),
        'Productdetalis': resolve(__dirname, 'src/Productdetalis.html')
      }
    }
  }
})