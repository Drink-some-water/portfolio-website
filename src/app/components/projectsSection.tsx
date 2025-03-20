import Link from 'next/link';
import Image from 'next/image';
import { ProjectData as project1} from '../pages/projects/project1';
import { ProjectData as project2} from '../pages/projects/project2';
import { ProjectData as project3} from '../pages/projects/project3';

const projectList = [project1, project2, project3];

const ProjectsSection = () => {
  return (
    <div id="projectList">
    {projectList.map((project) => {
      return <Link key={project.slug} href={`/projects/${project.slug}`}>
        <div id='projectCard'>
        <Image src={project.image} alt={project.title} width={300} height={200}/>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        </div>
      </Link>
    })}
    </div>
  );
};

export default ProjectsSection;
