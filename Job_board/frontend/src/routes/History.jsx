import { useSelector } from "react-redux";

const History = () => {
  const { user } = useSelector((state) => state.userProfile);

  return (
    <div className="p-4 sm:ml-64 pt-28">
      <h1 className="mb-4 text-5xl md:p-4 font-bold tracking-tight">
        Applied Jobs
      </h1>
      <div className="flex flex-col md:flex-row gap-7">
        <div className="flex-1 max-w-sm md:p-6  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          {user && user.role === 0 ?
            user.jobsHistory.map((job) => (
              <div
                key={job.id}
                className="max-w-sm md:p-6 border border-gray-100 rounded-lg shadow bg-[--background-color] dark:border-gray-700 flex flex-col justify-between"
              >
                <div className="flex items-center px-6 py-3 bg-gray-900 rounded-md">
                  <h1 className="mx-3 p-3 text-lg font-semibold text-white">
                    {job.title}
                  </h1>
                </div>

                <div className="px-6 py-4">
                  <p className="py-2 ">{job.description.slice(0, 30)}...</p>
                  <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <p className="text-sm">Salary: ${job.salary}</p>
                  </div>

                  <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <svg
                      aria-label="location pin icon"
                      className="w-6 h-6 fill-current  text-[--primary-text-color]"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"
                      />
                    </svg>
                    <h1 className="px-2 text-sm">{job.location}</h1>
                  </div>
                </div>
              </div>
            ))
             :
            user && ( 
              user.jobsHistory.map((applicant) => (
                <div
                  key={applicant.title}
                  className="max-w-sm md:p-6 border border-gray-100 rounded-lg shadow bg-[--background-color] dark:border-gray-700 flex flex-col justify-between"
                >
                  <div className="flex items-center px-6 py-3 bg-gray-900 rounded-md">
                    <h1 className="mx-3 p-3 text-lg font-semibold text-white">
                    {applicant.fullName} has applied for your job offer. You can reach them at {applicant.email}
                    </h1>
                  </div>
                </div>
              ))
            )
          }
        </div>
      </div>
    </div>
  );
};

export default History;
