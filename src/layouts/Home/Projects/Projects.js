import TitleBarSideBySide from "components/Bars/TitleBarSideBySide/TitleBarSideBySide";
import ProjectCard from "components/Cards/ProjectCard/ProjectCard";
import React from "react";
import styles from "./Projects.module.css";
import projectImg1 from "assets/images/project-img-1.png";
import projectImg2 from "assets/images/project-img-2.png";
import projectImg3 from "assets/images/project-img-3.png";
import projectImg4 from "assets/images/project-img-4.png";
import useMediaQuery from "utils/hooks/useMediaQuery ";

function Projects() {
  const isBellowSeven100 = useMediaQuery("(max-width: 700px)");

  return (
    <div>
      <div className={isBellowSeven100 ? "mb-20px" : `mb-70px`}>
        <div className="container-wrapper-2 ">
          <TitleBarSideBySide
            isCenter={isBellowSeven100 ? true : ""}
            variantNumber={isBellowSeven100 ? 0 : 2}
            tag="Latest Works"
            title="Our Recent Complete the Projects"
            desc={
              isBellowSeven100
                ? ""
                : `For each project we establish relationships with partners who we know will help us create added value for your project. As well as bringing together the public and private sectors, we make sector-overarching links to gather knowledge.`
            }
          />
        </div>
      </div>

      <div className={styles.cards}>
        <ProjectCard
          img={projectImg1}
          title="Triangle Concrete House On lake"
          link="/"
        />
        <ProjectCard
          img={projectImg2}
          title="Triangle Concrete House On lake"
          link="/"
          desc={true}
        />
        <ProjectCard
          img={projectImg3}
          title="Triangle Concrete House On lake"
          link="/"
        />
        <ProjectCard
          img={projectImg4}
          title="Triangle Concrete House On lake"
          link="/"
        />
      </div>
    </div>
  );
}

export default Projects;
