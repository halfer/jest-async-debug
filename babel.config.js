/**
 * See the notes here: https://stackoverflow.com/a/53736090
 *
 * This is used to get async/await working, I think.
 */
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    ["@babel/transform-runtime"]
  ]
};
