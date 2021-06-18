import Image from 'next/image'
import {GiSpeedometer} from "react-icons/gi"
import {AiOutlineSchedule} from "react-icons/ai"
import {BiVector} from "react-icons/bi"
function Features() {
  return (
    <div className="w-full mt-10 px-5 my-3 md:my-0">
      <div className="container max-w-7xl mx-auto">
        
        <div className="max-w-7xl lg:max-w-6xl mx-auto md:grid md:grid-cols-features">
          <div className="flex justify-center md:justify-end">
            <Image src="/features-left.png" width={655} height={877}/>
          </div>
          <div className="flex flex-col items-center justify-center md:items-start">
            <h2 className="text-lg font-bold text-darkBlue md:max-w-[290px] leading-none mb-3">Awesome apps features</h2>
            <p className="text-gray text-sm text-center md:text-left max-w-[400px]">Increase productivity with a simple to-do app. app for managing your personal budgets.</p>
            <div className="mt-16">

              <div className="flex items-center">
                <div>
                  <div className="flex items-center justify-center rounded-full bg-[#ffecef] w-[88px] h-[88px] my-5"><GiSpeedometer className="text-[65px] text-[#f55767]" /></div>
                </div>
                <div className="ml-10">
                  <h3 className="text-[#f55767] text-md font-medium">Fast Performance</h3>
                  <p className="max-w-[260px] text-gray text-xs">Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                </div>
              </div>

              <div className="flex items-center">
                <div>
                  <div className="flex items-center justify-center rounded-full bg-[#f4f4ff] w-[88px] h-[88px] my-5"><AiOutlineSchedule className="text-[65px] text-[#2563ff]" /></div>
                </div>
                <div className="ml-10">
                  <h3 className="text-[#2563ff] text-md font-medium">Prototyping</h3>
                  <p className="max-w-[260px] text-gray text-xs">Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                </div>
              </div>

              <div className="flex items-center">
                <div>
                  <div className="flex items-center justify-center rounded-full bg-[#e4ffee] w-[88px] h-[88px] my-5"><BiVector className="text-[65px] text-[#40975f]" /></div>
                </div>
                <div className="ml-10">
                  <h3 className="text-[#40975f] text-md font-medium">Vector Editing</h3>
                  <p className="max-w-[260px] text-gray text-xs">Get your blood tests delivered at home collect a sample from the news your blood tests.</p>
                </div>
              </div>


            </div>
            
            

          </div>
      </div>

      </div>
    </div>
  )
}

export default Features
