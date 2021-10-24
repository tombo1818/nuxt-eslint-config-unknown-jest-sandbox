module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    // 'prettier/vue',
    'airbnb-base',
    'prettier',
    'plugin:import/recommended',
  ],
  plugins: ['prettier'],
  settings: {
    'import/core-modules': ['vue', 'vuex', 'axios'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/resolver': {
      'babel-module': {
        root: '.',
        alias: {
          '~': './src',
          '@': './src',
          '~~': '.',
          '@@': '.',
        },
      },
    },
  },
}
