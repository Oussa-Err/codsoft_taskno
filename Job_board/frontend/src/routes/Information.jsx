import { useSelector } from "react-redux";

const Information = () => {
  const { user } = useSelector((state) => state.userProfile);

  return (
    <div>
      <div className="sm:p-4 flex flex-col justify-center items-center">
        <h1 className="mb-2 p-2 text-5xl md:p-4 font-bold tracking-tight">
          Personal info
        </h1>
        <div
          className="flex-1 max-w-sm p-6 bg-white border border-gray-200 md:rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col gap-7">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Full Name: {user && user.fullName}
            </h5>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Email: {user && user.email}
            </h5>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              status: {user && user.role === 0 ? "User" : "Admin"}
            </h5>
          </div>
          <form className="max-w-lg mx-auto flex flex-col gap-4">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-gray-500 dark:text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
              <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">
                Resume File
              </h2>
              <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">
                Upload or drag & drop your file JPG
              </p>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
            <p className="mt-1 text-sm text-white">
              A resume upload is necessary to confirm your application
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Information;
