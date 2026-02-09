const CL_CSS_TOKEN = "css-token";

interface CssTokenProps {
  title: string;
  id: string;
}
  
const _onClick = (name: string) => {
  document.getElementById(name)?.focus()
};
  
  /* eslint-disable jsx-a11y/no-static-element-interactions */ 
  /* eslint-disable jsx-a11y/click-events-have-key-events */ 
  const CssToken = (props: CssTokenProps) => ( 
    <span 
      tabIndex={-1}
      className={CL_CSS_TOKEN}    
      onClick={() => _onClick(props.id)}
    >
       {props.title}
    </span>
  )
  /* eslint-enable jsx-a11y/no-static-element-interactions */ 
  /* eslint-enable jsx-a11y/click-events-have-key-events */ 

  export default CssToken