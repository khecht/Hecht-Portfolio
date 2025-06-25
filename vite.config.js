// export default {
//     // config options
//   }

import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        gardenPlanner: resolve(__dirname, 'garden-planner/index.html'),
        // blog: resolve(__dirname, 'blog/index.html'),
      },
    },
  },
})