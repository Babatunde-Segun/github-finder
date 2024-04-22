import React from "react";
import { FaGithub } from "react-icons/fa";
// import { IoMdMenu } from "react-icons/io";
// import FaMenu from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";
// import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

function Navbar({ title }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu((prevState) => !prevState);
  };
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>

        <div className="  flex-1 px-2 mx-2  justify-around">
          <div className=" hidden sm:block flex sm:flex sm:justify-end justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn uppercase">
              Home
            </Link>
            <Link
              to="/about"
              className="btn btn-ghost btn-sm rounded-btn uppercase"
            >
              about
            </Link>
          </div>

          <div
            className="block  sm:hidden flex justify-end relative"
            onClick={handleShowMenu}
          >
            {showMenu ? <IoMdMenu /> : <IoMdClose />}
            {!showMenu && (
              <div className=" w-[90px] pb-2 flex  flex-col absolute bottom-[-85px] right-[-10px] block bg-neutral">
                <Link
                  to="/"
                  className="btn btn-ghost btn-sm rounded-btn uppercase"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="btn btn-ghost btn-sm rounded-btn uppercase"
                >
                  about
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
