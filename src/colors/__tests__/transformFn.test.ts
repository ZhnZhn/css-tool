import { describe, expect, test } from '@jest/globals';

import {
  toRgb,
  toHex,
  toHsl,
  hslToRgb,
  hslToHex
} from '../transformFn';
  
describe('toRgb', () => {
  const fn = toRgb;
  test('should return rgb tuple from str color', ()=>{    
    expect(fn('black')).toEqual([0, 0, 0])
    expect(fn('white')).toEqual([255, 255, 255])
    expect(fn('red')).toEqual([255, 0, 0])
    expect(fn('green')).toEqual([0, 128, 0])
    expect(fn('blue')).toEqual([0, 0, 255])
    expect(fn('cyan')).toEqual([0, 255, 255])
    expect(fn('yellow')).toEqual([255, 255, 0])

    expect(fn('#a7a8a9')).toEqual([167, 168, 169]) 
    expect(fn('#a8a9aa')).toEqual([168, 169, 170])    
    expect(fn('#a9aaab')).toEqual([169, 170, 171])              
  })
})

describe('toHex', ()=>{
  const fn = toHex;
  test('should return hex color str', ()=>{
    expect(fn('black')).toBe('#000000')
    expect(fn('white')).toBe('#ffffff')
    expect(fn('red')).toBe('#ff0000')
    expect(fn('green')).toBe('#008000')
    expect(fn('blue')).toBe('#0000ff')
    expect(fn('cyan')).toBe('#00ffff')
    expect(fn('yellow')).toBe('#ffff00')

    expect(fn('#a7a8a9')).toBe('#a7a8a9') 
    expect(fn('#a8a9aa')).toBe('#a8a9aa')
    expect(fn('#a9aaab')).toBe('#a9aaab')    
  })
})

describe('toHsl', ()=>{
  const fn = toHsl;
  test('should return hsl color object from str', ()=>{
    expect(fn('black')).toEqual({h:0, s:0, l:0})
    expect(fn('white')).toEqual({h:0, s:0, l:100})
    expect(fn('red')).toEqual({h:0, s:100, l:50})
    expect(fn('green')).toEqual({h:120, s:100, l:25})
    expect(fn('blue')).toEqual({h:240, s:100, l:50})
    expect(fn('cyan')).toEqual({h:180, s:100, l:50})
    expect(fn('yellow')).toEqual({h:60, s:100, l:50})      

    expect(fn('#a7a8a9')).toEqual({h: 210, s:1, l:66})
    expect(fn('#a8a9aa')).toEqual({h: 210, s:1, l:66})
    expect(fn('#a9aaab')).toEqual({h: 210, s:1, l:67})    
  })
})

describe('hslToRgb', ()=>{
  const fn = hslToRgb;
  test('should return rgb tuple from h, s, l numbers', ()=>{
    expect(fn(0, 0, 0)).toEqual([0, 0, 0])
    expect(fn(0, 0, 100)).toEqual([255, 255, 255])
    expect(fn(0, 100, 50)).toEqual([255, 0, 0])
    expect(fn(120, 100, 25)).toEqual([0, 128, 0])
    expect(fn(240, 100, 50)).toEqual([0, 0, 255])
    expect(fn(180, 100, 50)).toEqual([0, 255, 255])
    expect(fn(60, 100, 50)).toEqual([255, 255, 0])    

    expect(fn(210, 1, 66)).toEqual([167, 168, 169])       
    expect(fn(210, 1, 67)).toEqual([170, 171, 172])                                                     
  })
})

describe('hslToHex', ()=>{
  const fn = hslToHex;
  test('should return hex color str from h, s, l numbers', ()=>{
    expect(fn(0, 0, 0)).toBe('#000000')
    expect(fn(0, 0, 100)).toBe('#ffffff')
    expect(fn(0, 100, 50)).toBe('#ff0000')
    expect(fn(120, 100, 25)).toBe('#008000')
    expect(fn(240, 100, 50)).toBe('#0000ff')
    expect(fn(180, 100, 50)).toBe('#00ffff')
    expect(fn(60, 100, 50)).toBe('#ffff00')

    expect(fn(210, 1, 66)).toBe('#a7a8a9')
    expect(fn(210, 1, 67)).toBe('#aaabac')
  })
})