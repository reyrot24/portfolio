import {
  AiOutlineInstagram,
  AiFillGithub,
  AiOutlineCopyright,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    name: "Instagram",
    icon: <AiOutlineInstagram />,
    class: "gradient-instagram",
    link: import.meta.env.VITE_LINK_INSTAGRAM,
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    class:
      "hover:text-white hover:border-white hover:border-[1px] hover:bg-[#000] ",
    link: import.meta.env.VITE_LINK_GITHUB,
  },
  {
    name: "Twitter",
    icon: <FaXTwitter />,
    class:
      "hover:text-white hover:bg-[#000] hover:border-white hover:border-[1px]",
    link: import.meta.env.VITE_LINK_X,
  },
  {
    name: "Linkedin",
    icon: <AiOutlineLinkedin />,
    class: "hover:bg-[#0077B5] hover:text-white",
    link: import.meta.env.VITE_LINK_LINKEDIN,
  },
];

const Footer = () => {
  return (
    <>
      <footer className="h-full bg-black pt-2 pb-2">
        <div className="pb-10">
          <div className="flex justify-center">
            <h1 className="h1 text-softerBrown font-playfairSC gold-text">
              Find me here
            </h1>
          </div>
          <div className="flex justify-center pt-8 sm:gap-6">
            {socials.map((item, i) => (
              <div
                className={`rounded-full text-softBrown flex justify-center items-center`}
                key={i}
                id={item.name}
              >
                <a
                  target="_blank"
                  href={item.link}
                  rel="noopener noreferrer"
                  className={` text-5xl sm:text-[5rem] border-[1px] border-black flex justify-center items-center cursor-pointer ${item.class} ease-out duration-300 p-2 rounded-full`}
                >
                  {item.icon}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="h-20 p-10">
          <div className="bg-softerBrown h-[2px] w-2/3 text-center m-auto animate-line" />
          <div className="flex justify-center gap-1 text-white text-sm pt-2 items-center">
            <AiOutlineCopyright /> {""}
            {new Date().getFullYear()}.<p> All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
