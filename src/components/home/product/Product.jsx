import icon5 from '../../../assets/images/icons/1.png';
import ProductItem from './productItem';
import teacupforproduct from '../../../assets/teacupforproduct.png';
import { useContext } from 'react';
import { ProductContext } from '../../../context';
import { Link } from 'react-router-dom';
function Product() {
  const { products } = useContext(ProductContext);

  return (
    <div className="bg-white ">
      <div className="container mx-auto relative">
        <div className="text-center py-11">
          <p className="text-gray-600 text-lg">--- Sip & Savor ---</p>
          <h1 className="text-4xl font-RanchoFont font-bold  text-[#331A15]">
            Our Popular Products
          </h1>
          <div className="flex justify-center">
            <Link
              to={'/add-new-coffee'}
              className="mt-4 px-4 py-2 bg-[#E3B577] text-white rounded flex items-center justify-center"
              style={{ backgroundColor: '#d2a679' }}
            >
              <span className="mr-2 font-RanchoFont">Add Coffee</span>
              <img className="w-6" src={icon5} alt="" />
            </Link>
          </div>
        </div>

        <div className="flex justify-center ">
          <div className="max-w-screen-lg ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 z-50">
              {products?.length === 0 ? (
                <div>Loading ......</div>
              ) : (
                products?.map(item => (
                  <ProductItem key={item._id} product={item} />
                ))
              )}
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-[150px] overflow-hidden">
          <img className="w-[40%]" src={teacupforproduct} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Product;
