import { 
  stringInputToObject,
  isValidCSSUnit,
  rgbToRgb,
  convertToPercentage,
  hsvToRgb,
  hslToRgb,
  boundAlpha
} from "./utils";

const mathMin = Math.min
, mathMax = Math.max
, _hasOwnProperty = Object.prototype.hasOwnProperty
, _isRgbFormat = color => isValidCSSUnit(color.r) 
    && isValidCSSUnit(color.g) 
    && isValidCSSUnit(color.b)
, _isHsFormat = color => isValidCSSUnit(color.h) 
   && isValidCSSUnit(color.s);

function inputToRGB(color) {
   let rgb = { r: 0, g: 0, b: 0 }    
   , a = 1
   , s = null
   , v = null
   , l = null
   , ok = false
   , format = false;   
   if (typeof color == "string") {
      color = stringInputToObject(color);
   }   
   if (typeof color == "object") {
       if (_isRgbFormat(color)) {
          rgb = rgbToRgb(color.r, color.g, color.b);
          ok = true;
          format = String(color.r).substring(-1) === "%" ? "prgb" : "rgb";
       }
       else if (_isHsFormat(color)) {
          if (isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = "hsv";
          } 
          else if (isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = "hsl";
          }
       }
          
       //if (color.hasOwnProperty("a")) {
       if (_hasOwnProperty.call(color, "a")) {    
         a = color.a;
       }
   }   

   a = boundAlpha(a);   

   return {
      ok: ok,
      format: color.format || format,
      r: mathMin(255, mathMax(rgb.r, 0)),
      g: mathMin(255, mathMax(rgb.g, 0)),
      b: mathMin(255, mathMax(rgb.b, 0)),
      a: a
   };
}

export default inputToRGB