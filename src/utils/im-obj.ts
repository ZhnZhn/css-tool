
type ImObjType = {
  create<T>(obj: T): T;
  update<T>(obj: T, propName: keyof T, propValue: any): T;
}

const imObj: ImObjType = {
  create(obj){
    return {...obj};
  },

  update(obj, propName, propValue){
    obj[propName] = propValue
    return {...obj};
  }
}

export default imObj
