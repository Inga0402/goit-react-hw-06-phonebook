import PropTypes from 'prop-types';

const Button = ({ onClick, className, value, type }) => {
  return (
    <button onClick={onClick} className={className} type={type}>
      {value}
    </button>
  );
};
Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
