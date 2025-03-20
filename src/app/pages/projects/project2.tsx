import Image from 'next/image';

 const Project2 = () => {
  return (
    <div>
      <h1>Project number 2</h1>
      <Image src="/two.jpg" alt="Project Image" width={500} height={300} />
      <p>This is a description of my project. It does XYZ.</p>
    </div>
  );
};

export default Project2

export const ProjectData = {
  title: 'My Project',
  description: 'This is a description of my project. It does XYZ.',
  image: '/two.jpg',
  slug: 'project2',
};
