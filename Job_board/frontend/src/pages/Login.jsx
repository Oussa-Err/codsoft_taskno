const Login = () => {
  return (
    <div>
      <div className="bg- max-w-screen-xl m-auto h-full">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 h-full  items-center place-content-center">
          <form
            className="flex flex-col items-center place-content-center space-y-6 h-full  rounded-md"
          >
            <div className="flex flex-col items-center font-normal">
              <label size="h1" variant="t2">
                Welcome back
              </label>
              <label className="mb-12">
                We are <strong className="theme-text-primary">happy</strong> to
                see you back
              </label>
            </div>
            <input
              type="email"
              name="email"
            />
            <input
              type="password"
              name="password"
            />
            <button label="Sign in" className=" w-9/12" />
            <div className="flex items-center place-content-evenly text-center w-9/12 pt-10">
              <span className="border-t theme-border flex-1" />
              <span className="px-4 text-sm hover:underline cursor-pointer">
                <a href="/singin">CREATE AN ACCOUNT</a>
              </span>
              <span className="border-t theme-border flex-1" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
