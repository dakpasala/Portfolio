module.exports = function override(config) {
    config.resolve.fallback = {
      path: require.resolve('path-browserify'),
      stream: require.resolve('stream-browserify'),
      util: require.resolve('util/'),
      os: require.resolve('os-browserify/browser'),
      process: require.resolve('process/browser'),
      zlib: require.resolve('browserify-zlib'),
      tty: require.resolve('tty-browserify'),
      constants: require.resolve('constants-browserify'),
      fs: false,
      child_process: false,
      net: false,
      readline: false,
      url: false,
    };
    return config;
  };
  