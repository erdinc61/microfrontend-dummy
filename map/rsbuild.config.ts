import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3001,
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
    assetPrefix: true,
  },
  tools: {
    rspack: {
      output: {
        // You need to set a unique value that is not equal to other applications
        uniqueName: 'map'
      },
      
      plugins: [
        new ModuleFederationPlugin({
          name: 'map',
          exposes: {
            './gridmap': './src/components/gridmap.tsx',
          },
          shared: ['react', 'react-dom'],
        }),
      ],
    },
  },
});