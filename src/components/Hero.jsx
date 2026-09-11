import bannerImg from "../assets/banner-stack.png";

function Hero() {
  return (
    <section id="home" className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Content */}
          <div className="space-y-5 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Build Your Ideal <br />
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="text-sm sm:text-base text-gray-500 max-w-md mx-auto md:mx-0 leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 pt-2">
              <a
                href="#technologies"
                className="w-full sm:w-auto text-center px-5 py-2.5 rounded-lg text-white font-medium text-sm bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 hover:opacity-95 shadow-sm transition duration-200"
              >
                Explore Technologies
              </a>

              <a
                href="#about"
                className="w-full sm:w-auto text-center px-5 py-2.5 rounded-lg font-medium text-sm text-gray-700 border border-gray-200 hover:border-[#B341C3] hover:text-[#B341C3] transition duration-200"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={bannerImg}
              alt="Development Stack Banner"
              className="w-full max-w-sm lg:max-w-md object-contain drop-shadow-md"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;