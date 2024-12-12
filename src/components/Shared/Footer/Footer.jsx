import { SocialLinks } from '@/assets/Constants/Constants'
import Link from 'next/link'
import { FaArrowUpLong } from 'react-icons/fa6'
export const Footer = () => {
  const renderSocilaIcons = () =>
    SocialLinks.map(({ id, href, icon, label }) => (
      <Link
        key={id}
        href={href}
        target="_blank"
        aria-label={label}
        className="text-lg font-semibold  transition-all duration-300 text-accent-foreground hover:text-ring p-[0.5px] cursor-pointer"
      >
        {icon}
      </Link>
    ))
  return (
    <footer
      id="footer"
      className="container mx-auto px-4 md:px-8 py-4 md:py-8 bg-secondary border-t border-spacing-4 border-chart-4 mt-8 md:mt-12 shrink-0"
    >
      <div className="grid place-items-center gap-8 grid-cols-2 md:grid-cols-4">
        <p className="text-sm">Feel Free to Contact Me</p>
        <Link
          href="mailto:devmahdimunshee@gmail.com"
          className="text-sm font-semibold text-accent-foreground hover:text-ring transition-all duration-300 delay-300"
        >
          devmahdimunshee@gmail.com
        </Link>
        <div className="flex justify-center items-center gap-4">
          {renderSocilaIcons()}
        </div>
        <Link
          href="/"
          className="p-2 bg-popover text-popover-foreground ring-1 ring-ring rounded-full hover:bg-accent hover:text-accent-foreground transition duration-300 delay-300"
        >
          <FaArrowUpLong />
        </Link>
      </div>
    </footer>
  )
}
