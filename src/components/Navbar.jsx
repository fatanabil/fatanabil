import { useState, useEffect } from "react";

const Navbar = ({ visible = false, height }) => {
  const [scroll, setScroll] = useState(0);
  const [target, setTarget] = useState({});

  const handleScroll = () => setScroll(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setTarget({
      about: height.home - 64,
      skills: height.home + height.about - 64,
      project: height.home + height.about + height.skills - 64,
    });
  }, [height]);

  return (
    <div
      className={`z-30 fixed w-full flex justify-center transition-all duration-300 ease-in-out ${
        visible
          ? "bg-slate-800 shadow-lg shadow-slate-700 text-slate-200"
          : "text-slate-500 opacity-0 hover:opacity-100"
      }`}
    >
      <ul className="flex">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <li
            className={`px-4 py-4 text-lg hover:text-slate-200 transition-all duration-300 relative after:content-['_'] after:h-[1.5px] after:top-[80%] after:absolute after:w-1/2 after:left-1/2 after:-translate-x-1/2 after:bg-slate-200 after:scale-x-0 after:hover:scale-x-100 after:transition-all after:duration-100 hover:cursor-pointer`}
          >
            Home
          </li>
        </button>
        <button
          onClick={() => {
            window.scrollTo({ top: target.about, behavior: "smooth" });
          }}
        >
          <li
            className={`px-4 py-4 text-lg hover:text-slate-200 transition-all duration-300 relative after:content-['_'] after:h-[1.5px] after:top-[80%] after:absolute after:w-1/2 after:left-1/2 after:-translate-x-1/2 after:bg-slate-200 after:scale-x-0 after:hover:scale-x-100 after:transition-all after:duration-100 hover:cursor-pointer ${
              scroll >= target.about && scroll < target.skills
                ? `after:scale-x-100`
                : ""
            }`}
          >
            About Me
          </li>
        </button>
        <button
          onClick={() => {
            window.scrollTo({
              top: target.skills,
              behavior: "smooth",
            });
          }}
        >
          <li
            className={`px-4 py-4 text-lg hover:text-slate-200 transition-all duration-300 relative after:content-['_'] after:h-[1.5px] after:top-[80%] after:absolute after:w-1/2 after:left-1/2 after:-translate-x-1/2 after:bg-slate-200 after:scale-x-0 after:hover:scale-x-100 after:transition-all after:duration-100 hover:cursor-pointer ${
              scroll >= target.skills && scroll < target.project
                ? `after:scale-x-100`
                : ""
            }`}
          >
            Skills
          </li>
        </button>
        <button
          onClick={() => {
            window.scrollTo({ top: target.project, behavior: "smooth" });
          }}
        >
          <li
            className={`px-4 py-4 text-lg hover:text-slate-200 transition-all duration-300 relative after:content-['_'] after:h-[1.5px] after:top-[80%] after:absolute after:w-1/2 after:left-1/2 after:-translate-x-1/2 after:bg-slate-200 after:scale-x-0 after:hover:scale-x-100 after:transition-all after:duration-100 hover:cursor-pointer ${
              scroll >= target.project && scroll < 5000
                ? `after:scale-x-100`
                : ""
            }`}
          >
            Projects
          </li>
        </button>
      </ul>
    </div>
  );
};
export default Navbar;
