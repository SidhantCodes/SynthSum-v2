'use client'
import { usePathname } from 'next/navigation';

const Subhead = () => {
  const pathname = usePathname();
  return (
    <h3 className='font-medium text-lg mt-5 mb-5'>{pathname === '/article' ? 'Quick Article Insights' : 'Instant Video Summaries'}</h3>
  )
}

export default Subhead