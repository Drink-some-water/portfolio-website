// pages/projects/[slug].tsx
import { useRouter } from 'next/router';
import { projectList } from './';

const ProjectPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const project = projectList.find((p) => p.slug === slug);

  if (!project) return <p>Project not found</p>;

  return project.render();
};

export default ProjectPage;
