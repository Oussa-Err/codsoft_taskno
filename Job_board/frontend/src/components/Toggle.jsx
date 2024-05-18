import useLocalStorage from "use-local-storage";

const Toggle = ({ handleIsDark }) => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  handleIsDark(isDark);

  return (
    <div className="absolute right-8 top-4 md:top-[25px] cursor-pointer z-50">
      <button
        className={`w-10 h-5 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow`}
        onClick={() => setIsDark(!isDark)}
        checked={isDark}
      >
        <div
          id="switch-toggle"
          className={`w-7 h-7 relative rounded-full transition duration-500 transform p-1 text-white ${
            isDark
              ? "translate-x-full bg-gray-700"
              : "-translate-x-2 bg-yellow-500 "
          }`}
        >
          {isDark ? <LightIcon /> : <DarkIcon />}
        </div>
      </button>
    </div>
  );
};

export default Toggle;

const LightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);

const DarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);
