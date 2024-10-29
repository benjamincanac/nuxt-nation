import { defineShikiSetup } from '@slidev/types'
import { transformerColorHighlight } from 'shiki-transformer-color-highlight'

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: 'material-theme-palenight',
      light: 'material-theme-lighter',
    },
    transformers: [
      transformerColorHighlight(),
    ],
  }
})