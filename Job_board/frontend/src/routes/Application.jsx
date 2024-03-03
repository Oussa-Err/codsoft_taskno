const Application = () => {
  return (
    <div className=" h-[90dvh] pt-24">
      <form className="max-w-lg mx-auto">
        <label
          className="mb-2 text-sm font-medium"
          for="user_avatar"
        >
          Upload Resume
        </label>
        <input
          className="w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          aria-describedby="user_avatar_help"
          id="user_avatar"
          type="file"
        />
        <p
          className="mt-1 text-sm"
          id="user_avatar_help"
        >
          A resume is useful to confirm your application
        </p>
        <label
          for="email"
          className="mt-2 text-sm font-medium"
        >
          Your email:
        </label>
        <input
          type="email"
          id="email"
          aria-describedby="helper-text-explanation"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
        />
      </form>
    </div>
  );
};

export default Application;
