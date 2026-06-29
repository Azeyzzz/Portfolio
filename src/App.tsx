import { useState } from "react";
import heroImg from "./assets/photo_cmu.jpg";
import viteLogo from "./assets/charlotte_logo.svg";
import reactLogo from "./assets/cmu_seal.png";
import "./App.css";
import {
  meta,
  links,
  projects,
  education,
  jobs,
  awards,
  socials,
} from "./data/portfolio.ts";

function App() {
  const [count, setCount] = useState(0);
  const navStyle = "text-2xl font-spaceG font-bold hover:bg-fuchsia-500 px-4";
  return (
    <>
      <nav className="navbar sticky top-0 bg-pink-600 text-center text-white min-w-50">
        {links.map((link) => (
          <a key={link.href} href={link.href} className={navStyle}>
            {link.text}
          </a>
        ))}
      </nav>
      <section className="cover" id="cover-link">
        <div className="cover-page min-h-120">
          <h1>{meta.name}</h1>
        </div>
      </section>
      <section className="about-me"></section>
      <section className="contract-cards"></section>
      <section id="about-link" className="about-me">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="exp-link" className="exp-class"></section>
      <section id="edu-link" className="exp-class"></section>
      <section id="social-link" className="exp-class"></section>
      <section>
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>{meta.name}</h2> // you ended here, inserted a type.name
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
