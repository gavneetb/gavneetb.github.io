import React from "react";
import BlogComponent from "./BlogComponent";
import imprint from "../../res/images/sponsors/imprint.svg";

import Header from "../../components/Header/Header";
import SectionMain from "../../components/SectionMain";
import mountainsBackground from "../../res/images/mountainsBackground.svg";
import blogimage1 from "../../res/images/blog/blogimage1.svg";
import blogimage2 from "../../res/images/blog/blogimage2.svg";
import blogimage3 from "../../res/images/blog/blogimage3.svg";
import blogimage4 from "../../res/images/blog/blogimage4.svg";
import blogimage5 from "../../res/images/blog/blogimage5.svg";

export default function Blog() {
  return (
    <>
      <Header />
      <SectionMain
        mainTitle="Blog"
        subTitle="Check out our articles here."
        bgImg={mountainsBackground}
      />
      <div className="main-container">
        <BlogComponent
          src={blogimage1}
          mainCaption="TEDx Talks You Should Binge-Watch Instead of Netflix One Evening"
          subCaption="4 minute read — June 1, 2023"
          link="https://medium.com/@tedxuw/tedx-talks-you-should-binge-watch-instead-of-netflix-one-evening-3f8e89d0fe63"
          large
        />
        <div className="row">
          <BlogComponent
            src={blogimage2}
            mainCaption="Who Should You Nominate To Become A TEDxUW Speaker?"
            subCaption="4 minute read — August 12, 2021"
            link="https://medium.com/@tedxuw/who-should-you-nominate-to-become-a-tedxuw-speaker-bf253ae5f85a"
          />
          <BlogComponent
            src={blogimage3}
            mainCaption="5 Reasons To Attend TEDxUW"
            subCaption="3 minute read — February 8, 2022"
            link="https://medium.com/@tedxuw/5-reasons-to-attend-tedxuw-56f16d8f3e5a"
          />
        </div>
        <div className="row">
          <BlogComponent
            src={blogimage4}
            mainCaption="3 Benefits of Being a TEDx Speaker"
            subCaption="3 minute read — September 15, 2021"
            link="https://medium.com/@tedxuw/3-benefits-of-being-a-tedx-speaker-9bea3e63846e"
          />
          <BlogComponent
            src={blogimage5}
            mainCaption="3 Reasons Why You Should Apply to Become a Speaker at TEDxUW"
            subCaption="3 minute read — May 1, 2019"
            link="https://medium.com/@tedxuw/3-reasons-why-you-should-apply-to-become-a-speaker-at-tedxuw-68d73674ff08"
          />
        </div>
      </div>
    </>
  );
}
