
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <section className="hero">
      <p className="eyebrow">WELCOME TO MY DIGITAL SPACE</p>
      <h1>Ideas into <span>Reality.</span></h1>
      <p>I build creative, interactive and user-friendly web experiences.</p>
      <div className="stats">
        <div><h2>05+</h2><p>Projects</p></div>
        <div><h2>03</h2><p>Skills</p></div>
        <div><h2>100%</h2><p>Passion</p></div>
      </div>
    </section>
  );
}

function About() {
  return <section className="hero">
    <p className="eyebrow">A LITTLE ABOUT ME</p>
    <h1>Creative <span>Developer.</span></h1>
    <p>I enjoy building web apps using React, JavaScript and CSS.</p>
    <div className="chip-row"><span>React</span><span>JavaScript</span><span>UI Design</span></div>
  </section>;
}

function Contact() {
  return <section className="hero">
    <p className="eyebrow">LET'S CONNECT</p>
    <h1>Have an <span>idea?</span></h1>
    <p>Let's turn your next idea into something amazing.</p>
    <a className="cta" href="mailto:student@example.com">Contact Me ↗</a>
  </section>;
}

export default function App() {
  return <BrowserRouter>
    <div className="portfolio">
      <nav className="nav">
        <div className="logo">N<span>.</span></div>
        <div className="navlinks">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <span className="available">● Available</span>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer>DESIGNED WITH REACT <span>✦</span> 2026</footer>
    </div>
  </BrowserRouter>;
}