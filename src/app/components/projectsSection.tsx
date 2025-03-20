// components/ProjectsSection.tsx
import Link from 'next/link';
import Image from 'next/image';
import { projectList } from '../pages/projects';

const ProjectsSection = () => {
  return (
    <div id="projectList">
      {projectList.map((project) => (
        <Link key={project.slug} href={`/projects/${project.slug}`}>
          <div id="projectCard">
            <Image src={project.images[0]} alt={project.title} width={300} height={200} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectsSection;
