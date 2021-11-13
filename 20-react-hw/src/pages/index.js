import Projects from '../components/Projects/Projects';
import AboutMe from '../components/About Me/About';
import Contact from '../components/Contact Me/contact';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

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
