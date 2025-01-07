import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

function AddNewCoffee() {
  return (
    <div>
      <div className="flex justify-center bg-[#F4F3F0] items-center min-h-screen">
        <div className=" p-10 rounded-lg  w-full max-w-4xl">
          <Link
            to={'/'}
            className="text-gray-700 text-lg flex items-center mb-6"
          >
            <IoMdArrowRoundBack className="me-2" />
            <span className="font-indie-flower text-xl font-RanchoFont">
              Back to home
            </span>
          </Link>
          <h1 className="text-3xl font-indie-flower font-RanchoFont text-center mb-4">
            Add New Coffee
          </h1>
          <p className="text-center text-gray-600 mb-8">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Enter coffee name"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Chef</label>
                <input
                  type="text"
                  placeholder="Enter coffee chef"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Supplier</label>
                <input
                  type="text"
                  placeholder="Enter coffee supplier"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Taste</label>
                <input
                  type="text"
                  placeholder="Enter coffee taste"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Category</label>
                <input
                  type="text"
                  placeholder="Enter coffee category"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Price</label>
                <input
                  type="number"
                  placeholder="Enter coffee Price"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700">Photo Link</label>
                <input
                  type="url"
                  placeholder="Enter photo URL"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="flex justify-center bg-[#D2B48C] hover:bg-[#bd9560] duration-300 font-RanchoFont mt-6">
              <button
                type="submit"
                className="  py-1 px-6 text-xl  hover:bg-brown-600"
              >
                Add Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddNewCoffee;
