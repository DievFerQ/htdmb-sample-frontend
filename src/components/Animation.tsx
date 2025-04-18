//muy buena y posiblemente definitiva

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import bull from "../assets/toro.png";
import man from "../assets/person2.png";
import { useTranslation } from 'react-i18next';

const imageVariants: Variants = {
  offscreenLeft: {
    x: "-100%",
  },
  onscreenLeft: {
    x: "-10%",
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 1.5,
    },
  },
  offscreenRight: {
    x: "100%",
    
  },
  onscreenRight: {
    x: "10%",
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 1.5,
    },
  },
};

const textVariants: Variants = {
  offscreen: {
    y: 20,
    scale: 0.5,
    transition: {
      //type: "tween",
      ease: "easeInOut",
      duration: 0.5,
    },
  },
  onscreen: {
    y: 20,
    scale: 0.8,
    transition: {
      //type: "tween",
      ease: "easeInOut",
      duration: 1.5,
    },
  },
};

const AnimatedScrollComponent: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-stone-950 ">
      <div className="relative h-[100px] xs:h-[160px] sm:h-[250px] md:h-[300px] lg:h-[410px] xl:h-[450px] 2xl:h-[600px] overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-0 transform -translate-y-1/2 w-[27vw]"
          initial="offscreenLeft"
          animate={scrollY > 0 ? "onscreenLeft" : "offscreenLeft"}
          variants={imageVariants}
        >
          <img src={man} alt="Left" className="w-full bottom-0" />
        </motion.div>
        <motion.div
          className="absolute bottom-0 right-0 transform -translate-y-1/2 w-[27vw]"
          initial="offscreenRight"
          animate={scrollY > 0 ? "onscreenRight" : "offscreenRight"}
          variants={imageVariants}
        >
          <img src={bull} alt="Right" className="w-full bottom-0" />
        </motion.div>
        <motion.div
          className="relative sm:top-6 md:top-10 lg:top-16 2xl:top-24 text-white  "
          //className="flex flex-col justify-start text-center px-4 sm:px-6 lg:px-8 max-w-1xl mx-auto mt-0 text-white"
          initial="offscreen"
          animate={scrollY > 0 ? "onscreen" : "offscreen"}
          variants={textVariants}
        >
          <h2 className="font-bree font-normal text-white mb-3 text-[47px] sm:text-[65px] md:text-[85px] lg:text-[95px] xl:text-[125px] 2xl:text-[170px] leading-none tracking-[-0.02em] text-center mt-0">
            {t('Fallacies')}
          </h2>
          <h2 className="font-bree text-white mb-3 font-light leading-none tracking-[-0.01em] text-center mt-0">
          <span className="font-normal text-[33px] sm:text-[45px] md:text-[55px] lg:text-[70px] xl:text-[80px] 2xl:text-[120px]">{t('of')}</span>&emsp;<span className="font-normal text-[33px] sm:text-[45px] md:text-[55px] lg:text-[70px] xl:text-[80px] 2xl:text-[120px]">{t('the')}</span>&emsp;<span className="font-thin text-[33px] sm:text-[45px] md:text-[55px] lg:text-[70px] xl:text-[80px] 2xl:text-[120px]">{t('corporate')}</span>
          </h2>
          <h2 className="font-bree text-white mb-3 text-[32px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[60px] 2xl:text-[80px] leading-none tracking-[-0.01em] text-center mt-0">
            <span className="font-normal">{t('World')}</span>
          </h2>
        </motion.div>
      </div>
    </div>
  );
};

export default AnimatedScrollComponent;

//==========================================
// DEFINITIVA FINAL // 14 JUN

// import React, { useState, useEffect } from "react";
// import { motion, Variants } from "framer-motion";
// import bull from "../assets/toro.png";
// import man from "../assets/person2.png";

// const imageVariants: Variants = {
//   offscreenLeft: {
//     x: "-100%",
//   },
//   onscreenLeft: {
//     x: "-10%",
//     transition: {
//       type: "tween",
//       ease: "easeInOut",
//       duration: 1.5,
//     },
//   },
//   offscreenRight: {
//     x: "100%",
    
//   },
//   onscreenRight: {
//     x: "10%",
//     transition: {
//       type: "tween",
//       ease: "easeInOut",
//       duration: 1.5,
//     },
//   },
// };

