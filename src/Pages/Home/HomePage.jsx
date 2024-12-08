import { About } from '@/components/Home/About/About'
import { Hero } from '@/components/Home/Hero/Hero'
import { Skills } from '@/components/Home/Skills/Skills'

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
    </div>
  )
}
