import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header.jsx";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";
import Page5 from "./Pages/Page5";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <section id="home">
      <Page1 />
    </section>
    <section id="about">
      <Page2 />
    </section>
    <section id="projects">
      <Page3 />
    </section>
    <section id="faq">
      <Page4 />
    </section>
    <section id="contact">
      <Page5 />
    </section>
    <Footer />
  </StrictMode>,
);
