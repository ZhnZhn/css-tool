import { describe, expect, test } from '@jest/globals';

import getNumberValue from "../getNumberValue";

describe('getNumberValue', ()=>{
    const fn = getNumberValue;
    test('should return tuple false tuple for "-" and "" cases', ()=>{
        expect(fn('-', -10, 10)).toEqual(['-', false])
        expect(fn('-', 0, 100)).toEqual(['-', false])
        expect(fn('', -10, 10)).toEqual(['', false])
        expect(fn('', 0, 100)).toEqual(['', false])
    })
    test('should return tuple true for numbers cases', ()=>{
        expect(fn(1, -100, 100)).toEqual([1, true])
        expect(fn('1', -100, 100)).toEqual([1, true])
        expect(fn(-1, -100, 100)).toEqual([-1, true])
        expect(fn('-1', -100, 100)).toEqual([-1, true])
        expect(fn(10, -100, 100)).toEqual([10, true])
        expect(fn('10', -100, 100)).toEqual([10, true])
        expect(fn(-10, -100, 100)).toEqual([-10, true])
        expect(fn('-10', -100, 100)).toEqual([-10, true])

        expect(fn(0.1, -1, 1)).toEqual([0.1, true])
        expect(fn('0.1', -1, 1)).toEqual([0.1, true])
        expect(fn(-0.1, -1, 1)).toEqual([-0.1, true])
        expect(fn('-0.1', -1, 1)).toEqual([-0.1, true])
    })    
    test('should return true tuple for exponential notation case', ()=>{
        expect(fn('1e+1', -100, 100)).toEqual([10, true])
        expect(fn('-1e+1', -100, 100)).toEqual([-10, true])
        expect(fn('1e-1', -100, 100)).toEqual([0.1, true])
        expect(fn('-1e-1', -100, 100)).toEqual([-0.1, true])
    })
    test('should range value by min-max', () => {
        expect(fn(12, -10, 10)).toEqual([10, true])
        expect(fn('12', -10, 10)).toEqual([10, true])
        expect(fn(-12, -10, 10)).toEqual([-10, true])
        expect(fn('-12', -10, 10)).toEqual([-10, true])

        expect(fn('1e+1', -1, 1)).toEqual([1, true])
        expect(fn('-1e+1', -1, 1)).toEqual([-1, true])
    })
    test('should return tuple true with min for all edge cases', ()=>{
        expect(fn('ab', 0, 10)).toEqual([0, true])
        expect(fn('a1e+1', 0, 10)).toEqual([0, true])

        expect(fn(null, 0, 10)).toEqual([0, true])
        expect(fn(void 0, 0, 10)).toEqual([0, true])
        expect(fn({}, 0, 10)).toEqual([0, true])
    })
})