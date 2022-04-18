import type { CSSProperties, FC } from '../types';

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

const CaptionWithHotKey: FC<CaptionWithHotKeyProps> = ({ 
  caption, 
  hotKey 
}) => {
  const index = _crHotKeyIndex(caption, hotKey);
  if (index === -1) { return <>{caption}</>; }

  const _before = caption.substring(0, index)
  , _key = caption.substring(index, index+1)
  , _after = caption.substring(index+1);
  return (
    <>
     <span>{_before}</span>
     <span style={S_HOT_KEY}>{_key}</span>
     <span>{_after}</span>
    </>
  );
};

const CaptionInput: FC<CaptionInputProps> = ({
  className,   
  caption, 
  hotKey,
  children
}) => {
  if (!caption) { return null; }

  return (
    <span className={className}>
      <CaptionWithHotKey 
        caption={caption}
        hotKey={hotKey}        
      />       
      {children}
    </span>
  );  
};

export default CaptionInput
