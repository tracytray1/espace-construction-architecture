import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  // Ignore certains dossiers
  globalIgnores(['dist', 'node_modules']),

  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      react.configs.recommended, // Règles React de base
      reactHooks.configs['recommended-latest'],
      jsxA11y.configs.recommended, // Accessibilité
      reactRefresh.configs.vite,
    ],
    plugins: {
      prettier,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      ...prettier.configs.recommended.rules, // Active Prettier via ESLint
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react/prop-types': 'off', // Désactive prop-types si inutile
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]);
