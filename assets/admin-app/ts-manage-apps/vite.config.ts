import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        'process.env': {}, // Provide a dummy object for process.env
    },
    build: {
        lib: {
            entry: './src/main.tsx', // Entry point for the app
            name: 'ManageApps', // Library name
            fileName: 'manage-apps', // Output filename
        },
        rollupOptions: {
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
        outDir: '../dist', // Output directly in the current directory (ts-admin-panel)
        emptyOutDir: false, // Prevent deletion of non-Vite-generated files in the directory
    }
})
