import Navbar from "./navbar/Navbar";
import Navbar1 from "./body/Navbar1";
import Footer from "./footer/footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Routes className="route">
        <Route path="/" element={[<Navbar1 />]} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
