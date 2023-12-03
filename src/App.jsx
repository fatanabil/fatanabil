import { useEffect, useMemo, useRef, useState } from "react";
import BGMAIN from "./img/bg-main.webp";
import PP from "./img/pp-square.webp";
import SkillIcon from "./img/skills";

export default function App() {
  const skills = [
    { name: "ReactJS", icon: SkillIcon.reactjs, link: "https://react.dev" },
    {
      name: "Tailwindcss",
      icon: SkillIcon.tailwindcss,
      link: "https://tailwindcss.com",
    },
    {
      name: "ExpressJS",
      icon: SkillIcon.expressjs,
      link: "https://expressjs.com",
    },
    { name: "NextJS", icon: SkillIcon.nextjs, link: "https://nextjs.org" },
    {
      name: "MongoDB",
      icon: SkillIcon.mongodb,
      link: "https://www.mongodb.com",
    },
    { name: "MySQL", icon: SkillIcon.mysql, link: "https://www.mysql.com" },
    { name: "Figma", icon: SkillIcon.figma, link: "https://www.figma.com" },
    { name: "Flutter", icon: SkillIcon.flutter, link: "https://flutter.dev" },
  ];
  const tab = useMemo(() => ["home", "aboutme", "skills", "projects"], []);

  const navRef = useRef();
  const homeRef = useRef();
  const aboutmeRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();

  const [activeTab, setActiveTab] = useState(tab[0]);
  const [hideNav, setHideNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;

      const homePos = 0;
      const aboutmePos =
        homeRef.current.clientHeight - navRef.current.clientHeight;
      const skillsPos =
        homeRef.current.clientHeight +
        aboutmeRef.current.clientHeight -
        navRef.current.clientHeight;
      const projectsPos =
        homeRef.current.clientHeight +
        aboutmeRef.current.clientHeight +
        skillsRef.current.clientHeight -
        navRef.current.clientHeight;

      if (scroll === homePos) return setActiveTab(tab[0]);

      if (scroll >= aboutmePos && scroll < skillsPos)
        return setActiveTab(tab[1]);

      if (scroll >= skillsPos && scroll < projectsPos)
        return setActiveTab(tab[2]);

      if (scroll >= projectsPos) return setActiveTab(tab[3]);

      if (scroll > 300) {
        setHideNav(false);
      } else {
        setHideNav(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [tab]);

  return (
    <>
      <nav
        className={`fixed top-0 z-30 flex w-full justify-center gap-2 text-white transition-all duration-300 ${
          hideNav === true
            ? "opacity-0 hover:bg-transparent hover:opacity-100"
            : "bg-slate-900 opacity-100 shadow-lg"
        }`}
        ref={navRef}
      >
        <a href="#home" className="tab" onClick={() => setActiveTab(tab[0])}>
          Home
        </a>
        <a
          href="#about-me"
          className={`tab ${activeTab === "aboutme" && "tab-active"}`}
          onClick={() => setActiveTab(tab[1])}
        >
          About Me
        </a>
        <a
          href="#skills"
          className={`tab ${activeTab === "skills" && "tab-active"}`}
          onClick={() => setActiveTab(tab[2])}
        >
          Skills
        </a>
        <a
          href="#projects"
          className={`tab ${activeTab === "projects" && "tab-active"}`}
          onClick={() => setActiveTab(tab[3])}
        >
          Projects
        </a>
      </nav>
      <header
        id="home"
        className="relative flex h-screen w-full scroll-mt-14 flex-col items-center justify-center"
        ref={homeRef}
      >
        <img
          src={BGMAIN}
          alt="background-picture"
          className="absolute h-full w-full object-cover"
        />
        <div className="mb-10 w-48 overflow-hidden rounded-full shadow-lg">
          <img src={PP} alt="profile-pic" className="relative" />
        </div>
        <h1 className="relative text-3xl font-semibold text-slate-100 md:text-6xl">
          Fata Nabil Fikri
        </h1>
        <p className="relative mt-4 text-lg text-amber-300 md:text-3xl">
          Frontend Developer
        </p>
      </header>
      <section
        className="flex scroll-mt-14 flex-col items-center bg-slate-900 py-16"
        id="about-me"
        ref={aboutmeRef}
      >
        <h1 className="mb-6 text-3xl font-semibold text-slate-200">About Me</h1>
        <div className="flex max-w-3xl flex-col rounded-lg border-2 border-slate-700 p-8 text-center shadow-lg xl:max-w-4xl">
          <p className="text-xl text-slate-300">
            My name is Fata Nabil Fikri, A Frontend Developer especially in
            <span className="text-highlight"> ReactJS</span> and{" "}
            <span className="text-highlight"> Flutter</span>
          </p>
          <br />
          <p className="text-xl text-slate-300">
            Now, I live in{" "}
            <span className="text-highlight">{" Banyuwangi Regency"}</span>,
            East Java. Currently studying at
            <span className="text-highlight">
              {" Sunan Kalijaga State Islamic University Yogyakarta"}
            </span>
            , Majoring in
            <span className="text-highlight"> Informatics Engineering</span>
          </p>
        </div>
      </section>
      <section
        className="flex scroll-mt-14 flex-col items-center bg-slate-800 py-16"
        id="skills"
        ref={skillsRef}
      >
        <h1 className="mb-6 text-3xl font-semibold text-slate-200">Skills</h1>
        <div className="grid w-full grid-cols-2 gap-6 transition-all sm:grid-cols-4 md:max-w-4xl">
          {skills.map((skill) => (
            <a
              href={skill.link}
              key={skill.name}
              target="_blank"
              rel="noreferrer"
            >
              <div className="group flex flex-col items-center gap-4 rounded-md border-2 border-slate-700 px-6 pb-12 pt-6 shadow-slate-900 transition-all duration-150 ease-in-out hover:bg-slate-900 hover:bg-opacity-80 hover:shadow-lg">
                <div className="flex aspect-square w-full items-center justify-center text-white transition-all duration-150 ease-in-out group-hover:scale-90">
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <h1 className="text-xl text-slate-200">{skill.name}</h1>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section
        className="flex min-h-screen scroll-mt-14 flex-col items-center bg-slate-900 py-16"
        id="projects"
        ref={projectsRef}
      >
        <h1 className="mb-6 text-3xl font-semibold text-slate-200">Projects</h1>
        <em className="animate-pulse text-xl text-amber-300">On Going ...</em>
      </section>
    </>
  );
}
