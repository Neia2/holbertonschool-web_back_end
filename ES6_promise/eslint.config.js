import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

const compat = new FlatCompat();

export default [
  js.configs.recommended,
  {
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
