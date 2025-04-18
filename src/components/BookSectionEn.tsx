// import portada from "../assets/image.png";
// import { Button } from "./ui/button";
// import { useTranslation } from 'react-i18next';

// const BookSectionEn = () => {

//   const { t } = useTranslation();

//   return (
//     <div className=" flex flex-col xl:gap-5 ">
//       <div className="grid md:grid-cols-2 mt-10 ">
//         <img
//           src={portada}
//           alt="portada"
//           className="w-[55%] mx-auto md:mt-5 shadow-right-custom"
//         />
//         <div className="container flex flex-col justify-center lg:justify-left gap-10 text-center lg:text-left mt-10 mx-auto xl:mr-48  ">
//           <span className=" font-bold text-5xl lg:mr-54">
//             {t("Onid Sacla's new book:")}
//           </span>
//           <span className=" xl:mt-3 font-light text-xl">
//             {t('The Art of domesticating Mechanical Bulls')}
//           </span>
//           <span className=" xl:mt-3 font-light text-xl mx-auto">
//             {t('The Art of Domesticating Mechanical bulls - Fallacies of the Corporate World is the first installment of a book series that compiles common business fallacies and focuses on personal encouragement to thrive even when we are unable to tame the behavior of an enterprise.')}
//           </span>
//           <span className=" xl:mt-3 font-light text-xl ">
//             {t('The book is based on true scenarios experienced by the author. All characters, organizations, locations, timing details are not shared to respect privacy. The circumstances are used to illustrate some aspects of the work-life of millions of people around the globe')}
//           </span>
//         </div>
//       </div>
//       <div className="py-6 items-center text-center relative z-10">
//         <Button type="button" className=" bg-red-600 text-white rounded-md">
//           {t('Order here')}
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default BookSectionEn;

//========================================

//DEFINITIVA JUN 20 

// import portada from "../assets/image.png";
// import { Button } from "./ui/button";
// import { useTranslation } from "react-i18next";

// const BookSectionEn = () => {
//   const { t } = useTranslation();

//   return (
//     <div className=" flex flex-col xl:gap-5 ">
//       <div className="grid md:grid-cols-2 mt-10 ">
//         <img
//           src={portada}
//           alt="portada"
//           className="w-[40%] md:w-[55%] mx-auto md:mt-5 shadow-right-custom"
//         />
//         <div className="container flex flex-col justify-center lg:justify-left gap-10 text-center lg:text-left mt-10 mx-auto xl:mr-48  ">
//           <span className=" font-bold text-5xl lg:mr-54">
//             {t("Onid Sacla's new book:")}
//           </span>
//           <span className=" xl:mt-3 font-light text-xl">
//             {t("The Art of domesticating Mechanical Bulls")}
//           </span>
//           <span className=" xl:mt-3 font-light text-xl mx-auto">
//             {t(
//               "The Art of Domesticating Mechanical bulls - Fallacies of the Corporate World is the first installment of a book series that compiles common business fallacies and focuses on personal encouragement to thrive even when we are unable to tame the behavior of an enterprise."
//             )}
//           </span>
//           <span className=" xl:mt-3 font-light text-xl ">
//             {t(
//               "The book is based on true scenarios experienced by the author. All characters, organizations, locations, timing details are not shared to respect privacy. The circumstances are used to illustrate some aspects of the work-life of millions of people around the globe"
//             )}
//           </span>
//         </div>
//       </div>
//       <div className="py-6 items-center text-center relative z-10">
//         <Button type="button" className=" bg-red-600 text-white rounded-md">
//           {t("Order here")}
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default BookSectionEn;

//===================================

//DEFINITIVO

import portada from "../assets/image.png";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

const BookSectionEn = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col xl:gap-5">
  <div className="grid md:grid-cols-2 mt-10 gap-4">
    <img
      src={portada}
      alt="portada"
      className="w-[60%] sm:w-[50%] md:w-[55%] lg:w-[50%] mx-auto md:mt-5 shadow-right-custom"
    />
    <div className="flex flex-col justify-center lg:justify-start gap-6 text-center lg:text-left mt-10 mx-auto xl:mr-48 px-4 sm:px-6 md:px-8">
      <span className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        {t("Onid Sacla's new book:")}
      </span>
      <span className="font-light text-lg sm:text-xl xl:mt-3">
        {t("The Art of domesticating Mechanical Bulls")}
      </span>
      <span className="font-light text-lg sm:text-xl xl:mt-3 mx-auto lg:mx-0">
        {t(
          "The Art of Domesticating Mechanical bulls - Fallacies of the Corporate World is the first installment of a book series that compiles common business fallacies and focuses on personal encouragement to thrive even when we are unable to tame the behavior of an enterprise."
        )}
      </span>
      <span className="font-light text-lg sm:text-xl xl:mt-3">
        {t(
          "The book is based on true scenarios experienced by the author. All characters, organizations, locations, timing details are not shared to respect privacy. The circumstances are used to illustrate some aspects of the work-life of millions of people around the globe"
        )}
      </span>
    </div>
  </div>
  <div className="py-6 flex justify-center relative z-10">
    <Button type="button" className="bg-red-600 text-white rounded-md px-6 py-2">
      {t("Order here")}
    </Button>
  </div>
</div>
  );
};

export default BookSectionEn;