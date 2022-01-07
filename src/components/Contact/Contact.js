import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./ContactStyles";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Footer = () => {
  return (
    <Section id="contact">
      <SectionDivider />
      <br />
      <SectionTitle>Contact</SectionTitle>
      <br />

      <AiOutlineMail />
      <SectionText>
        <LinkItem href="mailto:eghakusuma1@gmail.com">
          eghakusuma1@gmail.com
        </LinkItem>

        <SocialIconsContainer>
          <SocialIcons href="https://github.com/eghak" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/eghakusuma/"
            target="_blank"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialIconsContainer>
      </SectionText>
    </Section>
  );
};

export default Footer;
