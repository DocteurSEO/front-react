import { Logo } from "./Logo/Logo";
import { Navbar } from "./Navbar/Navbar";
import "./style.css";
export const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Navbar />
    </div>
  );
};
