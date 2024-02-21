module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "inline-dotenv",
      [
        "babel-plugin-root-import",
        {
          paths: [
            {
              root: __dirname,
              rootPathPrefix: "~/",
              rootPathSuffix: "src",
            },
          ],
        },
      ],
    ],
  };
};
