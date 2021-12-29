module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  // This adds an alias to "app" so that we don't have to use full relative
  // paths. Instead of an import looking like `../../../components/xyz`, we
  // can use something like `app/components/xyz` instead.
  // plugins: [
  //   [
  //     'module-resolver',
  //     {
  //       extensions: ['.tsx', '.ts'],
  //       alias: {
  //         app: './app',
  //       },
  //     },
  //   ],
  //   '@babel/plugin-proposal-export-namespace-from',
  // ],
  plugins: [
    "react-native-reanimated/plugin",
  ],
};
