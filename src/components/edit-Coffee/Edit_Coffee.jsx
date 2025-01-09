import { useContext } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ProductContext } from '../../context';

function Edit_Coffee() {
  const navigate = useNavigate();
  const data = useLoaderData();

  const { products, setProducts } = useContext(ProductContext);

  const { name, chef, price, photoLink, category, taste, supplier, _id } = data;

  const submitHandler = e => {
    e.preventDefault();

    const name = e.target.name.value;
    const chef = e.target.chef.value;
    const price = parseFloat(e.target.price.value);
    const category = e.target.category.value;
    const supplier = e.target.supplier.value;
    const photoLink = e.target.photoLink.value;
    const taste = e.target.taste.value;

    const newData = {
      name,
      chef,
      price,
      category,
      supplier,
      photoLink,
      taste,
    };
    fetch(`https://coffee-shop-backend-kohl.vercel.app/coffees/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newData),
    })
      .then(res => res.json())
      .then(data => {
        const updatedProducts = products.map(product =>
          product._id === _id ? newData : product
        );
        setProducts(updatedProducts);

        if (data.modifiedCount > 0) {
          navigate('/');
          Swal.fire({
            title: 'Good job!',
            text: 'You Updated the product!',
            icon: 'success',
          });
        } else {
          alert('Failed to update coffee. Please try again.');
        }
      });
  };

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
            Update Coffee
          </h1>
          <p className="text-center text-gray-600 mb-8">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <form className="space-y-4" onSubmit={submitHandler}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Enter coffee name"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Chef</label>
                <input
                  type="text"
                  name="chef"
                  defaultValue={chef}
                  placeholder="Enter coffee chef"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Supplier</label>
                <input
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  placeholder="Enter coffee supplier"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Taste</label>
                <input
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  placeholder="Enter coffee taste"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Category</label>
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="Enter coffee category"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Price</label>
                <input
                  type="number"
                  name="price"
                  defaultValue={price}
                  placeholder="Enter coffee Price"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700">Photo Link</label>
                <input
                  type="url"
                  name="photoLink"
                  defaultValue={photoLink}
                  placeholder="Enter photo URL"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            </div>
            <div className="flex justify-center bg-[#D2B48C] hover:bg-[#bd9560] duration-300 font-RanchoFont mt-6">
              <button className="  py-1 px-6 text-xl  hover:bg-brown-600">
                Update Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit_Coffee;
