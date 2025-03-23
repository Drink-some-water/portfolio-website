import Link from 'next/link'
import Experience from '../../components/experience'

const resume = () => {
    return (
        <div>
            <Link href='/Sean Collins Software Engineer and AI Trainer 2025.pdf'><button>Download a copy</button> </Link>
            <h2>Summary</h2>
            <p>I'm a software dev</p>
            <h2>Work Experience</h2>
            <Experience></Experience>
            <h2>Education</h2>
            <Experience></Experience>
            <h2>Skills</h2>
            <div id='skillsLinkToProjects'>
            <h3>languages</h3>
            <p><Link href='/projects/project1'>C++</Link><Link href=''>Python</Link></p>
            <h3>technology</h3>
            <p>list of technologies</p>
            <h3>soft skills</h3>
            <p>list of soft skills</p>
            </div>
            
        </div>
    )
}

export default resume