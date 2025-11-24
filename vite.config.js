import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: '/Portfolio/', // 👈 add this line exactly like this
   
})

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
//  import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   plugins: [react(),tailwindcss()],
//   base: '/Portfolio/', // 👈 add this line exactly like this
// })
