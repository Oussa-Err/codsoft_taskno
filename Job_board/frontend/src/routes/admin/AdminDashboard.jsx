import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { createJobAction } from "../../redux/actions/jobAction";
import { SmallLoading } from "../../Loading";

const validationSchema = yup.object().shape({
  title: yup
    .string("Enter job title")
    .required("Title is required")
    .min(4, "Title should be of minimum 4 characters length"),
  description: yup
    .string("Enter a description")
    .min(6, "Description should be of minimum 6 characters length")
    .required("Description is required"),
  salary: yup.number("Enter a salary").required("Salary is required"),
  location: yup.string("Enter a location").required("Location is required"),
});

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.createJob);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      salary: "",
      location: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      dispatch(createJobAction(values));
      actions.resetForm();
    },
  });

  return (
    <>
      <div className="max-w-4xl sm:px-16 mx-auto rounded-md shadow-lg px-2 ">
        <h1 className="text-3xl pt-4 font-semibold capitalize">
          Create Job Postings Here!
        </h1>
        <form
          className="bg-[--background-color] w-full p-6 md:rounded-md"
          onSubmit={formik.handleSubmit}
        >
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label htmlFor="title" className="text-[--primary-text-color]">
                Title
              </label>
              <input
                className="block w-full px-4 py-2 mt-2  border border-gray-950 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.title}
                required
              />
              {formik.errors.title && (
                <div className="text-sm text-red-500">
                  {formik.errors.title}
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="description"
                className="text-[--primary-text-color]"
              >
                Description
              </label>
              <input
                className="block w-full px-4 py-2 mt-2  border border-gray-950 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                id="description"
                name="description"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.description}
                required
              />
              {formik.errors.description && (
                <div className="text-sm text-red-500">
                  {formik.errors.description}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="salary" className="text-[--primary-text-color]">
                Salary
              </label>
              <input
                className="block w-full px-4 py-2 mt-2  border border-gray-950 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                name="salary"
                id="salary"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.salary}
                required
              />
              {formik.errors.salary && (
                <div className="text-sm text-red-500">
                  {formik.errors.salary}
                </div>
              )}
            </div>

            <div>
              <label htmlFor="location" className="text-[--primary-text-color]">
                Location
              </label>
              <input
                id="location"
                type="text"
                name="location"
                onChange={formik.handleChange}
                value={formik.values.location}
                className="block w-full px-4 py-2 mt-2  border border-gray-950 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                required
              />
              {formik.errors.location && (
                <div className="text-sm text-red-500">
                  {formik.errors.location}
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              disabled={loading}
              className={`font-bold inline-flex h-9 items-center justify-center bg-[#fb923c] px-4 py-2 text-sm text-white hover:text-[--secondary-text-color] hover:bg-[--foreground-color] shadow transition-colors  focus-visible:outline-none w-fit focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 ${
                loading && "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {loading ? (
                <div>
                  <SmallLoading />
                  Saving...
                </div>
              ) : (
                "Save"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminDashboard;
