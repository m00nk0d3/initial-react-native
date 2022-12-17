module.exports = {
  root: true,
  extends: '@react-native-community',
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "ecmaVersion": 7,
    "requireConfigFile": false,
    "sourceType": "module",
    "ecmaFeatures": { "jsx": true }
  },
  plugins: ['@typescript-eslint', 'import'],
  settings: {
    'import/resolver': {'babel-module': {}},
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
