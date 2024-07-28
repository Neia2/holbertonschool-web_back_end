import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2020,
      globals: {
        console: 'readonly',
        setTimeout: 'readonly',
        module: 'readonly',
      },
    },
    rules: {
      'no-tabs': 'error',
      'indent': ['error', 2],
      'no-mixed-spaces-and-tabs': 'error',
      'arrow-parens': ['error', 'always'],
      'no-trailing-spaces': 'error',
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'eol-last': ['error', 'always'],
      'no-unused-vars': 'error',
      'no-undef': 'error',
    },
  },
];
