import PropTypes from "prop-types";
export const Title = ({ text, style }) => {
  return (
    <h1 className="title" style={style}>
      {text}
    </h1>
  );
};

Title.defaultProps = {
  text: "",
  style: {},
};

Title.propTypes = {
  title: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
};
