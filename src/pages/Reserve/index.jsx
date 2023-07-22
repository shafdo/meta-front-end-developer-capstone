import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

const Reserve = () => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    // Custom validations
    navigate('/reserve-confirmation')
  }

  return (
    <>
      <Header />
      <main>
        <div className="flex items-center justify-center h-[75vh] px-8 md:px-40">
          <div className="block w-full lg:w-3/4 bg-[#]">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="book-date"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Book a date:
                </label>
                <input
                  id="book-date"
                  type="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="me@example.com"
                  required
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="mb-6">
                  <label
                    htmlFor="book-time"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Select a booking time:
                  </label>
                  <select
                    name=""
                    id="book-time"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  >
                    <option value="9:00" defaultValue={true}>
                      9:00
                    </option>
                    <option value="9:30">9:30</option>
                    <option value="10:00">10:00</option>
                    <option value="10:30">10:30</option>
                    <option value="11:00">11:00</option>
                    <option value="11:30">11:30</option>
                    <option value="12:00">12:00</option>
                    <option value="12:30">12:30</option>
                    <option value="13:00">13:00</option>
                    <option value="13:30">13:30</option>
                    <option value="14:00">14:00</option>
                    <option value="14:30">14:30</option>
                    <option value="15:00">15:00</option>
                    <option value="15:30">15:30</option>
                    <option value="16:00">16:00</option>
                    <option value="16:30">16:30</option>
                    <option value="17:00">17:00</option>
                    <option value="17:30">17:30</option>
                    <option value="18:00">18:00</option>
                    <option value="18:30">18:30</option>
                    <option value="19:00">19:00</option>
                    <option value="19:30">19:30</option>
                    <option value="20:00">20:00</option>
                    <option value="20:30">20:30</option>
                    <option value="21:00">21:00</option>
                    <option value="21:30">21:30</option>
                    <option value="22:00">22:00</option>
                    <option value="22:30">22:30</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="book-adults"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    No of adults:
                  </label>
                  <input
                    id="book-adults"
                    type="number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="book-adults"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    No of children:
                  </label>
                  <input
                    id="book-children"
                    type="number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>
              </div>

              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Special Requests (Optional):
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="I have a special request..."
              ></textarea>

              <Button classname="block mx-auto w-80 my-8 p-4 bg-[#F4CE14] text-black rounded-lg hover:scale-105 hover:-rotate-3 transition-all duration-300 ease-in-out">
                Reserve a table
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Reserve
