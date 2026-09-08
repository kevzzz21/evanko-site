import { sites } from '@openai/sites-vite-plugin';
import tailwindcss from '@tailwindcss/postcss';
import vinext from 'vinext';
import { defineConfig } from 'vite';
import hostingConfig from './.openai/hosting.json';

const placeholderDatabaseId = '00000000-0000-4000-8000-000000000000';
const { d1, r2 } = hostingConfig;

export default defineConfig(async () => {
  const { cloudflare } = await import('@cloudflare/vite-plugin');

  return {
    css: { postcss: { plugins: [tailwindcss()] } },
    plugins: [
      vinext(),
      sites(),
      cloudflare({
        viteEnvironment: { name: 'rsc', childEnvironments: ['ssr'] },
        config: {
          main: 'vinext/server/fetch-handler',
          compatibility_flags: ['nodejs_compat'],
          d1_databases: d1
            ? [{ binding: d1, database_name: 'site-creator-d1', database_id: placeholderDatabaseId }]
            : [],
          r2_buckets: r2 ? [{ binding: r2, bucket_name: 'site-creator-r2' }] : [],
        },
      }),
    ],
  };
});
