import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            inputs: ['resources/js/app.js', 'resources/css/app.css'],
            refresh: true,
        }),
    ],
});
