
type ImArrType = {
  insert<T = any>(arr: T[], index: number, value: T): T[];
  update<T = any>(arr: T[], index: number, value: T): T[];
  remove<T = any>(arr: T[], index: number): T[];
}

const imArr: ImArrType = {
  insert(arr=[], index, value){
    return [
      ...arr.slice(0, index),
      value,
      ...arr.slice(index)
    ];
  },

  update(arr=[], index, value){    
    arr[index] = value    
    return [...arr];
  },

  remove(arr=[], index){
    return [
      ...arr.slice(0, index),
      ...arr.slice(index+1)
    ];
  }
}

export default imArr
