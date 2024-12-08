import { ThemeProvider } from 'next-themes'
import { Poppins, Sora } from 'next/font/google'
import './globals.css'

const fontPrimary = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-primary',
})

const fontSecondary = Sora({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-secondary',
})

export const metadata = {
  title: 'Md. Mahdiul Hasan',
  description:
    'I am a passionate and dedicated Junior Front-End Web Developer with expertise in building responsive, user-friendly, and visually appealing web applications. Proficient in modern web technologies like HTML5, CSS3, TailwindCSS, Bootstrap, and Sass, I strive to craft seamless user experiences.In addition to my front-end skills, I have experience with JavaScript frameworks such as React.js, Next.js, and backend technologies like Node.js, Express.js, Firebase, and MongoDB. I enjoy tackling new challenges, learning cutting-edge tools, and contributing to innovative projects that make a difference.With a strong commitment to growth and creativity, I aim to create web solutions that not only meet functional requirements but also inspire and engage users.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${fontPrimary.variable} ${fontSecondary.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
