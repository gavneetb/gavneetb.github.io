import React from "react";
import meet_the_team from "../../res/images/meet_the_team.png";
import { Container, ImageGroup, Divider, Button } from "semantic-ui-react";
import {
  StyledTitle,
  StyledDescription,
  StyledHeader,
  StyledAboutContainer,
  StyledHeaderDiv,
  StyledExecContainer,
} from "./styles";
import Header from "../../components/Header/Header";
import FounderCard from "../../components/FounderCard/FounderCard";
import ExecCard from "../../components/ExecCard/ExecCard";
import matthew_zhu from "../../res/images/team/matthew_zhu.png";
import omar_khan from "../../res/images/team/omar_khan.png";
import annie_yuan from "../../res/images/team/annie_yuan.png";
import salma_marzouk from "../../res/images/team/salma_marzouk.png";
import jennifer_man from "../../res/images/team/jennifer_man.png";
// miguel arango
import abby_zinman from "../../res/images/team/abby_zinman.png";
import angela_zhang from "../../res/images/team/angela_zhang.png";
import pamela_wang from "../../res/images/team/pamela_wang.png";
import kiana_wong from "../../res/images/team/kiana_wong.png";
// hoang anh (andrea) ta
import julia_ling_smith from "../../res/images/team/julia_ling_smith.png";
import kate_bendall from "../../res/images/team/kate_bendall.png";
// sehaj raj singh
import soyeon_jang from "../../res/images/team/soyeon_jang.png";
import christine_lee from "../../res/images/team/christine_lee.png";
import leona_kuo from "../../res/images/team/leona_kuo.png";
import taneya_raguram from "../../res/images/team/taneya_raguram.png";
import ahmed_khalil from "../../res/images/team/ahmed_khalil.png";
import alan_pang from "../../res/images/team/alan_pang.png";
import mahnoor_fatima from "../../res/images/team/mahnoor_fatima.png";
import grace_ren from "../../res/images/team/grace_ren.png";
import filler from "../../res/images/team/filler.png";
import "./About.css";
const About = () => (
  <section>
    <StyledHeaderDiv
      style={{
        backgroundImage: `url(${meet_the_team})`,
        width: "100%",
        marginRight: "0px",
      }}>
      <Container
        text
        style={{
          color: "white",
          width: "100%",
          position: "relative",
          textAlign: "center",
        }}>
        <Header color="#450d09" height="815" />

        <StyledTitle>Meet the Team</StyledTitle>
        <StyledDescription>
          A group of curious students inspired by creativity.
        </StyledDescription>
      </Container>
    </StyledHeaderDiv>
    <StyledAboutContainer>
      <StyledHeader>Founders</StyledHeader>
      <FounderCard
        img={matthew_zhu}
        name="Matthew Zhu"
        position="Co-Chair"
        description="Matthew Zhu is a fourth year student in the Accounting and
                Financial Management program. He has been part of TEDxUW since
                2019 where he started as a partnership manager and lead
                accountant. As the Co-Chair and Licensee for TEDxUW 2021, he is
                excited to coordinate the team to deliver an engaging event that
                fosters ideas worth spreading."
        linkedin="https://www.linkedin.com/in/matthew-zhu-507653157/"
      />
      <FounderCard
        img={omar_khan}
        name="Omar Khan"
        position="Co-Chair"
        description="Omar Khan is a final year student in the Accounting and Financial Management program. He has been part of TEDxUW since 2020 where he started as a partnership manager. Given his experience of coordinating multiple events throughout his extracurricular involvement at the University of Waterloo and during his coop term at Junior Achievement Central Ontario, Omar is not new to delivering events that are engaging. Being the Co-Chair for TEDxUW 2021, he is excited to use his expertise to deliver yet another successful event."
        linkedin="https://www.linkedin.com/in/omarkhan28"
      />
    </StyledAboutContainer>
    <StyledExecContainer>
      <StyledHeader>Marketing</StyledHeader>
      <div
        class="ui grid"
        style={{
          marginTop: "10px",
          columnGap: "65px",
        }}>
        <div class="column" className="col_type1">
          <ExecCard
            img={salma_marzouk}
            name="Salma Marzouk"
            position="Director of Marketing"
            description="As someone who loves watching TED and TEDx talks, Salma is excited to lead the marketing team in reaching a wide audience for this year's TEDxUW conference. Salma is also excited to use her event planning skills to organize the best TEDxUW conference yet along with the rest of the team. Feel free to reach out to Salma if you have any questions about TEDxUW, marketing, or getting involved in UWaterloo!"
            linkedin="https://www.linkedin.com/in/salmamarzouk/"
          />
        </div>
        <div class="column" className="col_type1">
          <ExecCard
            img={abby_zinman}
            name="Abby Zinman"
            position="Content Manager"
            description="Abby is thrilled to be joining the TEDxUW team as a longtime lover of TED talks, and with a passion for publishing written and visual online content. Her goal is to deliver content that communicates the TEDxUW vision, which includes inspiring people and sharing unique ideas."
            linkedin="https://www.linkedin.com/in/abby-zinman-79212a1aa/"
          />
        </div>
        <div class="column" className="col_type1">
          <ExecCard
            img={angela_zhang}
            name="Angela Zhang"
            position="Web Manager"
            description="Angela is a 3A Computer Science student. Angela had a blast attending TEDxUW in 2018 and made some great memories :D She enjoyed listening to the speakers and attending various events and activities throughout the day. She found the day to be both very enjoyable and eye-opening."
            linkedin="https://www.linkedin.com/in/angela-zhang-uw/"
          />
        </div>
        <div class="column" className="col_type1">
          <ExecCard
            img={jennifer_man}
            name="Jennifer Man"
            position="Content Manager"
            description="Jennifer is a 4th year student in the Planning program and she has been a Graphic Designer for TEDxUW since 2020. She is excited to storytell this year's inspiring theme through innovative visualizations. Jennifer is excited to be part of a meaningful event that shares knowledge through storytelling, experiences and ideas."
            linkedin="https://www.linkedin.com/in/jenniferm0814/"
          />
        </div>
        <div class="column" className="col_type1">
          <ExecCard
            img={pamela_wang}
            name="Pamela Wang"
            position="Web Design Lead"
            description="Growing up, Pamela has always loved listening to TEDx talks so she was elated when TEDxUW reached out to me asking to be the web designer. She can’t wait to bring the TEDxUW experience to everyone digitally this year!"
            linkedin="https://www.linkedin.com/in/pamwang/"
          />
        </div>
        <div class="column" className="col_type1">
          <ExecCard
            img={filler}
            name="Miguel Arango"
            position="Social Media Manager"
            description="Miguel is a person who has always watched TEDx talks to learn about new subjects, understand things better, or learn about new paradoxes. He is thrilled to take on the social media manager role and propose better ideas and new ways to increase engagement with our social media platforms. Miguel is also motivated to use his analysis and organization skills to deliver and develop the best plans to up our social media platforms."
            linkedin="https://www.linkedin.com/in/miguel-andres-arango-361b311b6/"
          />
        </div>
      </div>

      <StyledHeader>Participant Experience</StyledHeader>
      <div
        class="ui grid"
        style={{
          marginTop: "10px",
          columnGap: "65px",
        }}>
        <div class="column" className="col_type1">
          <ExecCard
            img={soyeon_jang}
            name="Soyeon Jang"
            position="Participant Experience Director"
            description="Soyeon started off as a logistics manager in her first year and she is thrilled to have this opportunity to join the organizing team again for the second time! Another year dedicated to TEDxUW - we aim to make your TEDxUW experience an unforgettable one, so stay tuned."
            linkedin="https://www.linkedin.com/in/soyeon-j/"
          />
        </div>
        <div class="column" className="col_type1">
          <ExecCard
            img={christine_lee}
            name="Christine Lee"
            position="Production Manager"
            description="What Christine loves most about TEDxUW is the tight-knit community with a shared vision of continuous learning and inspiring others. As once an avid binger of TED talks, Christine is thrilled to join this year’s TEDxUW team, bringing many fun-filled activities to make this conference a memorable, worthwhile experience!"
            linkedin="https://www.linkedin.com/in/christineeunseolee/"
          />
        </div>
        <div class="column" className="col_type1">
          <ExecCard
            img={leona_kuo}
            name="Leona Kuo"
            position="Logistics Manager"
            description="Leona has been involved with TED since she was young, and she is so excited to join the team this year to help create a fantastic TEDxUW 2022 experience! Since her first year was completely online due to covid, she is particularly excited about this year’s theme."
            linkedin="https://www.linkedin.com/in/leona-kuo-7b8462157"
          />
        </div>
        <div class="column" className="col_type1">
          <ExecCard
            img={taneya_raguram}
            name="Taneya Raguram"
            position="Logistics Manager"
            description="From a young age, Taneya has always wanted to be a changemaker and TED talks have always inspired her to go out of her comfort zone. From the large variety of speakers to the countless topics discussed, TED events celebrate knowledge and spark innovation. As a member of TEDxUW she hopes to create events that empower and encourage others to do the same!"
            linkedin="https://www.linkedin.com/in/taneya-raguram-015b191a2/"
          />
        </div>
      </div>
      <StyledHeader>Speaker Relations</StyledHeader>
      <div
        class="ui grid"
        style={{
          marginTop: "10px",
          columnGap: "65px",
        }}>
        <div class="column" className="col_type1">
          <ExecCard
            img={kiana_wong}
            name="Kiana Wong"
            position="Director of Speaker Relations"
            description="Kiana is an Honours Science and incoming Pharmacy student. She has been heavily involved in public speaking, and is currently an instructor with a Royal Canadian Air Cadet Squadron where she runs the Effective Speaking team. As the Director of Speaker Relations, she looks forward to working closely with the speakers, and contributing her knowledge and skills when collaborating with the team. Kiana is extremely honoured to be a part of an organization where she can work with individuals in achieving a common goal: to share ideas worth spreading, and she looks forward to the upcoming TEDxUW event!"
          />
        </div>
        <div class="column" className="col_type1">
          <ExecCard
            img={kate_bendall}
            name="Kate Bendall"
            position="Speaker Relations Associate"
            description="When deciding how to begin her university experience, Kate first recognized all the different ways in which to learn from others whether it be in classes, extracurriculars or just a chat between friends. TEDxUW is the perfect opportunity to share ideas as a speaker and thrive in open mindedness as a participant. As a new member to both the UW community and the TEDxUW team, Kate is full of passion and ready to ensure an event filled with enlightening speakers. Join her in celebrating the eloquence and expanse of knowledge that TEDxUW highlights this February!"
            linkedin="www.linkedin.com/in/katebendall"
          />
        </div>
        <div class="column" className="col_type1">
          <ExecCard
            img={ahmed_khalil}
            name="Ahmed Khalil"
            position="Speaker Relations Associate"
            description="Ahmed Khalil is a huge sports enthusiast and fanatic. He hopes to travel to as many countries as possible in his lifetime. He joined TEDxUW because he loves learning about the ideas that people have and how powerful those ideas can be in changing the world. It is always inspiring for him to know that there is hope for the future with people’s brilliant ideas. TEDxUW is a great platform for speakers to spread their ideas and perspectives, and for a global audience to cultivate that ability to listen and be open. He is super excited for a great event this year!"
            linkedin="https://www.linkedin.com/in/ahmedek/"
          />
        </div>
        <div class="column" className="col_type1">
          <ExecCard
            img={julia_ling_smith}
            name="Julia-Ling Smith"
            position="Speaker Relations Associate"
            description="Julia is a 2A Accounting and Financial Management student who loves to learn, explore and travel. She is passionate about the opportunities that the TEDxUW conference provides to immerse yourself in an inclusive and fun idea space. This is her first year on the TEDxUW team and she cannot wait for the upcoming event this fall!"
            linkedin="https://www.linkedin.com/in/julia-ling-smith-58a61a1b5"
          />
        </div>
        <div class="column" className="col_type1">
          <ExecCard
            img={filler}
            name="Andrea Ta"
            position="Speaker Relations Associate"
            description="Andrea recently finished her 2B term majoring in Biology. Exploring the world, sharing knowledge and taking on challenges are some of the things that excite her. TEDxUW provides just that exhilaration, alongside great stories and innovative ideas. She can’t wait to see what this year has to offer!"
            linkedin="https://www.linkedin.com/in/andrea-ta-5060241b8/"
          />
        </div>
        <div class="column" className="col_type1">
          <ExecCard
            img={filler}
            name="Sehaj Raj Singh"
            position="Speaker Relation Associate"
            description="Sehaj is a second year Hons. Economics and Business student from India. He’s been into debating, Model UNs and public speaking from the past 6 years now and is greatly impressed by the concept of TED talks. He’s extremely grateful for this role because of the great networking and learning opportunities it has to offer. Apart from this, he’s a passionate ciniphile and photographer/filmmaker. He’s really excited for this year’s TEDx event and looks forward to bring up some fresh ideas."
            linkedin="https://www.linkedin.com/in/sehaj-raj-singh-8a286b192/"
          />
        </div>
      </div>
      <StyledHeader>Operations</StyledHeader>
      <div
        class="ui grid"
        style={{
          marginTop: "10px",
          columnGap: "65px",
        }}>
        <div class="column" className="col_type1">
          <ExecCard
            img={annie_yuan}
            name="Annie Yuan"
            position="Operations Director"
            description="Currently a fourth-year student in the Accounting and Financial Management program, Annie first became involved with TEDxUW in her second year as the Lead Accountant, helping to organize one of the largest in-person TEDx conferences. She is excited to be part of the team again and hopes to make the virtual conference this year a memorable one!"
            linkedin="https://www.linkedin.com/in/annieyuan/"
          />
        </div>
      </div>
      <StyledHeader>Finance</StyledHeader>
      <div
        class="ui grid"
        style={{
          marginTop: "10px",
          columnGap: "65px",
        }}>
        <div class="column" className="col_type1">
          <ExecCard
            img={mahnoor_fatima}
            name="Mahnoor Fatima"
            position="Partnership Manager"
            description="Mahnoor is a third-year student in the Health Sciences program pursuing a Pre-Clinical Specialization. As a partnership manager, Mahnoor will be networking with various organizations to gain sponsorships and initiate collaborations. In addition to that, she will be overlooking the budget for the year."
            linkedin="https://www.linkedin.com/in/mahnoor-fatima00/"
          />
        </div>
        <div class="column" className="col_type1">
          <ExecCard
            img={grace_ren}
            name="Grace Ren"
            position="Lead Accountant"
            description="Grace is a 2A Mathematics/CPA student and she is excited to join the talented TEDxUW team this year. It gives her a chance to contribute her professional knowledge and skills to help enhance the team performance, to organize conferences to share with other students the power of ideas and innovation, and to emphasize community interactions. She hopes to add values to the high-performing team to deliver a memorable experience to everyone this year."
            // linkedin="https://www.linkedin.com/"
          />
        </div>
        <div class="column" className="col_type1">
          <ExecCard
            img={alan_pang}
            name="Alan Pang"
            position="Finance Director"
            description="Alan Pang is a fourth year student in the Accounting and Financial Management program. Alan joined TEDxUW in 2019 as a Partnerships Manager, before becoming Finance Director in 2020. In his position, Alan will oversee all aspects of TEDxUW’s financial reporting process. He is very excited to be part of the TEDxUW team."
            linkedin="https://www.linkedin.com/in/alan-pang-2461aa15b/"
          />
        </div>
      </div>
    </StyledExecContainer>
  </section>
);

export default About;
