import { useState } from "react";
import headshot from "./assets/photo_cmu.jpg";
import charlotte from "./assets/charlotte_logo.svg";
import cmu from "./assets/cmu_seal.png";
import DecryptedText from "./components/ui/DecryptedText";
import FaultyTerminal from "./components/layout/FaultyTerminal.tsx";
import PixelTransition from "./components/sections/contractCard.tsx";
import "./App.css";
import {
  meta,
  projects,
  education,
  jobs,
  awards,
  socials,
} from "./data/portfolio.ts";
import { links } from "./data/navbar.ts";

function App() {
  const navStyle =
    "text-font-nav font-spaceG font-bold hover:bg-fuchsia-500 px-4";
  return (
    <>
      <nav className="navbar sticky top-0 bg-pink-600 text-center text-white min-w-50 z-10">
        {links.map((link) => (
          <a key={link.href} href={link.href} className={navStyle}>
            {link.text}
          </a>
        ))}
      </nav>

      <section
        className="grid grid-cols-6 grid-rows-10 min-h-screen"
        id="cover-link"
      >
        <div className="background col-span-5 row-span-9 h-full w-full">
          <FaultyTerminal
            scale={1.5}
            gridMul={[2, 1]}
            digitSize={1.2}
            timeScale={0.5}
            pause={false}
            scanlineIntensity={0.5}
            glitchAmount={1}
            flickerAmount={1}
            noiseAmp={1}
            chromaticAberration={0}
            dither={0}
            curvature={0.1}
            tint="#0defcd"
            mouseReact
            mouseStrength={0.5}
            pageLoadAnimation
            brightness={0.6}
          />
        </div>
        <div className="cover-page max-w-3xl text-left col-span-1 row-span-10 bg-amber-200">
          <h1 className="text-black text-5x1">Welcome to the page</h1>
        </div>
        <div className="max-w-3x1 text-left col-span-5 row-span-1 bg-amber-50">
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
        <PixelTransition
          firstContent={
            <img
              src={charlotte}
              alt="default pixel transition content, a cat!"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          }
          secondContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#111",
              }}
            >
              <p
                style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}
              >
                Click to view My Education
              </p>
            </div>
          }
          gridSize={8}
          pixelColor="#ffffff"
          once={false}
          animationStepDuration={0.4}
          className="custom-pixel-card"
        />
        <PixelTransition
          firstContent={
            <img
              src={charlotte}
              alt="default pixel transition content, a cat!"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          }
          secondContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#111",
              }}
            >
              <p
                style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}
              >
                Click to view My Education
              </p>
            </div>
          }
          gridSize={8}
          pixelColor="#ffffff"
          once={false}
          animationStepDuration={0.4}
          className="custom-pixel-card"
        />
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
        <div className="hero"></div>
      </section>
    </>
  );
}

export default App;
