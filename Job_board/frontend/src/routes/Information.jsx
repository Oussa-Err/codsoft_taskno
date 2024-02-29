import { useSelector } from "react-redux";

const Information = () => {
  const { user } = useSelector((state) => state.userProfile);

  return (
    <div>
      <div className="p-4 sm:ml-64 pt-28 h-[80dvh]">
        <h1 className="mb-2 text-5xl md:p-4 font-bold tracking-tight">
          Personal info
        </h1>
        <div
          href="#"
          className="flex-1 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col gap-7">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Full Name: {user && user.fullName}
            </h5>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Email: {user && user.email}
            </h5>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              status: {user && user.role === 0 ? "user" : "Admin"}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
