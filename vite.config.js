import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const NODE_ENV = process.env.NODE_ENV;

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base:
		NODE_ENV === 'production'
			? '/gerakmuda-student-newsletter-react/'
			: '/',
});
