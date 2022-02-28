import {defineConfig} from 'vite-plugin-windicss'

export default defineConfig({
    attributify: {
        prefix: 'w:'
    },
    alias: {
        hstack: 'flex item-center',
        vstack: 'flex flex-col',
        icon: 'w-6 h-6 fill-current',
        app: 'text-red',
        'app-border': 'border-gray-200',
        dark: 'bordre-daer-300'
    }
})