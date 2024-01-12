import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

export default function Services() {
  const expertiseItems = [
    "Frontend Development",
    "Web Development",
    "Web Design",
  ];

  const toolBoxItems = [
    "JavaScript",
    "HTML",
    "CSS",
    "ReactJS",
    "TailwindCSS",
    "Next JS",
    "Git & Github",
    "Framer Motion",
    "GSAP",
  ];

  return (
    <section id="skills" className="my-[10%]" aria-label="services">
      <Heading title="skills" />
      <div className="space-y-14">
        <ServiceUi
          title="my expertises."
          description="I focus on all things Frontend and web related. With each of my
          services, my goal is to deliver an impactful and elevating
          digital experience for everyone."
          items={expertiseItems}
        />
        <ServiceUi
          title="my digital tool box."
          description="These are my go to tech stack to make any projects happen. I am always eager of learning more about my current stack, and new technologies that could expand my horizons."
          items={toolBoxItems}
        />
      </div>
    </section>
  );
}
