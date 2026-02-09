type ImArrInsertFn = <T>(arr: T[], index: number, value: T) => T[];
type ImArrUpdateFn = <T>(arr: T[], index: number, value: T) => T[];
type ImArrRemoveFn = <T>(arr: T[], index: number) => T[];


export const imArrInsert: ImArrInsertFn = (
  arr=[], 
  index, 
  value
) => [
    ...arr.slice(0, index),
    value,
    ...arr.slice(index)
];
  
export const imArrUpdate: ImArrUpdateFn = (
  arr=[], 
  index, 
  value
) => {    
    arr[index] = value    
    return [...arr];
}

export const imArrRemove: ImArrRemoveFn = (
  arr=[], 
  index
) => [
    ...arr.slice(0, index),
    ...arr.slice(index+1)
]
