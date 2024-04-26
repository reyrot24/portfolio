import Line from "../reusableComponents/Line";
import { Suspense, useEffect, useState } from "react";
import { urlFor, client } from "../client";
import { motion } from "framer-motion";
import Loader from "../reusableComponents/Loader";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query = '*[_type == "projects"] | order(id asc)';
    client.fetch(query).then((data) => {
      setProjects(data);
    });
  }, []);

  return (
    <>
      <section className="bg-black h-full pt-2 pb-8" id="projects">
        <div className="flex justify-center">
          <h1 className="text-softerBrown h1 font-playfairSC gold-text">
            Projects
          </h1>
        </div>

        <motion.div className="relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pt-8 gap-4 md:gap-8 px-10">
          {projects.map((item, i) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.4 }}
              viewport={{ once: true, amount: 0.7 }}
              key={i}
              className="m-auto rounded-2xl p-4 lg:m-4 bg-darkBrown hover:shadow-md hover:shadow-brown ease-in-out duration-300 md:h-[22rem]"
            >
              <div className="relative grayscale-[60%] hover:grayscale-0 ease-out duration-300 opacity-85 hover:opacity-100">
                <div className="rounded-xl border-2 border-black cursor-pointer w-full ">
                  <img src={urlFor(item.imgUrl)} className="rounded-xl " />
                </div>

                <div className="absolute cursor-pointer inset-0 z-20 gap-2 text-white ease-in duration-300 w-full h-full hover:opacity-100 opacity-0 flex justify-center items-center">
                  <div className="rounded-lg bg-brown p-2">
                    <a href={item.projectLink} target="_blank">
                      Demo
                    </a>
                  </div>
                  <div className="rounded-lg bg-brown p-2">
                    <a href={item.codeLink} target="_blank">
                      Code
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center text-white/70 sm:text-l p-2 gap-1">
                <h1 className="text text-xl text-center ">{item.title}</h1>
                <p className="pt-2 text-left">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <Line />
    </>
  );
};

export default Projects;
