module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/*'],
        alias: {
          components: './src/components/',
          screens: './src/screens/',
          utils: './src/utils/'

        },
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.tsx',
          '.ts',
          '.json',
          '.d.ts',
        ],
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
