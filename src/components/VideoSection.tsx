//DEFINITVA CON CAMBIOS 20 JUN


import React, { useState, useEffect } from 'react';
import movie from '../assets/moviee.mov';
import { motion } from 'framer-motion';
import videoImage from '../assets/videoImage.jpeg'

const PopupMediaComponent: React.FC = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  useEffect(() => {
    if (isPopupVisible) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [isPopupVisible]);

  return (
    <div className="relative  " >
      <motion.img
        src={videoImage}
        className=" min-w-full max-h-screen "
        alt="Mockup"
        onClick={togglePopup}
      />
      {isPopupVisible && (
        <motion.div
          id="popup-container"
          className="fixed inset-0 z-50 bg-black bg-opacity-100 flex items-center justify-center"
          onClick={togglePopup}
        >
          <motion.div className="relative w-full h-full flex items-center justify-center">
            <span
              className="absolute top-4 right-4 text-white text-4xl cursor-pointer"
              onClick={togglePopup}
            >
              &times;
            </span>
            <video
              src={movie}
              autoPlay
              controls
              className="max-w-[80%] max-h-[80%] object-contain border-3 border-white"
            />
          </motion.div>
        </motion.div>
      )}

      
      
    </div>
  );
};

export default PopupMediaComponent;

//=====================================

// import { useState } from "react";
// import video from "../assets/video.mp4";
// import mockup from "../assets/mockup.png";

// const VideoSection = () => {
//   const [file, setFile] = useState(null);

//   return (
    
//       <div className="relative" onClick={() => setFile(file)}>
//           <img src={mockup} className="w-full h-full object-cover" />
        
//         <div className="">
//           <video src={video} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 block max-w-[95%] max-h-[95%] object-contain border-3 border-white" />
//         </div>
//       </div>
    
//   );
// };

// export default VideoSection;

//=======================================


//definitiva

// import React, { useState, useEffect } from 'react';
// import mockup from '../assets/mockup.png'; // Asegúrate de actualizar la ruta de la imagen mockup
// import video from '../assets/video.mp4'; // Asegúrate de actualizar la ruta del video
// import movie from '../assets/moviee.mov';

// const PopupMediaComponent: React.FC = () => {
//   const [isPopupVisible, setIsPopupVisible] = useState(false);

//   const togglePopup = () => {
//     setIsPopupVisible(!isPopupVisible);
//   };

//   useEffect(() => {
//     if (isPopupVisible) {
//       document.body.style.overflowY = 'hidden';
//     } else {
//       document.body.style.overflowY = 'auto';
//     }
//     return () => {
//       document.body.style.overflowY = 'auto';
//     };
//   }, [isPopupVisible]);

//   return (
//     <div className="relative container">
//       <img
//         src={mockup}
//         className="w-full h-full object-cover"
//         alt="Mockup"
//         onClick={togglePopup}
//       />
//       {isPopupVisible && (
//         <div
//           id="popup-container"
//           className="fixed inset-0 z-50 bg-black bg-opacity-100 flex items-center justify-center"
//           onClick={togglePopup}
//         >
//           <div className="relative w-full h-full flex items-center justify-center">
//             <span
//               className="absolute top-4 right-4 text-white text-4xl cursor-pointer"
//               onClick={togglePopup}
//             >
//               &times;
//             </span>
//             <video
//               src={movie}
//               autoPlay
//               controls
//               className="max-w-[80%] max-h-[80%] object-contain border-3 border-white"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PopupMediaComponent;


//======================================


//DEFINITIVAAAAAAA

// import React, { useState } from 'react';
// import mockup from '../assets/mockup.png'; // Asegúrate de actualizar la ruta de la imagen mockup
// import video from '../assets/video.mp4'; // Asegúrate de actualizar la ruta del video

// const PopupMediaComponent: React.FC = () => {
//   const [isPopupVisible, setIsPopupVisible] = useState(false);

//   const togglePopup = () => {
//     setIsPopupVisible(!isPopupVisible);
//   };

//   return (
//     <div className="relative container">
//       <img
//         src={mockup}
//         className="w-full h-full object-cover"
//         alt="Mockup"
//         onClick={togglePopup}
//       />
//       {isPopupVisible && (
//         <div
//           id="popup-container"
//           className="fixed inset-0 z-50 bg-black bg-opacity-100 flex items-center justify-center"
//           onClick={togglePopup}
//         >
//           <div className="relative w-full h-full flex items-center justify-center">
//             <span
//               className="absolute top-4 right-4 text-white text-4xl cursor-pointer"
//               onClick={togglePopup}
//             >
//               &times;
//             </span>
//             <video
//               src={video}
//               autoPlay
//               controls
//               className="max-w-[95%] max-h-[95%] object-contain border-3 border-white"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PopupMediaComponent;

// ======================================

// PRUEBA DEL 9 jul 

// import React, { useState, useEffect } from 'react';
// import mockup from '../assets/mockup.png'; // Asegúrate de actualizar la ruta de la imagen mockup
// import movie from '../assets/moviee.mov';
// import { AnimatePresence, motion } from 'framer-motion';
// import videoImage from '../assets/videoImage.jpeg'

// const PopupMediaComponent: React.FC = () => {
//   const [isPopupVisible, setIsPopupVisible] = useState(false);

//   const togglePopup = () => {
//     setIsPopupVisible(!isPopupVisible);
//   };

//   useEffect(() => {
//     if (isPopupVisible) {
//       document.body.style.overflowY = 'hidden';
//     } else {
//       document.body.style.overflowY = 'auto';
//     }
//     return () => {
//       document.body.style.overflowY = 'auto';
//     };
//   }, [isPopupVisible]);

//   return (
//     <div className="relative container">
//       <AnimatePresence>
//       <motion.img
//         src={videoImage}
//         className="w-contain h-auto lg:h-[650px] object-fit mx-auto"
//         alt="Mockup"
//         onClick={togglePopup}
//       />
//       {isPopupVisible && (
//         <motion.div
//           id="popup-container"
//           className="fixed inset-0 z-50 bg-black bg-opacity-100 flex items-center justify-center"
//           onClick={togglePopup}
//         >
//           <motion.div className="relative w-full h-full flex items-center justify-center">
//             <span
//               className="absolute top-4 right-4 text-white text-4xl cursor-pointer"
//               onClick={togglePopup}
//             >
//               &times;
//             </span>
//             <video
//               src={movie}
//               autoPlay
//               controls
//               className="max-w-[80%] max-h-[80%] object-contain border-3 border-white"
//             />
//           </motion.div>
//         </motion.div>
//       )}

//       </AnimatePresence>
      
//     </div>
//   );
// };

// export default PopupMediaComponent;
