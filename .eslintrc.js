module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: [
    'node_modules/',
    'node_modules/*',
    'node_modules/**',
    './node_modules/**',
  ],
  plugins: [
    'simple-import-sort',
    '@html-eslint',
    'promise',
    'security',
    'tailwindcss',
    'unused-imports',
    'prettier',
  ],
  parserOptions: { sourceType: 'module' },
  overrides: [
    {
      files: ['*.html', 'src/*.html'],
      parser: '@html-eslint/parser',
      extends: [
        'plugin:@html-eslint/recommended',
        'plugin:tailwindcss/recommended',
      ],
      rules: {
        '@html-eslint/require-doctype': 'error',
        '@html-eslint/no-extra-spacing-attrs': [
          'warn',
          {
            disallowMissing: true,
            enforceBeforeSelfClose: true,
          },
        ],
        '@html-eslint/require-closing-tags': [
          'error',
          {
            allowSelfClosingCustom: true,
            selfClosing: 'always',
          },
        ],
        '@html-eslint/indent': ['off', 2],
        'prettier/prettier': 'off',
      },
    },
    {
      files: ['src/*.{js,jsx}'],
      parser: '@babel/eslint-parser',
      parserOptions: {
        sourceType: 'module',
        requireConfigFile: false,
        babelOptions: {
          babelrc: false,
          configFile: false,
        },
        allowImportExportEverywhere: true,
        extends: [
          'eslint:recommended',
          'plugin:promise/recommended',
          'plugin:security/recommended',
          'plugin:tailwindcss/recommended',
          'plugin:prettier/recommended',
        ],
      },
    },
  ],
  rules: {
    'no-unused-vars': 'off',
    'no-console': 'warn',

    //#region  //*=========== Unused Import ===========
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    //#endregion  //*======== Unused Import ===========

    //#region  //*=========== Prettier ===========
    'prettier/prettier': 'warn',
    //#endregion  //*======== Prettier ===========

    // Sort
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // ext library & side effect imports
          ['^@?\\w', '^\\u0000'],
          // {s}css files
          ['^.+\\.s?css$'],
          // Lib and hooks
          ['^@/lib', '^@/hooks'],
          // static data
          ['^@/constant'],
          // components
          ['^@/components'],
          // assets
          ['^@/assets'],
          // Other imports
          ['^@/'],
          // relative paths up until 3 level
          [
            '^\\./?$',
            '^\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\.(?!/?$)',
            '^\\.\\./\\.\\./\\.\\./?$',
            '^\\.\\./\\.\\./\\.\\.(?!/?$)',
          ],
          ['^@/types'],
          // other that didnt fit in
          ['^'],
        ],
      },
    ],
  },
}
