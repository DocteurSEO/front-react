import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { useMoney } from "./helper/useMoney";
import "./App.css";
function App() {
  useMoney();
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
      <div className="bg"></div>
    </div>
  );
}

export default App;
