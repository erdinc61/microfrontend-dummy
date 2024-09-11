import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  plugins: [pluginReact()],
  server: {
    port: 3000,
  },
  dev: {
    // It is necessary to configure assetPrefix, and in the production environment, you need to configure output.assetPrefix
    assetPrefix: true,
  },
  tools: {
    rspack: {
      output: {
        // You need to set a unique value that is not equal to other applications
        uniqueName: 'federation_provider'
      },
      
      plugins: [
        new ModuleFederationPlugin({
          name: 'federation_provider',
          exposes: {
            './styles': './src/components/CSS/styles.js',
            './button': './src/components/UI/button.tsx',
            './input': './src/components/UI/input.tsx',
            './card': './src/components/UI/card.tsx',
            './tooltip': './src/components/UI/tooltip.tsx',
            './modal': './src/components/UI/modal.tsx',
          },
          shared: ['react', 'react-dom'],
        }),
      ],
    },
  },
});