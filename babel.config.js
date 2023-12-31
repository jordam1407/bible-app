module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['expo-router/babel',
      [
        '@tamagui/babel-plugin',
        {
          components: ['tamagui'],
          config: './src/tamagui/config.ts',
          logTimings: true,
        },
      ],
    ],
  };
};
