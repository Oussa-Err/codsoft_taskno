import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { jobsAction } from "../redux/actions/jobAction";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Loading } from "../Loading";

export default function Jobs() {
  const { jobs, pages, loading } = useSelector((state) => state.getJobs);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { keyword } = useParams();

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(jobsAction(page, keyword));
  }, [page, keyword]);

  const refreshSearch = () => {
    navigate("/jobs");
  };

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values, actions) => {
      const { search } = values;
      if (search.trim()) {
        navigate(`/search/${search}`);
      } else {
        navigate("/");
      }
      actions.resetForm();
    },
  });
  const pageNumbers = [];

  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="hero bg-cover bg-center sm:bg-[url('/src/assets/interview-banner.jpg')] md:min-h-[400px] h-[30vh] flex items-center">
        <div className="max-w-md mx-auto">
          <button
            onClick={refreshSearch}
            className="w-fit bg-transparent text-[--primary-text-color] sm:text-white focus:outline-none font-medium text-sm px-5 py-2.5 text-center"
          >
            Refresh
          </button>
          <form onSubmit={formik.handleSubmit}>
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <SearchSVG />
              </div>
              <input
                type="search"
                id="job-search"
                name="search"
                value={formik.values.search}
                onChange={formik.handleChange}
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Jobs..."
                required
              />
              <button
                type="submit"
                className="text-white font-bold absolute end-2.5 bottom-2.5 inline-flex h-9 items-center justify-center rounded-md bg-[#fb923c] px-4 py-2 text-sm hover:text-[--secondary-text-color] hover:bg-[--foreground-color] shadow transition-colors  focus-visible:outline-none w-fit focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        {!loading ? (
          <div>
            <div
              id="jobs"
              className="mt-8 px-2  grid gap-4 mx-auto max-w-screen-lg justify-center md:grid-cols-2 lg:grid-cols-3"
            >
              {jobs &&
                jobs.map((job) => (
                  <div
                    key={job.id}
                    className="max-w-sm p-4 md:p-6 border border-gray-100 sm:rounded-lg shadow bg-[--background-color] dark:border-gray-700 flex flex-col justify-between"
                  >
                    <div className="flex items-center px-6 py-3 bg-gray-900 rounded-md">
                      <h1 className="mx-3 text-lg font-semibold text-white">
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
                    <a
                      href={`/job/${job.id}`}
                      className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:text-[--secondary-text-color] hover:bg-[--foreground-button-bg-color] shadow transition-colors  focus-visible:outline-none w-fit focus-visible:ring-1 "
                    >
                      Read more
                      <ReadMoreSVG />
                    </a>
                  </div>
                ))}
            </div>
            <div className="flex justify-center my-4">
              {pageNumbers.map((number) => (
                <button
                  href="#jobs"
                  key={number}
                  onClick={() => setPage(number)}
                  className={`mx-1 px-3 py-1 rounded-lg ${
                    page === number
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {number}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="pt-8">
            <Loading />
          </div>
        )}
      </div>
    </>
  );
}

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

const SearchSVG = () => (
  <svg
    className="w-4 h-4 text-gray-500 dark:text-gray-400"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
    />
  </svg>
);

const ReadMoreSVG = () => (
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
);
