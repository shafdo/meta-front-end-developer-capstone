import { Link } from 'react-router-dom'
import Button from '../../../components/Button'

const HomeHero = () => {
  return (
    <div className="bg-[#495E57] grid grid-cols-1 xl:grid-cols-2 gap-12 py-12 mb-24 px-8 md:px-40">
      <div className="flex items-center text-white">
        <div className="block">
          <p className="text-6xl text-[#F4CE14] markazi-text">Little Lemon</p>
          <p className="text-4xl markazi-text mb-5">Chicago</p>
          <p className="text-lg">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/reserve">
            <Button classname="my-8 p-4 bg-[#F4CE14] text-black rounded-lg hover:scale-105 hover:-rotate-3 transition-all duration-300 ease-in-out">
              Reserve a table
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-end">
        <img
          className="rounded-2xl -mb-24 border-8 border-[#fff] hover:-rotate-12 transition-all duration-500 ease-in-out lg:w-9/12"
          src="/assets/Food/4.png"
          alt=""
        />
      </div>
    </div>
  )
}

export default HomeHero
