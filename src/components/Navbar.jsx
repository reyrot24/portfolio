import Button from "../reusableComponents/Button";
import Line from "../reusableComponents/Line";
import Sidebar from "./Sidebar";
import { motion, stagger } from "framer-motion";

const links = [
  {
    id: 1,
    name: "Home",
    link: "#hero",
  },
  {
    id: 2,
    name: "Skills",
    link: "#skills",
  },
  {
    id: 3,
    name: "Projects",
    link: "#projects",
  },
];

const framerText = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 0.7, y: 0 },
  transition: {
    delay: 0.8,
    duration: 0.8,
  },
};

const framerList = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  transition: {
    delay: 0.8,
    duration: 0.8,
  },
};

const Navbar = () => {
  return (
    <nav className="sticky z-20 top-0 w-full">
      <div className="w-full bg-black text-white flex justify-between items-center p-2 px-4">
        <div>
          <motion.h1
            {...framerText}
            className="md:text-[2.5rem] text-[1.5rem] sm:ml-4 animate-text"
          >
            VAR
          </motion.h1>
        </div>
        <div className="hidden md:flex text-navTitle">
          <ul className="flex items-center gap-3 text-2xl">
            {links.map((link) => (
              <motion.div className="menu" key={link.id} {...framerList}>
                <motion.li
                  whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
                  className="px-4 cursor-pointer  font-medium hover:text-softerBrown"
                >
                  <a href={`${link.link}`}>{link.name}</a>
                </motion.li>
              </motion.div>
            ))}
          </ul>
          <motion.div {...framerList}>
            <Button type={"2"} title={"Contact"} />
          </motion.div>
        </div>

        <Sidebar />
      </div>
      <Line />
    </nav>
  );
};

export default Navbar;
