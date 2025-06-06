import type { 
  PropsWithChildren, 
  CSSProperties
} from '../types';

interface CaptionInputProps {
  className?: string;   
  caption?: string;
  hotKey?: string;  
}
interface CaptionWithHotKeyProps {
  caption: string;
  hotKey?: string;  
}

const S_HOT_KEY: CSSProperties = {  
  textDecoration: 'underline'  
};

const _crHotKeyIndex = (
  caption: string,
  hotKey?: string, 
) => hotKey
  ? caption.toLowerCase().indexOf(hotKey)
  : -1;

const CaptionWithHotKey = ({ 
  caption, 
  hotKey 
}: CaptionWithHotKeyProps) => {
  const index = _crHotKeyIndex(caption, hotKey);
  if (index === -1) { return <>{caption}</>; }

  const _before = caption.slice(0, index)
  , _key = caption.slice(index, index+1)
  , _after = caption.slice(index+1);
  return (
    <>
     <span>{_before}</span>
     <span style={S_HOT_KEY}>{_key}</span>
     <span>{_after}</span>
    </>
  );
};

const CaptionInput = ({
  className,   
  caption, 
  hotKey,
  children
}: PropsWithChildren<CaptionInputProps>) => caption ? (
  <span className={className}>
    <CaptionWithHotKey 
      caption={caption}
      hotKey={hotKey}        
    />       
    {children}
  </span>
) : null;  

export default CaptionInput
