const History = () => {
  return (
      <div className="p-4 sm:ml-64 pt-28 h-[80dvh]">
        <h1 className="mb-2 text-5xl md:p-4 font-bold tracking-tight">
          Applied Jobs
        </h1>
        <div className="flex flex-col md:flex-row gap-7">
          <div
            href="#"
            className="flex-1 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Jobs submitted:
            </h5>
            <div></div>
          </div>
        </div>
      </div>
  );
};

export default History;
