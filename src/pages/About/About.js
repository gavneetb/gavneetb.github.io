import React from "react";

import "./About.css";
import SectionMain from "../../components/SectionMain";
import mountainsBackground from "../../res/images/mountainsBackground.svg";
import TeamMemberCard from "../../components/TeamMemberCard";

import salma_marzouk from "../../res/images/team/salma_marzouk.svg";
import caitlin_kwan from "../../res/images/team/caitlin_kwan.svg";
import helen_wang from "../../res/images/team/helen_wang.svg";

import helena_lee from "../../res/images/team/helena_lee.svg";
import angel_lin from "../../res/images/team/angel_lin.svg";
import julia_fedorin from "../../res/images/team/julia_fedorin.svg";
import abby_zinman from "../../res/images/team/abby_zinman.svg";
import catherine_hoang from "../../res/images/team/catherine_hoang.svg";
import jennifer_man from "../../res/images/team/jennifer_man.svg";
import sasha_takoo from "../../res/images/team/sasha_takoo.svg";
import gavneet_bhandal from "../../res/images/team/gavneet_bhandal.svg";

import krysten_tran from "../../res/images/team/krysten_tran.svg";
import ellie_xu from "../../res/images/team/ellie_xu.svg";
import heidi_zhu from "../../res/images/team/heidi_zhu.svg";
import franklin_ramirez from "../../res/images/team/franklin_ramirez.svg";
import hoor_ulain_umar from "../../res/images/team/hoor_ulain_umar.svg";

import kate_bendall from "../../res/images/team/kate_bendall.svg";
import muktha_kaja from "../../res/images/team/muktha_kaja.svg";
import sandy_rbahia from "../../res/images/team/sandy_rbahia.svg";
import manavjit_singh_dhindsa from "../../res/images/team/manavjit_singh_dhindsa.svg";

import rawan_miznazi from "../../res/images/team/rawan_miznazi.svg";
import pranav_bedi from "../../res/images/team/pranav_bedi.svg";
import milind_kumar from "../../res/images/team/milind_kumar.svg";
import enoch_tin from "../../res/images/team/enoch_tin.svg";
import smiksha_sharma from "../../res/images/team/smiksha_sharma.svg";

