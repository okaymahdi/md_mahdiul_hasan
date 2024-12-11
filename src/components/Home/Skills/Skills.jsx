'use client'
import { SkillsData } from '@/assets/Data/Data'
import ProgressCicular from '@/components/Helper/ProgressCicular'
import { SectionHeading } from '@/components/Helper/SectionHeading'
import { Button } from '@/components/ui/Button'
import { useState } from 'react'

export const Skills = () => {
  const [showAllSkills, setShowAllSkills] = useState(false)

  const toggleShowAllSkills = () => {
    setShowAllSkills(!showAllSkills)
  }

  const displayedSkills = showAllSkills ? SkillsData : SkillsData.slice(0, 4)

  return (
    <section
      id="skills"
      className="container mx-auto px-4 md:px-8 my-4 md:my-12 pt-8 md:pt-12"
    >
      <SectionHeading>My Skills</SectionHeading>

      <div className="grid lg:hidden place-items-center grid-cols-2 sm:grid-cols-3 gap-8 mb-6">
        {displayedSkills.map((skill) => (
          <ProgressCicular
            key={skill.id}
            title={skill.title}
            percentage={skill.percentage}
            className="w-full h-full"
          />
        ))}
      </div>

      <div className="flex justify-center mt-12 lg:hidden">
        <Button variant="btn" onClick={toggleShowAllSkills}>
          {showAllSkills ? 'Show Less' : 'Show More'}
        </Button>
      </div>

      <div className="hidden lg:grid place-items-center grid-cols-4 gap-8 mb-6">
        {SkillsData.map((skill) => (
          <ProgressCicular
            key={skill.id}
            title={skill.title}
            percentage={skill.percentage}
            className="w-full h-full"
          />
        ))}
      </div>
    </section>
  )
}
