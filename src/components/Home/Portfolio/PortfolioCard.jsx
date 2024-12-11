import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'

export const PortfolioCard = ({ project }) => {
  console.log(project)
  return (
    <div className="p-4 cursor-pointer border-2 border-border bg__custom hover:border-ring rounded-2xl transition-all duration-300 delay-300 ease-in-out">
      <div className="relative w-full rounded-lg overflow-hidden mb-4 aspect-[16/9]">
        <Image
          src={project.image}
          alt={project.title}
          fill={true}
          className="object-cover object-center"
        />
      </div>
      <h2 className="mt-4 text-xl font-fontSecondary text-secondary-foreground font-bold text-center">
        {project.title}
      </h2>
      <p className="mt-2 text-sm text-center font-light">
        {project.description}
      </p>

      <div className="flex gap-4 justify-center mt-4">
        <Link href={project.livePreview} target="_blank">
          <Button variant="default">Live Preview</Button>
        </Link>
        <Link href={project.githubLink} target="_blank">
          <Button variant="default">Check on GitHub</Button>
        </Link>
      </div>
    </div>
  )
}
