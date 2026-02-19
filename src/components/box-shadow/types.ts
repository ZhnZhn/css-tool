
export type ShadowType = {
  isInset: boolean;  
  gLength: number;
  vLength: number;
  blurR: number;
  spreadR: number;
  opacity: number;
  color: string;
  id: string;
}

export type UpdateShadowFn = <K extends keyof ShadowType>(propName: K, value: ShadowType[K]) => void

export type ConfigStyleType = {
  bgColor: string;
  boxColor: string;
  boxBorderRadius: string; 
}

export type UpdateConfigStyleFn = <K extends keyof ConfigStyleType>(propName: K, value: ConfigStyleType[K]) => void
