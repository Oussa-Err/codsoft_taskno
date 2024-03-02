import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { createJobAction } from "../../redux/actions/jobAction";

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
      <div className="max-w-4xl mx-auto rounded-md shadow-md mt-32 ">
        <h1 className="text-4xl font-semibold capitalize">Create Job</h1>
        <form
          className="bg-[--primary-text-color] w-full p-6 rounded-md"
          onSubmit={formik.handleSubmit}
        >
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label htmlFor="title">Title</label>
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
              <label htmlFor="description">Description</label>
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
              <label htmlFor="salary">Salary</label>
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
              <label htmlFor="location">Location</label>
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
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminDashboard;
