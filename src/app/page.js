import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { IoLogoGithub } from "react-icons/io";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 ">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Aaron Lander Ancheta</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">
              Aaron Lander Ancheta
            </h2>
            <h3 className="text-2xl py-2">Student</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              I am a junior studying for a B.S. in Computer Science in the
              Department of Information and Computer Sciences at the University
              of Hawaii at Manoa. I am currently working as a Web
              Designer/Illustrator at the Department of Indo-Pacific Languages
              and Literatures (IPLL) at UH Manoa. My date of graduation is
              expected to be on Spring 2025.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-2 text-gray-600">
            <AiFillLinkedin />
            <IoLogoGithub />
          </div>
          <div className=""></div>
        </section>
      </main>
    </div>
  );
}
