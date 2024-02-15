const Home = () => {
  return (
      <div className="relative h-screen overflow-hidden bg-indigo-900">
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
          <div className="relative z-10 flex flex-col items-center w-full">
            <h1 className="mt-4 font-extrabold leading-tight text-center text-white text-7xl sm:text-8xl">
              Life-changing<br />Job Onboarding
            </h1>
            <a
              href="/jobs"
              className="block px-4 py-3 mt-10 text-lg font-bold text-white uppercase bg-gray-800 hover:bg-gray-900"
            >
              Explore
            </a>
          </div>
        </div>
      </div>
  );
};

export default Home;
