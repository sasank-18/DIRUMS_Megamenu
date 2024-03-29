import React from "react";
import Logo from "../assert/LOgo and Name - Copy 1.png";
import save from "../assert/save.png";
import cart from "../assert/cart.png";
const Navbar = () => {
  return (
    <div className="bg-black px-6 py-2 flex justify-between items-center">
      <div>
        <img src={Logo} />
      </div>
      <div className=" w-[40%]">
        <input className="p-2 w-full rounded-md" type="text" />
      </div>
      <div>
        <div className="flex gap-6">
          <img src={save} />
          <img src={cart} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
