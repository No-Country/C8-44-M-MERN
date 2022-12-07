const Loader = ({ isLoading }: any) => {
  return (
    <div
      className={`w-full h-screen flex items-center justify-center fixed bg-white dark:bg-gray-900 z-50 ${
        !isLoading && 'hidden'
      }`}
    >
      <div className="spinner ">
        <svg viewBox="25 25 50 50" className="circular">
          <circle
            strokeMiterlimit="10"
            strokeWidth="3"
            fill="none"
            r="20"
            cy="50"
            cx="50"
            className="path"
          ></circle>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
