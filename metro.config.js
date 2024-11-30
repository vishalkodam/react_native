const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Custom resolver settings
config.resolver = {
  ...config.resolver,
  extraNodeModules: {
    expo: require.resolve("expo"), // Ensure expo is correctly resolved
    // You can add other packages if needed to resolve their paths
  },
};

// Customize transformer settings if needed
config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer"), // For SVG support, optional
};

module.exports = withNativeWind(config, {
  input: "./global.css",
});