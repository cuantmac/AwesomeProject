var upstreamTransformer = require('metro-react-native-babel-transformer');

var lessTransformer = require('react-native-less-transformer');

module.exports.transform = function ({src, filename, options}) {
  if (filename.endsWith('.less')) {
    var opts = Object.assign(options, {
      lessOptions: {
        plugins: [require('less-plugin-glob')],
      },
    });
    return lessTransformer.transform({src, filename, options: opts});
  } else {
    return upstreamTransformer.transform({src, filename, options});
  }
};
