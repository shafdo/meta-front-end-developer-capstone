import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMap, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 px-8 md:px-40 bg-[#495E57] pt-20 xl:pb-20 text-white">
        <div className="mb-12 xl:mb-0">
          <img className="w-32" src="/assets/Logos/logo-footer.png" alt="" />
        </div>
        <div className="mb-12 xl:mb-0">
          <p className="text-2xl mb-4">SITEMAP</p>
          <p className="mb-1 hover:text-[#F4CE14]">
            <Link to="/">Home</Link>
          </p>
          <p className="mb-1 hover:text-[#F4CE14]">
            <Link to="/construction">About</Link>
          </p>
          <p className="mb-1 hover:text-[#F4CE14]">
            <Link to="/construction">Menu</Link>
          </p>
          <p className="mb-1 hover:text-[#F4CE14]">
            <Link to="/reserve">Reservations</Link>
          </p>
          <p className="mb-1 hover:text-[#F4CE14]">
            <Link to="/construction">Order Online</Link>
          </p>
          <p className="mb-1 hover:text-[#F4CE14]">
            <Link to="/construction">Login</Link>
          </p>
        </div>
        <div className="mb-12 xl:mb-0">
          <p className="text-2xl mb-4">CONTACT</p>
          <p className="mb-2 flex items-center">
            <FontAwesomeIcon icon={faMap} size="1x" /> &nbsp; 4968 University
            Drive, Chicago, IL 60610
          </p>
          <p className="mb-2 flex items-center">
            <FontAwesomeIcon icon={faPhone} size="1x" /> &nbsp; (312) 593-2744
          </p>
          <p className="mb-2 flex items-center">
            <FontAwesomeIcon icon={faEnvelope} size="1x" /> &nbsp;
            info@littlelemon.com
          </p>
        </div>
        <div className="mb-12 xl:mb-0">
          <p className="text-2xl mb-4">SOCIAL MEDIA LINKS</p>
          <p className="mb-2 flex items-center">
            <Link to="https://www.facebook.com/" target="_blank">
              <FontAwesomeIcon
                icon={faFacebook}
                size="1x"
                className="mr-4 hover:text-[#F4CE14] cursor-pointer"
              />
            </Link>
            <Link to="https://www.twitter.com/" target="_blank">
              <FontAwesomeIcon
                icon={faTwitter}
                size="1x"
                className="mr-4 hover:text-[#F4CE14] cursor-pointer"
              />
            </Link>
            <Link to="https://www.instagram.com/" target="_blank">
              <FontAwesomeIcon
                icon={faInstagram}
                size="1x"
                className="mr-4 hover:text-[#F4CE14] cursor-pointer"
              />
            </Link>
            <Link to="https://www.youtube.com/" target="_blank">
              <FontAwesomeIcon
                icon={faYoutube}
                size="1x"
                className="mr-4 hover:text-[#F4CE14] cursor-pointer"
              />
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