// const textVariants: Variants = {
//   offscreen: {
//     y: 20,
//     scale: 0.5,
//     transition: {
//       //type: "tween",
//       ease: "easeInOut",
//       duration: 0.5,
//     },
//   },
//   onscreen: {
//     y: 10,
//     scale: 0.8,
//     transition: {
//       //type: "tween",
//       ease: "easeInOut",
//       duration: 1.5,
//     },
//   },
// };

// const AnimatedScrollComponent: React.FC = () => {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="bg-stone-950 ">
//       <div className="relative h-[35vh] xs:h-[45vh] sm:h-[55vh] md:h-[75vh] lg:h-[90vh] xl:h-[105vh] 2xl:h-[110vh] overflow-hidden">
//         <motion.div
//           className="absolute bottom-0 left-0 transform -translate-y-1/2 w-[50vw]"
//           initial="offscreenLeft"
//           animate={scrollY > 0 ? "onscreenLeft" : "offscreenLeft"}
//           variants={imageVariants}
//         >
//           <img src={man} alt="Left" className="w-full bottom-0" />
//         </motion.div>
//         <motion.div
//           className="absolute bottom-0 right-0 transform -translate-y-1/2 w-[50vw]"
//           initial="offscreenRight"
//           animate={scrollY > 0 ? "onscreenRight" : "offscreenRight"}
//           variants={imageVariants}
//         >
//           <img src={bull} alt="Right" className="w-full bottom-0" />
//         </motion.div>
//         <motion.div
//           className="relative top-1.5 text-white  "
//           //className="flex flex-col justify-start text-center px-4 sm:px-6 lg:px-8 max-w-1xl mx-auto mt-0 text-white"
//           initial="offscreen"
//           animate={scrollY > 0 ? "onscreen" : "offscreen"}
//           variants={textVariants}
//         >
//           <h2 className="text-white mb-3 text-[42px] sm:text-[50px] md:text-[70px] lg:text-[80px] xl:text-[110px] font-light leading-none tracking-[-0.01em] text-center mt-0">
//             F A L L A C I E S
//           </h2>
//           <h2 className="text-white mb-3 font-light leading-none tracking-[-0.01em] text-center mt-0">
//           <span className="font-extrabold text-[42px] sm:text-[50px] md:text-[70px] lg:text-[80px] xl:text-[110px]">of</span>&emsp;<span className="font-bold text-[28px] sm:text-[35px] md:text-[45px] lg:text-[60px] xl:text-[70px]">the</span>&emsp;<span className="font-thin text-[28px] sm:text-[35px] md:text-[45px] lg:text-[60px] xl:text-[70px]">corporate</span>
//           </h2>
//           <h2 className="text-white mb-3 text-[22px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px] leading-none tracking-[-0.01em] text-center mt-0">
//             <span className="font-bold">World</span>
//           </h2>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default AnimatedScrollComponent;

//======================================
//Intento de usar useAnimation


// import React, { useState, useEffect } from "react";
// import { motion, Variants } from "framer-motion";
// import bull from "../assets/toro.png";
// import man from "../assets/person2.png";

// const imageVariants: Variants = {
//   offscreenLeft: {
//     x: "-100%",
//     transition: {
//       type: "tween",
//       ease: "easeInOut",
//       duration: 0.5,
//     },
//   },
//   onscreenLeft: {
//     x: "-10%",
//     transition: {
//       type: "tween",
//       ease: "easeInOut",
//       duration: 1.5,
//     },
//   },
//   offscreenRight: {
//     x: "100%",
//     transition: {
//       type: "tween",
//       ease: "easeInOut",
//       duration: 0.5,
//     },
//   },
//   onscreenRight: {
//     x: "10%",
//     transition: {
//       type: "tween",
//       ease: "easeInOut",
//       duration: 1.5,
//     },
//   },
// };

// const textVariants: Variants = {
//   offscreen: {
//     y: 20,
//     scale: 0.5,
//     transition: {
//       //type: "tween",
//       ease: "easeInOut",
//       duration: 0.5,
//     },
//   },
//   onscreen: {
//     y: 10,
//     scale: 0.8,
//     transition: {
//       //type: "tween",
//       ease: "easeInOut",
//       duration: 1.5,
//     },
//   },
// };

