import ibgroup from "/src/assets/images/tesla.png";
import memento from "/src/assets/images/dropbox.png";
import acc from "/src/assets/images/passgen.png";
import daddy from "/src/assets/images/moviedb.png";
import sunnyside from "/src/assets/images/rb.png";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
      <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://tesla-clone-by-bratnakarmishra.netlify.app/"
            img={ibgroup}
            alt="IBGroup vietnam website mockup"
            name="Tesla Clone"
            type="Web Design • Frontend Development"
            year="2023"
            tools="React Js • CSS • JavaScript • React Redux"
          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://dropbox-clone-git-main-ratnakar-mishras-projects.vercel.app/"
            img={memento}
            alt="memento landing page mockup"
            name="Deopbox Clone"
            type="Frontend Development"
            year="2023"
            tools="Next Js • TailwindCSS • TypeScript • Firebase"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://password-generator-by-ratnakar-mishra.netlify.app/"
            img={acc}
            alt="real business accountant project mockup"
            name="Password Generator"
            type="Web Design • Frontend Development"
            year="2023"
            tools="HTML • CSS • JavaScript"
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="https://movie-db-by-ratnakar-mishra.netlify.app/"
            img={daddy}
            alt="godaddy clone page mockup"
            name="Movie DB"
            type="Frontend Development"
            year="2023"
            tools="HTML • CSS • JavaScript"
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
          <Projects
            link="https://rtanakar.github.io/rd/"
            img={sunnyside}
            alt="sunnyside project mockup"
            name="
            Responsive Dashboard"
            type="Frontend Development"
            year="2022"
            tools="HTML • CSS • JavaScript"
          />
        </div>
      </div>
    </section>
  );
}
