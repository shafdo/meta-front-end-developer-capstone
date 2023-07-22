import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

const ReservationConfirm = () => {
  return (
    <>
      <Header />
      <main>
        <div className=" flex items-center justify-center h-[75vh]">
          <div className="block">
            <FontAwesomeIcon
              icon={faCheck}
              size="5x"
              className="block mx-auto text-[#495E57]"
            />{' '}
            &nbsp;
            <p className="text-6xl text-center mb-4 markazi-text text-[#495E57]">
              Booking Confirmed
            </p>
            <p className="text-xl text-center">
              Your booking have been confirmed. Please enjoy your day at Little
              Lemon.{' '}
            </p>
            <Link to="/">
              <Button classname="block w-72 mx-auto my-8 p-4 bg-[#F4CE14] text-black rounded-lg hover:scale-105 hover:-rotate-3 transition-all duration-300 ease-in-out">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ReservationConfirm
