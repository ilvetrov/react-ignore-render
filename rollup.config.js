import typescript from '@rollup/plugin-typescript'
import pkg from './package.json'

export default [
  {
    input: 'src/IgnoreRender.tsx',
    output: [
      {
        file: pkg.exports['.'].import,
        format: 'es',
        exports: 'named',
      },
    ],
    plugins: [typescript({ include: ['src/IgnoreRender.tsx'] })],
    external: ['react', 'react-dom'],
  },
  {
    input: 'src/IgnoreRender.tsx',
    output: [
      {
        file: pkg.exports['.'].require,
        format: 'cjs',
        exports: 'default',
      },
    ],
    plugins: [typescript({ include: ['src/IgnoreRender.tsx'], declaration: false })],
    external: ['react', 'react-dom'],
  },
]
