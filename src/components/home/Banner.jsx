/* eslint-disable react/no-unescaped-entities */
import banner from '../../assets/images/more/3.png';

function Banner() {
  return (
    <div className="max-h-[700px]">
      <div className="relative h-screen flex items-center justify-center">
        <img
          src={banner}
          alt="A glass cup filled with coffee beans on a wooden surface"
          className="absolute inset-0 w-full max-h-[700px] max-w-full h-auto  object-cover "
        />
        <div className="absolute top-[20%] max-[420px]:top-3  z-10 text-center max-w-2xl mx-auto">
          <h1 className="title max-[420px]:text-[22px] text-3xl text-white font-RanchoFont sm:text-4xl md:text-5xl lg:text-6xl sm:mb-4">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <div className="flex justify-center">
            <p className="text-base max-[420px]:text-[10px] text-white max-[420px]:leading-3 max-[420px]:max-w-[350px]  sm:text-lg md:text-xl mb-2">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
          </div>
          <button className="bg-yellow-500 hover:bg-transparent hover:border hover:border-yellow-500 hover:text-white duration-300 text-black max-[420px]:px-2 max-[420px]:py-1 font-RanchoFont px-4 py-2 sm:px-6 sm:py-3 rounded-full text-base sm:text-lg md:text-xl">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
