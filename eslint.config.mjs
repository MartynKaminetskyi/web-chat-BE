import { defineConfig } from 'eslint-define-config';
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    ignores: ['dist', 'node_modules'],
    languageOptions: {
      globals: globals.node,
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      prettier,
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      'no-console': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-trailing-spaces': 'error',
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          trailingComma: 'all',
        },
      ],
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
]);
