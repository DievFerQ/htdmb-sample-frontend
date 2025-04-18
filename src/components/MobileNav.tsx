// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "./ui/select";
// import { Separator } from "./ui/separator";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetTitle,
//   SheetTrigger,
// } from "./ui/sheet";
// import { Menu } from "lucide-react";
// import { useTranslation } from "react-i18next";

// const MobileNav = () => {
//   const { t, i18n } = useTranslation();

//   const changeLanguage = (lng: string) => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <Sheet>
//       <SheetTrigger>
//         <Menu className="text-stone-400 " />
//       </SheetTrigger>
//       <SheetContent side="top" className="space-y-2">
//         <SheetTitle>
//           <span>{t("Follow Us")}</span>
//         </SheetTitle>
//         <Separator />
//         <SheetDescription className="flex flex-col space-y-4">
//           <a
//             href="https://www.facebook.com/profile.php?id=61554006234471"
//             className="text-base flex-bold"
//             target="_blank"
//           >
//             Facebook
//           </a>
//           <a
//             href="https://www.instagram.com/domesticatingmechanicalbulls?igsh=bzU5M3UyZW9vaHln"
//             className="text-base flex-bold"
//             target="_blank"
//           >
//             Instagram
//           </a>
//           <a
//             href="https://www.tiktok.com/@domesticatingmechbulls?lang=es"
//             className="text-base flex-bold"
//             target="_blank"
//           >
//             TikTok
//           </a>
//           <Select onValueChange={(value) => changeLanguage(value)}>
//             <SelectTrigger className="w-[60px] h-[30px] text-black ">
//               <SelectValue placeholder={i18n.language.toUpperCase()} />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="en">En</SelectItem>
//               <SelectItem value="es">Es</SelectItem>
//             </SelectContent>
//           </Select>
//         </SheetDescription>
//       </SheetContent>
//     </Sheet>
//   );
// };

// export default MobileNav;

//=====================================

//Intento de colocar sSVG
// <link rel="icon" type="image/svg+xml" href="/vite.svg" />


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Separator } from "./ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import spanishFlag from "../assets/spanishFlag.svg";
import enFlag from "../assets/enFlag.svg";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const MobileNav = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  const getLanguagePlaceholder = (lang: String) => {
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
    <Sheet>
      <SheetTrigger>
        <Menu className="container text-stone-400 " />
      </SheetTrigger>
      <SheetContent side="top" className="space-y-2">
        <SheetTitle>
          <span>{t("Follow Us")}</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col space-y-4">
          <a
            href="https://www.facebook.com/profile.php?id=61554006234471"
            className="text-base flex-bold"
            target="_blank"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/domesticatingmechanicalbulls?igsh=bzU5M3UyZW9vaHln"
            className="text-base flex-bold"
            target="_blank"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@domesticatingmechbulls?lang=es"
            className="text-base flex-bold"
            target="_blank"
          >
            TikTok
          </a>
          <div>
          <Button type="button" className=" bg-red-600 rounded-md w-[120px] h-[30px] ">
           {t("Order here")}
        </Button>
          </div>
          <Select onValueChange={(value) => changeLanguage(value)}>
            <SelectTrigger className="w-[120px] h-[30px] text-black ">
              <SelectValue placeholder={getLanguagePlaceholder(selectedLanguage)} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English <img src={enFlag} alt="Spanish Flag" className="inline-block w-4 h-4 ml-1 top-0" /> </SelectItem>
              <SelectItem value="es">Español <img src={spanishFlag} alt="Spanish Flag" className="inline-block w-4 h-4 ml-1 top-0" /> </SelectItem>
            </SelectContent>
          </Select>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

