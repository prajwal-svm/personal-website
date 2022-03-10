import Head from 'next/head'
import Container from '../components/Container'
import Home from '../components/Home'
import AboutMe from '../components/AboutMe'
import Experience from '../components/Experience'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Index() {
  return (
    <Container>
      <Head>
        <title>Home - Prajwal S Venkatesh</title>
      </Head>
      <Home />
      <AboutMe sectionIndex={1} id="about" sectionTitle="About Me" />
      <Experience sectionIndex={2} id="experience" sectionTitle="Where I've Worked" />
      <Work sectionIndex={3} id="work" sectionTitle="Some Things I've Built" />
      <Contact sectionIndex={4} id="contact" sectionTitle="Get In Touch" />
      <Footer />
    </Container >
  )
}
