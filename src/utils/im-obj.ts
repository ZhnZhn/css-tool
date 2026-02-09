
type ImObjUpdateFn = <T>(
  obj: T, 
  propName: keyof T, 
  propValue: T[keyof T]
) => T

export const imObjUpdate: ImObjUpdateFn = (
  obj, 
  propName, 
  propValue
  ) => {
    obj[propName] = propValue
    return {...obj};
}

