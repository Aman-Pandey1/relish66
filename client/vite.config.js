import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const blogImageCopies = [
	{
		sources: [
			'C:\\Users\\pc\\.cursor\\projects\\g-MMJ-Relish2\\assets\\c__Users_pc_AppData_Roaming_Cursor_User_workspaceStorage_b2be21be4045f059d1f40608f11f043e_images_WhatsApp_Image_2026-08-17_at_8.46.43_PM-35d76931-c7f7-4278-9879-de0992bd191d.png',
		],
		filename: 'sizzling-tawa-specialties.png',
	},
	{
		sources: [
			'C:\\Users\\pc\\.cursor\\projects\\g-MMJ-Relish2\\assets\\c__Users_pc_AppData_Roaming_Cursor_User_workspaceStorage_b2be21be4045f059d1f40608f11f043e_images_WhatsApp_Image_2026-08-17_at_8.49.28_PM-905c8ff2-beee-49fc-b66c-011e95cf02e9.png',
		],
		filename: 'indian-catering-services-edmonton.png',
	},
]
const blogDestDir = path.join(__dirname, 'src/assets/blog')
fs.mkdirSync(blogDestDir, { recursive: true })
for (const item of blogImageCopies) {
	const source = item.sources.find((file) => fs.existsSync(file))
	if (!source) continue
	fs.copyFileSync(source, path.join(blogDestDir, item.filename))
	fs.copyFileSync(source, path.join(__dirname, 'public', item.filename))
}

// https://vite.dev/config/
export default defineConfig({
  // Ensure assets resolve correctly when served from domain root
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
      '/uploads': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
})
