/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { FaEye, FaPen } from 'react-icons/fa';
import { MdDeleteSweep } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../../context';
import Swal from 'sweetalert2';

function ProductItem({ product }) {
  const { products, setProducts, handleProductDetails } =
    useContext(ProductContext);
  const { name, chef, price, photoLink, _id } = product;

  const deleteHandler = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://coffee-shop-backend-kohl.vercel.app/coffee/${id}`, {
          method: 'DELETE',
        })
          .then(response => response.json())
          .then(data => {
            const newData = products.filter(products => products._id !== id);
            setProducts(newData);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your product has been deleted.',
                'success'
              );
            }
          });
      }
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
      <img
        src={photoLink}
        alt="Product"
        className="w-[200px] h-[200px] object-cover rounded-md"
      />
      <div className="flex-1 space-y-3">
        <p className="text-lg font-semibold">Name: {name}</p>
        <p className="text-gray-600">Chef: {chef}</p>
        <p className="text-gray-600">Price: {price} Taka</p>
      </div>
      <div className="flex flex-col space-y-2">
        <Link
          onClick={() => handleProductDetails(_id)}
          to={'/coffee-details/#'}
          className="bg-yellow-500 text-white p-2 rounded flex items-center justify-center"
        >
          <FaEye />
        </Link>
        <Link
          to={`/edit-coffee/${_id}`}
          className="bg-gray-800 text-white p-2 rounded flex items-center justify-center"
        >
          <FaPen />
        </Link>
        <button
          onClick={() => deleteHandler(_id)}
          className="bg-red-500 text-white p-2 rounded flex items-center justify-center"
        >
          <MdDeleteSweep />
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
