import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3002,
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
    assetPrefix: true,
  },
  tools: {
    rspack: {
      output: {
        // You need to set a unique value that is not equal to other applications
        uniqueName: 'robot'
      },
      
      plugins: [
        new ModuleFederationPlugin({
          name: 'robot',
          exposes: {
            './gridrobot': './src/components/gridrobot.tsx',
          },
          shared: ['react', 'react-dom'],
        }),
      ],
    },
  },
});