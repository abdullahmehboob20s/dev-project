import React from "react";
import styles from "./DynamicTeam.module.css";
import dynamicTeamImg from "assets/images/dynamic-team-img.png";
import TitleBar from "components/Bars/TitleBar/TitleBar";
import AgencyCard from "components/Cards/AgencyCard/AgencyCard";
import missionIcon from "assets/images/mission-icon.png";
import leadershipIcon from "assets/images/leadership-icon.png";
import visionIcon from "assets/images/vision-icon.png";

function DynamicTeam() {
  return (
    <div className={`container-wrapper-2`}>
      <div className={`${styles.section} mb-40px`}>
        <div className={styles.section_left}>
          <img src={dynamicTeamImg} className="w-full" alt="" />
        </div>
        <div className={styles.section_right}>
          <div className="mb-10px">
            <TitleBar title="About us" isCenter={false} variantNumber={2} />
          </div>
          <p className="fs-38px light-brown weight-6 mb-15px lh-1_1">
            We Are Dynamic Team & Business Agency
          </p>

          <img
            src={dynamicTeamImg}
            className={`${styles.dynamic_title} w-full`}
            alt=""
          />

          <p className="fs-18px weight-4 gray">
            Hand selected, local experienced agents, and neighborhood
            specialists, work with you to achieve your goals. The highest level
            of market knowledge, transparency, technology utilization, and
            transaction experience.
          </p>
        </div>
      </div>

      <div className={styles.agency_cards}>
        <AgencyCard
          icon={missionIcon}
          title="Our Mission"
          desc="Our mission is to provide an end to end investment opportunity to everyone with the ultimate solution from a process of buying land, design and sale which turn up with great ROI."
        />
        <AgencyCard
          icon={leadershipIcon}
          title="Our Leadership"
          desc="Our leaders share a guarantee to our excessive approach to financing, hands-on value creation and practices that have a positive impact on our societies."
        />
        <AgencyCard
          icon={visionIcon}
          title="Our Vision"
          desc="Prime Developers is dedicated to shaping unique and state-of-art architecture that go beyond and above the standard human experience which delivers flexibility to lifestyle with excessive financial freedom."
        />
      </div>
    </div>
  );
}

export default DynamicTeam;
