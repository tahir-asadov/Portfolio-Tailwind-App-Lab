import Link from "next/link";
import Image from "next/image";
import { FaSlackHash, FaFacebookF, FaTwitter, FaGithubSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center h-[530px] bg-darkBlue">
      <div className="flex flex-col items-center">
        <Link href="/">
          <a className="flex items-center"><Image src="/AppLab@2x.png" width={117} height={32} /></a>
        </Link>
        <div className="flex flex-col md:flex-row items-center md:items-start my-6">
          <Link href="#Home"><a class="text-white text-xs font-medium mb-5 md:mr-5 md:mb-0">Home</a></Link>
          <Link href="#Key Featurs"><a class="text-white text-xs font-medium mb-5 md:mr-5 md:mb-0">Key Featurs</a></Link>
          <Link href="#Pricing"><a class="text-white text-xs font-medium mb-5 md:mr-5 md:mb-0">Pricing</a></Link>
          <Link href="#Testiminial"><a class="text-white text-xs font-medium mb-5 md:mr-5 md:mb-0">Testiminial</a></Link>
          <Link href="#FAQ"><a class="text-white text-xs font-medium">FAQ</a></Link>
        </div>

        <div className="flex my-6">
          <Link href="#"><a className="text-gray hover:text-white text-[30px] mr-3"><FaSlackHash /></a></Link>
          <Link href="#"><a className="text-gray hover:text-white text-[30px] mr-3"><FaFacebookF /></a></Link>
          <Link href="#"><a className="text-gray hover:text-white text-[30px] mr-3"><FaTwitter /></a></Link>
          <Link href="#"><a className="text-gray hover:text-white text-[30px] mr-3"><FaGithubSquare /></a></Link>
        </div>

        <div className="text-gray my-6 px-10">
          <p>Copyright&copy; Arifur Rahman Rushar 2019. All rights reserved.</p>
        </div>

      </div>
    </div>
  )
}

export default Footer
