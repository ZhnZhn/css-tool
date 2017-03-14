
const imObj = {
  create(obj){
    return {...obj};
  },

  update(obj, propName, propValue){
    obj[propName] = propValue
    return { ...obj };
  }
}

export default imObj
