import React from "react";

function Button({ title, type }) {
  if (type === "1") {
    return (
      <div className="cursor-pointer  animate-bg  text-black w-full lg:w-56 m-2 text-center button rounded">
        <button className="w-full">
          <a href="#skills" className="block">
            {title}
          </a>
        </button>
      </div>
    );
  } else if (type === "2") {
    return (
      <div className="text-buttonText px-3 py-3 rounded">
        <button className="w-full animate-bg px-3 py-1 rounded block text-white/80">
          <a href="#contact" className="block">
            {title}
          </a>
        </button>
      </div>
    );
  } else if (type === "3") {
    return (
      <div className="cursor-pointer border border-softBrown animate-text w-full lg:w-56 m-2 button text-center hover:border-softerBrown/60 hover:shadow hover:shadow-softBrown duration-300 rounded">
        <button className="w-full">
          <a href="#contact" className="block">
            {title}
          </a>
        </button>
      </div>
    );
  } else {
    return (
      <div className="cursor-pointer border border-softBrown animate-text w-full lg:w-56 m-2 button text-center hover:border-softerBrown/60 hover:shadow hover:shadow-softBrown duration-300 rounded">
        <button type="submit" className="w-full">
          {title}
        </button>
      </div>
    );
  }
}

export default Button;
