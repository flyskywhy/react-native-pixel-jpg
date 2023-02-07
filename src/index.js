/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Dependencies
import {PixelUtil} from 'react-native-pixel-util';
import jpegJs from 'jpeg-js';

class PixelJpg extends PixelUtil {
  parse(file) {
    return this.createBuffer(file).then(buffer => {
      const jpegData = jpegJs.decode(buffer);

      const image = this.createImageData(jpegData.width, jpegData.height);
      this.set(image, jpegData);
      delete jpegData.data;

      for (var key in jpegData) {
        if (key === 'width' || key === 'height') {
          // to avoid `Cannot assign to read only property 'width' of object '#<ImageData>'` on Web
          continue;
        }
        var value = jpegData[key];
        image[key] = value;
      }

      return [image];
    });
  }
}

export default new PixelJpg();
export {PixelJpg};
