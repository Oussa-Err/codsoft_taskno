const Home = () => {
  return (
    <section className="hero relative h-screen overflow-hidden bg-[url('/src/assets/hr.png')]">
      <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
        <div className="relative z-10 flex flex-col items-center w-full">
          <h1 className="mt-4 text-white font-extrabold leading-tight text-center white text-7xl sm:text-8xl">
            Life-changing
            <br />
            Job Onboarding
          </h1>
          <a
            href="/jobs"
            className="px-4 py-3 mt-10 text-lg font-bold white uppercase bg-[--toggle-fg] hover:bg-[--toggle-fg]"
          >
            Explore
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
