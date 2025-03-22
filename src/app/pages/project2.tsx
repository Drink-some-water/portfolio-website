
import Image from 'next/image';
import BaseProject from '../../baseProject';

class Project2 extends BaseProject {
  constructor() {
    super(
      'My Project',
      'This is a description of my project. It does XYZ.',
      ['/two.jpg'],
      'project2'
    );
  }

  render() {
    return (
      <div>
        <h1>{this.title}</h1>
        {this.images.map((src, index) => (
          <Image key={index} src={src} alt={`Image ${index + 1}`} width={500} height={300} />
        ))}
        <p>{this.description}</p>
      </div>
    );
  }
}

export const project2 = new Project2();
