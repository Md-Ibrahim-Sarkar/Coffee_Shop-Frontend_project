import coffee1 from '../../assets/images/cups/Rectangle 9.png';
import coffee2 from '../../assets/images/cups/Rectangle 10.png';
import coffee3 from '../../assets/images/cups/Rectangle 11.png';
import coffee4 from '../../assets/images/cups/Rectangle 12.png';
import coffee5 from '../../assets/images/cups/Rectangle 13.png';
import coffee6 from '../../assets/images/cups/Rectangle 14.png';
import coffee7 from '../../assets/images/cups/Rectangle 15.png';
import coffee8 from '../../assets/images/cups/Rectangle 16.png';

function FollowOnIns() {
  return (
    <div>
      <div className="text-center py-11">
        <p>Follow Us Now</p>
        <h2 className="font-RanchoFont text-4xl">Follow on Instagram</h2>
      </div>

      <div className="container mx-auto p-4 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-screen-lg ">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={coffee1}
              alt="http static"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={coffee2}
              alt="http static"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={coffee3}
              alt="http static"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={coffee4}
              alt="http static"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={coffee5}
              alt="http static"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={coffee6}
              alt="http static"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={coffee7}
              alt="http static"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={coffee8}
              alt="http static"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FollowOnIns;
