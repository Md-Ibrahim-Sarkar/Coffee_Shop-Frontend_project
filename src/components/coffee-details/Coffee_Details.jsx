import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../../context';

function Coffee_Details() {
  const { details } = useContext(ProductContext);

  const { name, chef, price, photoLink } = details;
  return (
    <div>
      <div className="font-sans tracking-wide max-w-5xl mx-auto mt-4">
        <Link to={'/'} className="text-gray-700 text-lg flex items-center mb-6">
          <IoMdArrowRoundBack className="me-2" />
          <span className="font-indie-flower text-xl font-RanchoFont">
            Back to home
          </span>
        </Link>
        <div className="bg-white grid items-start grid-cols-1 place-content-center md:grid-cols-2 gap-8">
          <div className="h-full">
            <div className="p-4 relative h-full flex items-center justify-center">
              <img
                src={photoLink}
                alt="Product"
                className="lg:w-4/5 w-full h-full rounded-xl object-contain"
              />
            </div>
          </div>

          <div className="  py-6 px-8 ">
            <div>
              <h2 className="sm:text-3xl text-2xl font-semibold ">{name}</h2>
              <p className="text-sm  mt-2">{chef}</p>
            </div>

            <div className="flex flex-wrap gap-4 justify-between mt-8">
              <h3 className=" sm:text-4xl text-3xl">${price}</h3>

              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-4 h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-4 h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-4 h-4 fill-[#facc15]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-4 h-4 fill-[#CED5D8]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>
            </div>

            <div>
              <ul className="grid grid-cols-3 mt-8">
                <li className=" text-base w-full py-3.5 px-2 text-center border-b-2  cursor-pointer">
                  Description
                </li>
                <li className=" text-base w-full py-3.5 px-2 text-center border-b-2 border-gray-400 cursor-pointer">
                  Details
                </li>
                <li className=" text-base w-full py-3.5 px-2 text-center border-b-2 border-gray-400 cursor-pointer">
                  Reviews
                </li>
              </ul>
              <p className=" mt-4 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                eiusmod tempor incidunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coffee_Details;
