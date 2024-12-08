import { Footer } from '@/components/Shared/Footer/Footer'
import { Navbar } from '@/components/Shared/Navbar/Navbar'

export const MainLayouts = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="grow overflow-y-auto">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
