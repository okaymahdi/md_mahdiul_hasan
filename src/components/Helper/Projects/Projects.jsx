'use client'
import { PortfolioCard } from '@/components/Home/Portfolio/PortfolioCard'
import { Button } from '@/components/ui/Button'
import { ProjectsData } from '@/utils/ProjectsDB'

import { useState } from 'react'

export const Projects = () => {
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? ProjectsData : ProjectsData.slice(0, 6)
  return (
    <>
      <section className="grid place-items-center grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {displayedProjects.map((project, id) => (
          <PortfolioCard key={id} project={project} />
        ))}
      </section>

      {ProjectsData.length > 6 && (
        <div className="flex justify-center mt-8">
          <Button
            variant="btn"
            onClick={() => setShowAll(!showAll)}
            className="btn btn-primary"
          >
            {showAll ? `Show Less` : `Show More`}
          </Button>
        </div>
      )}
    </>
  )
}
