import image from '../../../assets/images/cups/Rectangle 10.png';
import { FaEye, FaPen } from 'react-icons/fa';
import { MdDeleteSweep } from 'react-icons/md';
import { Link } from 'react-router-dom';
function ProductItem() {
  return (
    <div>
      <Link
        to={'/coffee-details/#'}
        className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4"
      >
        <img
          src={image}
          alt="image"
          className="w-[200px] h-[200px] object-cover rounded-md"
        />
        <div className="flex-1 space-y-3">
          <p className="text-lg font-semibold">Name: Americano Coffee</p>
          <p className="text-gray-600">Chef: Mr. Matin Paul</p>
          <p className="text-gray-600">Price: 890 Taka</p>
        </div>
        <div className="flex flex-col space-y-2">
          <button className="bg-yellow-500 text-white p-2 rounded">
            <FaEye />
          </button>
          <button className="bg-gray-800 text-white p-2 rounded">
            <FaPen />
          </button>
          <button className="bg-red-500 text-white p-2 rounded">
            <MdDeleteSweep />
          </button>
        </div>
      </Link>
    </div>
  );
}

export default ProductItem;
