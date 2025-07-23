import Image from "next/image";
import netflix from "../../public/project/netflix.png";
import blogify from "../../public/project/Blogify.png";
import notes from "../../public/project/Notes.png";
import { Demo, Github } from "../ui/components/projectLinks";

export default function Projects() {
  return (
    <div className="">
      <div className="py-24 flex justify-center">
        <div className="font-bold text-4xl text-center bg-clip-text  text-transparent  bg-gradient-to-r from-cyan-500 to-blue-500">
          Projects
        </div>
      </div>
      <div className="flex flex-col justify-around  lg:flex-row text-white">
        <div className="flex flex-shrink-0 justify-center">
          <Image
            src={netflix}
            alt="project image"
            className="w-full lg:w-[700px]"
          />
        </div>
        <div className="flex flex-col  justify-start p-2">
          <h1 className="text-2xl  pb-5">Netflix Ui clone</h1>
          <p className=" font-light xl:text-lg text-zinc-300">
            Developed a Netflix UI clone utilizing React, Redux, and Express,
            seamlessly integrating with the tmdb.org API for dynamic content,
            and implemented MongoDB for backend data storage.
          </p>
          <div className="flex justify-center pt-5">
            <Github link={"https://github.com/avdhoot-hadke/Netflix-clone"} />
            <Demo link={"netflix.avdhoothadke.com/"} />
          </div>
        </div>
      </div>
      <hr className="h-px w-48 mt-24 mx-auto bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="flex flex-col justify-around  lg:flex-row text-white pt-24">
        <div className="flex flex-col  justify-start p-2">
          <h1 className="text-2xl  pb-5">Blogify</h1>
          <p className=" font-light xl:text-lg text-zinc-300">
            Designed and implemented a feature-rich Blogging Web App, leveraging
            a full-stack architecture with Node.js, Express, and MongoDB for
            robust backend functionality and React for an engaging and dynamic
            user interface.
          </p>
          <div className="flex justify-center pt-5">
            <Github
              link={"https://github.com/avdhoot-hadke/Mern-stack-Blogging-App/"}
            />
          </div>
        </div>
        <div className="flex flex-shrink-0 justify-center order-first lg:order-none">
          <Image
            src={blogify}
            alt="project image"
            className="w-full lg:w-[700px]"
          />
        </div>
      </div>
      <hr className="h-px w-48 mt-24 mx-auto bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="flex flex-col justify-around  lg:flex-row text-white pt-24">
        <div className="flex flex-shrink-0 justify-center">
          <Image
            src={notes}
            alt="project image"
            className="w-full lg:w-[700px]"
          />
        </div>
        <div className="flex flex-col  justify-start p-2">
          <h1 className="text-2xl  pb-5">Notes App</h1>
          <p className=" font-light text-sm xl:text-lg text-zinc-300">
            Designed and implemented a dynamic Notes app using React, MongoDB,
            and Express, allowing users to create, store, and manage notes
            seamlessly with distinct titles and descriptions.
          </p>
          <div className="flex justify-center pt-5">
            <Github link={"https://github.com/avdhoot-hadke/Notes-App"} />
          </div>
        </div>
      </div>
    </div>
  );
}
