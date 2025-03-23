import projectMetadata from '../../../projectMetadata.json'
import Image from 'next/image'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  
  // Find the project that matches the slug
  const project = projectMetadata.find(p => p.slug === slug)

  if (!project) {
    return <div>Project not found</div> // If no matching project is found
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>{project.fullDescription}</p>
      <div>
        <h3>Images:</h3>
        {project.imageUrls.map((imageUrl, index) => (
          <Image key={index} src={imageUrl} alt={project.title} />
        ))}
      </div>
      <p>Accessibility: {project.accessibility}</p>
    </div>
  )
}
