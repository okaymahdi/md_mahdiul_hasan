import { Projects } from '@/components/Helper/Projects/Projects'
import { SectionHeading } from '@/components/Helper/SectionHeading'

export const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="container mx-auto px-4 md:px-8 my-4 md:my-12 pt-8 md:pt-12"
    >
      <SectionHeading>Portfolio</SectionHeading>
      <Projects />
    </section>
  )
}
