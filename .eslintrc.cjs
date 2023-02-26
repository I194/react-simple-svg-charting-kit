module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: './',
    project: ['./tsconfig.json'],
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'simple-import-sort'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        'selector': [
          'classProperty',
          'objectLiteralProperty',
          'typeProperty',
          'classMethod',
          'objectLiteralMethod',
          'typeMethod',
          'accessor',
          'enumMember'
        ],
        'format': null,
        'modifiers': ['requiresQuotes']
      },
      {
        'selector': 'variable',
        'types': ['boolean'],
        'format': ['PascalCase'],
        'prefix': ['is', 'should', 'has', 'can', 'did', 'will']
      },
      {
        'selector': 'objectLiteralProperty',
        'format': ['camelCase', 'snake_case', 'PascalCase']
      },
      {
        'selector': 'parameter',
        'format': ['camelCase'],
        'leadingUnderscore': 'allow'
      },
      {
        'selector': 'memberLike',
        'modifiers': ['private'],
        'format': ['camelCase']
      },
      {
        'selector': 'interface',
        'format': ['PascalCase'],
        'custom': {
          'regex': '^I[A-Z]',
          'match': false
        }
      },
      {
        'selector': 'typeLike',
        'format': ['PascalCase'],
        'custom': {
          'regex': '^T[A-Z]',
          'match': false
        }
      }
    ],
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/destructuring-assignment': ['error', 'always'],
    'react-hooks/rules-of-hooks': ['error'],
    'react-hooks/exhaustive-deps': 'off',
    'import/no-mutable-exports': 'error',
    'import/no-unused-modules': 'warn',
    'import/no-unresolved': 'off',
    'import/no-duplicates': 'error',
    'import/extensions': 'off',
    'import/export': 'warn',
    'simple-import-sort/imports': [
      'error',
      {
        'groups': [
          [
            '^react',
            '^@?\\w',
            '^.+\\.?(css|scss)$',
            '^(@|components)(/.*|$)',
            '^\\u0000',
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$'
          ]
        ]
      }
    ],
    'padding-line-between-statements': [
      'error',
      {
        'blankLine': 'always',
        'prev': '*',
        'next': ['function', 'class', 'return', 'export']
      },
      { 'blankLine': 'always', 'prev': ['import'], 'next': '*' },
      { 'blankLine': 'never', 'prev': 'import', 'next': 'import' },
      { 'blankLine': 'always', 'prev': 'function', 'next': '*' }
    ],
    'max-len': ['error', { 'code': 120, 'ignoreStrings': true }],
    'quotes': 'off',
    'semi': ['error', 'always']
  }
};
