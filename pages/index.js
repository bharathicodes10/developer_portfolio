import Head from 'next/head'
import About from '../components/About'
import CodeProfile from '../components/CodeProfile'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Research from '../components/Research'
import { ThemeContext } from './ThemeContext'
//import navlogo from './bplogo-r.png'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bharathi | FullStack Developer </title>
        <meta name="description" content="I’m a web developer specializing in building full stack applications" />
      </Head>
    <Main />
    <About />
    <CodeProfile/>
    <Research />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
