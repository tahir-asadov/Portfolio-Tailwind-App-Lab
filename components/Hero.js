import Button from './Button'
import Link from 'next/link'
import Image from 'next/image'
import { BiBadgeCheck } from 'react-icons/bi'
function Hero() {
  return (
    <div className="w-full mt-10 px-5 hero-bg my-3 md:my-0">
      <div className="container max-w-7xl mx-auto">
        
        <div className="max-w-7xl lg:max-w-6xl mx-auto md:grid md:grid-cols-hero">
        <div className="flex flex-col justify-center">
          <div>
            <div className="inline-flex rounded-full bg-lightGray text-xs md:text-sm text-darkBlue items-center pr-10 mb-4"><div className="flex justify-center items-center rounded-full bg-orange text-white text-md w-11 h-10 text-badge mr-2"><BiBadgeCheck /></div>#1 Editors Choice App 2020</div>
            <h1 className="leading-tight text-lg md:text-xl font-bold text-darkBlue">Best app for your modern lifestyle</h1>
            <p className="text-xs text-gray text-sm pt-2 pb-4">Increase productivity with a simple to-do app. App for managing your personal budgets.</p>
          </div>
          <div className="flex items-center">
            <Button href="#">Try for free</Button>
            <Link href="#"><a className="ml-3 text-blue">Watch demo video</a></Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end"><Image src="/phone.png" width={446} height={816}/></div>
      </div>

      </div>
    </div>
  )
}

export default Hero
