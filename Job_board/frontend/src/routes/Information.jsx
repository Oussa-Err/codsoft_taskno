import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { userUploadResume } from "../redux/actions/userAction";
import { SmallLoading } from "../Loading";

const validationSchema = yup.object().shape({
  resume: yup
    .mixed()
    .test("fileSize", "File size must be less than 3mb", (value) => {
      if (value) {
        return value.size <= 4145728;
      }
      return true;
    }),
});

const Information = () => {
  const { user } = useSelector((state) => state.userProfile);
  const { loading: resumeLoading } = useSelector((state) => state.userResume);
  const [selectedFile, setSelectedFile] = useState("");
  const dispatch = useDispatch();

  const uploadResume = async (resume) => {
    dispatch(userUploadResume(resume)).then(() => {
      window.location.reload();
    });
  };

  const formik = useFormik({
    initialValues: {
      resume: "",
    },
    validationSchema,
    onSubmit: (value) => {
      uploadResume(value);
    },
  });

  const handleChange = (e) => {
    setSelectedFile(e.target.files[0].name);
    formik.setFieldValue("resume", e.target.files[0]);
  };

  if (user && user.role === 1) {
    return (
      <div className="sm:p-4 flex flex-col justify-center items-center">
        <h1 className="mb-2 p-2 text-5xl md:p-4 font-bold tracking-tight">
          Personal info
        </h1>
        <div className="flex-1 max-w-sm p-6 bg-white border border-gray-200 md:rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div className="flex flex-col gap-7">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Full Name: {user.fullName}
            </h5>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Email: {user.email}
            </h5>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              status: Recruiter
            </h5>
          </div>
        </div>
      </div>
    );
  }
  if (user && user.role === 0) {
    return (
      <>
        <div className="sm:p-4 flex flex-col justify-center items-center">
          <h1 className="mb-2 p-2 text-5xl md:p-4 font-bold tracking-tight">
            Personal info
          </h1>
          <div className="flex-1 max-w-sm p-6 bg-white border border-gray-200 md:rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="flex flex-col gap-7">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Full Name: {user.fullName}
              </h5>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Email: {user.email}
              </h5>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                status: Job Seeker
              </h5>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Resume: {user?.resume?.originalName}
              </h5>
            </div>
            {user?.resume?.originalName ? (
              <h1 className="pt-8 text-green-500 text-sm">
                Resume uploded! Dream job is waiting ...
              </h1>
            ) : (
              <form
                className="max-w-lg mx-auto flex flex-col gap-4"
                onSubmit={formik.handleSubmit}
              >
                <label
                  htmlFor="resume_file"
                  className="flex flex-col items-center w-full max-w-lg p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl"
                >
                  <UploadFieldsetSVG />
                  {selectedFile ? (
                    <p className="text-white">{selectedFile}</p>
                  ) : (
                    <>
                      <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">
                        Resume File
                      </h2>
                      <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">
                        Upload or drag & drop your file PDF (3mb)
                      </p>
                    </>
                  )}
                  <input
                    className="hidden"
                    id="resume_file"
                    type="file"
                    accept=".pdf"
                    name="resume"
                    onChange={handleChange}
                    required
                  />
                </label>
                {formik.errors.resume && (
                  <p className="text-red-500">{formik.errors.resume}</p>
                )}
                <p className="mt-1 text-sm text-white">
                  A resume upload is necessary to confirm your application
                </p>
                <button
                  type="submit"
                  disabled={resumeLoading}
                  className={`inline-flex self-end h-9 items-center justify-center rounded-md bg-[#fb923c] px-4 py-2 text-sm font-medium text-white hover:text-[--secondary-text-color] hover:bg-[--foreground-color] shadow transition-colors  focus-visible:outline-none w-fit focus-visible:ring-1 ${
                    resumeLoading && "bg-gray-400 cursor-not-allowed"
                  }`}
                >
                  {resumeLoading ? (
                    <div>
                      <SmallLoading />
                      Uploading...
                    </div>
                  ) : (
                    "Upload"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </>
    );
  }
};

const UploadFieldsetSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-8 h-8 text-gray-500 dark:text-gray-400"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
    />
  </svg>
);

export default Information;
