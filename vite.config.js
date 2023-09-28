import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import babel from 'vite-plugin-babel'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig((configEnv) => {
  const isDevelopment = configEnv.mode === 'development'

  return {
    base: '/quiz1/',
    plugins: [
      react({}),
      babel({
        babelConfig: {
          babelrc: false,
          configFile: false,
          plugins: ['@babel/plugin-transform-runtime'],
          presets: [
            [
              '@babel/preset-env',
              {
                targets: { esmodules: true, node: 'current' },
              },
            ],
            ['react-app', { flow: false, typescript: false }],
          ],
        },
      }),
      VitePWA({
        registerType: 'autoUpdate',
        devOptions: {
          enabled: true,
          type: 'module',
        },
      }),
    ],
    root: resolve(__dirname, 'src'),
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    build: {
      manifest: true,
      root: resolve(__dirname, 'src'),
      rollupOptions: {
        input: {
          '@': resolve(__dirname, './src/index.html'),
          profile: resolve(__dirname, './src/profile/index.html'),
          food: resolve(__dirname, './src/food/index.html'),
          hometown: resolve(__dirname, './src/hometown/index.html'),
          tourist: resolve(__dirname, './src/tourist/index.html'),
        },
      },
      outDir: '../dist',
    },
    css: {
      postcss: {
        plugins: [
          require('autoprefixer'),
          require('tailwindcss'),
          require('postcss-normalize'),
        ],
      },
      modules: {
        generateScopedName: isDevelopment
          ? '[name]__[local]__[hash:base64:5]'
          : '[hash:base64:5]',
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      root: './src',
      setupFiles: 'infrastructure/tests/setup-tests.ts',
      coverage: {
        reporter: ['html', 'lcov'],
      },
    },
  }
})
