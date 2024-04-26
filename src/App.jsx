import { useEffect, useState } from "react";
import { Navbar, Hero, Skills, Projects, Contact, Footer } from "./components";
import Loader from "./reusableComponents/Loader";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div exit={{ opacity: 0, z: 100 }}>
          <Loader key="loading" />
        </motion.div>
      ) : (
        <div key="app" id="canvas" className="max-h-full max-w-full w-full">
          <Navbar />
          <Hero />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </AnimatePresence>
  );
};

export default App;

{
  /* <motion.div
          className="w-full h-screen bg-black flex justify-center items-center"
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0, z: 100 }}
          key={"loader"}
        >
          <motion.div
            className="w-20 h-20 bg-blue-500 rounded-full "
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
          />
        </motion.div> */
}
