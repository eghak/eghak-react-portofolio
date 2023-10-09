import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { SiJest } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
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
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
    </SectionText>

    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            React JS <br />
            HTML <br />
            CSS <br />
            JavaScript <br />
            Axios <br />
            Material-UI <br />
            WordPress
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Node JS <br />
            Express <br />
            SQL <br />
            PostgreSQL <br />
            MySQL <br />
            Sequalize <br />
            Massive <br />
            Postman
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Figma <br />
            Material-UI
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <SiJest size="3rem" />
        <ListContainer>
          <ListTitle>QA</ListTitle>
          <ListParagraph>
            Jest <br />
            Trello
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <CgWebsite size="3rem" />
        <ListContainer>
          <ListTitle>Deployment</ListTitle>
          <ListParagraph>
            Heroku <br />
            Netlify <br />
            Render
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
