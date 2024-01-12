import Hero from "./components/2-hero/Hero";
import Header from "./components/1-header/Header";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import { useEffect, useState } from "react";
import About from "./components/Aboute/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Uses from "./Uses/Uses";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBTN(true);
      } else {
        setshowScrollBTN(false);
      }
    });
  }, []);

  const [showScrollBTN, setshowScrollBTN] = useState(false);
  return (
    <div id="up" className="container">
      <Header />

      <a
        style={{ opacity: showScrollBTN ? 1 : 0, transition: "1s" }}
        href="#up"
      >
        <button className="icon-keyboard_arrow_up scroll2Top"></button>
      </a>

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <div className="divider" />
                <Main />
                <div className="divider" />
                <Contact />
              </>
            }
          />
          <Route path="/About" element={<About />} />
          <Route path="/uses" element={<Uses />} />
        </Routes>
      </BrowserRouter>
      <div className="divider" />

      <Footer />
    </div>
  );
}

export default App;
