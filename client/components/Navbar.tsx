import { navlinks } from "@/constants"
import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="flex gap-x-6 items-center justify-center my-10">
        {navlinks.map((link) => (
            <Link key={link.url} href={link.url} className="">
                {link.name}
            </Link>
            
        ))}
    </nav>
  )
}

export default Navbar