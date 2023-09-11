import React from "react";
import BlogComponent from "./BlogComponent";
import imprint from "../../res/images/sponsors/imprint.svg";

import Header from "../../components/Header/Header";
import SectionMain from "../../components/SectionMain";
import mountainsBackground from "../../res/images/mountainsBackground.svg";
import blogimage1 from "../../res/images/blog/blogimage1.svg";
import blogupdate1 from "../../res/images/blog/blogupdate1.svg";
import blogupdate2 from "../../res/images/blog/blogupdate2.svg";
import blogupdate3 from "../../res/images/blog/blogupdate3.svg";
import blogupdate4 from "../../res/images/blog/blogupdate4.svg";

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
          src={blogupdate1}
          mainCaption="TED vs TEDx Talks"
          subCaption="3 minute read — July 20, 2023"
          link="https://medium.com/@tedxuw/ted-vs-tedx-talks-263958555de5"
          large
        />
        <div className="row">
          <BlogComponent
            src={blogupdate2}
            mainCaption="Why TEDx Talks?"
            subCaption="4 minute read — June 27, 2023"
            link="https://medium.com/@tedxuw/why-tedx-talks-bada1712804"
          />
          <BlogComponent
            src={blogimage1}
            mainCaption="TEDx Talks You Should Binge-Watch Instead of Netflix One Evening"
            subCaption="4 minute read — June 1, 2023"
            link="https://medium.com/@tedxuw/tedx-talks-you-should-binge-watch-instead-of-netflix-one-evening-3f8e89d0fe63"
          />
        </div>
        <div className="row">
          <BlogComponent
            src={blogupdate3}
            mainCaption="5 Reasons To Attend TEDxUW"
            subCaption="3 minute read — February 8, 2022"
            link="https://medium.com/@tedxuw/5-reasons-to-attend-tedxuw-56f16d8f3e5a"
          />
          <BlogComponent
            src={blogupdate4}
            mainCaption="3 Benefits of Being a TEDx Speaker"
            subCaption="3 minute read — September 15, 2021"
            link="https://medium.com/@tedxuw/3-benefits-of-being-a-tedx-speaker-9bea3e63846e"
          />
        </div>
      </div>
    </>
  );
}
