import React from "react";
import { GrDocker } from "react-icons/gr";
import {
  DiReact,
  DiMongodb,
  DiHtml5,
  DiNodejs,
  DiCss3,
  DiJavascript1,
  DiBootstrap,
  DiGit,
  DiHeroku,
} from "react-icons/di";
import {
  SiPostgresql,
  SiFirebase,
  SiFlask,
  SiPostman,
  SiNetlify,
  SiFigma,
} from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Span } from "../Header/HeaderStyles";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <br />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      Both Front End and Back End.
    </SectionText>
    <List>
      <ListItem>
        <Span>
          <DiJavascript1 size="3rem" />
          <DiReact size="3rem" />
          <DiHtml5 size="3rem" />
          <DiCss3 size="3rem" />
          <DiBootstrap size="3rem" />
        </Span>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Front End technologies such as Javascript, React.js, HTML5, CSS and
            Bootstrap.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <Span>
          <DiNodejs size="3rem" />
          <SiFlask size="2.4rem" />
          <SiFirebase size="2.4rem" />
          <DiMongodb size="3rem" />
          <SiPostgresql size="2.4rem" />
        </Span>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Back End technologies such as Node.js, Flask and databases like
            Firebase, MongoDb, PostgresQL.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <Span>
          <DiGit size="3rem" />
          <GrDocker size="2.4rem" />
          <SiPostman size="2.4rem" />
          <SiFigma size="2.4rem" />
          <DiHeroku size="3rem" />
          <SiNetlify size="2.4rem" />
        </Span>
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools such as Git, Docker, Postman, DBeaver, Figma, Heroku and
            Netlify.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
