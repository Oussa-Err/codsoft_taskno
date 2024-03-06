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

    if (!scroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const loggedInUser = JSON.parse(localStorage.getItem("userInfo"));
  useEffect(() => {
    if (loggedInUser) {
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
    <header className="shadow-sm shadow-[--primary-text-color]">
      <nav className="container px-8 py-4 mx-auto md:px-16">
        <div className="flex justify-between">
          <div className="flex items-center justify-between">
            <div className="hidden md:flex sm:items-center sm:justify-between">
              <a href="/" className="flex items-center mb-4 sm:mb-0 text-6xl">
                <span className="self-center text-[#fb923c] text-5xl font-serif  whitespace-nowrap">
                  Jobify..
                </span>
              </a>
            </div>
            <div className="flex items-center md:hidden">
              {toggleMenu ? (
                <FontAwesomeIcon
                  icon={faClose}
                  size="2x"
                  className="relative z-50 text-[--primary-text-color] cursor-pointer "
                  onClick={() => {
                    setToggle(false);
                    checkScroll();
                  }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBars}
                  size="xl"
                  className="cursor-pointer text-[--primary-text-color] "
                  onClick={() => {
                    setToggle(true);
                    checkScroll();
                  }}
                />
              )}
              {toggleMenu && (
                <div
                  className={`bg-[--background-color] text-[--primary-text-color] absolute inset-0 z-40 h-screen animate-bg-toggle`}
                >
                  <ul
                    className={`h-full flex flex-col text-2xl items-center justify-center gap-8 transition ease-in-out  duration-300 group`}
                  >
                    {!loggedInUser ? (
                      <>
                        <li>
                          <a
                            className="cursor-pointer"
                            href="/"
                            onClick={() => {
                              setToggle(!toggleMenu);
                              checkScroll();
                            }}
                          >
                            Home
                          </a>
                        </li>
                        <li>
                          <a
                            className="cursor-pointer"
                            href="/login"
                            onClick={() => {
                              setToggle(!toggleMenu);
                              checkScroll();
                            }}
                          >
                            Log In
                          </a>
                        </li>
                        <li>
                          <a
                            href="/signup"
                            onClick={() => {
                              setToggle(!toggleMenu);
                              checkScroll();
                            }}
                          >
                            Register
                          </a>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <a
                            href="/"
                            onClick={() => {
                              setToggle(!toggleMenu);
                              checkScroll();
                            }}
                          >
                            Home
                          </a>
                        </li>
                        <li>
                          <a
                            href="/information"
                            onClick={() => {
                              setToggle(!toggleMenu);
                              checkScroll();
                            }}
                          >
                            view profile
                          </a>
                        </li>
                        <li>
                          <a
                            href="/user/dashboard"
                            onClick={() => {
                              setToggle(!toggleMenu);
                              checkScroll();
                            }}
                          >
                            Dashboard
                          </a>
                        </li>
                        {loggedInUser.role === 1 && (
                          <li>
                            <a
                              href="/recruiter/dashboard"
                              onClick={() => {
                                setToggle(!toggleMenu);
                                checkScroll();
                              }}
                            >
                              Recruiter Dashboard
                            </a>
                          </li>
                        )}
                        <li>
                          <a
                            href="/signup"
                            onClick={() => {
                              setToggle(!toggleMenu);
                              checkScroll();
                            }}
                          >
                            Register
                          </a>
                        </li>
                        <li>
                          <a
                            href="/History"
                            onClick={() => {
                              setToggle(!toggleMenu);
                              checkScroll();
                            }}
                          >
                            Applied Jobs
                          </a>
                        </li>

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
            <a href="/" className="mx-3 text-lg uppercase cursor-pointer">
              Home
            </a>
            <a href="/signup" className="mx-3 text-lg uppercase cursor-pointer">
              Register
            </a>
          </div>
          <div className="hidden md:block relative">
            <button
              className="object-cover w-19 h-19 rounded-full ring relative z-10 block p-2 text-gray-700 bg-white border border-transparent dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none"
              onClick={handleClick}
            >
              <img
                className="object-cover w-12 h-12 rounded-full ring"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
                alt=""
              />
            </button>
            {isOpen && (
              <div
                className={
                  "absolute right-0 z-20 w-48 py-2 mt-2 origin-top-right bg-white rounded-md shadow-xl dark:bg-gray-800"
                }
              >
                {!loggedInUser ? (
                  <a
                    href="/login"
                    className="cursor-pointer block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Log In
                  </a>
                ) : (
                  <>
                    <a
                      href="/information"
                      className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      view profile
                    </a>

                    <a
                      href="/user/dashboard"
                      className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      User Dashboard
                    </a>
                    <a
                      href="/recruiter/dashboard"
                      className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Recruiter Dashboard
                    </a>
                    <a
                      href="/history"
                      className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Applied Jobs
                    </a>
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

export default Navbar;
