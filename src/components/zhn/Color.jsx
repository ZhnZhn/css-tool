const S = {
  ROOT: {
    display: 'inline-block',
    height: 32,
    width: 32,
    borderRadius: 2,
    boxShadow: '0 2px 2px 0 rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.1)'
  }
};

const Color = ({ style, value }) => {
  const _style = value
    ? { backgroundColor: value }
    : null;
  return (
    <span style={{...S.ROOT, ...style, ..._style }} />
  );
}

/*
Color.propTypes = {
  style: PropTypes.object,
  value: PropTypes.string
}
*/

export default Color
