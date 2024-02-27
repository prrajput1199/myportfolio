import React from "react";

const Header = () => {
  return (
    <>
      {/* <div className="menu w-full flex-1 flex-row justify-center space-x-3">
        <span>Home</span>
        <span>About</span>
        <span>Services</span>
        <span>Projects</span>
        <span>Contact</span>
      </div> */}
      <div className="menu h-full flex flex-col justify-center align-middle m-3 space-y-4">
        <span>Home</span>
        <span>About</span>
        <span>Services</span>
        <span>Projects</span>
        <span>Contact</span>
      </div>
    </>
  );
};

export default Header;
