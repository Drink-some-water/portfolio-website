// components/ProjectsSection.tsx
import Link from 'next/link';
import Image from 'next/image';
import projectMetadata from '../projectMetadata.json'

const ProjectsSection = () => {
  return (
    <div id="projectList">
      {projectMetadata.map((project) => (
        <div id='projectCard' key={project.slug}>
          <Link href={`/pages/projects/${project.slug}`} >
            <Image src={project.imageUrls[0]} alt={project.accessibility} width={100} height={100}></Image>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;
