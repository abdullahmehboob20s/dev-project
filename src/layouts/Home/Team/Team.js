import TitleBar from "components/Bars/TitleBar/TitleBar";
import Button from "components/Buttons/Button/Button";
import React from "react";
import styles from "./Team.module.css";

import teamMember1 from "assets/images/team-member-1.png";
import teamMember2 from "assets/images/team-member-2.png";
import teamMember3 from "assets/images/team-member-3.png";
import teamMember4 from "assets/images/team-member-4.png";
import teamMember5 from "assets/images/team-member-5.png";
import teamMember6 from "assets/images/team-member-6.png";

function Team() {
  return (
    <div className={styles.teamWrapper}>
      <div className="container-wrapper-2 py-100px">
        <div className={styles.team}>
          <div className={styles.team_left}>
            <div className="mb-15px">
              <div className="mb-10px">
                <TitleBar title="teams" isCenter={false} variantNumber={2} />
              </div>
              <p className="fs-38px light-brown weight-6 lh-1">Meet Our Team</p>
            </div>

            <p className="fs-18px gray mb-50px">
              For each project we establish relationships with partners who we
              know will help us create added value for your project. As well as
              bringing together the public and private sectors, we make
              sector-overarching links to gather knowledge.
            </p>

            <Button bgVariant="btn-brown" title="view all members" />
          </div>
          <div className={styles.team_right}>
            <img src={teamMember1} alt="" />
            <img src={teamMember2} alt="" />
            <img src={teamMember3} alt="" />
            <img src={teamMember4} alt="" />
            <img src={teamMember5} alt="" />
            <img src={teamMember6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
