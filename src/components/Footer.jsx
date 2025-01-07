import backgroundImage from '../assets/footerback.png';
import backgroundfooter from '../assets/footercopy.png';
import logo from '../assets/logo.png';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaSquareInstagram } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';
function Footer() {
  return (
    <div
      className="bg-cover bg-center "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center p-10 md:p-20  bg-opacity-90">
          <div className="flex flex-col items-center md:items-start md:w-1/2 mb-10 md:mb-0">
            <img src={logo} alt="Espresso Emporium Logo" className="mb-4" />
            <h1 className="text-3xl text-black font-bold text-brown-800 mb-4">
              Espresso Emporium
            </h1>
            <p className="text-center md:text-left mb-4">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-brown-800">
                <FaFacebookSquare className="w-11 h-11" />
              </a>
              <a href="#" className="text-brown-800">
                <FaSquareXTwitter className="w-11 h-11" />
              </a>
              <a href="#" className="text-brown-800">
                <FaSquareInstagram className="w-11 h-11" />
              </a>
              <a href="#" className="text-brown-800">
                <FaLinkedin className="w-11 h-11" />
              </a>
            </div>
            <h2 className="text-2xl font-bold text-brown-800 mb-4">
              Get in Touch
            </h2>
            <div className="flex items-center mb-2 space-x-3">
              <FaPhoneAlt className="w-9 h-6" />
              <span>+88 01533 333 333</span>
            </div>
            <div className="flex items-center mb-2 space-x-3">
              <IoMdMail className="w-9 h-6" />
              <span>info@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaLocationDot className="w-9 h-6" />
              <span>72, Wall street, King Road, Dhaka</span>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <h2 className="text-2xl font-bold text-brown-800 mb-4 text-center md:text-left">
              Connect with Us
            </h2>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="p-2 border border-gray-300 rounded w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-2 border border-gray-300 rounded w-full"
              />
              <textarea
                placeholder="Message"
                className="p-2 border border-gray-300 rounded h-32 w-full"
              ></textarea>
              <button
                type="submit"
                className="self-center md:self-start bg-brown-800 bg-white hover:bg-[#331A15] duration-300 hover:text-white  py-3 px-6  rounded-full border border-[#331A15]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        className="bg-cover bg-center "
        style={{ backgroundImage: `url(${backgroundfooter})` }}
      >
        <p className="text-center font-RanchoFont text-[24px] text-white">
          Copyright Espresso Emporium ! All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
