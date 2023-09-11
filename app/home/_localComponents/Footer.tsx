import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Logo from "app/_globalComponents/design/Logo"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className=' text-nier-400'>
      <div className='container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row'>
        <a className=' flex items-center justify-center font-medium text-nier-200 md:justify-start'>
          <Logo className='h-8 w-8' />
          <span className='ml-3 text-xl'>Nikita Istomin</span>
        </a>
        <div className=' mt-4 flex flex-col items-center justify-center opacity-70 sm:ml-4 sm:mt-0 sm:items-start sm:border-l-2 sm:border-nier-400'>
          <p className='text-sm sm:pl-4 sm:text-xs md:text-sm'>
            2023 — Powered by my remaining brain cells :D (and Vercel)
          </p>
          <p className='text-sm sm:pl-4 sm:text-xs md:text-sm'>
            Created from scratch with Next.js, TailwindCSS, and TypeScript
          </p>
          <a
            className='text-sm sm:pl-4 sm:text-xs md:text-sm'
            href='https://www.flaticon.com/free-icons/drag-and-drop'
            title='drag and drop icons'>
            Drag and drop icons created by bsd - Flaticon
          </a>
        </div>
        <div className='mt-6 flex justify-center sm:ml-auto sm:mt-0 sm:justify-start'>
          <Link
            prefetch={false}
            target='_blank'
            href='https://github.com/NorthPhoenix'
            className='flex items-center justify-center text-nier-400'>
            <FontAwesomeIcon icon={faGithub} size='lg' />
          </Link>
          <Link
            prefetch={false}
            target='_blank'
            href='https://www.linkedin.com/in/nikita-y-istomin/'
            className='ml-3 flex items-center justify-center text-nier-400'>
            <FontAwesomeIcon icon={faLinkedin} size='lg' />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
