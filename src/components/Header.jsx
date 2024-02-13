import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const [showMenu, setShowMenu] = useState(`md:hidden`);

  function handleShowMenu() {
    if (showMenu === `md:hidden`) {
      setShowMenu("");
    } else {
      setShowMenu(`md:hidden`);
    }
  }
  const menuItem = [
    {
      title: "Home",
      key: "/",
    },
    {
      title: "Projects",
      key: "/projects",
    },
    {
      title: "Contact",
      key: "/contact",
    },
  ];

  const pathname = window.location.pathname;

  return (
    <div className=" font-mont text-white fixed z-50 top-0 left-0 right-0">
      <div className="flex bg-theme justify-between md:flex-col items-center p-2 shadow-lg ">
        <div className=" flex  w-full justify-between items-center">
          <Link to="/">
            <h1 className=" text-4xl font-semibold hover:text-yellow-500">
              {" "}
              H.
            </h1>
          </Link>
          {showMenu && (
            <FaBars
              onClick={handleShowMenu}
              className=" lg:hidden xl:hidden 2xl:hidden md:flex"
            />
          )}
          {!showMenu && (
            <AiOutlineClose
              onClick={handleShowMenu}
              className=" lg:hidden xl:hidden 2xl:hidden md:flex"
            />
          )}
        </div>
        <div className="flex md:hidden">
          {menuItem.map((item) => {
            return (
              <li
                className={`list-none mx-5 px-5 hover:text-yellow-500 ${
                  pathname === item.key && "bg-white rounded-md text-black"
                }`}
              >
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            );
          })}
        </div>
        <div
          className={`flex mt-5 md:flex flex-col w-full items-start ${showMenu} lg:hidden xl:hidden 2xl:hidden `}
        >
          {menuItem.map((item) => {
            return (
              <li
                className={`list-none mt-3 hover:text-yellow-500 ${
                  pathname === item.key && "bg-white rounded-md text-black px-5"
                } `}
              >
                <Link to={`${item.key}`}>{item.title}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
