const Footer = () => {
  return (
    <div>
      <footer className="rounded-lg shadow ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="/"
              className="flex items-center mb-4 sm:mb-0 text-6xl"
            >
              <span className="self-center text-[#fb923c] text-5xl font-serif  whitespace-nowrap">
                Err.
              </span>
            </a>
          </div>
          <hr className="my-6 sm:mx-autolg:my-8" />
          <p className="block text-sm  sm:text-center ">
            © 2024 &nbsp;
            <a href="https://oussamaerr.vercel.app/" className="hover:underline">
             <span className="text-[#fb923c]">Err.</span>
            </a>
            . All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
