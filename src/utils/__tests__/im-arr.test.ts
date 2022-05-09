import {
  imArrInsert,
  imArrUpdate,
  imArrRemove
} from '../im-arr';

describe('imArr', ()=>{
    test('should immutable insert value to array', ()=>{
      const _arrIn = [1, 2]
      , _arrOut = imArrInsert(_arrIn, 1, 3)
      expect(_arrOut).toEqual([1, 3, 2])
      expect(_arrOut).not.toBe(_arrIn)
    })

    test('should immutable update value in array', ()=>{
        const _arrIn = [1, 2]
        , _arrOut = imArrUpdate(_arrIn, 0, 3)
        expect(_arrOut).toEqual([3, 2])
      expect(_arrOut).not.toBe(_arrIn)
    })

    test('should immutable remove value from array', ()=>{
        const _arrIn = [1, 2]
        , _arrOut = imArrRemove(_arrIn, 0)
        expect(_arrOut).toEqual([2])
        expect(_arrOut).not.toBe(_arrIn)
    })
})