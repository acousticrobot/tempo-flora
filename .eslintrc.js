module.exports = {
  'extends': 'airbnb',
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module'
  },
  'env': {
    'browser': true,
    'jest': true
  },
  'rules': {
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': ['error', 'never'],
    'func-names': ['error', 'as-needed'],
    'import/no-unresolved': [2],
    'jsx-a11y/label-has-for': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': ['error', { 'varsIgnorePattern': 'event' }],
    'object-curly-newline': ['error', { 'consistent': true }],
    'operator-linebreak': ['error', 'after'],
    'radix': ['error', 'as-needed'],
    'react/forbid-prop-types': 0,
    'react/jsx-curly-spacing': [2, { 'when': 'always', 'spacing': { 'objectLiterals': 'never' }}],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'semi': ['error', 'never'],
    'jsx-a11y/label-has-associated-control': [2, { labelComponents: ['label'] }]
  }
};
