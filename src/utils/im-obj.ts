
type ImObjUpdateFn = <T>(
  obj: T, 
  propName: keyof T, 
  propValue: any
) => T

export const imObjUpdate: ImObjUpdateFn = (
  obj, 
  propName, 
  propValue
  ) => {
    obj[propName] = propValue
    return {...obj};
}

