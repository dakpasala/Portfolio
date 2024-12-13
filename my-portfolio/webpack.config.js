const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      path: require.resolve('path-browserify'),
      stream: require.resolve('stream-browserify'),
      util: require.resolve('util/'),
      os: require.resolve('os-browserify/browser'),
      process: require.resolve('process/browser'),
      zlib: require.resolve('browserify-zlib'),
      tty: require.resolve('tty-browserify'),
      constants: require.resolve('constants-browserify'),
      fs: false, // File System is not supported in the browser
      child_process: false, // Not supported in the browser
      net: false, // Not supported in the browser
      readline: false, // Not supported in the browser
      url: false,
    },
  },
};
