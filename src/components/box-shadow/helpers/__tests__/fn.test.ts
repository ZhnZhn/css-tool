import type { ShadowType } from '../../types';
import { 
   toRgba,
   toCssValue 
} from '../fn';

const _boxShadow: ShadowType = {
   isInset: false,
   gLength: 6,
   vLength: 10,
   blurR: 4,
   spreadR: 5,
   color: '#a8a9aa',
   opacity: 0,
   id: 'test'
};

describe("toRgba", ()=>{
   const fn = toRgba;
   test("should return rgba start string from ShadowType", ()=>{
      expect(fn(_boxShadow)).toBe('rgba(168, 169, 170,') 
   })
})

describe("toCssValue", ()=>{
   const fn = toCssValue;
   test("should return css shadow value string from ShadowType", ()=>{
      expect(fn(_boxShadow)).toBe('6px 10px 4px 5px rgba(168, 169, 170, 0)')
      expect(fn({..._boxShadow, isInset: true})).toBe('inset 6px 10px 4px 5px rgba(168, 169, 170, 0)')
   })
})
