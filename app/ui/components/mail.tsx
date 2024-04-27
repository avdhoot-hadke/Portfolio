import Image from "next/image";
import documentIcon from "../../../public/icons/file-regular.svg";

export default function Mail() {
  return (
    <div className="px-5">
      <a href="mailto:avdhoothadke@gmail.com">
        <button
          className="flex transition ease-out  text-zinc-300 hover:text-white fill-zinc-300 hover:fill-white duration-300 hover:-translate-y-1 hover:scale-110 text-cyan-950 text-lg bg-gradient-to-r from-cyan-600 hover:from-cyan-700 to-blue-600 hover:to-blue-700   py-1 px-2 rounded-lg"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="h-6 w-5 pr-1 pt-1 "
          >
            <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
          </svg>
          <p>Email</p>
        </button>
      </a>
    </div>
  );
}
