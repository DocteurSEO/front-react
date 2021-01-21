import { Video } from "./Video";
import { Call } from "./Call";
import { Block } from "./Block";
import { Button } from "../Button/Button";
import { Title } from "../Title/Title";

export const Hero = () => {
  const btnStyle = {
    width: "150px",
    height: "100px",
    backgroundColor: "#FEA31A",
    border: "none",
    padding: "40px",
    color: "white",
    textDecoration: "underline",
  };

  const titleStyle = {
    alignSelf: "center",
    flex: "1 1 100px",
    fontSize: "55px",
  };
  return (
    <>
      <div className="hero">
        <Video />
        <Title text="Ready not to Stop Talking Design?" style={titleStyle} />
        <Button text="I want to Join now!" style={btnStyle} />
      </div>
      <div className="more">
        <Call />
        <Block />
      </div>
    </>
  );
};
