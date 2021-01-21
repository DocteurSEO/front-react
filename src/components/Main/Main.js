import { Hero } from "./Hero/Hero";
import { About } from "./Hero/About";

import "./main.css";

export const Main = () => {
  return (
    <div className="main">
      <Hero />
      <About />
    </div>
  );
};
