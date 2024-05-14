import { Navbar, Footer } from "./components/index.js";
import useLocalStorage from "use-local-storage";
import Toggle from "./components/Toggle.jsx";

const Layout = (props) => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div
      className="w-full min-h-screen bg-[--background-color] flex flex-col justify-between transition-colors duration-300 transform"
      data-theme={isDark ? "dark" : "light"}
    >
      <Navbar />
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
