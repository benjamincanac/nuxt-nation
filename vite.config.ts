import { defineConfig } from 'vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

export default defineConfig({
  slidev: {
    icons: {
      customCollections: {
        'custom': FileSystemIconLoader(
          './assets/icons',
          svg => svg.replace(/^<svg /, '<svg fill="currentColor" ')
        )
      }
    }
  },
})