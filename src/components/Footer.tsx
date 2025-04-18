// import { Facebook, Instagram } from "lucide-react";
// import { TbBrandTiktok } from "react-icons/tb";

// const Footer = () => {
//   return (
//     <footer className="bg-stone-950 py-8 ">
//       <div className="container mx-auto flex flex-col text-center justify-center items-center">
//         <span className="text-4xl text-stone-400 font-bold tracking-tight">
//           by Onid Sacla
//         </span>
//         <span className="text-1xl text-stone-400 font-light tracking-tight">
//           All rights reserved®
//         </span>
//         <span className="text-1xl text-stone-400 font-light tracking-tight">
//           mechanicalbulls@gmail.com
//         </span>
//       </div>
    
//       <div className="mx-auto flex space-x-3 text-center justify-center items-center py-3">
//       <a href="#">
//         <Facebook size={25} className="text-base text-stone-400" />
//       </a>
//       <a href="#">
//         <Instagram size={25} className="text-base text-stone-400" />
//       </a>
//       <a href="#" className="text-2xl text-bold flex-bold text-stone-400">
//         <TbBrandTiktok />
//       </a>
//     </div>
//     </footer>
//   );
// };

// export default Footer;

//=====================================

import { Facebook, Instagram } from "lucide-react";
import { TbBrandTiktok } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-stone-950 py-4">
    <div className="container mx-auto flex flex-col text-center justify-center items-center">
      <span className="text-2xl sm:text-3xl md:text-4xl text-stone-400 font-bold tracking-tight">
        by Onid Sacla
      </span>
      <span className="text-sm sm:text-base md:text-lg text-stone-400 font-light tracking-tight">
        All rights reserved®
      </span>
      <a href="#" className="text-sm sm:text-base md:text-lg text-stone-400 font-light tracking-tight">
        domesticatingmechanicalbulls@gmail.com 
      </a>
    </div>
  
    <div className="flex justify-center items-center space-x-3 py-3">
      <a href="https://www.facebook.com/profile.php?id=61554006234471" aria-label="Facebook" target="_blank">
        <Facebook size={25} className="text-base text-stone-400" />
      </a>
      <a href="https://www.instagram.com/domesticatingmechanicalbulls?igsh=bzU5M3UyZW9vaHln" aria-label="Instagram" target="_blank">
        <Instagram size={25} className="text-base text-stone-400" />
      </a>
      <a href="https://www.tiktok.com/@domesticatingmechbulls?lang=es" aria-label="TikTok" className="text-2xl font-bold text-stone-400" target="_blank">
        <TbBrandTiktok />
      </a>
    </div>
  </footer>
  );
};

export default Footer;