import { imObjUpdate } from '../im-obj';

describe('imObjUpdate', ()=>{
    test('should immutable update object by propName', ()=>{
        const _objIn = {a: 'text'}
       , _objOut = imObjUpdate(_objIn, 'a', 'textUpdated');
       expect(_objOut).toEqual({a: 'textUpdated'})
       expect(_objOut).not.toBe(_objIn)
    })  
})