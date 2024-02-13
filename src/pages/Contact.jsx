import Layout from "../components/Layout";

function Contact() {
  return (
    <Layout>
      <div>
        <div className="h-screen mt-10">
          <dotlottie-player
            src="https://lottie.host/c4cd6d9f-54eb-4fd8-832b-89d899c824a3/f1pY4GQ1d6.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div className="w-full flex justify-center">
          <div className="md:w-full w-1/2 p-10 shadow-2xl bg-gray-50">
            <h1 className="text-2xl font-semibold">Contact Me To Know More</h1>
            <input
              type="text"
              placeholder="Name"
              className="w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5"
            />
            <textarea
              type="text"
              placeholder="Query"
              className="w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5"
            />
            <button className=" rounded bg-red-500 px-5 py-1 text-white mt-3">
              Submit
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
