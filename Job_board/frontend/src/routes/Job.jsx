import { useParams } from "react-router-dom";
import { jobAction } from "../redux/actions/jobAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userApplyJobAction } from "../redux/actions/userAction";

const Job = () => {
  const { id } = useParams();
  const { job } = useSelector((state) => state.getJob);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jobAction(id));
  }, [dispatch, id]);

  const applyForJob = () => {
    dispatch(
      userApplyJobAction({
        title: job && job.title,
        description: job && job.description,
        salary: job && job.salary,
        location: job && job.location,
        recruiter: job && job.recruiter,
      })
    );
  };

  return (
    <div className=" flex items-center justify-center">
      <div className="max-w-full p-2 sm:rounded-lg shadow-l">
        {job && (
          <div
            key={job._id}
            className="max-w-sm md:p-6 border border-gray-100 sm:rounded-lg shadow bg-[--background-color] dark:border-gray-700"
          >
            <div className="flex items-center md:px-6 py-3 bg-gray-900">
              <h1 className="mx-3 text-lg font-semibold text-white">
                {job.title}
              </h1>
            </div>

            <div className="px-4 py-4">
              <p className="py-2 ">{job.description}</p>
              <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                <svg
                  aria-label="suitcase icon"
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 11H10V13H14V11Z" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
                  />
                </svg>
                <h1 className="px-2 text-sm">{job.salary}</h1>
              </div>

              <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                <svg
                  aria-label="location pin icon"
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="currentColor"
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
            <button
              onClick={applyForJob}
              className="inline-flex items-center mx-4 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Apply for this Job
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
            <p className="text-red-500 text-xs mx-4 mb-4 ">
              Make sure resume is uploaded
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Job;
