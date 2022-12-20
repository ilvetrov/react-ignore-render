import typescript from '@rollup/plugin-typescript'
import pkg from './package.json'

export default [
  {
    input: 'src/IgnoreRender.tsx',
    output: [
      {
        file: pkg.exports['.'],
        format: 'es',
        exports: 'named',
      },
    ],
    plugins: [typescript({ include: ['src/IgnoreRender.tsx'] })],
    external: ['react', 'react-dom'],
  },
]
