import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="h-48 md:h-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#2a2a2a"
            fill-opacity="1"
            d="M0,32L0,128L288,128L288,224L576,224L576,160L864,160L864,64L1152,64L1152,224L1440,224L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="w-full bg-theme  flex justify-center">
        <div className="w-1/2 md:w-full">
          <div className=" p-10 font-mont text-center">
            <p className="text-white mb-3">Designed and Developed By</p>
            <div className="h-1 border-2 border-gray-50  border-dotted"></div>
            <div className="flex text-white w-full justify-between py-3">
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
              <FaGithub />
            </div>
            <div className="h-1 border-2 border-gray-50  border-dotted"></div>
            <p className="text-white mt-3">Hamza Suleman</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
