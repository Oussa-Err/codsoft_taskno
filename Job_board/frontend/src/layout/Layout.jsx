import { Navbar, Footer } from "../components/index.js";
import useLocalStorage from "use-local-storage";
import Toggle from "../components/Toggle";

const Layout = (props) => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div
      className="w-full h-screen bg-[--background-color]"
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
