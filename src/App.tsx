import { useState } from "react";
import headshot from "./assets/photo_cmu.jpg";
import charlotte from "./assets/charlotte_logo.svg";
import filler from "./assets/pixel-filler.png";
import cmu from "./assets/cmu_seal.png";
import DecryptedText from "./components/ui/DecryptedText";
import FaultyTerminal from "./components/layout/FaultyTerminal.tsx";
import PixelTransition from "./components/sections/PixelTransition.tsx";
import cardView from "./components/sections/cardView.tsx";
import AnimatedContent from "./components/ui/AnimatedContent.tsx";
import PixelBlast from "./components/layout/PixelBlast.tsx";
import SpecularButton from "./components/ui/SpecButton.tsx";
import PixelSnow from "./components/layout/PixelSnow.tsx";
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
import ShowCard from "./components/sections/cardView.tsx";
import ShowCardComponent from "./components/sections/cardView.tsx";

function App() {
  const navStyle = "text-font-nav font-spaceG hover:bg-fuchsia-500 px-4";
  const [activeContract, setContract] = useState("none");
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
        className="grid grid-cols-6 grid-rows-9 min-h-screen bg-black"
        id="cover-link"
      >
        <div className="background col-span-5 row-span-9 h-screen w-full absolute z-0">
          <PixelBlast
            variant="triangle"
            pixelSize={4}
            color="#ff7bbc"
            patternScale={4}
            patternDensity={2}
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
      <div className="bg-black w-full h-15"></div>
      <section className=" min-h-screen w-full bg-black" id="about-link">
        <div className="absolute z-0 opacity-70">
          <PixelBlast
            variant="triangle"
            pixelSize={4}
            color="#ff7bbc"
            patternScale={2}
            patternDensity={0.25}
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
        <main className="grid grid-cols-10 grid-rows-6">
          <div className="relative z-10 col-span-6 col-start-1 row-span-4 row-start-2">
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
              delay={0.5}
            >
              <div className="min-w-full text-white bg-gray-800 h-100 ml-10 rounded-2xl mt-5 overflow-scroll">
                <h2 className="text-5x1">A little About Me</h2>
                <p className="text-4xl p-2">{meta.intro}</p>
              </div>
            </AnimatedContent>
          </div>
          <div className="image relative col-span-3 col-start-8 row-span-4 row-start-2 z-10 mt-5">
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
              delay={0.5}
            >
              <div>
                <img
                  className="h-110 w-80 rounded-2xl border-2 border-white"
                  src={headshot}
                ></img>
              </div>
            </AnimatedContent>
          </div>
        </main>
      </section>
      <div className="bg-black w-full h-5"></div>
      <section className="contract-cards h-screen w-full">
        <div className="absolute z-0 opacity-70">
          <PixelBlast
            variant="triangle"
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
        <h1 className="text-white text-8xl font-spaceG text-wrap break-all bg-black pb-5">
          Experiences
        </h1>
        <main className="grid grid-cols-4 grid-rows-2 bg-black gap-5 pr-5">
          <div className="">
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
              delay={1}
            >
              <PixelTransition
                firstContent={
                  <img
                    src={filler}
                    alt="default pixel transition content, a cat!"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
                secondContent={
                  <div
                    id="exp-link"
                    className="exp-class w-full h-full bg-black overflow-scroll relative z-10 pointer-events-auto "
                  >
                    <h2>My Education</h2>
                    <SpecularButton
                      size="lg"
                      radius={18}
                      tint="#ffffff"
                      tintOpacity={0}
                      blur={0}
                      textColor="#f5f5f5"
                      lineColor="#ffffff"
                      baseColor="#525252"
                      intensity={1}
                      shineSize={10}
                      shineFade={40}
                      thickness={1}
                      speed={0.35}
                      followMouse
                      proximity={250}
                      autoAnimate={false}
                      onClick={() => setContract("jobex")}
                    >
                      Education
                    </SpecularButton>
                  </div>
                }
                gridSize={20}
                pixelColor="#ffffff"
                once={false}
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
            </AnimatedContent>
          </div>
          <div>
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
              delay={1}
            >
              <PixelTransition
                firstContent={
                  <img
                    src={filler}
                    alt="default pixel transition content, a cat!"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
                secondContent={
                  <div
                    id="exp-link"
                    className="exp-class w-full h-full bg-black overflow-scroll relative z-10 pointer-events-auto "
                  >
                    <h2>Professional Experience</h2>
                    <SpecularButton
                      size="lg"
                      radius={18}
                      tint="#ffffff"
                      tintOpacity={0}
                      blur={0}
                      textColor="#f5f5f5"
                      lineColor="#ffffff"
                      baseColor="#525252"
                      intensity={1}
                      shineSize={10}
                      shineFade={40}
                      thickness={1}
                      speed={0.35}
                      followMouse
                      proximity={250}
                      autoAnimate={false}
                      onClick={() => setContract("education")}
                    >
                      Professional Experience
                    </SpecularButton>
                  </div>
                }
                gridSize={8}
                pixelColor="#ffffff"
                once={false}
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
            </AnimatedContent>
          </div>
          <div className="row-start-2">
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
              delay={1}
            >
              <PixelTransition
                firstContent={
                  <img
                    src={filler}
                    alt="default pixel transition content, a cat!"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
                secondContent={
                  <div
                    id="exp-link"
                    className="exp-class w-full h-full bg-black overflow-scroll relative z-10 pointer-events-auto "
                  >
                    <h2>My Projects</h2>
                    <SpecularButton
                      size="lg"
                      radius={18}
                      tint="#ffffff"
                      tintOpacity={0}
                      blur={0}
                      textColor="#f5f5f5"
                      lineColor="#ffffff"
                      baseColor="#525252"
                      intensity={1}
                      shineSize={10}
                      shineFade={40}
                      thickness={1}
                      speed={0.35}
                      followMouse
                      proximity={250}
                      autoAnimate={false}
                      onClick={() => setContract("projects")}
                    >
                      Projects
                    </SpecularButton>
                  </div>
                }
                gridSize={8}
                pixelColor="#eb4597"
                once={false}
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
            </AnimatedContent>
          </div>
          <div className="row-start-2">
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.1}
              delay={1}
            >
              <PixelTransition
                firstContent={
                  <img
                    src={filler}
                    alt="default pixel transition content"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
                secondContent={
                  <div
                    id="exp-link"
                    className="exp-class w-full h-full bg-black overflow-scroll relative z-10 pointer-events-auto "
                  >
                    <h2>My Awards</h2>
                    <SpecularButton
                      size="lg"
                      radius={18}
                      tint="#ffffff"
                      tintOpacity={0}
                      blur={0}
                      textColor="#f5f5f5"
                      lineColor="#ffffff"
                      baseColor="#525252"
                      intensity={1}
                      shineSize={10}
                      shineFade={40}
                      thickness={1}
                      speed={0.35}
                      followMouse
                      proximity={250}
                      autoAnimate={false}
                      onClick={() => setContract("awards")}
                    >
                      Awards
                    </SpecularButton>
                  </div>
                }
                gridSize={8}
                pixelColor="#ffffff"
                once={false}
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
            </AnimatedContent>
          </div>
          <div className="col-start-3 col-span-2 row-span-2 relative z-10">
            {activeContract === "none" && <div className="w-full h-full"></div>}
            {activeContract === "projects" && (
              <div className="">
                {projects.map((project) => (
                  <div className="bg-green-500" key={project.id}>
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
            )}
            {activeContract === "awards" && (
              <div className="bg-green-500">
                {awards.map((award) => (
                  <div key={award.name}>
                    <h2>{award.name}</h2>
                    <h4>{award.awarder}</h4>
                    <h4>{award.date}</h4>
                  </div>
                ))}
              </div>
            )}
            {activeContract === "education" && (
              <div className="bg-green-500">
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
            )}
            {activeContract === "jobex" && (
              <div className="bg-green-500">
                {jobs.map((job) => (
                  <div className="" key={job.id}>
                    <button className="text-5xl" onClick={alert}>
                      {job.title}
                    </button>
                    <h4>{job.company}</h4>
                    <small>
                      {job.start},{job.end}
                    </small>
                    <p>{job.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </section>
      <div className="w-full h-25 bg-black"></div>
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
