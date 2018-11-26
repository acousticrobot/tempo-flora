module.exports = {
  "extends": "airbnb",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "env": {
    "browser": true
  },
  "rules": {
    "arrow-parens": ["error", "as-needed"],
    "import/no-unresolved": [2],
    "semi": ["error", "never"],
    "func-names": ["error", "as-needed"],
    "no-unused-vars": ["error", { "varsIgnorePattern": "event" }],
    "operator-linebreak": ["error", "after"],
    "comma-dangle": ["error", "never"],
    "radix": ["error", "as-needed"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-curly-spacing": [2, { "when": "always", "spacing": { "objectLiterals": "never" }}],
    "react/forbid-prop-types": 0,
    'jsx-a11y/label-has-associated-control': [2, { labelComponents: ['label'] }],
    "jsx-a11y/label-has-for": 0,
    "jsx-quotes": ["error", "prefer-single"],
    "no-underscore-dangle": 0,
    "object-curly-newline": ["error", { "consistent": true }]
  }
};
