import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
<Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
    <li>
        <Link href="#about">
          <NavLink>About Me</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>     
      <li>
        <Link href="#contact">
          <NavLink>Contact Me</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#resume">
          <NavLink>Resume</NavLink>
        </Link>
      </li>            
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/kweinerman">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/kurt-weinerman-1a1457113/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/kweinski/?hl=en">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
