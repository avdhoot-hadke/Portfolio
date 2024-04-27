"use client";
import { pt_sans } from "../fonts";

export default function Navbar() {
  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`${pt_sans.className} backdrop-blur bg-black/70 sticky top-0 z-50  text-zinc-400 flex justify-between  py-2 px-2 lg:px-12`}
    >
      <div
        onClick={(e) => handleClick(e, "#hero")}
        className="cursor-pointer font-bold text-2xl  text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500"
      >
        Avdhoot
      </div>
      <div className="flex justify-center   items-center">
        <div
          className="px-2  hover:text-zinc-50  cursor-pointer"
          onClick={(e) => handleClick(e, "#skills")}
        >
          Skills
        </div>
        <div
          className="px-2  hover:text-zinc-50  cursor-pointer"
          onClick={(e) => handleClick(e, "#projects")}
        >
          Projects
        </div>
      </div>
    </div>
  );
}
