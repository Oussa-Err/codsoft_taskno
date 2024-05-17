import { useSelector } from "react-redux";

const Dashboard = () => {
  const { user } = useSelector((state) => state.userProfile);
  
  return (
    <>
      <div className="p-2 sm:ml-64 pt-28 h-[80dvh]">
        <h1 className="mb-2 text-5xl md:p-4 font-bold tracking-tight">
          Dashboard
        </h1>
        <div className="flex flex-col md:flex-row gap-7 ">
          <div className="flex-1 max-w-sm p-6 bg-white border border-gray-200 sm:rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Member since:
            </h5>
            {user && (
              <div>
                <p className="text-gray-400">
                  {new Date(user.createdAt).toDateString()}
                </p>
              </div>
            )}
          </div>
          <div className="flex-1 max-w-sm p-6 bg-white border border-gray-200 sm:rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            {user && user.role === 1 ? (
              <span className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Applications Received
              </span>
            ) : (
              <span className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Applied Jobs
              </span>
            )}
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {user && user.jobsHistory.length}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
