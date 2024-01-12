import { useEffect, useRef } from "react";
import profileImg from "/src/assets/images/profile.webp";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function About() {
  const profile = useRef(null);
  const aboutSection = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: aboutSection.current,
      start: "top 400px",
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        ),

      toggleActions: "play none none none",
    });
    ScrollTrigger.refresh();
  }, [aboutSection]);

  return (
    // Try using max width to contain the size of the container
    <section ref={aboutSection} aria-label="about me">
      <Heading title="about me" />
      <div className="mt-10 flex flex-col  items-start gap-8 md:flex-row lg:gap-10 ">
        <div className="top-28 overflow-hidden rounded-md md:sticky md:w-1/2">
          <div className="">
            <h1 className="text-heading-2">Education</h1>
            <h2 className="text-heading-3">High secondary school.</h2>
            <p className="text-xl font-semibold text-stone-600">
              B B Saraswati Vidya Mandir Inter College Karwi Chitrakoot (2016 -
              2018) <br />
              Activities and societies: cricket
            </p>{" "}
            <h2 className="text-heading-3">Graduation.</h2>
            <p className="text-xl font-semibold text-stone-600">
              Mahatma Gandhi Chitrakoot Gramodaya Vishwavidyalaya <br />
              Activities and societies: cricket
            </p>
            <h2 className="text-heading-3">Course</h2>
            <p className="text-xl font-semibold text-stone-600">
              BSc Computer Science (2018 - 2021)
            </p>
            <h2 className="text-heading-3">Post Graduation.</h2>
            <p className="text-xl font-semibold text-stone-600">
              CHANDIGARH UNIVERSITY - (CU)
            </p>
            <h2 className="text-heading-3">Course</h2>
            <p className="text-xl font-semibold text-stone-600">
              Masters of Computer Applications - MCA (2022 - 2024) <br />
              Activities and societies: coding
            </p>
          </div>
          {/* <img
            ref={profile}
            loading="lazy"
            className="aspect-square h-auto w-full rounded-md object-cover object-center md:aspect-auto"
            src={profileImg}
            width="600"
            height="800"
            alt="portrait image of Huy standing in front of a tree and foliage"
          /> */}
        </div>
        <div className="top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2">
          <div className="w-full space-y-4 2xl:space-y-10">
            <h3
              ref={heading}
              className="translate-y-10 text-heading-3 2xl:text-7xl font-semibold leading-tight opacity-0"
            >
              A brief intro, who am I?
            </h3>
            <p
              ref={body}
              className=" translate-y-10 text-body-1 2xl:text-4xl opacity-0"
            >
              I am an react and frontend developer,
              <br></br>
              <br></br>I'm a Highly motivated, self-starting Frontend developer
              seeking to launch a career building web applications and services.
              Familiar with development and deployment process for many
              web-based technologies.😎
              <br></br>
              <br></br>
              Currently learning ReactJs, NextJs, TailwindCSS, Animations And
              more Frontend technology....
              {/* <a
                className="underline duration-300 ease-in-out hover:text-secondary-700"
                href="https://www.youtube.com/channel/UCBOAB9RV647G93GxLhEXleA"
              >
                YouTube 📸
              </a> */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
