interface Alpha {
  a: number;
}
  
interface RGB {
  r: number;
  g: number;
  b: number;
}
  
interface RGBA extends RGB, Alpha {}
  
export interface TinycolorInstance {
  //Return an indication whether the color was successfully parsed.    
  isValid(): boolean;
  // Returns the object as a RGBA object.        
  toRgb(): RGBA; 
  // Returns the hex value of the color.       
  toHex(): string;
  // Returns the hex value of the color -with a # appened.   
  toHexString(): string;
}