import Image from "next/image";
import {
  js,
  ts,
  html,
  java,
  css,
  mongo,
  sql,
  postgresql,
  next,
  react,
  git,
  docker,
} from "../../public/skills";

export default function Skill() {
  return (
    <div className="text-white pt-24">
      <div className=" flex justify-center">
        <div className="pb-8 font-bold text-4xl text-center bg-clip-text  text-transparent  bg-gradient-to-r from-cyan-500 to-blue-500">
          Skills
        </div>
      </div>
      <div>
        <div className="py-8 ">
          <div className="text-center text-2xl  font-light pb-8">Languages</div>
          <div className="flex justify-evenly px-1 md:px-32 lg:px-56 xl:80">
            <Image
              src={js}
              alt="Picture of the Developer"
              className="w-10 lg:w-14 h-10 lg:h-14"
            />
            <Image
              src={ts}
              alt="Picture of the Developer"
              className="w-10 lg:w-14 h-10 lg:h-14"
            />
            <Image
              src={java}
              alt="Picture of the Developer"
              className="w-10 lg:w-14 h-10 lg:h-14"
            />
            <Image
              src={html}
              alt="Picture of the Developer"
              className="w-10 lg:w-14 h-10 lg:h-14"
            />
            <Image
              src={css}
              alt="Picture of the Developer"
              className="w-10 lg:w-14 h-10 lg:h-14"
            />
          </div>
        </div>
      </div>
      <hr className="h-px w-48 my-4 mx-auto bg-gray-200 border-0 dark:bg-gray-700" />
      <div>
        <div className="py-8 ">
          <div className="text-center text-2xl  font-light pb-8">
            JS Frameworks
          </div>
          <div className="flex justify-evenly px-1 md:px-32 lg:px-56 xl:80">
            <Image
              src={react}
              alt="Picture of the Developer"
              className="w-10 lg:w-14 h-10 lg:h-14"
            />
            <Image
              src={next}
              alt="Picture of the Developer"
              className="bg-white rounded-full p-px w-10 lg:w-14 h-10 lg:h-14"
            />
          </div>
        </div>
      </div>
      <hr className="h-px w-48 my-4 mx-auto bg-gray-200 border-0 dark:bg-gray-700" />

      <div>
        <div className="py-8 ">
          <div className="text-center text-2xl  font-light pb-8">Databases</div>
          <div className="flex justify-evenly px-1 md:px-32 lg:px-56 xl:80">
            <Image
              src={sql}
              alt="Picture of the Developer"
              className="w-10 lg:w-14 h-10 lg:h-14"
            />
            <Image
              src={mongo}
              alt="Picture of the Developer"
              className="w-10 lg:w-14 h-10 lg:h-14"
            />
            <Image
              src={postgresql}
              alt="Picture of the Developer"
              className="w-10 lg:w-14 h-10 lg:h-14"
            />
          </div>
        </div>
      </div>
      <hr className="h-px w-48 my-4 mx-auto bg-gray-200 border-0 dark:bg-gray-700" />

      <div>
        <div className="py-8 ">
          <div className="text-center text-2xl  font-light pb-8">
            Technologies
          </div>
          <div className="flex justify-evenly px-1 md:px-32 lg:px-56 xl:80">
            <Image
              src={git}
              alt="Picture of the Developer"
              className="w-10 lg:w-14 h-10 lg:h-14"
            />
            <Image
              src={docker}
              alt="Picture of the Developer"
              className="w-10 lg:w-14 h-10 lg:h-14"
            />
          </div>
        </div>
      </div>
      <hr className="h-px mt-24 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  );
}
