import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  fullName: yup
    .string("Enter your Full Name")
    .min(3, "Full name should be of minimum 4 characters length"),
  email: yup.string("Enter your email").email("Enter a valid email"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length"),
  createdOn: yup.date().default(function () {
    return new Date();
  }),
});

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      actions.resetForm();
    },
  });

  return (
    <div className="mdp-4 flex items-center justify-center h-[80dvh]">
      <div className="w-full max-w-sm p-4  border rounded-lg shadow sm:p-6 md:p-8 bg-[--background-color] border-gray-700">
        <form onSubmit={formik.handleSubmit} className="space-y-6" action="#">
          <h5 className="text-xl font-medium">Register to our platform</h5>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium  ">
              Full Name
            </label>
            <input
              type="name"
              name="fullName"
              id="fullName"
              className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="your name"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium  ">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium  "
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign Up
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-600">
            Already have an account?
            <a
              href="/login"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Log In
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
