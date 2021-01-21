import "./button.css";
export const Button = ({ text, style }) => {
  return (
    <button className="button" style={style}>
      {text}
    </button>
  );
};
Button.defaultProps = {
  text: "",
  style: {},
};
