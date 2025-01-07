import { Link } from 'react-router-dom';
import headerImg from '../assets/header.png';
import logo from '../assets/logo.png';

function Header() {
  return (
    <div>
      <div
        className="bg-cover bg-center "
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center  xl:mx-4">
            <ul className="lg:flex lg:gap-x-8 max-lg:space-y-2 ">
              <li className="mb-6 hidden max-lg:block">
                <a href="javascript:void(0)">
                  <img
                    src="https://readymadeui.com/readymadeui.svg"
                    alt="logo"
                    className="w-36"
                  />
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <Link
                  to={'/'}
                  href="javascript:void(0)"
                  className="hover:text-[#fff] font-semibold text-[#fff] block text-[15px]"
                >
                  Home
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <Link
                  to={'add-new-coffee'}
                  href="javascript:void(0)"
                  className="hover:text-[#fff] font-semibold text-[#fff] block text-[15px]"
                >
                  Add New Coffee
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#fff] font-semibold text-[#fff] block text-[15px]"
                >
                  Feature
                </a>
              </li>
              <li className="text-[15px] max-lg:border-b max-lg:py-3">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#fff] font-semibold text-[#fff] block text-[15px]"
                >
                  Blog
                </a>
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
            <ul className="lg:flex lg:space-x-8 max-lg:space-y-2 max-lg:mt-2 ">
              <li className="max-lg:border-b max-lg:py-3">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#fff] font-semibold text-[#fff] block text-[15px]"
                >
                  About
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#fff] font-semibold text-[#fff] block text-[15px]"
                >
                  Contact
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#fff] font-semibold text-[#fff] block text-[15px]"
                >
                  Source
                </a>
              </li>
              <li className="text-[15px] max-lg:border-b max-lg:py-3">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#fff] font-semibold text-[#fff] block text-[15px]"
                >
                  Partner
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
