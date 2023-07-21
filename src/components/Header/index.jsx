import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Header = () => {
  const [sidemMenuOpen, setSidemMenuOpen] = useState(false)

  const links = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'About',
      url: '/construction',
    },
    {
      name: 'Menu',
      url: '/construction',
    },
    {
      name: 'Reservation',
      url: '#',
    },
    {
      name: 'Order Online',
      url: '/construction',
    },
    {
      name: 'Login',
      url: '/construction',
    },
  ]

  return (
    <>
      <nav className="">
        <div className="lg-nav hidden lg:grid grid-cols-3 px-56 my-4">
          <div className="col-span-1">
            <img className="w-72 lg:pl-4" src="/assets/Logos/logo.png" alt="" />
          </div>
          <div className="col-span-2 w-full flex items-center justify-end">
            <ul className="flex list-none h-full">
              {links.map((link, index) => (
                <li
                  key={index}
                  className="flex items-center transition ease-in-out duration-500 rounded-lg hover:bg-[#F4CE14] px-4 mx-3 h-full"
                >
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="sidebar-toggler flex justify-between items-center lg:hidden top-0 right-0 mx-8 my-4">
          <div>
            <img className="w-60" src="/assets/Logos/logo.png" alt="" />
          </div>
          <div>
            {sidemMenuOpen ? (
              <FontAwesomeIcon
                className="cursor-pointer"
                icon={faClose}
                size="3x"
                onClick={() => setSidemMenuOpen(!sidemMenuOpen)}
              />
            ) : (
              <FontAwesomeIcon
                className="cursor-pointer"
                icon={faBars}
                size="3x"
                onClick={() => setSidemMenuOpen(!sidemMenuOpen)}
              />
            )}
          </div>
        </div>

        <div
          className={`sidebar lg:hidden fixed top-0 left-0 flex-col w-80 h-screen bg-[#fff] text-black border-r-2 border-[#333] ${
            sidemMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-500`}
        >
          <ul className="flex-grow">
            {links.map((link, index) => (
              <li
                key={index}
                className="p-4 transition ease-in-out duration-300 hover:bg-[#F4CE14] cursor-pointer"
              >
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header
