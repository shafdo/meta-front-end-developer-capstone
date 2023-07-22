import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'

const Construction = () => {
  return (
    <>
      <Header />
      <main>
        <div className=" flex items-center justify-center h-[75vh]">
          <div className="block">
            <FontAwesomeIcon
              icon={faScrewdriverWrench}
              size="5x"
              className="block mx-auto"
            />{' '}
            &nbsp;
            <p className="text-5xl">Under Construction</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Construction
