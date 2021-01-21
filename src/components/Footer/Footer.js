import "./footer.css";
import { Card } from "../Card/Card";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="cardContainer">
        <Card
          title="Certificate"
          text="Libero volupat sed cras telds id rsis inteds maedslsfds"
        />
        <Card
          title="Material Book"
          text="Libero volupat sed cras telds id rsis inteds maedslsfds"
        />
        <Card
          title="Our mission"
          text="Libero volupat sed cras telds id rsis inteds maedslsfds"
        />
      </div>
    </div>
  );
};
