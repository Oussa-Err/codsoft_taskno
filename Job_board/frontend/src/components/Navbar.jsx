import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

import {
  userLogoutAction,
  userProfileAction,
} from "../redux/actions/userAction";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [toggleMenu, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);

  const checkScroll = () => {
    setScroll(!scroll);
    document.body.style.overflow = scroll ? "" : "hidden";
  };

  const loggedInUser = JSON.parse(localStorage.getItem("userInfo"));
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userInfo"))) {
      dispatch(userProfileAction());
    }
  }, [dispatch]);

  const logOutUser = () => {
    dispatch(userLogoutAction()).then(() => {
      window.location.reload();
    });
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      data-testid="navbar"
      className="shadow-sm shadow-[--primary-text-color]"
    >
      <nav className="container px-8 py-4 mx-auto md:px-16">
        <div className="flex justify-between">
          <div className="flex items-center justify-between">
            <div className="hidden md:flex sm:items-center sm:justify-between">
              <a href="/" className="flex items-center mb-4 sm:mb-0 text-6xl">
                <BriefcaseIconSVG className="h-7 w-7 mr-4 text-[#fb923c]" />
                <span className="self-center text-[#fb923c] text-5xl font-serif  whitespace-nowrap">
                  Jobify
                </span>
              </a>
            </div>
            <div className="flex items-center md:hidden">
              {toggleMenu ? (
                <FontAwesomeIcon
                  icon={faClose}
                  size="2x"
                  className="relative z-50 text-[--primary-text-color]"
                  onClick={() => {
                    setToggle(false);
                    checkScroll();
                  }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBars}
                  size="xl"
                  className="text-[--primary-text-color]"
                  onClick={() => {
                    setToggle(true);
                    checkScroll();
                  }}
                />
              )}
              {toggleMenu && (
                <div className="bg-[--background-color] text-[--primary-text-color] absolute inset-0 z-40 h-screen animate-bg-toggle">
                  <ul className="h-full flex flex-col text-2xl items-center justify-center gap-8 transition ease-in-out duration-300 group">
                    {!loggedInUser ? (
                      <>{signedOutUserSections.map(sectionMapper)}</>
                    ) : (
                      <>
                        {signedInUserSections.map(sectionMapper)}
                        <li>
                          <a
                            onClick={() => {
                              setToggle(!toggleMenu);
                              checkScroll();
                              logOutUser();
                            }}
                          >
                            Log out
                          </a>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="items-center hidden md:flex backdrop-blur-3xl backdrop-brightness-200">
            {signedOutUserSections.map((el, index) => (
              <a
                key={index}
                href={el.href}
                className="block px-4 py-3 capitalize transition-colors duration-300 transform text-[--primary-text-color] bg-[--background-color] hover:bg-[--foreground-color] hover:text-[--secondary-text-color]"
              >
                {el.name}
              </a>
            ))}
          </div>
          <div className="hidden md:block relative">
            {loggedInUser && (
              <button
                className="object-cover w-19 h-19 rounded-full ring relative z-10 block p-2 border border-transparent focus:border-blue-500 focus:ring-opacity-40 focus:ring-blue-300 focus:ring focus:outline-none bg-white"
                onClick={handleClick}
              >
                <UserIconSVG className="text-white" />
              </button>
            )}
            {isOpen && (
              <div className="absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800">
                {loggedInUser && (
                  <>
                    {signedInUserSections.map((el, index) => (
                      <a
                        key={index}
                        href={el.href}
                        className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        {el.name}
                      </a>
                    ))}
                    <hr className="border-gray-200 dark:border-gray-700 " />
                    <a
                      onClick={logOutUser}
                      className="cursor-pointer block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Log out
                    </a>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

const sectionMapper = (el, index) => (
  <li key={index}>
    <a
      className="cursor-pointer"
      href={el.href}
      onClick={() => {
        setToggle(!toggleMenu);
        checkScroll();
      }}
    >
      {el.name}
    </a>
  </li>
);

const UserIconSVG = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    width="32"
    height="32"
    stroke="currentColor"
  >
    <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
  </svg>
);

const signedOutUserSections = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Log in",
    href: "/login",
  },
  {
    name: "Register",
    href: "/signup",
  },
];

const signedInUserSections = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Dashboard",
    href: "/user/dashboard",
  },
  {
    name: "Recruiter Dashboard",
    href: "/recruiter/dashboard",
  },
  {
    name: "History",
    href: "/history",
  },
  {
    name: "View profile Info",
    href: "/information",
  },
];

function BriefcaseIconSVG(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

export default Navbar;
