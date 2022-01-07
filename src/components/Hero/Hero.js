import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { portrait } from '../../constants/constants';


const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      {portrait.map((item) => (
      <img src={item.img} style={{width:"30%", borderRadius:"150px"}}/>
      ))}
      <SectionTitle main center>
        Hello, I'm Egha! <br/>
        Welcome to my portofolio.
      </SectionTitle>
      <SectionText>
      I am a FULL STACK WEB DEVELOPER living in Phoenix, AZ. I enjoy designing, coding, and developing websites and apps from scratch. I love exploring ideas that can give a good impact on the community, and implement them in my programming projects. I love what I'm doing!
      </SectionText>
      <Button onClick={() => window.open("https://docs.google.com/document/d/1ZQ1_HS95IO0BIo5HMujOzZNvS7xcb_ZSvJfOsrhJ2sg/edit")}>My Live Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;