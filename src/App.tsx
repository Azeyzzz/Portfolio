import { useState } from "react";
import headshot from "./assets/photo_cmu.jpg";
import charlotte from "./assets/charlotte_logo.svg";
import cmu from "./assets/cmu_seal.png";
import DecryptedText from "./components/ui/DecryptedText";
import FaultyTerminal from "./components/layout/FaultyTerminal.tsx";
import PixelTransition from "./components/sections/PixelTransition.tsx";
import cardView from "./components/sections/cardView.tsx";
import AnimatedContent from "./components/ui/AnimatedContent.tsx";
import PixelBlast from "./components/layout/PixelBlast.tsx";
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
  const navStyle = "text-font-nav font-spaceG hover:bg-fuchsia-500 px-4";
  return (
    <>
      <nav className="navbar sticky top-0 bg-pink-600 text-center text-black min-w-50 z-50">
        {links.map((link) => (
          <a key={link.href} href={link.href} className={navStyle}>
            {link.text}
          </a>
        ))}
      </nav>

      <section
        className="grid grid-cols-6 grid-rows-9 min-h-screen"
        id="cover-link"
      >
        <div className="background col-span-5 row-span-9 h-screen w-full absolute z-0">
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
        <div className="cover-page max-w-3xl text-left col-start-6 col-span-1 row-span-8 bg-pink-600 z-10">
          <AnimatedContent
            distance={100}
            direction="horizontal"
            reverse={false}
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={0}
          >
            <h1 className="text-black text-8xl font-spaceG text-wrap break-all">
              Welcome To My Page!
            </h1>
          </AnimatedContent>
        </div>
        <div className="max-w-3x1 text-left col-span-4 row-start-8 row-span-1 bg-pink-600  z-10">
          <AnimatedContent
            distance={100}
            direction="horizontal"
            reverse={false}
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={0}
          >
            <h1 className="text-black text-7xl font-spaceG pl-2">
              <DecryptedText
                text={meta.name}
                animateOn="view"
                clickMode="once"
                speed={50}
                maxIterations={20}
              />
            </h1>
          </AnimatedContent>
        </div>
      </section>
      <section className=" min-h-screen w-full bg-black" id="about-link">
        <div className="absolute z-0 opacity-70">
          <PixelBlast
            variant="square"
            pixelSize={4}
            color="#ff7bbc"
            patternScale={2}
            patternDensity={1}
            pixelSizeJitter={1.3}
            enableRipples={false}
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid={false}
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.5}
            edgeFade={0.25}
            transparent
          />
        </div>
        <main className="flex flex-col items-center justify-center">
          <div className="relative z-10 flex-1 text-white">
            <h2>About Me</h2>
            <p>{meta.intro}</p>
          </div>
          <div className="image flex-1 relative z-10">
            <img className="h-screen/2 w-40 rounded-2xl" src={headshot}></img>
          </div>
        </main>
      </section>
      <section className="contract-cards h-screen w-full">
        <div className="absolute z-0 opacity-70">
          <PixelBlast
            variant="square"
            pixelSize={4}
            color="#ff7bbc"
            patternScale={2}
            patternDensity={1}
            pixelSizeJitter={1.3}
            enableRipples={false}
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid={false}
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.5}
            edgeFade={0.25}
            transparent
          />
        </div>
        {/*   <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={0.8}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.1}
        delay={0}
      ></AnimatedContent> */}
        <main className="grid grid-cols-3 grid-rows-2 bg-black gap-5 pr-5">
          <div className="text row-span-2 bg-black">
            <h1 className="text-white text-8xl font-spaceG text-wrap break-all">
              Experiences
            </h1>
          </div>
          <div className="">
            <PixelTransition
              firstContent={
                <img
                  src={charlotte}
                  alt="default pixel transition content, a cat!"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              }
              secondContent={
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
              }
              gridSize={8}
              pixelColor="#ffffff"
              once={false}
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
          </div>
          <div>
            <PixelTransition
              firstContent={
                <img
                  src={charlotte}
                  alt="default pixel transition content, a cat!"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              }
              secondContent={
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
              }
              gridSize={8}
              pixelColor="#ffffff"
              once={false}
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
          </div>
          <div>
            <PixelTransition
              firstContent={
                <img
                  src={charlotte}
                  alt="default pixel transition content, a cat!"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              }
              secondContent={
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
              }
              gridSize={8}
              pixelColor="#ffffff"
              once={false}
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
          </div>
          <div>
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
                  id="award-link"
                  className="award-class bigSize"
                >
                  {awards.map((award) => (
                    <div key={award.name}>
                      <h2>{award.name}</h2>
                      <h4>{award.awarder}</h4>
                      <h4>{award.date}</h4>
                    </div>
                  ))}
                </div>
              }
              gridSize={8}
              pixelColor="#ffffff"
              once={false}
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
          </div>
          {/*  <div>
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
                  style={{
                    fontWeight: 900,
                    fontSize: "3rem",
                    color: "#ffffff",
                  }}
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
        </div> */}
        </main>
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
