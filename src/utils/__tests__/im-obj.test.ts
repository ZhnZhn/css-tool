import imObj from '../im-obj';

const {
  create,
  update
} = imObj

describe('imObj', ()=>{
    test('should immutable create object from object', ()=>{
       const _objIn = {a: 'text'}
       , _objOut = create(_objIn);
       expect(_objOut).toEqual(_objIn)
       expect(_objOut).not.toBe(_objIn)
    })

    test('should immutable update object by propName', ()=>{
        const _objIn = {a: 'text'}
       , _objOut = update(_objIn, 'a', 'textUpdated');
       expect(_objOut).toEqual({a: 'textUpdated'})
       expect(_objOut).not.toBe(_objIn)
    })  
})