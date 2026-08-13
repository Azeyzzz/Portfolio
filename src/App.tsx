import { useState } from "react";
import headshot from "./assets/photo_cmu.jpg";
import filler from "./assets/pixel-filler.png";
import DecryptedText from "./components/ui/DecryptedText";
import PixelTransition from "./components/sections/PixelTransition.tsx";
import AnimatedContent from "./components/ui/AnimatedContent.tsx";
import PixelBlast from "./components/layout/PixelBlast.tsx";
import SpecularButton from "./components/ui/SpecButton.tsx";
import Carousel from "./components/sections/carousel.tsx";
import type { CarouselItem } from "./components/sections/carousel.tsx";
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
const slides: CarouselItem[] = [
  {
    id: 1,
    title: "Fast",
    description: "Blazing fast performance out of the box.",
    icon: "⚡",
  },
  {
    id: 2,
    title: "Flexible",
    description: "Customize everything to fit your needs.",
    icon: "🔧",
  },
  {
    id: 3,
    title: "Reliable",
    description: "Built to handle whatever you throw at it.",
    icon: "🛡️",
  },
];

function App() {
  const navStyle = "text-font-nav font-spaceG hover:bg-[#00F0FF] px-4";
  const [activeContract, setContract] = useState("none");
  return (
    <>
      <nav className="navbar sticky top-0 bg-[#FF007A] text-center text-black min-w-50 z-50">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setContract(link.contract)}
            className={navStyle}
          >
            {link.text}
          </a>
        ))}
      </nav>
      {/*
        00ffb3
        */}
      <section
        className="grid grid-cols-6 grid-rows-9 min-h-screen bg-[#0B0B0F]"
        id="cover-link"
      >
        <div className="background col-span-5 row-span-9 h-screen w-full absolute z-0">
          <PixelBlast
            variant="triangle"
            pixelSize={4}
            color="#00F0FF"
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
        <div className="cover-page max-w-3xl text-left col-start-6 col-span-1 row-span-8 bg-[#FF007A] z-10">
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
            <h1 className="text-black text-8xl font-spaceG [writing-mode:vertical-rl] pl-5 text-center">
              WELCOME TO <br /> MY PAGE!
            </h1>
          </AnimatedContent>
        </div>
        <div className="max-w-3x1 text-left col-span-4 row-start-8 row-span-1 bg-[#FF007A]  z-10">
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
      <div className="bg-[#0B0B0F] w-full h-15"></div>
      <section className=" min-h-screen w-full bg-[#0B0B0F]" id="about-link">
        <div className="absolute z-0 opacity-70">
          <PixelBlast
            variant="triangle"
            pixelSize={4}
            color="#00F0FF"
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
          <h2 className="text-black text-6xl font-spaceG text-wrap min-w-75 max-w-75 max-h-15 break-all relative z-10 bg-[#FF007A] col-span-1">
            <DecryptedText
              text={"ABOUT ME"}
              animateOn="view"
              clickMode="once"
              speed={50}
              maxIterations={20}
            />
          </h2>
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
              <div className="min-w-full text-black bg-[#00F0FF] h-100 ml-10 rounded-2xl border-2 border-[#FF007A] mt-5 overflow-scroll">
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
                  className="h-110 w-80 rounded-2xl border-2 border-[#FF007A]"
                  src={headshot}
                ></img>
              </div>
            </AnimatedContent>
          </div>
        </main>
      </section>
      <div className="bg-[#0B0B0F] w-full h-10"></div>
      <section
        className="contract-cards h-screen w-full bg-[#0B0B0F]"
        id="contract-nav"
      >
        <div className="absolute z-0 opacity-70">
          <PixelBlast
            variant="triangle"
            pixelSize={4}
            color="#00F0FF"
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
        <h1 className="text-black text-6xl font-spaceG text-wrap min-w-95 max-w-95 break-all relative z-10 bg-[#FF007A] mb-5">
          <DecryptedText
            text={"EXPERIENCES"}
            animateOn="view"
            clickMode="once"
            speed={50}
            maxIterations={20}
          />
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
                    className="exp-class w-full h-full overflow-scroll relative z-10 pointer-events-auto bg-[#0B0B0F]"
                  >
                    <h2 className="bg-[#FF007A] text-4xl text-center pt-5 pb-5 text-black">
                      MY EDUCATION
                    </h2>
                    <div className="text-center pt-20">
                      <SpecularButton
                        size="lg"
                        radius={18}
                        tint="#ffffff"
                        tintOpacity={0}
                        blur={0}
                        textColor="#f5f5f5"
                        lineColor="#FF007A"
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
                        View Education
                      </SpecularButton>
                    </div>
                  </div>
                }
                gridSize={20}
                pixelColor="#FF007A"
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
                    <h2 className="bg-[#FF007A] text-4xl text-center pt-5 pb-5 text-black">
                      PROFESSIONAL EXPERIENCE
                    </h2>
                    <div className="text-center pt-15">
                      <SpecularButton
                        size="lg"
                        radius={18}
                        tint="#ffffff"
                        tintOpacity={0}
                        blur={0}
                        textColor="#f5f5f5"
                        lineColor="#FF007A"
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
                        Professional Experience
                      </SpecularButton>
                    </div>
                  </div>
                }
                gridSize={20}
                pixelColor="#FF007A"
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
                    className="exp-class w-full h-full bg-black overflow-scroll relative z-10 pointer-events-auto"
                  >
                    <h2 className="bg-[#FF007A] text-4xl text-center pt-5 pb-5 text-black">
                      MY PROJECTS
                    </h2>
                    <div className="text-center pt-20">
                      <SpecularButton
                        size="lg"
                        radius={18}
                        tint="#ffffff"
                        tintOpacity={0}
                        blur={0}
                        textColor="#f5f5f5"
                        lineColor="#FF007A"
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
                  </div>
                }
                gridSize={20}
                pixelColor="#FF007A"
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
                    <h2 className="bg-[#FF007A] text-4xl text-center pt-5 pb-5 text-black">
                      MY AWARDS
                    </h2>
                    <div className="text-center pt-20">
                      <SpecularButton
                        size="lg"
                        radius={18}
                        tint="#ffffff"
                        tintOpacity={0}
                        blur={0}
                        textColor="#f5f5f5"
                        lineColor="#FF007A"
                        baseColor="#525252"
                        intensity={1}
                        shineSize={10}
                        shineFade={40}
                        thickness={1}
                        speed={0.35}
                        followMouse
                        proximity={250}
                        autoAnimate={true}
                        onClick={() => setContract("awards")}
                      >
                        Awards
                      </SpecularButton>
                    </div>
                  </div>
                }
                gridSize={20}
                pixelColor="#FF007A"
                once={false}
                animationStepDuration={0.4}
                className="custom-pixel-card"
              />
            </AnimatedContent>
          </div>
          <div className="col-start-3 col-span-2 row-span-2 relative z-10 w-full max-h-screen bg-black rounded-2xl border-2 border-[#FF007A] font-spaceG text-black overflow-scroll">
            {activeContract === "none" && (
              <div className="flex justify-center">
                <h2 className="text-white pt-70 text-5xl font-spaceG font-bold">
                  Connection Terminated
                </h2>
              </div>
            )}
            {activeContract === "projects" && (
              <AnimatedContent
                distance={50}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0}
              >
                <div className="flex flex-col h-full gap-5 rounded-2xl">
                  <h2 className="bg-[#FF007A] rounded-tl-xl rounded-tr-xl text-4xl text-center flex-1 text-black">
                    Projects
                  </h2>
                  {projects.map((project) => (
                    <div
                      className="bg-[#00F0FF] border-[#FF007A] border-2 rounded-2xl mb-5 flex-1"
                      key={project.id}
                    >
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
              </AnimatedContent>
            )}
            {activeContract === "awards" && (
              <AnimatedContent
                distance={50}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0}
              >
                <div className="flex flex-col h-full max-h-10 gap-5 rounded-2xl">
                  <h2 className="bg-[#FF007A] rounded-tl-xl rounded-tr-xl text-4xl text-center flex-1">
                    Awards
                  </h2>
                  {awards.map((award) => (
                    <div
                      className="border-2 bg-[#00F0FF] border-[#FF007A] mb-5 rounded-2xl flex-1 h-full grid grid-cols-4 grid-rows-4 p-2"
                      key={award.name}
                    >
                      <h2 className="row-span-2 col-start-1 row-start-1 col-span-3 text-4xl">
                        {award.name}
                      </h2>
                      <img
                        className="col-start-4 row-span-4"
                        src={award.badge}
                      ></img>
                      <h4 className="text-xl row-start-3 row-span-1 col-start-1">
                        {award.awarder}
                      </h4>
                      <h4 className="text-xl row-start-4 row-span-1 col-start-1 italic">
                        {award.date}
                      </h4>
                    </div>
                  ))}
                </div>
              </AnimatedContent>
            )}
            {activeContract === "education" && (
              <AnimatedContent
                distance={50}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0}
              >
                <div className="flex flex-col h-full gap-5 rounded-2xl font-spaceG">
                  <h2 className="bg-[#FF007A] rounded-tl-xl rounded-tr-xl text-4xl text-center flex-1">
                    Education
                  </h2>
                  <div
                    className={`rounded-2xl border-[#FF007A] border-2 h-full flex-1 min-w-full font-spaceG`}
                  >
                    <Carousel
                      items={education.map(
                        (edu): CarouselItem => ({
                          id: edu.id,
                          title: edu.school,
                          degree: edu.degree,
                          start: edu.start_date,
                          gpa: edu.gpa,
                          end: edu.end_date,
                          description: edu.info,
                        }),
                      )}
                      baseWidth={612}
                      autoplay
                      autoplayDelay={3000}
                      pauseOnHover
                      loop
                      round={false}
                    />
                  </div>
                </div>
              </AnimatedContent>
            )}
            {activeContract === "jobex" && (
              <AnimatedContent
                distance={50}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.1}
                delay={0}
              >
                <div className="flex flex-col h-full max-h-10 gap-5 rounded-2xl">
                  <h2 className="bg-[#FF007A] rounded-tl-xl rounded-tr-xl text-4xl text-center flex-1 font-spaceG">
                    Experience
                  </h2>
                  <div
                    className={`rounded-2xl border-[#FF007A] border-2 h-full flex-1 min-w-full font-spaceG`}
                  >
                    <Carousel
                      items={jobs.map(
                        (job): CarouselItem => ({
                          id: job.id,
                          title: job.title,
                          company: job.company,
                          start: job.start,
                          end: job.end,
                          description: job.description,
                          skills: job.skills,
                        }),
                      )}
                      baseWidth={612}
                      autoplay
                      autoplayDelay={3000}
                      pauseOnHover
                      loop
                      round={false}
                    />
                  </div>
                </div>
              </AnimatedContent>
            )}
          </div>
        </main>
      </section>
      <div className="w-full h-15 bg-[#0B0B0F]"></div>
      <section id="socials-page" className="bg-[#0B0B0F]">
        <div id="social-link" className="social-class text-white">
          <h2 className="text-black text-6xl font-spaceG text-wrap min-w-55 max-w-55 break-all relative z-10 bg-[#FF007A] mb-5 mr-5">
            Socials
          </h2>
          <div className="grid grid-cols-2 grid-rows-2 p-5 gap-5">
            {socials.map((social) => (
              <div
                className="p-2 border-[#FF007A] border-2 rounded-2xl "
                key={social.name}
              >
                <h2>{social.name}</h2>
                <img src={social.logo}></img>
                <h4>{social.link}</h4>
              </div>
            ))}
          </div>
          <h3 className="pl-1 pb-1">Created by Zaeya DeBenedetti 2026</h3>
        </div>
      </section>
    </>
  );
}

export default App;
