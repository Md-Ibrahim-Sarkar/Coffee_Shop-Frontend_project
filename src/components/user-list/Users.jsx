/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

function Users() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://coffee-shop-backend-kohl.vercel.app/users')
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  const handleClick = id => {
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
        fetch(`https://coffee-shop-backend-kohl.vercel.app/user/${id}`, {
          method: 'DELETE',
        })
          .then(result => {
            const updateUser = user.filter(user => user._id !== id);
            setUser(updateUser);
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
            });
          })
          .catch(err => {
            console.error('Error:', err);
          });
      }
    });
  };

  return (
    <div>
      <div className="text-gray-900 bg-gray-200">
        <div className="p-4 flex">
          <h1 className="text-3xl">Users</h1>
        </div>
        <div className="px-3 py-4 flex justify-center">
          <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
              <tr className="border-b w-8">
                <th className="text-left p-3 px-5">Number</th>
                <th className="text-left p-3 px-5">Name</th>
                <th className="text-left p-3 px-5">Email</th>
                <th className="text-left p-3 px-5">Role</th>
                <th></th>
              </tr>
              {user.length === 0 ? (
                <p>loading.....</p>
              ) : (
                user?.map((item, index) => (
                  <tr
                    key={item._id}
                    className="border-b hover:bg-orange-100 bg-gray-100"
                  >
                    <td className="p-3 px-5 w-8">{index + 1}</td>
                    <td className="p-3 px-5">
                      <input
                        type="text"
                        value={`${item.name}`}
                        className="bg-transparent border-b-2 border-gray-300 py-2"
                      />
                    </td>
                    <td className="p-3 px-5">
                      <input
                        type="text"
                        value={`${item.email}`}
                        className="bg-transparent border-b-2 border-gray-300 py-2"
                      />
                    </td>
                    <td className="p-3 px-5">
                      <select
                        defaultValue={'uesr'}
                        className="bg-transparent focus:outline-none border-b-2 border-gray-300 py-2"
                      >
                        <option value="user">user</option>
                        <option value="admin">admin</option>
                      </select>
                    </td>
                    <td className="p-3 px-5 flex justify-end">
                      <button
                        type="button"
                        className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => handleClick(item._id)}
                        type="button"
                        className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
