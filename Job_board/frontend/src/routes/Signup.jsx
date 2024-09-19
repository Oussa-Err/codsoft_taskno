import { userSignUpAction } from "../redux/actions/userAction";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { SmallLoading } from "../Loading";

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
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.signUp);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      role: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      dispatch(userSignUpAction(values)).then(() => navigate("/login"));
      actions.resetForm();
    },
  });

  return (
    <div className="flex items-center justify-center p-2">
      <div className="w-full max-w-sm p-4 mt-8  border sm:rounded-lg shadow sm:p-6 md:p-8 bg-[--background-color] border-gray-700">
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
              className="border border-gray-300 text-[--primary-text-color] text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 bg-[--background-color]"
              placeholder="your name"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              required
            />
            {formik.errors.fullName && (
              <div className="text-xs text-red-500">
                {formik.errors.fullName}
              </div>
            )}
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
              className="border border-gray-300 text-[--primary-text-color] text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 bg-[--background-color]"
              placeholder="name@company.com"
              required
            />
            {formik.errors.email && (
              <div className="text-xs text-red-500">{formik.errors.email}</div>
            )}
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
              className="border border-gray-300 text-[--primary-text-color] text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 bg-[--background-color]"
              required
            />
            {formik.errors.password && (
              <div className="text-xs text-red-500">
                {formik.errors.password}
              </div>
            )}
          </div>
          <div>
            <p className="font-bold text-sm text-[--foreground-button-bg-color]">
              Register as a Recruiter?&nbsp;<span>(Optional)</span>
            </p>
            <div className="flex items-center py-4">
              <input
                id="recruiter-checkbox"
                type="checkbox"
                name="role"
                checked={formik.values.role}
                onChange={formik.handleChange}
                className="w-5 h-5"
              />
              <label
                htmlFor="recruiter-checkbox"
                className="ms-2 text-sm font-medium text-[--primary-text-color]"
              >
                Recruiter
              </label>
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full text-[--primary-text-color] bg-[--button-bg-color] hover:-translate-y-1 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center tracking-wider${
              loading && "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {loading ? (
              <div>
                <SmallLoading />
                Signing...
              </div>
            ) : (
              "Sign Up"
            )}
          </button>
          <div className="text-sm font-medium text-[--primary-text-color]">
            Already have an account?&nbsp;
            <a
              href="/login"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
