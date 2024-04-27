"use client";
import { saveAs } from "file-saver";

export default function SaveFile() {
  const saveFile = () => {
    saveAs(
      "https://drive.google.com/uc?export=download&id=1Ctv52HvjsqEcjMwWE_Mqa6u9BTUb3Le-",
      "avdhoot_hadke_resume.pdf"
    );
  };
  return (
    <div className="px-5">
      <button
        className=" flex transition ease-out text-zinc-300 hover:text-white fill-zinc-300 hover:fill-white duration-300 hover:-translate-y-1 hover:scale-110 text-cyan-950 text-lg bg-gradient-to-r from-cyan-600 hover:from-cyan-700 to-blue-600 hover:to-blue-700   py-1 px-2 rounded-lg"
        type="button"
        onClick={saveFile}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="h-5 w-5 pr-1 pt-1"
        >
          <path d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z" />
        </svg>
        <p>Resume</p>
      </button>
    </div>
  );
}
