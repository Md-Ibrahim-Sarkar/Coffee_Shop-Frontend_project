import icon1 from '../../assets/images/icons/1.png';
import icon2 from '../../assets/images/icons/2.png';
import icon3 from '../../assets/images/icons/3.png';
import icon4 from '../../assets/images/icons/4.png';

function Facilitice() {
  return (
    <div className="bg-[#f5f0e6] py-12 container mx-auto ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-11">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <img src={icon1} alt="" />
            <h3 className="mt-4 text-2xl font-bold text-[#4b2e2e] font-RanchoFont">
              Awesome Aroma
            </h3>
            <p className="mt-2 text-[#4b2e2e] ">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div>
            <img src={icon2} alt="" />
            <h3 className="mt-4 text-2xl font-bold text-[#4b2e2e] font-RanchoFont">
              High Quality
            </h3>
            <p className="mt-2 text-[#4b2e2e] ">
              We served the coffee to you maintaining the best quality
            </p>
          </div>
          <div>
            <img src={icon3} alt="" />
            <h3 className="mt-4 text-2xl font-bold text-[#4b2e2e] font-RanchoFont">
              Pure Grades
            </h3>
            <p className="mt-2 text-[#4b2e2e] ">
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
          <div>
            <img src={icon4} alt="" />
            <h3 className="mt-4 text-2xl font-bold text-[#4b2e2e] font-RanchoFont">
              Proper Roasting
            </h3>
            <p className="mt-2 text-[#4b2e2e]">
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facilitice;
