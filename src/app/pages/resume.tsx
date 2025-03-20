import Link from 'next/link'
import Experience from '../components/experience'

const resume = () => {
    return (
        <div>
            <p>This is an extended copy of my resume, if you'd like the abbreviated version, <Link href=''>click the download button</Link></p>
            <h1>Name</h1>
            <h2>Summary</h2>
            <p>I'm a software dev</p>
            <h2>Work Experience</h2>
            <Experience></Experience>
            <h2>Education</h2>
            <Experience></Experience>
            <h2>Skills</h2>
            <h3>languages</h3>
            <p>list of languages</p>
            <h3>technology</h3>
            <p>list of technologies</p>
            <h3>soft skills</h3>
            <p>list of soft skills</p>
            <button>Download a copy</button>
        </div>
    )
}

export default resume