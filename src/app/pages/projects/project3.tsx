import Image from 'next/image';

const Project3 = () => {
  return (
    <div>
      <h1>Project number 1</h1>
      <Image src="/three.jpg" alt="Project Image" width={500} height={300} />
      <p>This is a description of my project. It does XYZ.</p>
    </div>
  );
};
export default Project3
export const ProjectData = {
  title: 'My Project',
  description: 'This is a description of my project. It does XYZ.',
  image: '/three.jpg',
  slug: 'project3',
};
