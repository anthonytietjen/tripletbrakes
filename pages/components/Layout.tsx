import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  title: string
  description: string
  keywords: string
  children: React.ReactNode
}

export default function Layout(props: Props) {
  const { asPath } = useRouter()
  const title = `${props.title}${!!props.title ? ' - ' : ''}Company Name`
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="og:title" content={title} />
        <meta name="og:image" content="/images/hero.png" />
        <meta name="og:description" content={props.description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="sitemap" href="/sitemap.xml" type="application/xml" />
      </Head>

      <div className="container mx-auto my-5 p-5">
        <header className="bg-white shadow-md mb-10">
          <div className="container mx-auto flex justify-between items-center p-4">
            <div className="logo">
              <Link href="/" aria-label="Home">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" width="60" height="20"
                  fill="currentColor">
                  <path
                    d="M97.44 9.46H92.3l-3.25-6.16c-.58-1.1-1.72-1.8-2.9-1.8H14.85c-1.18 0-2.32.7-2.9 1.8l-3.25 6.16H2.56C1.15 9.46 0 10.6 0 12v4.34c0 1.4 1.15 2.54 2.56 2.54h3.8c1.4 0 2.56-1.14 2.56-2.54v-.03h83.28v.03c0 1.4 1.15 2.54 2.56 2.54h3.8c1.4 0 2.56-1.14 2.56-2.54V12c0-1.4-1.16-2.54-2.56-2.54zM14.3 3.72h71.4l2.25 4.28H12.05l2.25-4.28zM7.92 14.34c-1.18 0-2.14-.95-2.14-2.12s.96-2.12 2.14-2.12 2.14.95 2.14 2.12-.96 2.12-2.14 2.12zm84.16 0c-1.18 0-2.14-.95-2.14-2.12s.96-2.12 2.14-2.12 2.14.95 2.14 2.12-.96 2.12-2.14 2.12z" />
                </svg>
              </Link>
            </div>
            <nav className="text-gray-700">
              <ul className="flex space-x-4">
                <li><Link href="/" className={`hover:text-blue-600 ${asPath === "/" ? 'font-semibold' : ''}`}>Home</Link></li>
                <li><Link href="/pricing" className={`hover:text-blue-600 ${asPath === "/pricing" ? 'font-semibold' : ''}`}>Pricing</Link></li>
                <li><Link href="/contact" className={`hover:text-blue-600 ${asPath === "/contact" ? 'font-semibold' : ''}`}>Contact Us</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        {props.children}

        <footer className="bg-gray-800 text-gray-300 py-8 mt-16">
          <div className="container mx-auto">
            <div className="flex justify-center space-x-4">
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms of Use
              </Link>
            </div>
            <p className="text-center mt-4 text-gray-300 text-sm">
              &copy; {(new Date().getFullYear())} Your Company. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}
