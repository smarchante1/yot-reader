import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      {
        enforce: 'pre',
        ...mdx({
          extensions: ['.md', '.mdx'],
          remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
        }),
      },
      react({ include: /\.(mdx|md|js|jsx|ts|tsx)$/ }),
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
        buffer: 'buffer/',
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
  };
});
