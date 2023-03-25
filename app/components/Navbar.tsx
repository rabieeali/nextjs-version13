import Link from 'next/link';
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className='bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10'>
      <div className='prose prose-xl mx-auto flex justify-between items-center flex-col sm:flex-row'>
        <h1 className='text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0'>
          <Link href='/' className='text-white/90 no-underline hover:text-white '>
            Ali Rabiee
          </Link>
        </h1>
        <div className='text-base  flex gap-3 '>
          <Link href='https://github.com/rabieeali' className='text-white/80 hover:text-white no-underline flex items-center gap-1'>
            Github <FaGithub />{' '}
          </Link>
          <Link href='https://www.linkedin.com/in/alirbi/' className='text-white/80 hover:text-white no-underline flex items-center gap-1' >
            LinkedIn <FaLinkedin />{' '}
          </Link>
        </div>
      </div>
    </nav>
  );
}
