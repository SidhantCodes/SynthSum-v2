import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='mt-10'>
    <div className="flex items-center ">
      <p className="text-xl text-justify mt-4">Want to contribute? Check out the repo</p>
      <Image src="/icons/arrow.svg" alt="arrow" width={104} height={104} className="mt-10 ml-1"/>
    </div>
    <footer className='flex items-center justify-center my-12'>
      {footerLinks.map((link) => (
        <Link href={link.url} key={link.name}>
            <Image src={link.iconUrl} alt={link.name} width={24} height={24} />
        </Link>
      ))}
    </footer>
    </div>
  )
}

export default Footer