function About() {
  return (
    <div>
      <SectionMain
        mainTitle={"Meet the Team"}
        subTitle={"Learn more about our 100% student-led team."}
        bgImg={mountainsBackground}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* CHAIRS SECTION */}
        <div style={{ width: "1200px" }}>
          <div
            class="aboutHeaders"
            style={{ textAlign: "left", margin: "25px" }}
          >
            Chairs, Operations & Finance
          </div>
          <div class="team-section">
            <div class="grid-container-odd">
              <div class="grid-item">
                <TeamMemberCard
                  name={"Salma Marzouk"}
                  linkedin={"https://www.linkedin.com/in/gavneetbhandal/"}
                  role={"Chair"}
                  profilePicture={salma_marzouk}
                />
              </div>
              <div class="grid-item">
                <TeamMemberCard
                  name={"Caitlin Kwan"}
                  role={"Directior of Internal Operations"}
                  profilePicture={caitlin_kwan}
                />
              </div>
              <div class="grid-item">
                <TeamMemberCard
                  name={"Helen Wang"}
                  role={"Director of Finance"}
                  profilePicture={helen_wang}
                />
              </div>
            </div>
          </div>
        </div>

        {/* MARKETING SECTION */}

        <div style={{ width: "1200px" }}>
          <div
            class="aboutHeaders"
            style={{ textAlign: "left", margin: "25px" }}
          >
            Marketing
          </div>
          <div class="team-section">
            <div class="grid-container-odd">
              <div class="grid-item">
                <TeamMemberCard
                  name={"Helena Lee"}
                  role={"Director of Marketing"}
                  profilePicture={helena_lee}
                />
              </div>
              <div class="grid-item">
                <TeamMemberCard
                  name={"Angel Lin"}
                  role={"Social Media Manager"}
                  profilePicture={angel_lin}
                />
              </div>
              <div class="grid-item">
                <TeamMemberCard
                  name={"Julia Fedorin"}
                  role={"PR & Content Manager"}
                  profilePicture={julia_fedorin}
                />
              </div>
            </div>
            <div class="grid-container-even">
              <div class="grid-item">
                <TeamMemberCard
                  name={"Abby Zinman"}
                  role={"Web Designer"}
                  profilePicture={abby_zinman}
                />
              </div>
              <div class="grid-item">
                <TeamMemberCard
                  name={"Catherine Hoang"}
                  role={"Web Designer"}
                  profilePicture={catherine_hoang}
                />
              </div>
            </div>
            <div class="grid-container-odd">
              <div class="grid-item">
                <TeamMemberCard
                  name={"Jennifer Man"}
                  role={"Senior Graphic Designer"}
                  profilePicture={jennifer_man}
                />
              </div>
              <div class="grid-item">
                <TeamMemberCard
                  name={"Sasha Takoo"}
                  role={"Graphic Designer"}
                  profilePicture={sasha_takoo}
                />
              </div>
              <div class="grid-item">
                <TeamMemberCard
                  name={"Gavneet Bhandal"}
                  role={"Web Developer"}
                  profilePicture={gavneet_bhandal}
                />
              </div>
            </div>
          </div>
        </div>

        {/* SPONSORSHIPS */}
        <div style={{ width: "1200px" }}>
          <div
            class="aboutHeaders"
            style={{ textAlign: "left", margin: "25px" }}
          >
            Sponsorships
          </div>
          <div class="team-section">
            <div class="grid-container-odd">
              <div class="grid-item">
                <TeamMemberCard
                  name={"Krysten Tran"}
                  role={"Director of Sponsorships"}
                  profilePicture={krysten_tran}
                />
              </div>
              <div class="grid-item">
                <TeamMemberCard
                  name={"Ellie Xu"}
                  role={"Sponsorships Manager"}
                  profilePicture={ellie_xu}
                />
              </div>
              <div class="grid-item">
                <TeamMemberCard
                  name={"Heidi Zhu"}
                  role={"Sponsorships Manager"}
                  profilePicture={heidi_zhu}
                />
              </div>
            </div>
            <div class="grid-container-even">
              <div class="grid-item">
                <TeamMemberCard
                  name={"Franklin Ramirez"}
                  role={"Sponsorships Manager"}
                  profilePicture={franklin_ramirez}
                />
              </div>
              <div class="grid-item">
                <TeamMemberCard
                  name={"Hoor Ulain Umar"}
                  role={"Sponsorships Manager"}
                  profilePicture={hoor_ulain_umar}
                />
              </div>
            </div>
          </div>
        </div>

        {/* SPEAKER RELATIONSHIPS */}
        <div style={{ width: "1200px" }}>
          <div
            class="aboutHeaders"
            style={{ textAlign: "left", margin: "25px" }}
          >
            Speaker Relations
          </div>
          <div class="team-section">
            <div class="grid-container-odd">
              <div class="grid-item">
                <TeamMemberCard
                  name={"Kate Bendall"}
                  role={"Director of Speaker Relations"}
                  profilePicture={kate_bendall}
                />
              </div>
              <div class="grid-item">
                <TeamMemberCard
                  name={"Muktha Kaja"}
                  role={"Speaker Relations Manager"}
                  profilePicture={muktha_kaja}
                />
              </div>
              <div class="grid-item">
                <TeamMemberCard
                  name={"Sandy Rbahia"}
                  role={"Speaker Relations Manager"}
                  profilePicture={sandy_rbahia}
                />
              </div>
            </div>
            <div class="grid-container-even">
              <div class="grid-item">
                <TeamMemberCard
                  name={"Manavjit Singh Dhindsa"}
                  role={"Speaker Relations Manager"}
                  profilePicture={manavjit_singh_dhindsa}
                />
              </div>
            </div>
          </div>
        </div>

        {/* LOGISTICS */}
        <div style={{ width: "1200px" }}>
          <div
            class="aboutHeaders"
            style={{ textAlign: "left", margin: "25px" }}
          >
            Logistics
          </div>
          <div class="team-section">
            <div class="grid-container-odd">
              <div class="grid-item">
                <TeamMemberCard
                  name={"Rawan Miznazi"}
                  role={"Director of Logistics"}
                  profilePicture={rawan_miznazi}
                />
              </div>
              <div class="grid-item">
                <TeamMemberCard
                  name={"Pranav Bedi"}
                  role={"Production Manager"}
                  profilePicture={pranav_bedi}
                />
              </div>
              <div class="grid-item">
                <TeamMemberCard
                  name={"Milind Kumar"}
                  role={"Logistics Manager"}
                  profilePicture={milind_kumar}
                />
              </div>
            </div>
            <div class="grid-container-even">
              <div class="grid-item">
                <TeamMemberCard
                  name={"Enoch Tin"}
                  role={"Logistics Manager"}
                  profilePicture={enoch_tin}
                />
              </div>
              <div class="grid-item">
                <TeamMemberCard
                  name={"Smiksha Sharma"}
                  role={"Logistics Manager"}
                  profilePicture={smiksha_sharma}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
