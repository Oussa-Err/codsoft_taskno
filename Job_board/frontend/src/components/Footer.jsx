const Footer = () => {
  return (
    <footer className="shadow bg-[--background-color]">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <hr className="my-6 sm:mx-autolg:my-8" />
        <p className="block text-sm text-center ">
          © {new Date().getFullYear()} &nbsp;
          <a href="https://oussamaerr.vercel.app/" className="hover:underline">
            <span className="text-[#fb923c]">Err.</span>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
