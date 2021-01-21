import { Button } from "../Button/Button";
export const Info = () => {
  const btnStyle = {
    width: "150px",
    marginTop: "20px",
    backgroundColor: "#FEA31A",
    border: "none",
    padding: "15px",
    color: "white",
  };
  return (
    <div className="info">
      <p>expartri duui ud ormare rcir odio ud semm parfdjs</p>
      <Button text="Join now!" style={btnStyle} />
    </div>
  );
};
