import Layout from "../components/Layout";
import projectData from "../resources/project";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1000,
});
function Projects() {
  return (
    <Layout>
      <div className="mt-20">
        <div className=" h-screen ">
          <div className=" h-3/4 md:h-1/2">
            <dotlottie-player
              src="https://lottie.host/51b664ec-fccd-4c93-a7fc-9ccce8d5fb5e/XWRvJEN8z1.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          </div>
          <p className="text-xl md:text-lg md:my-2 font-semibold text-center">
            Good ideas are not adopted automatically. They must be driven into
            practice with courageous patience
          </p>
          <h1 className="text-4xl md:text-4xl text-center font-bold mt-5 md:mt-32">
            Because
          </h1>
        </div>
        <div className=" text-center font-bold bg-red-500 mx-20 md:mx-5 p-20  text-white rounded-tl-full rounded-br-full md:my-20">
          <h1 className=" text-8xl md:text-xl" data-aos="fade-down">
            THE GAME IS...
          </h1>
          <h1 className=" text-8xl md:text-xl" data-aos="fade-up">
            CONSISTENCY
          </h1>
        </div>

        <div className="mt-20 grid grid-cols-3 md:grid-cols-1 items-center justify-center gap-5 mx-20 md:mx-5 md:my-5">
          {projectData.map((data) => {
            return (
              <div className="relative border-2 text-center rounded-tr-3xl rounded-bl-3xl border-gray-400">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-48  rounded-tr-3xl rounded-bl-3xl"
                />
                <div className=" absolute inset-0 flex justify-center items-center rounded-tr-3xl rounded-bl-3xl flex-col opacity-0 bg-black hover:opacity-80 transition-opacity ease-in">
                  <h1 className="text-4xl font-semibold text-white">
                    {data.title}
                  </h1>
                  <button className="border-2 rounded border-white py-2 px-5 hover:bg-green-500 text-white mt-5">
                    <a
                      href={data.link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {" "}
                      Github
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
