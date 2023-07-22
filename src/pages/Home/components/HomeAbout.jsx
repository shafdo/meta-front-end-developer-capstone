const HomeAbout = () => {
  return (
    <div className="block px-8 md:px-40 py-20">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <div className="block">
          <div className="block mb-6">
            <p className="text-6xl text-[#F4CE14] markazi-text">Little Lemon</p>
            <p className="text-4xl markazi-text text-[#495E57]">Chicago</p>
          </div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt.
          </p>
        </div>
        <div className="relative hidden xl:block">
          <img
            className="absolute top-0 left-0 w-80 h-80 object-cover z-20 rounded-3xl rounded-ss-3xl border-r-8 border-b-8 border-[#fff] hover:rotate-12 transition-all duration-500 ease-in-out"
            src="https://source.unsplash.com/4NQEvxW2_4w/500x500"
            alt=""
          />
          <img
            className="absolute bottom-0 right-0 w-96 h-96 object-cover rounded-3xl hover:-rotate-12 transition-all duration-500 ease-in-out"
            src="https://source.unsplash.com/txHQ6Snvr5o/500x500"
            alt=""
          />
        </div>

        <div className="flex mt-12 flex-wrap justify-around xl:hidden">
          <img
            className="w-72 h-72 lg:w-72 lg:h-72 mb-8 object-cover z-20 rounded-3xl rounded-ss-3xl hover:rotate-12 transition-all duration-500 ease-in-out"
            src="https://source.unsplash.com/4NQEvxW2_4w/500x500"
            alt=""
          />
          <img
            className="w-72 h-72 lg:w-72 lg:h-72 mb-8 object-cover rounded-3xl hover:-rotate-12 transition-all duration-500 ease-in-out"
            src="https://source.unsplash.com/txHQ6Snvr5o/500x500"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default HomeAbout
