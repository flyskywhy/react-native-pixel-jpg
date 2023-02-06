/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Dependencies
const { PixelUtil } = require('pixel-util');
const jpegJs = require('jpeg-js');

class PixelJpg extends PixelUtil {
  parse(file) {
    return this.createBuffer(file).then(buffer => {
      const jpegData = jpegJs.decode(buffer);

      const image = this.createImageData(jpegData.width, jpegData.height);
      this.set(image, jpegData);
      delete jpegData.data;

      for (var key in jpegData) {
        var value = jpegData[key];
        image[key] = value;
      }

      return [image];
    });
  }
}

module.exports = new PixelJpg();
module.exports.PixelJpg = PixelJpg;
