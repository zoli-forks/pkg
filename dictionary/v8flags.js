'use strict';

module.exports = {
  pkg: {
    patches: {
      'index.js': [
        'execFile(process.execPath, [\'--v8-options\'],',
        'execFile(process.execPath, [\'--pkg-fallback\', \'--v8-options\'],'
      ]
    }
  }
};
