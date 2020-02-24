import { h } from 'preact'

const AppLabel = ({ className, style, caption }) => (
  <span className={className} style={style}>
    {caption}
  </span>
);

/*
AppLabel.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  caption: PropTypes.string
}
*/

export default AppLabel
