import PropTypes from "prop-types";
import "./card.css";

export const Card = ({ title, text }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p> {text} </p>
    </div>
  );
};

Card.defaultProps = {
  title: "",
  text: "",
};

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
