import { Navbar, Navbaren, Navbarru } from "./navbar/Navbar";
import { Navbar1, Navbar2, Navbar3 } from "./body/Navbar1";
import { Footer, Footer1, Footer2 } from "./footer/footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Cafe, Cafe1, Cafe2 } from "./body/cafe";
import { Contact, Contact1, Contact2 } from "./body/contact";
import { Suite, Suite1, Suite2 } from "./body/suites/suite";
import { Double, Double1, Double2 } from "./body/suites/double";
import { Doubletwin, Doubletwin1, Doubletwin2 } from "./body/suites/twin";
import { Family, Family1, Family2 } from "./body/suites/family";
import {
  Presidental,
  Presidental1,
  Presidental2,
} from "./body/suites/presidental";
import { Fitness, Fitnessen, Fitnessru } from "./body/fitness";
import { About, Abouten, Aboutru } from "./body/about";
function App() {
  return (
    <div className="App">
      <Routes className="route">
        <Route path="/" element={[<Navbar />, <Navbar1 />, <Footer />]} />
        <Route
          path="/russian"
          element={[<Navbarru />, <Navbar3 />, <Footer2 />]}
        />
        <Route
          path="/english"
          element={[<Navbaren />, <Navbar2 />, <Footer1 />]}
        />
        <Route path="/cafe" element={[<Navbar />, <Cafe />, <Footer />]} />
        <Route
          path="/cafeen"
          element={[<Navbaren />, <Cafe1 />, <Footer1 />]}
        />
        <Route
          path="/caferu"
          element={[<Navbarru />, <Cafe2 />, <Footer2 />]}
        />
        <Route path="/suites" element={[<Navbar />, <Suite />, <Footer />]} />
        <Route
          path="/suitesen"
          element={[<Navbaren />, <Suite1 />, <Footer1 />]}
        />
        <Route
          path="/suitesru"
          element={[<Navbarru />, <Suite2 />, <Footer2 />]}
        />
        <Route
          path="/contact"
          element={[<Navbar />, <Contact />, <Footer />]}
        />
        <Route
          path="/contacten"
          element={[<Navbaren />, <Contact1 />, <Footer1 />]}
        />
        <Route
          path="/contactru"
          element={[<Navbarru />, <Contact2 />, <Footer2 />]}
        />
        <Route path="/about" element={[<Navbar />, <About />, <Footer />]} />
        <Route
          path="/abouten"
          element={[<Navbaren />, <Abouten />, <Footer1 />]}
        />
        <Route
          path="/aboutru"
          element={[<Navbarru />, <Aboutru />, <Footer2 />]}
        />
        <Route
          path="/standarttwin"
          element={[<Navbar />, <Doubletwin />, <Footer />]}
        />
        <Route
          path="/standarttwinen"
          element={[<Navbaren />, <Doubletwin1 />, <Footer1 />]}
        />
        <Route
          path="/standarttwinru"
          element={[<Navbarru />, <Doubletwin2 />, <Footer2 />]}
        />
        <Route
          path="/standartdouble"
          element={[<Navbar />, <Double />, <Footer />]}
        />
        <Route
          path="/standartdoubleen"
          element={[<Navbaren />, <Double1 />, <Footer1 />]}
        />
        <Route
          path="/standartdoubleru"
          element={[<Navbarru />, <Double2 />, <Footer2 />]}
        />
        <Route
          path="/familylux"
          element={[<Navbar />, <Family />, <Footer />]}
        />
        <Route
          path="/familyluxen"
          element={[<Navbaren />, <Family1 />, <Footer1 />]}
        />
        <Route
          path="/familyluxru"
          element={[<Navbarru />, <Family2 />, <Footer2 />]}
        />
        <Route
          path="/presidentallux"
          element={[<Navbar />, <Presidental />, <Footer />]}
        />
        <Route
          path="/presidentalluxen"
          element={[<Navbaren />, <Presidental1 />, <Footer1 />]}
        />
        <Route
          path="/presidentalluxru"
          element={[<Navbarru />, <Presidental2 />, <Footer2 />]}
        />
        <Route
          path="/fitness"
          element={[<Navbar />, <Fitness />, <Footer />]}
        />
        <Route
          path="/fitnessen"
          element={[<Navbaren />, <Fitnessen />, <Footer1 />]}
        />
        <Route
          path="/fitnessru"
          element={[<Navbarru />, <Fitnessru />, <Footer2 />]}
        />
      </Routes>
      <footer></footer>
    </div>
  );
}

export default App;
