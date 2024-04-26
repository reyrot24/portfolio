import photo from "../assets/heroPhoto.png";
import Button from "../reusableComponents/Button";
import { MdComputer } from "react-icons/md";
import { MdOutlineStorage } from "react-icons/md";
import { FaMobile } from "react-icons/fa";
import Line from "../reusableComponents/Line";
import { motion } from "framer-motion";

const framerButtons = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: {
    delay: 0.5,
    duration: 0.6,
  },
};

const framerImg = {
  initial: { opacity: 0, z: 150 },
  animate: { opacity: 1, z: 0 },
  transition: {
    delay: 0.5,
    duration: 0.6,
  },
};

const Hero = () => {
  const icons = [
    { name: "web", icon: MdComputer, title: "Web Development" },
    {
      name: "full-stack",
      icon: MdOutlineStorage,
      title: "Full-Stack Development",
    },
    { name: "mobile", icon: FaMobile, title: "Mobile Development" },
  ];

  return (
    <>
      <section
        className="bg-black h-full w-full text-white pt-2 pb-6"
        id="hero"
      >
        <div className="flex justify-center items-center flex-col">
          <div className="flex justify-center items-center flex-col p-3">
            <h2 className="h2 font-playfair text-softerBrown gold-text">
              Hi I am
            </h2>
            <h1 className="h1 text-center font-playfairSC animate-text">
              VASILE ANDREI ROTARU
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row-reverse items-center justify-center lg:mx-10 xl:w-2/3 xl:gap-8 m-auto">
            <motion.div
              {...framerImg}
              className="hidden md:flex  justify-center items-center md:w-1/3 lg:w-1/2 lg:pt-8"
            >
              <img
                src={photo}
                width={600}
                className="rounded-full z-10 bg-black border-2 max-w-full border-gray-700"
              />
            </motion.div>

            <div className="flex justify-center items-center flex-col pt-6 lg:pt-10 md:w-2/3 lg:w-full pb-6">
              <p className="body-1 font-playfair z-10 leading-2 text-justify lg:text-center px-6 lg:w-2/3 xl:w-[90%]">
                I’m a developer from Italy, passionate about designs, the Web
                and Apps. I also have other passions such as music, martial arts
                and books. Welcome to my portfolio.
              </p>
              <motion.div
                {...framerButtons}
                className="flex z-10 justify-center items-center px-4 lg:gap-4 pt-6 lg:pt-10 w-full"
              >
                <Button title={"See portfolio"} type={"1"} />
                <Button title={"Hire me"} type={"3"} />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="p-4 md:p-8 flex justify-center items-center sm:gap-4 md:gap-8 lg:gap-32">
          {icons.map((item, index) => (
            <div
              key={index}
              className="flex justify-center items-center flex-col z-10 text-center gap-2 xl:gap-4"
            >
              <item.icon className="icons-width" />
              <h1 className="body-2">{item.title}</h1>
            </div>
          ))}
        </div>
      </section>
      <Line />
    </>
  );
};

export default Hero;
