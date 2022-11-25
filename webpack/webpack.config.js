/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require("webpack-merge");

const commonConfig = require("./webpack.common.js");

module.exports = ({ env = dev }) => {
  const envConfig = require(`./webpack.${env}.js`);

  return merge(commonConfig, envConfig);
};
