import type { StyleSheet } from '../types';

type StyleKeys = 'ROOT'
 | 'BT'
 | 'DIV'
 | 'CAPTION' 

/*
mostly from
http://www.material-ui.com/#/components/raised-button
*/

const S: StyleSheet<StyleKeys> = {
  ROOT: {
    display: 'inline-block',
    color: 'rgba(0, 0, 0, 0.870588)',
    margin: 12,
    borderRadius: 2,
    backgroundColor: 'rgb(255, 255, 255)',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',        
    boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',        
  },
  BT: {    
    position: 'relative',
    display: 'inline-block',        
    width: '100%',
    height: 36,
    lineHeight: '36px',    
    margin: 0,
    padding: 0,
    textAlign: 'center',   
    textDecoration: 'none', 
    fontSize: 'inherit',
    fontWeight: 'inherit',    
    zIndex: 1,        
    border: 10,
    borderRadius: 2,
    outline: 'none',
    cursor: 'pointer',    
    backgroundColor: 'rgb(0, 188, 212)',    
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',    
  },
  DIV: {
    top: 0,
    height: 36,
    borderRadius: 2,
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',    
  },
  CAPTION: {
    position: 'relative',
    color: 'beige',
    margin: 0,
    paddingLeft: 16,
    paddingRight: 16,
    opacity: '1',
    fontSize: '16px',
    fontWeight: 'bold',
    letterSpacing: '0px',
    textTransform: 'uppercase',    
    userSelect: 'none',        
  }
}

export default S