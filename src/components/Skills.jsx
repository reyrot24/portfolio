import Line from "../reusableComponents/Line";
import { useEffect, useState } from "react";
import { urlFor, client } from "../client";
import { motion } from "framer-motion";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"] | order(id asc)';
    client.fetch(query).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <section className="bg-darkerBrown h-full w-full pt-2 pb-8" id="skills">
        <div className="flex justify-center">
          <h1 className="h1 text-softerBrown font-playfairSC gold-text">
            Skills
          </h1>
        </div>
        <div className="grid lg:grid-cols-8 grid-cols-2 md:grid-cols-3 text-white text-center pt-4 px-4 gap-12">
          {skills.map((item, i) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.7 }}
              key={item.id}
              className="lg:col-span-2 col-span-1 box-border w-20 sm:w-24 sm:h-24 flex flex-col justify-center items-center text-xl m-auto"
            >
              <motion.div
                whileHover={{ scale: 1.2, transition: 0.3 }}
                className={item.id == "g" ? "bg-white rounded-full" : ""}
              >
                <img src={urlFor(item.icon)} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
      <Line />
    </>
  );
};

export default Skills;
