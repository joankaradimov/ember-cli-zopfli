# ember-cli-zopfli

An ember-cli add-on that uses Zopfli to generate gzipped assets.
It is a drop-in replacement for [ember-cli-gzip](https://github.com/gpoitch/ember-cli-gzip).

Zopfli is a compression library from Google that generates files that
are 3–8% smaller, yet compatible with zlib formats.

## Installation
```
ember install ember-cli-zopfli
```

By simply including this add on, js and css assets will automatically be gzipped on production builds.

## Configuration

For more control, you can define options in your app's `ember-cli-build.js`:

```js
let app = new EmberApp({
  gzip: {
    // options
  }
});
```

- **enabled** : (Default `true` in production environment)
- **extensions** : Array of file extentions that should be compressed. (Default `['js', 'css']`)
- **keepUncompressed**: Whether the uncompressed versions of the files should be kept. (Default `false`)
- **appendSuffix**: Whether to append the .gz suffix. (Default `true`)

For even more control, see [the options for @floatboth/broccoli-zopfli](https://github.com/myfreeweb/broccoli-zopfli/blob/master/README.md):

## Credit
- This is based on [ember-cli-gzip](https://github.com/gpoitch/ember-cli-gzip)
- This is a thin wrapper around [@floatboth/broccoli-zopfli](https://github.com/myfreeweb/broccoli-zopfli)
