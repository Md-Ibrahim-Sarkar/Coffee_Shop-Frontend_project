import { Link } from 'react-router-dom';
import headerImg from '../assets/header.png';
import logo from '../assets/logo.png';

function Header() {
  return (
    <div>
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <div className="container mx-auto">
          <div className="flex min-[670px]:justify-between max-[670px]:justify-center items-center   xl:mx-4">
            <ul className="flex gap-x-8  items-center max-[670px]:hidden">
              <li className=" max-lg:py-3">
                <Link
                  to={'/'}
                  href="javascript:void(0)"
                  className="hover:text-[#fff] font-semibold text-[#fff] block text-[15px]"
                >
                  Home
                </Link>
              </li>
              <li className="max-lg:py-3">
                <Link
                  to={'add-new-coffee'}
                  href="javascript:void(0)"
                  className="hover:text-[#fff] font-semibold text-[#fff] block text-[15px]"
                >
                  Add New Coffee
                </Link>
              </li>
            </ul>
            <div>
              <div className="flex items-center">
                <img
                  className="lg:w-11 xl:w-14 md:w-7 sm:w-10 w-9 "
                  src={logo}
                  alt=""
                />
                <h1 className="font-RanchoFont text-2xl max-[640px]:text-[18px] lg:text-3xl">
                  Espresso Emporium
                </h1>
              </div>
            </div>
            <ul className="flex space-x-8  items-center max-[1040px]:hidden">
              <li className=" max-lg:py-3">
                <Link
                  to={'/log-in'}
                  className="hover:text-[#fff] font-semibold text-[#fff] block text-[15px]"
                >
                  Log In
                </Link>
              </li>
              <li className="text-[15px]  max-lg:py-3">
                <Link
                  to={'/register'}
                  className="hover:text-[#fff] font-semibold text-[#fff] block text-[15px]"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
