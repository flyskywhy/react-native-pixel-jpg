/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// Dependencies
const pixelJpeg = require('../src').default;
const fixture = require('fixture-images').still.jpg;

// Specs
describe('pixelJpg', () =>
  it('.parse', done =>
    pixelJpeg.parse(fixture).then(function(images) {
      const image = images[0];

      expect(image.width).toBe(256);
      expect(image.height).toBe(192);
      expect(image.data != null ? image.data.length : undefined).toBe(
        image.width * image.height * 4
      );

      return done();
    })));
