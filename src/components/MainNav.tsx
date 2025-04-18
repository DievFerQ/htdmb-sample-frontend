// import { Facebook, Instagram } from "lucide-react";
// import { TbBrandTiktok } from "react-icons/tb";
// import { Button } from "./ui/button";

// const MainNav = () => {
//   return (
//     <div className="flex space-x-4">
//       <a href="https://www.facebook.com/profile.php?id=61554006234471" target="_blank">
//         <Facebook size={30} className="text-base text-stone-400" />
//       </a>
//       <a href="https://www.instagram.com/domesticatingmechanicalbulls?igsh=bzU5M3UyZW9vaHln" target="_blank">
//         <Instagram size={30} className="text-base text-stone-400" />
//       </a>
//       <a href="https://www.tiktok.com/@domesticatingmechbulls?lang=es" className="text-3xl text-bold flex-bold text-stone-400" target="_blank">
//         <TbBrandTiktok />
//       </a>
//       <Button type="button" className="border-solid border-[1px] border-stone-400 bg-transparent text-stone-300 text-base rounded-full">
//         <a href="#ES">ES</a>
//       </Button>
//     </div>
//   );
// };

// export default MainNav;

//===========================================

// import React from "react";
// import { Facebook, Instagram } from "lucide-react";
// import { TbBrandTiktok } from "react-icons/tb";
// import { useTranslation } from "react-i18next";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "./ui/select";
// import spanishFlag from "../assets/spanishFlag.svg";
// import enFlag from "../assets/enFlag.svg";

// const MainNav: React.FC = () => {
//   const { t, i18n } = useTranslation();

//   const changeLanguage = (lng: string) => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <div className="flex space-x-4">
//       <a
//         href="https://www.facebook.com/profile.php?id=61554006234471"
//         target="_blank"
//       >
//         <Facebook size={30} className="text-base text-stone-400" />
//       </a>
//       <a
//         href="https://www.instagram.com/domesticatingmechanicalbulls?igsh=bzU5M3UyZW9vaHln"
//         target="_blank"
//       >
//         <Instagram size={30} className="text-base text-stone-400" />
//       </a>
//       <a
//         href="https://www.tiktok.com/@domesticatingmechbulls?lang=es"
//         className="text-3xl text-bold flex-bold text-stone-400"
//         target="_blank"
//       >
//         <TbBrandTiktok />
//       </a>
//       <Select onValueChange={(value) => changeLanguage(value)}>
//         <SelectTrigger className="w-[120px] h-[30px] text-white">
//           <SelectValue placeholder={i18n.language.toUpperCase()} />
//         </SelectTrigger>
//         <SelectContent>
//           <SelectItem value="en">
//             English{" "}
//             <img
//               src={enFlag}
//               alt="Spanish Flag"
//               className="inline-block w-4 h-4 ml-1 top-2"
//             />{" "}
//           </SelectItem>
//           <SelectItem value="es">
//             Español{" "}
//             <img
//               src={spanishFlag}
//               alt="Spanish Flag"
//               className="inline-block w-4 h-4 ml-1 top-2"
//             />{" "}
//           </SelectItem>
//         </SelectContent>
//       </Select>
//     </div>
//   );
// };

// export default MainNav;

//=======================================

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Facebook, Instagram } from "lucide-react";
import { TbBrandTiktok } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import spanishFlag from "../assets/spanishFlag.svg";
import enFlag from "../assets/enFlag.svg";

const MainNav: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  const getLanguagePlaceholder = (lang: string) => {
    switch (lang) {
      case "en":
        return (
          <div className="flex items-center">
            English
            <img
              src={enFlag}
              alt="English Flag"
              className="inline-block w-4 h-4 ml-1"
            />
          </div>
        );
      case "es":
        return (
          <div className="flex items-center">
            Español
            <img
              src={spanishFlag}
              alt="Spanish Flag"
              className="inline-block w-4 h-4 ml-1"
            />
          </div>
        );
      default:
        return lang.toUpperCase();
    }
  };

  return (
    <div className="container flex space-x-3">
      <a
        href="https://www.facebook.com/profile.php?id=61554006234471"
        target="_blank"
      >
        <Facebook size={30} className="text-base text-stone-400" />
      </a>
      <a
        href="https://www.instagram.com/domesticatingmechanicalbulls?igsh=bzU5M3UyZW9vaHln"
        target="_blank"
      >
        <Instagram size={30} className="text-base text-stone-400" />
      </a>
      <a
        href="https://www.tiktok.com/@domesticatingmechbulls?lang=es"
        className="text-3xl text-bold flex-bold text-stone-400"
        target="_blank"
      >
        <TbBrandTiktok />
      </a>
      {/* <div className="py-0 md:py-3 absolute bottom-6 z-10 sm:bottom-10"> */}
        <Button type="button" className=" bg-red-600 rounded-md h-[30px] ">
           {t("Order here")}
        </Button>
      
      <Select onValueChange={(value) => changeLanguage(value)}>
        <SelectTrigger className="w-[120px] h-[30px] text-white">
          <SelectValue placeholder={getLanguagePlaceholder(selectedLanguage)} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">
            English{" "}
            <img
              src={enFlag}
              alt="English Flag"
              className="inline-block w-4 h-4 ml-1"
            />
          </SelectItem>
          <SelectItem value="es">
            Español{" "}
            <img
              src={spanishFlag}
              alt="Spanish Flag"
              className="inline-block w-4 h-4 ml-1"
            />
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default MainNav;
