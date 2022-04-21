import inputToRGB from "./inputToRGB";
import { rgbToHex } from "./utils";

const mathRound = Math.round;
let tinyCounter = 0;

function tinycolor (color, opts) {

    color = (color) ? color : '';
    opts = opts || { };

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
       return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
        return new tinycolor(color, opts);
    }

    const rgb = inputToRGB(color);
    this._originalInput = color
    this._r = rgb.r
    this._g = rgb.g
    this._b = rgb.b
    this._a = rgb.a
    this._roundA = mathRound(100*this._a) / 100
    this._format = opts.format || rgb.format
    this._gradientType = opts.gradientType

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) { this._r = mathRound(this._r); }
    if (this._g < 1) { this._g = mathRound(this._g); }
    if (this._b < 1) { this._b = mathRound(this._b); }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
}

tinycolor.prototype = {
   isValid: function() {
      return this._ok;
   },
   toRgb: function() {
      return { 
          r: mathRound(this._r), 
          g: mathRound(this._g), 
          b: mathRound(this._b), 
          a: this._a 
      };
   },
   toHex: function(allow3Char) {
      return rgbToHex(this._r, this._g, this._b, allow3Char);
   },
   toHexString: function(allow3Char) {
      return '#' + this.toHex(allow3Char);
   }
}

export default tinycolor