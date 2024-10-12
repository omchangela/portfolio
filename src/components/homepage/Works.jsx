import ibgroup from "/src/assets/images/ib-group-desktop.webp";
import memento from "/src/assets/images/memento-desktop.webp";
import acc from "/src/assets/images/acc-square.webp";
import sunnyside from "/src/assets/images/sunnyside-desktop.webp";
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
            link="https://www.mlvignite.com"
            img={ibgroup}
            alt="Mam La Viet Ignite"
            name="Mam La Viet Ignite website"
            type="Website Development • Frontend Development"
            year="2024"
            tools="HTML • TailwindCSS • JavaScript • React"

          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://www.entuitiveengineering.com.au"
            img={memento}
            alt="Entuitive Engineering"
            name="Entuitive Engineering Website"
            type="Website Development • Frontend Development"
            year="2023"
            tools="HTML • TailwindCSS • JavaScript • React"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://www.sogaiart.com"
            img={acc}
            alt="SOGAI™"
            name="SOGAI™ Website"
            type="Web Design • Frontend Development"
            year="2023"
            tools="HTML • CSS • JavaScript"
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
        <Projects
            link="https://www.bluebrown.vc"
            img={sunnyside}
            alt="BlueBrown"
            name="BlueBrown Website"
            type="Frontend Development"
            year="2023"
            tools="HTML • TailwindCSS • JavaScript"
          />
         
        </div>
      </div>
    </section>
  );
}
