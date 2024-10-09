import Image from "next/image"
import Link from "next/link"

export default function Header () {
  return (
    <header className="flex justify-between items-center px-20 bg-[#eafaf1] h-[170px]">
  <div>
    <Image src="/images/pulse-logo.svg" alt="logo" width={110} height={110}/>
  </div>

  <nav className="flex text-l text-[#00ad6a]  items-center font-bold justify-between w-[400px]">
    <div className="cursor-pointer transition-all duration-[0.25s] hover:text-black hover:tracking-wide hover:drop-shadow-md">
      <Link href={'/'}>Home</Link>
    </div>
    <div className="cursor-pointer transition-all duration-[0.25s] hover:text-black hover:tracking-wide hover:drop-shadow-md">
      <Link href={'/about'}>About</Link>
      </div>
    <div className="cursor-pointer transition-all duration-[0.25s] hover:text-black hover:tracking-wide hover:drop-shadow-md">
      <Link href={'/pricing'}>Pricing</Link>
    </div>
    <button className="border-solid border-2 border-[#00ad6a] px-4 py-2 transition-all duration-[0.25s]
    hover:bg-[#00ad6a] hover:border-[#eafaf1] hover:text-white">Sign-Up</button>
  </nav>
</header> 
  )
}