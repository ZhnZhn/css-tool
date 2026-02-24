import {
  round10,
  toPercent
} from '../math';

describe('round10', ()=>{   
  const fn = round10;
  test('should return rounded value by string args', ()=>{
    expect(fn('10.4444', '0')).toBe(10)
    expect(fn('10.5555', '0')).toBe(11)
  })
  test('should return rounded value by number args', ()=>{
    expect(fn(10.4444, 0)).toBe(10)
    expect(fn(10.5555, 0)).toBe(11)
  })
  test('should return rounded value by string and number args', ()=>{
    expect(fn('10.4444', 0)).toBe(10)
    expect(fn(10.5555, '0')).toBe(11)
  })
  test('should return rounded value by exponential string args', ()=>{
    expect(fn('1.04444e+1', 0)).toBe(10)
    expect(fn('1.04444e+1', '0')).toBe(10)
    expect(fn('1.05555e+1', 0)).toBe(10)
    expect(fn('1.05555e+1', '0')).toBe(10)
  })

})  

describe('toPercent', ()=>{
  const fn = toPercent;
  test('should return value by v, min, max', ()=>{
    expect(fn(1, 0, 10)).toBe(10)  
    expect(fn(5, 0, 10)).toBe(50)
    expect(fn(9, 0, 10)).toBe(90)
  })
  test('should return 0 in edge case: min=max', ()=>{
    expect(fn(10, 10, 10)).toBe(0)  
  })
})