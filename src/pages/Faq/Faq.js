import React from "react";
import {
  StyledTitle,
  StyledDescription,
  StyledMoreQuestionsDiv,
  StyledFAQContainer,
  StyledDivider,
} from "./styles";
import { Divider, Container } from "semantic-ui-react";
import Accordion from "../../components/Accordion/Accordion";
import Header from "../../components/Header/Header";

const Faq = () => (
  <section>
    <Header color="black" />
    <StyledDivider />
    <StyledTitle>Frequently Asked Questions</StyledTitle>
    <StyledFAQContainer>
      <Accordion
        title="When and where is TEDxUW happening?"
        content="
        <p>The event date is TBD and will happen virtually via Zoom in light of the pandemic and public health measures. Please check our website again soon to get your free ticket! We hope to see you there!</p>
        "
      />
      <Accordion
        title="What’s the event breakdown of TEDxUW?"
        content="<p>TEDx conferences typically have a theme in place and our theme for this year’s conference is 2020 Vision. Our phenomenal speakers will be exploring the theme within an eclectic range of frameworks and the day is going to be completely reflective of the theme. 
      <br/>
      <br/>
      The schedule for the day is in the works at the moment but will be published on our website closer to the time! Keep checking the website and our social media accounts for a full break-down of events!</p>
      "
      />
      <Accordion
        title="How can I apply to speak at TEDxUW?"
        content="<p>
      Every year, we have a speaker nomination process in place where you can nominate either yourself or somebody you think would make a great TEDx speaker. The deadline for this year’s speaker nomination process has passed; please stay tuned for future speaker nominations.
      </p>"
      />
      <Accordion
        title="How can I attend TEDxUW?"
        content="<p>
      The registration form will be made available closer to the event date on our website and social media accounts, so please check again soon.
      </p>"
      />
      <Accordion
        title="Is there a fee to attend TEDxUW?"
        content="<p>
      No, attending TEDxUW is completely free this year! 
      </p>"
      />
      <Accordion
        title="What if my internet stops working during TEDxUW?"
        content="<p>
      Rest assured that all TEDxUW will be posted on the TEDx YouTube page for you to enjoy after the event.
      </p>"
      />
      <Accordion
        title="How can I receive your news and announcements?"
        content="<p>
      Sign up for our newsletter! We’ll keep you in the loop about what’s going on. If you attend the event this year, you’ll be added to our mailing list as well, so you’ll hear future announcements and general correspondence from us. We’re also active on social media; stay in touch and send us a message!
      </p>"
      />
      <Accordion
        title="I really want to get involved with TEDxUW! How can I be a part of the movement?"
        content="<p>
      We love having new people join our TEDxUW family of change-makers and we have plenty of opportunities for you to get involved. You can be a part of the movement in many ways:
      <ul>
      <li>Apply to be a speaker or nominate a potential speaker</li>
      <li>Applying to join our core team</li>
      <li>Being one of our powerhouse volunteers (our greatest pride!)</li>
      <li>Be our lens to the world and cover our event as a media partner</li>
      <li>Partner with us as an organization, club, or individual</li>
      <li>Be a sponsor</li>
      </ul>
      </p>"
        special_text="<p>
      If you want to get involved, email us at <a href='mailto:partnership@tedxuw.com' style={{color:'red'}}>partnership@tedxuw.com</a> and we can help you out! 
      </p>"
      />
    </StyledFAQContainer>
    <StyledMoreQuestionsDiv>
      <StyledDescription>
        <span style={{ fontWeight: "800" }}>More questions?</span> Contact us at{" "}
        <span>
          <a href="mailto:partnership@tedxuw.com" style={{ color: "red" }}>
            partnership@tedxuw.com
          </a>
        </span>{" "}
        or on social media; we’re happy to answer your questions!
      </StyledDescription>
    </StyledMoreQuestionsDiv>
  </section>
);

export default Faq;
