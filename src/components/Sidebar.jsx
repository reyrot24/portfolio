import { useRef, useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import {
  AiOutlineInstagram,
  AiFillGithub,
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
      "hover:text-white hover:border-white hover:border-[1px] hover:bg-[#000] flex justify-center items-center",
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

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const toggleSidebar = () => {
    setOpen(!open);
  };

  const items = [
    { title: "Home", link: "#hero" },
    { title: "Skills", link: "#skills" },
    { title: "Projects", link: "#projects" },
    { title: "Contact me", link: "#contact" },
  ];

  const framerSidebarBackground = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { delay: 0.2 } },
    transition: { duration: 0.3 },
  };

  const framerSidebarPanel = {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: {
      x: "100%",
    },
    transition: { duration: 0.3 },
  };

  const framerButton = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 0.7, y: 0 },
    transition: {
      delay: 0.8,
      duration: 0.8,
    },
  };

  const framerText = (delay) => {
    return {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: {
        delay: 0.5 + delay / 10,
      },
    };
  };

  return (
    <>
      <motion.button
        {...framerButton}
        onClick={toggleSidebar}
        className="sm:p-3 p-2 border-2 border-zinc-800 rounded-xl md:hidden"
        aria-label="toggle sidebar"
      >
        <FaBars />
      </motion.button>
      <AnimatePresence mode="wait" initial={false}>
        {open && (
          <>
            <motion.div
              onClick={toggleSidebar}
              {...framerSidebarBackground}
              aria-hidden="true"
              className="fixed bottom-0 left-0 right-0 top-0 z-40 bg-black/10 backdrop-blur-sm md:hidden"
            ></motion.div>
            <motion.div
              {...framerSidebarPanel}
              className="fixed top-0 bottom-0 right-0 z-50 w-full h-screen max-w-xs border-r-2 border-zinc-800 bg-black md:hidden"
              ref={ref}
              aria-label="Sidebar"
            >
              <div className="flex items-center justify-between p-5 border-b-2 border-softBrown">
                <h1 className="text-buttonText">Vasile Andrei Rotaru</h1>
                <button
                  onClick={toggleSidebar}
                  className="p-3 border-2 border-zinc-800 rounded-xl"
                >
                  <FaTimes />
                </button>
              </div>
              <ul>
                {items.map((item, i) => {
                  return (
                    <li
                      key={i}
                      className="hover:text-yellow-700 cursor-pointer"
                    >
                      <a
                        onClick={toggleSidebar}
                        className="flex items-center justify-between gap-5 p-5 transition-all border-b-2 border-darkBrown"
                        href={`${item.link}`}
                      >
                        <motion.span {...framerText(i)}>
                          {item.title}
                        </motion.span>
                      </a>
                    </li>
                  );
                })}
              </ul>
              <div className="w-full flex justify-center items-center gap-5 pt-10">
                {socials.map((item, i) => (
                  <div
                    id={item.name}
                    key={i}
                    className="flex justify-center items-center text-brown cursor-pointer"
                  >
                    <a
                      className={`text-3xl p-1 ${item.class} ease-out duration-300  flex justify-center items-center  cursor-pointer border-[1px] border-black
rounded-full`}
                      href={item.link}
                      target="_blank"
                    >
                      {item.icon}
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
