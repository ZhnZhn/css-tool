
export const _isNaN = Number.isNaN || isNaN

export const isNumber = (value: unknown): value is number => 
  typeof value === "number" && value-value === 0

export const isStr = (value: unknown): value is string => 
  typeof value === "string"
 
export const isObj = (value: unknown): value is object =>  
  typeof value === "object" && value !== null