import { useState } from "react";
import heroImg from "./assets/photo_cmu.jpg";
import viteLogo from "./assets/charlotte_logo.svg";
import reactLogo from "./assets/cmu_seal.png";
import DecryptedText from "./components/ui/DecryptedText";
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
  const navStyle = "bigSize font-spaceG font-bold hover:bg-fuchsia-500 px-4";
  return (
    <>
      <nav className="navbar sticky top-0 bg-pink-600 text-center text-white min-w-50">
        {links.map((link) => (
          <a key={link.href} href={link.href} className={navStyle}>
            {link.text}
          </a>
        ))}
      </nav>

      <section
        className="flex flex-col items-baseline justify-end min-h-screen p-2 pb-10"
        id="cover-link"
      >
        <div className="cover-page max-w-3xl text-center flex flex-col items-center">
          <h1 className="text-black text-5xl">
            <DecryptedText
              text={meta.name}
              animateOn="view"
              clickMode="once"
              speed={50}
              maxIterations={20}
            />
          </h1>
        </div>
      </section>
      <section className="about-me"></section>
      <section className="contract-cards bg-blue-500 p-15">
        <div id="exp-link" className="exp-class bg-pink-500">
          {jobs.map((job) => (
            <div key={job.id}>
              <h2>{job.title}</h2>
              <h4>{job.company}</h4>
              <small>
                {job.start},{job.end}
              </small>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
        <div id="edu-link" className="exp-class bg-blue-500">
          {education.map((edu) => (
            <div key={edu.school}>
              <h2>{edu.school}</h2>
              <h4>{edu.degree}</h4>
              <small>
                {edu.start_date} - {edu.end_date}
              </small>
              <p>{edu.info}</p>
            </div>
          ))}
        </div>
        <div id="port-link" className="port-class bg-red-500">
          {projects.map((project) => (
            <div key={project.id}>
              <h2>{project.title}</h2>
              <img src={project.photo}></img>
              <small>
                {" "}
                {project.date_created} - {project.date_updated}{" "}
              </small>
              <p>{project.description}</p>
              <a href={project.website}>Link</a>
            </div>
          ))}
        </div>
        <div id="award-link" className="award-class bigSize">
          {awards.map((award) => (
            <div key={award.name}>
              <h2>{award.name}</h2>
              <h4>{award.awarder}</h4>
              <h4>{award.date}</h4>
            </div>
          ))}
        </div>
      </section>
      <section id="socials-page">
        <div id="social-link" className="social-class">
          {socials.map((social) => (
            <div key={social.name}>
              <h2>{social.name}</h2>
              <img src={social.logo}></img>
              <h4>{social.link}</h4>
            </div>
          ))}
        </div>
      </section>
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
    </>
  );
}

export default App;
