import { useEffect, useRef, useState } from "react";
import pp from "../assets/img/pp-square.png";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import StackIcon from "../assets/stack-icon";

const HomeScreen = () => {
  const skills = [
    ["ReactJS", StackIcon.reactjs],
    ["TailwindCSS", StackIcon.tailwindcss],
    ["Flutter", StackIcon.flutter],
    ["ExpressJS", StackIcon.expressjs],
    ["PHP", StackIcon.php],
    ["Codeigniter", StackIcon.ci],
    ["MongoDB", StackIcon.mongodb],
    ["MySQL", StackIcon.mysql],
    ["Figma", StackIcon.figma],
  ];
  const [scroll, setScroll] = useState(0);
  const refHome = useRef(null);
  const refAbout = useRef(null);
  const refSkills = useRef(null);
  const refProjects = useRef(null);
  const [height, setHeight] = useState({
    home: 0,
    about: 0,
    skills: 0,
    projects: 0,
  });

  const handleScroll = () => setScroll(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setHeight({
      home: refHome.current.clientHeight,
      about: refAbout.current.clientHeight,
      skills: refSkills.current.clientHeight,
      projects: refProjects.current.clientHeight,
    });
  }, []);

  return (
    <div>
      {scroll > 200 ? (
        <Navbar visible={true} height={height} />
      ) : (
        <Navbar visible={false} height={height} />
      )}
      {scroll > 600 ? (
        <ScrollToTop visible={true} />
      ) : (
        <ScrollToTop visible={false} />
      )}
      {/* HOME */}
      <div
        className="w-full h-screen flex flex-col justify-center items-center gap-4 bg-[url('./assets/img/bg-main.jpg')] bg-cover"
        id="home"
        ref={refHome}
      >
        <div className="w-48 rounded-full mb-8 shadow-lg overflow-hidden">
          <img src={pp} alt="profile pic" />
        </div>
        <h1 className="text-3xl text-slate-200 font-semibold md:text-6xl">
          Fata Nabil Fikri
        </h1>
        <h3 className="text-lg text-amber-300 mb-16 md:text-3xl">
          Frontend Developer
        </h3>
      </div>
      {/* ABOUT ME */}
      <div
        className="px-8 py-16 bg-slate-900 flex flex-col gap-12 items-center"
        id="about-me"
        ref={refAbout}
      >
        <h1 className="text-3xl text-slate-200 font-semibold">About Me</h1>
        <div className="max-w-3xl xl:max-w-4xl rounded-lg border-2 border-slate-700 p-8 flex flex-col text-center shadow-lg">
          <p className="text-slate-400 text-xl">
            My name is Fata Nabil Fikri, A Frontend Developer especially in
            <span className="font-semibold"> ReactJS</span> and{" "}
            <span className="font-semibold"> Flutter</span>
          </p>
          <br />
          <p className="text-slate-400 text-xl">
            Now, I live in{" "}
            <span className="font-semibold text-amber-300">
              {" Banyuwangi Regency"}
            </span>
            , East Java. Currently studying at
            <span className="font-semibold text-amber-300">
              {" Sunan Kalijaga State Islamic University Yogyakarta"}
            </span>
            , Majoring in
            <span className="font-semibold text-amber-300">
              {" "}
              Informatics Engineering
            </span>
          </p>
        </div>
      </div>
      {/* SKILLS */}
      <div
        className="px-8 py-16 bg-slate-800 flex flex-col gap-12 items-center"
        id="skills"
        ref={refSkills}
      >
        <h1 className="text-3xl text-slate-200 font-semibold">Skills</h1>
        <div className="w-full md:max-w-4xl grid gap-6 grid-cols-2 sm:grid-cols-4 transition-all">
          {skills.map((el, i) => {
            return (
              <div
                className="rounded-md p-4 flex flex-col gap-4 items-center border-2 border-slate-700 hover:bg-slate-900 hover:bg-opacity-80 transition-all duration-300 ease-in-out group hover:shadow-lg shadow-slate-900"
                key={i}
              >
                <div className="w-full aspect-square text-white flex justify-center items-center group-hover:scale-90 transition-all duration-300 ease-in-out">
                  <img src={el[1]} alt={el[0]} />
                </div>
                <h3 className="text-xl text-slate-200">{el[0]}</h3>
              </div>
            );
          })}
        </div>
      </div>
      {/* PROJECTS */}
      <div
        className="px-8 py-16 bg-slate-900 flex flex-col gap-12 items-center"
        id="projects"
        ref={refProjects}
      >
        <h1 className="text-3xl text-slate-200 font-semibold">Projects</h1>
        <div className="h-screen w-full flex justify-center p-8">
          <h1 className="text-2xl text-amber-300 font-semibold italic text-opacity-50">
            On Going ...
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
