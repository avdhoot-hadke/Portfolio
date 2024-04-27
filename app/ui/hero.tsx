import Image from "next/image";
import profilePic from "../../public/profile-pic.png";
import { pt_sans } from "../fonts";
import SaveFile from "./components/saveFile";
import Mail from "./components/mail";
import Connect from "./components/connect";

export default function Hero() {
  return (
    <div className={`${pt_sans.className}`}>
      <div className="flex flex-col  justify-center pt-16">
        <div className=" flex justify-center">
          <Image
            src={profilePic}
            alt="Picture of the Developer"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center  pt-10 ">
        <div className="py-1 text-zinc-300 text-center text-2xl">I&apos;m</div>
        <div className="py-1 flex justify-center">
          <div className="font-bold text-4xl text-center bg-clip-text  text-transparent  bg-gradient-to-r from-cyan-500 to-blue-500">
            Avdhoot Hadke
          </div>
        </div>
        <div className="py-2 px-2 lg:px-32  md:text-lg text-zinc-300 text-center">
          a computer engineering student specializing in the MERN stack,
          Next.js, and PostgreSQL. Experienced in building dynamic web
          applications, I&apos;m passionate about crafting seamless user
          experiences and optimizing database performance. Excited to contribute
          my skills to innovative projects.
        </div>
        <div className="py-10  flex align-items-center justify-center ">
          <SaveFile />
          <Mail />
        </div>
        <div>
          <Connect />
        </div>
      </div>
      <hr className="h-px mt-24 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  );
}
