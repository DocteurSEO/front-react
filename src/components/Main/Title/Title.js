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
