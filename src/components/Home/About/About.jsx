import { AboutInfo } from '@/assets/Data/Data'
import { SectionHeading } from '@/components/Helper/SectionHeading'

export const About = () => {
  return (
    <section
      id="about"
      className="container mx-auto px-4 md:px-8 my-4 md:my-12 pt-8 md:pt-12"
    >
      <SectionHeading>About Me</SectionHeading>
      <h2 className="text-lg md:text-sl font-semibold">{AboutInfo.title}</h2>
      <p className="text-sm md:text-lg font-light text-justify indent-6 mt-4 md:mt-8">
        {AboutInfo.description}
      </p>
    </section>
  )
}
