export const Title = ({ text }) => {
  return <h1 className="title">{text}</h1>;
};

Title.defaultProps = {
  text: "",
};
