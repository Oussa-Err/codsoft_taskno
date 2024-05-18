import { Navbar, Footer } from "./components/index.js";
import { useSelector } from "react-redux";
import SideBar from "./components/SideBar.jsx";
import { useState } from "react";

const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.userProfile);
  const [theme, setTheme] = useState(true)
  
  return (
    <div
      className="w-full overflow-hidden min-h-screen bg-[--background-color] flex flex-col justify-between transition-colors duration-300 transform"
      data-theme={theme ? "dark" : "light"}
    >
      {user && <SideBar />}
      <Navbar handleIsDark={setTheme} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
