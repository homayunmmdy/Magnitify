import Link from 'next/link';
import { FaDev } from "react-icons/fa";
import { FaLinkedinIn, FaMedium, FaXTwitter } from "react-icons/fa6";

const socialMedia = [
  {
    id: 1,
    name: "linkedin",
    icon: FaLinkedinIn,
    href: "www.linkedin.com/in/homayunmmdy",
  },
  {
    id: 2,
    name: "X",
    icon: FaXTwitter,
    href: "https://x.com/@homayounmmdy",
  },
  {
    id: 3,
    name: "Medium",
    icon: FaMedium,
    href: "https://medium.com/@homayunmmdy",
  },
  {
    id: 4,
    name: "Dev Communtiy",
    icon: FaDev,
    href: "https://dev.to/homayunmmdy",
  },
]

const ScoialMediaSidebar = () => {
  return (                                             
    <>
      <ul className='fixed left-0 m-3 top-1/3 py-4 bg-white rounded-lg flex flex-col gap-2 p-3 border-2 border-indigo-700 z-50 shadow-lg'>
        {socialMedia?.map(item => {
          const LinkIcon = item.icon;
          return (
            <li key={item.id}>
              <Link title={item.name} href={item.href}>
                <LinkIcon size={24} className='text-gray-900 transition-all duration-500 cursor-pointer hover:text-indigo-700' />
              </Link>
            </li>
          )
        }
        )}
      </ul>
    </>
  )
}

export default ScoialMediaSidebar