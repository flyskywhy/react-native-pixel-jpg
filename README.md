# react-native-pixel-jpg

[![npm version](http://img.shields.io/npm/v/react-native-pixel-jpg.svg?style=flat-square)](https://npmjs.org/package/react-native-pixel-jpg "View this project on npm")
[![npm downloads](http://img.shields.io/npm/dm/react-native-pixel-jpg.svg?style=flat-square)](https://npmjs.org/package/react-native-pixel-jpg "View this project on npm")
[![npm licence](http://img.shields.io/npm/l/react-native-pixel-jpg.svg?style=flat-square)](https://npmjs.org/package/react-native-pixel-jpg "View this project on npm")
[![Platform](https://img.shields.io/badge/platform-ios%20%7C%20android%20%7C%20web-989898.svg?style=flat-square)](https://npmjs.org/package/react-native-pixel-jpg "View this project on npm")

> Parse JPEG to ImageData for React Native.

## Installation
```bash
$ npm install react-native-pixel-jpg
```
For RN >= 0.65, run `npm install react-native-blob-util`.

For RN < 0.65, run `npm install react-native-blob-util@0.16.3`, and patch manually to [fix: with react-native-web product build will export 'URIUtil' (reexported as 'URIUtil') was not found](https://github.com/RonRadtke/react-native-blob-util/pull/201/files).
```js
var pixelJpeg= require('react-native-pixel-jpg');
console.log(pixelJpeg); //object
```

# API

## pixelJpg.parse(`file`) -> promise.then(`images`)

return `images` is Array contains one or more `ImageData`.

```js
var file= 'https://59naga.github.io/fixtures/still.JPG';

pixelJpeg.parse(file).then(function(images){
  console.log(images[0]);
});
// {width: 256, height: 192, exifBuffer: [], data: <Uint8Array ..>}
```

# Related projects
* [react-native-pixel](https://github.com/flyskywhy/react-native-pixel)
* [react-native-pixel-util](https://github.com/flyskywhy/react-native-pixel-util)
* [react-native-pixel-gif](https://github.com/flyskywhy/react-native-pixel-gif)
* [react-native-pixel-png](https://github.com/flyskywhy/react-native-pixel-png)
* __react-native-pixel-jpg__
* [react-native-pixel-bmp](https://github.com/flyskywhy/react-native-pixel-bmp)
* [react-native-pixel-webp](https://github.com/flyskywhy/react-native-pixel-webp)
* [pixel-to-ansi](https://github.com/59naga/pixel-to-ansi)
* [pixel-to-svg](https://github.com/59naga/pixel-to-svg)

License
---
[MIT][License]

[License]: http://59naga.mit-license.org/
