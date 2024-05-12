import { useSelector } from "react-redux";

const History = () => {
  const { user } = useSelector((state) => state.userProfile);

  return (
    <div className="p-2 pt-10 sm:p-10 md:py-20  ">
      {user && user.role === 1 ? (
        <h1 className="mb-4 text-5xl md:p-4 font-bold tracking-tight">
          Applicants
        </h1>
      ) : (
        user && (
          <h1 className="mb-4 text-5xl md:p-4 font-bold tracking-tight">
            Applied Jobs
          </h1>
        )
      )}
      <div className="flex flex-auto md:flex-row gap-7">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {user && user.role === 0
            ? user.jobsHistory.map((job) => (
                <div
                  key={job.id}
                  className="max-w-sm md:p-2 border border-gray-100 sm:rounded-lg shadow bg-[--background-color] dark:border-gray-700 flex flex-col justify-between"
                >
                  <div className="flex items-center md:px-6 sm:py-3 bg-gray-900 ">
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
                      <PinLocationSVG />
                      <h1 className="px-2 text-sm">{job.location}</h1>
                    </div>
                  </div>
                </div>
              ))
            : user &&
              user.jobsHistory.map((applicant) => (
                <div
                  key={applicant.title}
                  className="max-w-sm sm:p-6 border border-gray-100 sm:rounded-lg shadow bg-[--background-color] dark:border-gray-700 flex flex-col justify-between"
                >
                  <div className="flex items-center md:px-6 md:py-3 bg-[--primary-background-color] rounded-md">
                    <h1 className="p-4 sm:p-0 text-lg font-semibold text-[--primary-text-color]">
                      <span className="text-green-800">
                        {applicant.fullName}
                      </span>
                      &nbsp; has applied for your job offer. You can reach them
                      at&nbsp;
                      <span className="text-green-800">{applicant.email}</span>
                    </h1>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

const PinLocationSVG = () => (
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
);

export default History;
