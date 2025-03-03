import { terser } from 'rollup-plugin-terser'
import pluginTypescript from '@rollup/plugin-typescript'
import pluginCommonjs from '@rollup/plugin-commonjs'
import pluginNodeResolve from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import * as path from 'path'
import pkg from './package.json'

const moduleName = pkg.name.replace(/^@.*\//, '')
const inputFileName = 'src/index.ts'
const author = pkg.author
const banner = `
  /**
   * @license
   * author: ${author}
   * ${moduleName}.js v${pkg.version}
   * Released under the ${pkg.license} license.
   */
`
const plugins = [
  pluginTypescript({
    tsconfig: './tsconfig.build.json'
  }),
  pluginCommonjs({
    extensions: ['.js', '.ts']
  }),
  babel({
    babelHelpers: 'bundled',
    configFile: path.resolve(__dirname, '.babelrc.js')
  })
]

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.devDependencies || {})
]

export default [
  {
    input: inputFileName,
    output: [
      {
        name: moduleName,
        file: pkg.browser,
        format: 'iife',
        sourcemap: 'inline',
        banner
      },
      {
        name: moduleName,
        file: pkg.browser.replace('.js', '.min.js'),
        format: 'iife',
        sourcemap: 'inline',
        banner,
        plugins: [terser()]
      }
    ],
    plugins: [
      ...plugins,
      pluginNodeResolve({
        browser: true
      })
    ]
  },

  // ES
  {
    input: inputFileName,
    output: [
      {
        file: pkg.module,
        format: 'es',
        sourcemap: 'inline',
        banner,
        exports: 'named'
      }
    ],
    external,
    plugins: [
      ...plugins,
      pluginNodeResolve({
        browser: false
      })
    ]
  },

  // CommonJS
  {
    input: inputFileName,
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: 'inline',
        banner,
        exports: 'default'
      }
    ],
    external,
    plugins: [
      ...plugins,
      pluginNodeResolve({
        browser: false
      })
    ]
  }
]
