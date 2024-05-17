import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  userLogoutAction,
  userProfileAction,
} from "../redux/actions/userAction";

const SideBar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userProfile);

  useEffect(() => {
    dispatch(userProfileAction());
  }, []);

  const logOutUser = () => {
    dispatch(userLogoutAction());
    window.location.reload(true);
  };

  return (
    <div className="h-[83dvh] fixed place-content-center">
      {!sideBarOpen && (
        <div
          className="px-3 py-4 bg-[--foreground-color] rounded-e-lg "
          onClick={() => setSideBarOpen(!sideBarOpen)}
        >
          <SideBarOpenSVG />
        </div>
      )}
      <aside
        className={`fixed left-0 z-50 w-fit transition-transform duration-500 md:flex ${
          sideBarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-3 py-4 overflow-y-auto bg-[--foreground-color] w-54 h-[50%] rounded-e-lg">
          <div onClick={() => setSideBarOpen(!sideBarOpen)}>
            <SideBarClosedSVG />
          </div>
          <div>
            <ul>
              <li>
                <a
                  href="/user/dashboard"
                  className="flex mt-4 items-center p-2 text-[--secondary-text-color] rounded-lg hover:text-[--primary-text-color] hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <DashboardIconSVG />
                  <span className="ms-3 group-hover:text-white">Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="/history"
                  className="flex items-center p-2 text-[--secondary-text-color] rounded-lg hover:text-[--primary-text-color] hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <JobApplicationIconSVG />
                  {user && user.role === 1 ? (
                    <span className="flex-1 ms-3 whitespace-nowrap group-hover:text-white">
                      Applications Received
                    </span>
                  ) : (
                    <span className="flex-1 ms-3 whitespace-nowrap group-hover:text-white">
                      Applied Jobs
                    </span>
                  )}
                </a>
              </li>
              <li>
                <a
                  href="/information"
                  className="flex items-center p-2 text-[--secondary-text-color] rounded-lg hover:text-[--primary-text-color] hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <UserIconSVG />
                  <span className="ms-3 group-hover:text-white">
                    View profile
                  </span>
                </a>
              </li>
            </ul>
            <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
              <li>
                <a
                  onClick={logOutUser}
                  className="cursor-pointer flex items-center p-2 text-[--secondary-text-color] hover:text-[--primary-text-color] transition duration-75 rounded-lg dark:hover:bg-gray-700 group"
                >
                  <SignoutIconSVG />
                  <span className="ms-3 group-hover:text-white">Sign out</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;

const UserIconSVG = (props) => (
  <svg
    {...props}
    fill="currentColor"
    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    width="24"
    height="24"
    stroke="currentColor"
  >
    <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
  </svg>
);

const SignoutIconSVG = () => (
  <svg
    fill="currentColor"
    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    height="64px"
    width="64px"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 384.971 384.971"
    xmlSpace="preserve"
    transform="matrix(-1, 0, 0, 1, 0, 0)"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="#CCCCCC"
      strokeWidth="2.309826"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <g>
        <g id="Sign_Out">
          <path d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03 C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03 C192.485,366.299,187.095,360.91,180.455,360.91z"></path>
          <path d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279 c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179 c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"></path>
        </g>
      </g>
    </g>
  </svg>
);

const JobApplicationIconSVG = () => (
  <svg
    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 18 20"
  >
    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
  </svg>
);

const DashboardIconSVG = () => (
  <svg
    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 22 21"
  >
    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
  </svg>
);

const SideBarOpenSVG = (props) => (
  <svg
    {...props}
    className="w-7 h-7 cursor-pointer fill-[--secondary-text-color]"
    fill="#00000"
    height="32px"
    width="32px"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 329.999 329.999"
    xmlSpace="preserve"
    transform="matrix(-1, 0, 0, 1, 0, 0)"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <g id="XMLID_500_">
        <path
          id="XMLID_501_"
          d="M314.999,270H15c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h299.999c8.284,0,15-6.716,15-15 C329.999,276.716,323.284,270,314.999,270z"
        ></path>
        <path
          id="XMLID_502_"
          d="M314.999,210h-150c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h150c8.284,0,15-6.716,15-15 C329.999,216.716,323.284,210,314.999,210z"
        ></path>
        <path
          id="XMLID_503_"
          d="M314.999,150h-150c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h150c8.284,0,15-6.716,15-15 C329.999,156.716,323.284,150,314.999,150z"
        ></path>
        <path
          id="XMLID_504_"
          d="M15,60h299.999c8.284,0,15-6.716,15-15s-6.716-15-15-15H15C6.716,30,0,36.716,0,45S6.716,60,15,60z"
        ></path>
        <path
          id="XMLID_505_"
          d="M314.999,90h-150c-8.284,0-15,6.716-15,15s6.716,15,15,15h150c8.284,0,15-6.716,15-15 S323.284,90,314.999,90z"
        ></path>
        <path
          id="XMLID_506_"
          d="M64.393,94.393l-59.999,60c-5.858,5.858-5.858,15.355,0,21.213l59.999,60 c2.87,2.87,6.705,4.394,10.61,4.394c1.932,0,3.881-0.374,5.737-1.142c5.605-2.322,9.26-7.791,9.26-13.858V105 c0-6.067-3.655-11.537-9.26-13.858C75.134,88.82,68.682,90.103,64.393,94.393z"
        ></path>
      </g>
    </g>
  </svg>
);

const SideBarClosedSVG = (props) => (
  <svg
    className="cursor-pointer fill-[--secondary-text-color] flex-shrink-0 w-5 h-5"
    width="24px"
    height="24px"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"></path>
    </g>
  </svg>
);
