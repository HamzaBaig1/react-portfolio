import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaReact,
  FaSquareJs,
} from "react-icons/fa6";
import resume from "../assets/HAMZA SULEMAN.pdf";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

import { SiTailwindcss } from "react-icons/si";

import Layout from "../components/Layout";
AOS.init({
  duration: 1000,
});
function Home() {
  return (
    <Layout>
      {/* Intro Section*/}
      <div className="bg-theme h-screen">
        <div className=" bg-theme h-full grid md:grid-cols-1 grid-cols-2 items-center border-4 md:border-0 border-white transform rotate-12 md:rotate-0">
          <div className="h-1/2 md:h-full">
            <dotlottie-player
              src="https://lottie.host/170c1ee9-13f6-4f16-afa0-b8f8a9ec6601/K7WJXMkzVu.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          </div>
          <div className="font-bold text-white md:px-5 md:text-center  md:h-full">
            <h1 className=" text-7xl md:text-3xl" data-aos="fade-left">
              Hi,I am <b className=" text-yellow-500">Hamza</b>
            </h1>
            <h1 className=" text-4xl md:text-2xl" data-aos="fade-right">
              Frontend Web <b className=" text-red-500"> Developer</b>
            </h1>
          </div>
        </div>
      </div>

      {/*Technologies*/}
      <div className=" mt-12">
        <h1
          className=" text-center font-bold text-4xl md:text-3xl text-blue-800"
          data-aos="slide-up"
        >
          Technologies Stack
        </h1>
        <div className="grid grid-cols-3 md:grid-cols-1 my-10">
          <FaReact
            className="w-full text-center mt-12"
            size={150}
            color="cyan"
          />
          <SiTailwindcss
            className="w-full text-center mt-12 animate-bounce"
            size={150}
            color="#b8c2cc"
          />
          <FaBootstrap
            className="w-full text-center mt-12"
            size={150}
            color="blue"
          />
          <FaHtml5
            className="w-full text-center mt-12 animate-bounce"
            size={150}
            color="orange"
          />
          <FaCss3
            className="w-full text-center mt-12"
            size={150}
            color="#264de4"
          />
          <FaSquareJs
            className="w-full text-center mt-12 animate-bounce"
            size={150}
            color="yellow"
          />
        </div>
      </div>

      {/*React Js Section*/}
      <div className="my-20">
        <div className=" text-center h-52 bg-primary">
          <h1 className=" text-4xl md:text-xl font-bold text-white py-10">
            Yes You Are Right, I am React Js Developer.
          </h1>
        </div>
        <div className="md:mx-8 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg transition-colors hover:bg-gray-700 hover:text-white">
          <div className="h-96 " data-aos="zoom-in">
            <dotlottie-player
              src="https://lottie.host/09cf8813-ae4b-45f0-ba54-ac28831bf14d/CGkqvF0Sws.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          </div>
          <p className="text-xl md:text-lg  font-semibold my-5 md:px-5 px-14 py-10">
            React is a JavaScript-based UI development library. Although React
            is a library rather than a language, it is widely used in web
            development. The library first appeared in May 2013 and is now one
            of the most commonly used frontend libraries for web development.
          </p>
        </div>
      </div>

      {/* Personal info */}
      <div className="md:my-20">
        <h1 className=" text-4xl md:text-3xl text-center font-bold text-gray-500">
          Who is Hamza?
        </h1>
        <div className="  h-screen md:h-3/4 relative text-gray-800">
          <div className="h-full md:h-3/4">
            <dotlottie-player
              src="https://lottie.host/f32eb2cc-7441-4c7c-bf6e-3a1b3f5bb355/5PQotBzlVw.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          </div>
          <div className=" absolute inset-0  flex justify-center items-center">
            <h1 className="  text-2xl font-bold md:text-xl ">
              Hello, Hi, Salam...
              <hr />
              <pre className="text-xl md:text-sm py-5 md:py-2 font-mont font-semibold">
                {JSON.stringify(
                  {
                    name: "Hamza Suleman",
                    age: null,
                    gender: "male",
                    country: "Pakistan",
                  },
                  null,
                  2
                )}
              </pre>
              <div className="w-full flex justify-center items-center">
                <button className="text-white bg-red-500 rounded-lg px-4 py-1 md:text-sm hover:text-yellow-500 font-semibold">
                  <a href={resume} target="_blank" rel="noreferrer noopener">
                    Resume
                  </a>
                </button>
              </div>
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
