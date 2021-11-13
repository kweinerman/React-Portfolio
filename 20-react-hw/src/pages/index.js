import React, { Component } from 'react';
import Projects from '../components/Projects/Projects';
import AboutMe from '../components/Projects/About Me/About';
import Contact from '../components/Projects/Contact Me/contact';
import { Layout } from '../layout/Layout';

const Home = () => {
  return (
    <Layout>
      <AboutMe />
      <Projects />
      <Contact />
    </Layout>
  );
};

export default Home;
