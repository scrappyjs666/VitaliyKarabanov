const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  root: 'src',
  base: '/VitaliyKarabanov/dist/',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        'index': resolve(__dirname, 'src/index.html'),
        'contacts': resolve(__dirname, 'src/contacts.html'),'work': resolve(__dirname, 'src/work.html'),
      }
    }
  }
})