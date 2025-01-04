module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential'
  ],
  // plugins: [
  //   'vue',
  //   '@typescript-eslint'
  // ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    // 'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }]
  }
}
