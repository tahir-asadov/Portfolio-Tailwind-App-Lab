import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
function Header() {
  return (
    <div className="w-full max-w-7xl mx-auto mt-10 px-5">
      <div className="xl:container mx-auto flex items-center justify-between md:justify-initial md:grid md:grid-cols-header">
        <div>
          <Link href="/">
            <a className="flex items-center"><Image src="/logo@2x.png" width={117} height={32} /></a>
          </Link>
        </div>
        <div className="hidden md:flex items-center justify-end">
          <Link href="/"><a className="header-link">Home</a></Link>
          <Link href="/"><a className="header-link">Key Features</a></Link>
          <Link href="/"><a className="header-link">Pricing</a></Link>
          <Link href="/"><a className="header-link">Testimonials</a></Link>
          <Link href="/"><a className="header-link">FAQ</a></Link>
        </div>
        <div>
          <Button href="/aa">Try for free</Button>
        </div>
      </div>
    </div>
  )
}

export default Header
