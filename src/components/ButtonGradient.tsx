export const ButtonGradient = () => {
  return (
    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-yellow-500 to-aqua-500 group-hover:from-yellow-500 group-hover:to-aqua-500 hover:text-cream dark:text-cream focus:ring-4 focus:outline-none focus:ring-yellow-200 dark:focus:ring-yellow-800">
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-cream dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 uppercase font-aktiv">
        Learn More
      </span>
    </button>
  );
};
