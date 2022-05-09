import {
  round10,
  toPercent
} from '../math';

describe('math', ()=>{
    test('round10 should return value by string args', ()=>{
      expect(round10('10.4444', '0')).toBe(10)
      expect(round10('10.5555', '0')).toBe(11)
    })
    test('round10 should return value by number args', ()=>{
      expect(round10(10.4444, 0)).toBe(10)
      expect(round10(10.5555, 0)).toBe(11)
    })
    test('round10 should return value by string and number args', ()=>{
        expect(round10('10.4444', 0)).toBe(10)
        expect(round10(10.5555, '0')).toBe(11)
    })

    test('toPercent should return value by v, min, max', ()=>{
      expect(toPercent(1, 0, 10)).toBe(10)  
      expect(toPercent(5, 0, 10)).toBe(50)
      expect(toPercent(9, 0, 10)).toBe(90)
    })
    test('toPercent should return 0 in edge case: min=max', ()=>{
      expect(toPercent(10, 10, 10)).toBe(0)  
    })
})