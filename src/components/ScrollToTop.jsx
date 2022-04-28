const ScrollToTop = ({ visible = false }) => {
  return (
    <div
      className={`w-12 h-12 flex justify-center items-center text-slate-200 rounded-lg bg-slate-600 fixed left-[85%] md:left-[90%] lg:left-[92%] xl:left-[95%] top-[90%] hover:shadow-lg hover:shadow-slate-700 group transition-all duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <button onClick={(e) => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 group-hover:scale-110 transition-all duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7l4-4m0 0l4 4m-4-4v18"
          />
        </svg>
      </button>
    </div>
  );
};
export default ScrollToTop;
