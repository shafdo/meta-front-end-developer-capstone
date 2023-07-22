import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBiking } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button'

const HomeSpecials = () => {
  return (
    <div className="block px-8 md:px-40 mb-20">
      <div className="flex justify-between mb-16">
        <p className="text-5xl markazi-text">This week specials!</p>
        <Button classname="p-4 bg-[#F4CE14] text-black rounded-lg hover:scale-105 hover:-rotate-3 transition-all duration-300 ease-in-out">
          Online Menu
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-9 xl:gap-8">
        <div className="card bg-[#F9DABB] rounded-xl mb-4">
          <img
            className="object-cover rounded-xl h-[35vh] w-full"
            src="/assets/Food/1.png"
            alt=""
          />

          <div className="card-body mx-4 pb-6">
            <div className="flex justify-between items-center my-4">
              <div className="card-title text-4xl markazi-text">
                Greek Salad
              </div>
              <div className="card-price text-5xl markazi-text">$ 12.99</div>
            </div>
            <p className="card-desc text-lg mb-5">
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <div className="flex justify-end">
              <Button classname="p-4 bg-[#EE9972] text-black rounded-lg hover:scale-105 hover:-rotate-3 transition-all duration-300 ease-in-out">
                <Link to="/construction">
                  Order a delivery &nbsp;{' '}
                  <FontAwesomeIcon className="cursor-pointer" icon={faBiking} />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="card bg-[#F9DABB] rounded-xl mb-4">
          <img
            className="object-cover rounded-xl h-[35vh] w-full"
            src="/assets/Food/2.png"
            alt=""
          />

          <div className="card-body mx-4 pb-6">
            <div className="flex justify-between items-center my-4">
              <div className="card-title text-4xl markazi-text">
                Greek Salad
              </div>
              <div className="card-price text-5xl markazi-text">$ 12.99</div>
            </div>
            <p className="card-desc text-lg mb-5">
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <div className="flex justify-end">
              <Button classname="p-4 bg-[#EE9972] text-black rounded-lg hover:scale-105 hover:-rotate-3 transition-all duration-300 ease-in-out">
                <Link to="/construction">
                  Order a delivery &nbsp;{' '}
                  <FontAwesomeIcon className="cursor-pointer" icon={faBiking} />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="card bg-[#F9DABB] rounded-xl mb-4">
          <img
            className="object-cover rounded-xl h-[35vh] w-full"
            src="/assets/Food/3.png"
            alt=""
          />

          <div className="card-body mx-4 pb-6">
            <div className="flex justify-between items-center my-4">
              <div className="card-title text-4xl markazi-text">
                Greek Salad
              </div>
              <div className="card-price text-5xl markazi-text">$ 12.99</div>
            </div>
            <p className="card-desc text-lg mb-5">
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <div className="flex justify-end">
              <Button classname="p-4 bg-[#EE9972] text-black rounded-lg hover:scale-105 hover:-rotate-3 transition-all duration-300 ease-in-out">
                <Link to="/construction">
                  Order a delivery &nbsp;{' '}
                  <FontAwesomeIcon className="cursor-pointer" icon={faBiking} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSpecials
