import { BaseInfo } from '@/assets/Data/Data'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'
import Link from 'next/link'

export const Hero = () => {
  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-8 px-4 md:px-8 mt-24 md:mt-28">
      <div className="flex flex-col order-2 md:order-1 gap-6 md:gap-8 md:justify-self-start">
        <div className="flex flex-col space-y-4">
          <span className="text-lg font-semibold uppercase">
            Hello, My Name is
          </span>
          <h1 className=" text-3xl md:text-6xl uppercase font-semibold font-fontSecondary">
            {BaseInfo.name}
          </h1>
          <h2 className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent text-lg md:text-xl font-semibold uppercase">
            {BaseInfo.position}
          </h2>
          <p className="text-base font-light text-justify text-popover-foreground">
            ` I am a{' '}
            <strong className="font-semibold ">
              Junior Front-End Web Developer
            </strong>{' '}
            based in
            <strong className="font-semibold">
              {' '}
              Faridpur District, Dhaka Division, Bangladesh.
            </strong>{' '}
            I specialize in modern web development technologies such as HTML5,
            CSS3, TailwindCSS, Bootstrap, Sass, JavaScript, and frameworks like
            React.js and Next.js. My backend expertise includes Node.js,
            Express.js, Firebase, and MongoDB. `
          </p>
        </div>

        <Link href="#">
          <Button variant="btn" style={{ backgroundSize: '200% auto' }}>
            {' '}
            Download CV
          </Button>
        </Link>
      </div>
      <div className="relative order-1 md:order-2 justify-self-center mb-16 md:mb-0  md:mt-0 before:content-[''] before:bg-accent before:w-[85%] md:before:w-[70%] before:h-[85%] md:before:h-[70%] before:absolute before:top-[5rem] md:before:top-[10rem] before:left-[4rem] md:before:left-[12rem] before:rounded-full">
        <div className="relative p-2 border-4 rounded-full border-border">
          <div className="overflow-hidden rounded-full shadow-lg z-50">
            <Image
              src="/avatars/profile.png"
              alt="profile"
              width={380}
              height={380}
              priority
              className="transform hover:scale-110 duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
