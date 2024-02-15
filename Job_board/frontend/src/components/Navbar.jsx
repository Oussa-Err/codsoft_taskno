const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <nav className="container px-6 py-4 mx-auto md:px-12">
        <div className="items-center justify-center md:flex">
          <div className="flex items-center justify-between">
            <div className="md:hidden">
              <button className="focus:outline-none">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="items-center hidden md:flex">
            <a
              href="/"
              className="mx-3 text-lg uppercase cursor-pointer"
            >
              Home
            </a>
            <a
              href="/jobs"
              className="mx-3 text-lg uppercase cursor-pointer"
            >
              Jobs
            </a>
            <a
              href="/dashboar"
              className="mx-3 text-lg uppercase cursor-pointer"
            >
              Dashboard
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
