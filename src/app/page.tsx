import Image from 'next/image'
import Socials from './components/socials'
import ProjectsSection from './components/projectsSection'


export default function Page() {
  return <div>
    <div id='hero section'>
      <h1>Hero Quote</h1>
      <h2>First Last name</h2>
      <Image
        src="/portrait.jpg"
        alt="A professional portrait of Sean Collins"
        width={100}
        height={100}
      />
    </div>
    <Socials/>
    <div id='about'>
      <h3>About me:</h3>
      <p>Some information about me</p>
    </div>
    <div>
      <ProjectsSection/>
    </div>
  </div>
};