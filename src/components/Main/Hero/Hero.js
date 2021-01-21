import { Video } from "./Video";
import { Button } from "../Button/Button";
import { Title } from "../Title/Title";

export const Hero = () => {
  return (
    <div className="main">
      <Video />
      <Title text="Ready not to Stop Talking Design?" />
      <Button text="I want to Join now!" />
    </div>
  );
};
