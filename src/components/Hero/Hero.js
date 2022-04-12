import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Shakti. Welcome to My Portfolio
      </SectionTitle>
      <SectionText>
        I'm a web developer from Dallas, TX. I enjoy building everything from
        small landing pages to rich interactive web apps. When I'm not
        click-clacking away at a new snippet of code, you'll find me enjoying
        walks with my dog Mac, checking out local breweries, playing chess or
        looking for new local tacos spots. I'm always open to any new
        opportunity. Please take a look at my resume and my development
        projects, as well as my GitHub and LinkedIn.
      </SectionText>
      <Button
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1yicIi3zhjcpWVhNhRLAKMDoeOv60BLFS/view?usp=sharing"
          )
        }
      >
        Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
