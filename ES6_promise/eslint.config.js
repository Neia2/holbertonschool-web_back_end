import { ESLint } from 'eslint';

export default [
  {
    ignores: ['node_modules/**'],
  },
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      sourceType: 'module',
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
    },
  },
];
