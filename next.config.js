const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
module.exports = withCSS(
  withSass({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]__[hash:base64:5]"
    },
    sassLoaderOptions: {
      includePaths: ["styles"]
    },
    webpack(config, options) {
      config.node = {
        fs: "empty"
      };
      config.module.rules.push({
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 100000
          }
        }
      });

      return config;
    }
  })
);