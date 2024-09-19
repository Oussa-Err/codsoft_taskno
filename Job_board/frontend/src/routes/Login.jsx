import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogInAction } from "../redux/actions/userAction";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { SmallLoading } from "../Loading";

const validationSchema = yup.object().shape({
  email: yup.string("Enter your email").email("Enter a valid email"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, userInfo, loading } = useSelector(
    (state) => state.logIn
  );

  useEffect(() => {
    if (isAuthenticated) {
      if (userInfo) {
        navigate("/user/dashboard");
        window.location.reload();
      }
    }
  }, [isAuthenticated]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      dispatch(userLogInAction(values));
      actions.resetForm();
    },
  });

  return (
    <div className="flex items-center justify-center p-2">
      <div className="w-full max-w-sm p-4  border sm:rounded-lg shadow sm:p-6 md:p-8 bg-[--background-color] border-gray-700">
        <form onSubmit={formik.handleSubmit} className="space-y-6" action="#">
          <h5 className="text-xl font-medium">Log In</h5>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border border-gray-300 text-[--primary-text-color] text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 bg-[--background-color]"
              placeholder="name@company.com"
              onChange={formik.handleChange}
              value={formik.values.email}
              required
            />
            {formik.errors.email && (
              <div className="text-xs text-red-500">{formik.errors.email}</div>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="border border-gray-300 text-[--primary-text-color] text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 bg-[--background-color]"
              onChange={formik.handleChange}
              value={formik.values.password}
              required
            />
            {formik.errors.password && (
              <div className="text-xs text-red-500">
                {formik.errors.password}
              </div>
            )}
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
                Login...
              </div>
            ) : (
              "Login"
            )}
          </button>
          <div className="text-sm font-medium text-[--primary-text-color]">
            Don&apos;t have an account?&nbsp;
            <a
              href="/signup"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
