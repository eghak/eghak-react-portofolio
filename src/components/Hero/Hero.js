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
        Hi, I'm Egha! <br/>
        Welcome to my portofolio.
      </SectionTitle>
      <SectionText>
      I am a Full Stack Web Developer based in Phoenix, AZ, with a strong passion for creating websites and applications from start to finish. I am dedicated to developing innovative solutions that benefit the community. I approach my projects with genuine enthusiasm, implementing creative ideas to make a positive impact. I strive for excellence in every project I take on.
      </SectionText>
      <Button onClick={() => window.open("https://docs.google.com/document/d/1ZQ1_HS95IO0BIo5HMujOzZNvS7xcb_ZSvJfOsrhJ2sg/edit")}>My Live Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;