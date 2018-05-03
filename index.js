'use strict';

let zopfli = require('@floatboth/broccoli-zopfli');

module.exports = {
  name: 'ember-cli-zopfli',

  included(app) {
    let defaultOptions = {
      enabled: app.env === 'production',
      keepUncompressed: false,
      appendSuffix: true,
      extensions: ['js', 'css']
    };

    this.options = Object.assign(defaultOptions, app.options.gzip);
  },

  postprocessTree(type, tree) {
    if (type === 'all' && this.options.enabled) {
      tree = zopfli(tree, this.options);
    }
    return tree;
  }
};
