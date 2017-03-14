
const imArr = {
  insert(arr=[], index=0, value={}){
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
