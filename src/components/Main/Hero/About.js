import { Title } from "../Title/Title";
import { Info } from "./Info";

export const About = () => {
  return (
    <div className="about">
      <Title
        text="Your Luck if you join us now!"
        style={{ width: "300px", fontSize: "50px" }}
      />
      <Info />
    </div>
  );
};
