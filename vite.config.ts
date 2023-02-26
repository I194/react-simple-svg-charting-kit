import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import autoprefixer from 'autoprefixer';

interface IArguments {
  mode: string;
  command: string;
}

// https://vitejs.dev/config/
export default (args: IArguments) => {
  const generateScopedName = args.mode === 'production' ? '[hash:base64:6]' : '[local]_[hash:base64:6]';

  return defineConfig({
    resolve: {
      preserveSymlinks: true,
    },
    plugins: [
      dts({
        insertTypesEntry: true,
      }),
      react(),
    ],
    css: {
      postcss: {
        plugins: [autoprefixer({})],
      },
      modules: {
        localsConvention: 'camelCase',
        generateScopedName: generateScopedName,
      },
    },
    build: {
      emptyOutDir: true,
      sourcemap: true,
      outDir: 'dist',
      lib: {
        entry: {
          'index.ts': './src/index.ts',
        },
        formats: ['es', 'cjs'],
        fileName: (format, entryName) => `${entryName.split('.')[0]}.${format}.js`,
      },
      rollupOptions: {
        external: ['react', 'react-dom', 'react/jsx-runtime'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
    },
  });
};