// const AnimatedScrollComponent: React.FC = () => {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <section className="bg-stone-950 ">
//       <div className="relative h-[35vh] sm:h-[55vh] md:h-[75vh] lg:h-[90vh] xl:h-[105vh] overflow-hidden">
//         <motion.div
//           className="absolute bottom-0 left-0 transform -translate-y-1/2 w-[50vw]"
//           initial="offscreenLeft"
//           animate={scrollY > 0 ? "onscreenLeft" : "offscreenLeft"}
//           variants={imageVariants}
//         >
//           <img src={man} alt="Left" className="w-full bottom-0" />
//         </motion.div>
//         <motion.div
//           className="absolute bottom-0 right-0 transform -translate-y-1/2 w-[50vw]"
//           initial="offscreenRight"
//           animate={scrollY > 0 ? "onscreenRight" : "offscreenRight"}
//           variants={imageVariants}
//         >
//           <img src={bull} alt="Right" className="w-full bottom-0" />
//         </motion.div>
//         <motion.div
//           className="relative top-1.5 text-white  "
//           //className="flex flex-col justify-start text-center px-4 sm:px-6 lg:px-8 max-w-1xl mx-auto mt-0 text-white"
//           initial="offscreen"
//           animate={scrollY > 0 ? "onscreen" : "offscreen"}
//           variants={textVariants}
//         >
//           <h2 className="text-white mb-3 text-[42px] sm:text-[50px] md:text-[70px] lg:text-[80px] xl:text-[110px] font-light leading-none tracking-[-0.01em] text-center mt-0">
//             F A L L A C I E S
//           </h2>
//           <h2 className="text-white mb-3 font-light leading-none tracking-[-0.01em] text-center mt-0">
//           <span className="font-extrabold text-[42px] sm:text-[50px] md:text-[70px] lg:text-[80px] xl:text-[110px]">of</span>&emsp;<span className="font-bold text-[28px] sm:text-[35px] md:text-[45px] lg:text-[60px] xl:text-[70px]">the</span>&emsp;<span className="font-extralight text-[28px] sm:text-[35px] md:text-[45px] lg:text-[60px] xl:text-[70px]">corporate</span>
//           </h2>
//           <h2 className="text-white mb-3 text-[22px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px] leading-none tracking-[-0.01em] text-center mt-0">
//             <span className="font-bold">World</span>
//           </h2>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AnimatedScrollComponent;


//=====================================

//PRUEBA DE SCROLL

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import bull from "../assets/toro.png";
// import man from "../assets/person2.png";

// const AnimatedScrollComponent: React.FC = () => {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <section className="bg-stone-950">
//       <div className="relative h-[35vh] sm:h-[55vh] md:h-[75vh] lg:h-[90vh] xl:h-[105vh] overflow-hidden">
//         <motion.div
//           className="absolute bottom-0 left-0 transform -translate-y-1/2 w-[50vw]"
//           style={{ x: scrollY * -0.2 }}
//         >
//           <img src={man} alt="Left" className="w-full bottom-0" />
//         </motion.div>
//         <motion.div
//           className="absolute bottom-0 right-0 transform -translate-y-1/2 w-[50vw]"
//           style={{ x: scrollY * 0.2 }}
//         >
//           <img src={bull} alt="Right" className="w-full bottom-0" />
//         </motion.div>
//         <motion.div
//           className="relative top-2.5 text-white"
//           style={{ y: scrollY * -0.1 }}
//         >
//           <h2 className="text-white mb-3 text-[42px] sm:text-[50px] md:text-[70px] lg:text-[80px] xl:text-[110px] font-light leading-none tracking-[-0.01em] text-center mt-0">
//             F A L L A C I E S
//           </h2>
//           <h2 className="text-white mb-3 font-light leading-none tracking-[-0.01em] text-center mt-0">
//             <span className="font-extrabold text-[42px] sm:text-[50px] md:text-[70px] lg:text-[80px] xl:text-[110px]">of</span>&emsp;<span className="font-bold text-[28px] sm:text-[35px] md:text-[45px] lg:text-[60px] xl:text-[70px]">the</span>&emsp;<span className="font-extralight text-[28px] sm:text-[35px] md:text-[45px] lg:text-[60px] xl:text-[70px]">corporate</span>
//           </h2>
//           <h2 className="text-white mb-3 text-[22px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px] leading-none tracking-[-0.01em] text-center mt-0">
//             <span className="font-bold">World</span>
//           </h2>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AnimatedScrollComponent;
