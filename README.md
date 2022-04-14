##

expo API - Reanimated

```
expo install react-native-reanimated

// after....

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};

// restart your development server and clear the bundler cache: expo start --clear.
```
