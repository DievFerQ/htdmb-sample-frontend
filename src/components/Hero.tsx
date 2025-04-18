//============================================

//MAS BUENA AUM / DEFINIDA / 13 JUN

// import bullandman from "../assets/bullandman.png";
// import { Button } from "./ui/button";

// const Hero = () => {
//   return (
//     <section className="bg-stone-950 min-h-[380px] sm:min-h-[500px] md:min-h-[520px] lg:min-h-[600px] xl:min-h-[700px] flex items-center justify-center relative">
//       <div className="absolute inset-0 flex justify-center ">
//         <div className="flex flex-col justify-start text-center px-4 sm:px-6 lg:px-8 max-w-1xl mx-auto mt-0">
//           <h1 className="text-white mb-7 text-[42px] sm:text-[50px] md:text-[70px] lg:text-[80px] xl:text-[110px] font-light leading-none tracking-[-0.02em] text-center mt-0">
//           <span className="text-white font-light">The</span> <span className="font-bold">art of</span>
//           </h1>
//           <h2 className="text-white mb-7 text-[42px] sm:text-[50px] md:text-[70px] lg:text-[80px] xl:text-[110px] leading-none tracking-[-0.02em] text-center">
//           <span className="font-thin italic">domesticating</span>
//         </h2>
//           <h3 className="text-white mb-7 text-[42px] sm:text-[50px] md:text-[70px] lg:text-[80px] xl:text-[110px] font-light leading-none  tracking-[-0.02em] text-center">
//             <span className="font-bold">Mechanical</span>
//           </h3>
//           <h4 className="text-white mb-7 text-[42px] sm:text-[50px] md:text-[70px] lg:text-[80px] xl:text-[110px] font-light leading-none  tracking-[-0.02em] text-center">
//           <span className="font-bold">Bulls</span>
//           </h4>
//           <div className="py-6 relative z-10">
//             <Button type="button" className=" bg-red-600 rounded-md">
//               Get it Here
//             </Button>
//           </div>
//         </div>

//         <div className="hidden sm:block absolute bottom-auto right-0 w-fit md:w-fit lg:w-fit h-full  items-center justify-end z-0 transition">
//           <img
//             src={bullandman}
//             alt="bullandperson"
//             className="w-full h-auto object-contain max-w-full max-h-full"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

//========================================

// TODO BIEN HASTA ACA 19 JUN

// import bullandman from "../assets/bullandman.png";
// import { Button } from "./ui/button";
// import { useTranslation } from 'react-i18next';

// const Hero = () => {

//   const { t } = useTranslation();

//   return (
//     <div className="bg-stone-950">
//       <div className="relative min-h-[380px] sm:min-h-[500px] md:min-h-[80vdh] lg:min-h-[80dvh] xl:min-h-[90dvh] 2xl:min-h-[80vdh] overflow-hidden">
//         <div className="absolute inset-0 flex justify-center">
//           <div className="flex flex-col justify-start text-center px-4 sm:px-6 lg:px-8 max-w-1xl mx-auto mt-0">
//             <h1 className="text-white mb-7 text-[42px] sm:text-[50px] md:text-[70px] lg:text-[80px] xl:text-[110px] font-light leading-none tracking-[-0.02em] text-center mt-0">
//               <span className="text-white font-light">{t('the ')}</span>{" "}
//               <span className="font-bold">{t('Art')}</span>
//             </h1>
//             <h1 className="text-white mb-7 text-[42px] sm:text-[50px] md:text-[70px] lg:text-[80px] xl:text-[110px] font-light leading-none tracking-[-0.02em] text-right mt-0">
//               <span className="font-bold">{t('of')}</span>
//             </h1>
//             <h2 className="text-white mb-7 text-[42px] sm:text-[50px] md:text-[70px] lg:text-[80px] xl:text-[110px] leading-none tracking-[-0.02em] text-center">
//               <span className="font-thin italic">{t('domesticating')}</span>
//             </h2>
//             <h3 className="text-white mb-7 text-[42px] sm:text-[50px] md:text-[70px] lg:text-[80px] xl:text-[110px] font-light leading-none  tracking-[-0.02em] text-center">
//               <span className="font-normal">{t('Mechanical')}</span>
//             </h3>
//             <h4 className="text-white mb-7 text-[42px] sm:text-[50px] md:text-[70px] lg:text-[80px] xl:text-[110px] font-light leading-none  tracking-[-0.02em] text-center">
//               <span className="font-bold">{t('Bulls')}</span>
//             </h4>

//           </div>
//           <div className="py-6 absolute z-10 bottom-4">
//               <Button type="button" className=" bg-red-600 rounded-md">
//                 {t('Order here')}
//               </Button>
//             </div>
//         </div>
//         <div className="hidden sm:block absolute bottom-0 right-0 w-[50vw] h-full">
//           <img src={bullandman} className="w-full h-full max-w-full max-h-full right-0" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

//==============================

//JUN 14 INTENTO NUEVO // DEFINITIVOOO

// import bullandman from "../assets/bullandman.png";
// import { Button } from "./ui/button";
// import { useTranslation } from 'react-i18next';

// const Hero = () => {

//   const { t } = useTranslation();

//   return (
//     <div className="bg-stone-950">
//       <div className="relative min-h-[380px] sm:min-h-[500px] md:min-h-[80vdh] lg:min-h-[80dvh] xl:min-h-[90dvh] 2xl:min-h-[80vdh] overflow-hidden">
//         <div className="absolute inset-0 flex justify-center">
//           <div className="flex flex-col justify-start text-center px-4 sm:px-6 lg:px-8 max-w-1xl mx-auto mt-0">
//             <h1 className="text-white mb-7 text-[42px] sm:text-[50px] md:text-[70px] lg:text-[80px] xl:text-[110px] font-light leading-none tracking-[-0.02em] text-center mt-0">
//               <span className="text-white font-light">{t('the ')}</span>{" "}
//               <span className="font-bold">{t('Art of')}</span>
//             </h1>
//             <h2 className="text-white mb-7 text-[42px] sm:text-[50px] md:text-[70px] lg:text-[80px] xl:text-[110px] leading-none tracking-[-0.02em] text-center">
//               <span className="font-thin italic">{t('domesticating')}</span>
//             </h2>
//             <h3 className="text-white mb-7 text-[42px] sm:text-[50px] md:text-[70px] lg:text-[80px] xl:text-[110px] font-light leading-none  tracking-[-0.02em] text-center">
//               <span className="font-normal">{t('Mechanical')}</span>
//             </h3>
//             <h4 className="text-white mb-7 text-[42px] sm:text-[50px] md:text-[70px] lg:text-[80px] xl:text-[110px] font-light leading-none  tracking-[-0.02em] text-center">
//               <span className="font-bold">{t('Bulls')}</span>
//             </h4>
//             <div className="py-6 relative z-10">
//               <Button type="button" className=" bg-red-600 rounded-md">
//                 {t('Order here')}
//               </Button>
//             </div>
//           </div>
//         </div>
//         <div className="hidden sm:block absolute bottom-0 right-0 w-[50vw] h-full">
//           <img src={bullandman} className="w-full h-full max-w-full max-h-full right-0" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

//=========================================================

// ACT 19 JUN FONTS
// import bullandman from "../assets/bullandman.png";
// import { Button } from "./ui/button";
// import { useTranslation } from 'react-i18next';

// const Hero = () => {

//   const { t } = useTranslation();

//   return (
//     <div className="bg-stone-950">
//       <div className="relative min-h-[380px] sm:min-h-[500px] md:min-h-[80vdh] lg:min-h-[80dvh] xl:min-h-[90dvh] 2xl:min-h-[80vdh] overflow-hidden">
//         <div className="absolute inset-0 flex justify-center">
//           <div className="flex flex-col justify-start text-center px-4 sm:px-6 lg:px-8 max-w-1xl mx-auto mt-0">
//             <h1 className="text-white mb-7 text-[42px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[110px] font-light leading-none tracking-[-0.02em] text-center mt-0">
//               <span className="text-white font-roboto font-thin">{t('the ')}</span>{" "}
//               <span className="font-playfair font-bold">{t('Art')}</span>{" "}
//               <span className="italic font-roboto ">{t('of')}</span>
//             </h1>
//             <h2 className="text-white mb-7 text-[42px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[110px] leading-none tracking-[-0.02em] text-center font-thin">
//               <span className="italic font-roboto font-thin align-middle">{t('domesticating')}</span>
//             </h2>
//             <h3 className="text-white mb-7 text-[42px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[110px] font-light leading-none  tracking-[-0.02em] text-center">
//               <span className="font-normal font-playfair">{t('Mechanical')}</span>
//             </h3>
//             <h4 className="text-white mb-7 text-[42px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[110px] font-light leading-none  tracking-[-0.02em] text-center">
//               <span className="font-playfair">{t('Bulls')}</span>
//             </h4>

//           </div>
//           <div className="py-6 absolute z-10 bottom-10">
//               <Button type="button" className=" bg-red-600 rounded-md">
//                 {t('Order here')}
//               </Button>
//             </div>
//         </div>
//         <div className="hidden sm:block absolute bottom-0 right-0 w-[50vw] h-full">
//           <img src={bullandman} className="w-full h-full max-w-full max-h-full right-0" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

//========================================

//Demasiado Buena, estructura de fonts

// import bullandman from "../assets/bullandman.png";
// import { Button } from "./ui/button";
// import { useTranslation } from 'react-i18next';

// const Hero = () => {

//   const { t } = useTranslation();

//   return (
//     <div className="bg-stone-950">
//       <div className="relative min-h-[380px] sm:min-h-[500px] md:min-h-[80vdh] lg:min-h-[80dvh] xl:min-h-[90dvh] 2xl:min-h-[80vdh] overflow-hidden">
//         <div className="absolute inset-0 flex justify-center">
//           <div className="flex flex-col justify-start text-center px-4 sm:px-6 lg:px-8 max-w-1xl mx-auto mt-0">
//             <h1 className="text-white mb-1 font-light leading-none tracking-[-0.02em] text-center mt-0">
//               <span className="text-[42px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[80px] font-roboto font-thin align-text-bottom">{t('the ')}</span>{""}
//               <span className="text-[42px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[110px] font-playfair font-bold">{t('Art')}</span>
//               <span className="text-[42px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[110px] italic font-roboto font-thin align-text-top">{t('of')}</span>
//             </h1>
//             <h1 className="text-white mb-7 text-[42px] sm:text-[60px] md:text-[70px] lg:text-[70px] xl:text-[70px] leading-none tracking-[-0.02em] text-center font-thin">
//               <span className="italic font-roboto font-thin align-middle">{t('domesticating')}</span>
//             </h1>
//             <h1 className="text-white mb-2 text-[42px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[100px] font-light leading-none  tracking-[-0.02em] text-center">
//               <span className=" font-roboto font-normal">{t('Mechanical')}</span>
//             </h1>
//             <h1 className="text-white mb-2 text-[42px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[140px] font-light leading-none  tracking-[-0.02em] text-center">
//               <span className="font-playfair font-extrabold">{t('Bulls')}</span>
//             </h1>

//           </div>
//           <div className="py-6 absolute z-10 bottom-5">
//               <Button type="button" className=" bg-red-600 rounded-md">
//                 {t('Order here')}
//               </Button>
//             </div>
//         </div>
//         <div className="hidden sm:block absolute bottom-0 right-0 w-[50vw] h-full">
//           <img src={bullandman} className="w-full h-full max-w-full max-h-full right-0" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

//==========================================

// import bullandman from "../assets/bullandman.png";
// import bullandman1 from "../assets/bullandperson1.png";
// import { Button } from "./ui/button";
// import { useTranslation } from "react-i18next";

// const Hero = () => {
//   const { t } = useTranslation();

//   return (
//     <div className="bg-stone-950">
//       <div className="relative min-h-[430px] sm:min-h-[70dvh] md:min-h-[80dvh] lg:min-h-[85dvh] xl:min-h-[90dvh] 2xl:min-h-[80vdh] overflow-hidden">
//         <div className="absolute inset-0 flex justify-center">
//           <div className="flex flex-col justify-start text-center px-4 sm:px-6 lg:px-8 xl:px-10 max-w-1xl mx-auto mt-0">
//             <h1 className="text-white mb-0 leading-none tracking-[-0.02em] text-center mt-0">
//               <span className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] font-basker font-[10] align-text-bottom leading-snug sm:leading-none">
//                 {t("the ")}
//               </span>
//               {""}
//               <span className="text-[70px] sm:text-[80px] md:text-[90px] lg:text-[100px] xl:text-[110px] font-basker font-normal">
//                 {t("Art")}
//               </span>
//             </h1>
//             <h1 className="text-white mb-1 leading-6 sm:leading-10 tracking-[-0.02em] text-center mt-0 ">
//             <span className="text-[60px] sm:text-[70px] md:text-[80px] lg:text-[90px] xl:text-[100px] italic font-times font-[10] align-super ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('of ')}</span>
//             </h1>
//             {/* <h1 className="text-white mb-1 font-light leading-none tracking-tight text-center mt-0">
//               <span className="block text-[42px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[110px] italic font-roboto font-thin">
//                 {t("of")}
//               </span>
//             </h1> */}
//             <h1 className="text-white mb-7 text-[25px] sm:text-[35px] md:text-[45px] lg:text-[55px] xl:text-[60px] leading-none tracking-[-0.02em] text-center font-thin">
//               <span className="italic font-roboto font-thin align-middle">
//                 {t("domesticating")}
//               </span>
//             </h1>
//             <h1 className="text-white mb-2 text-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[100px] font-light leading-none  tracking-[-0.02em] text-center">
//               <span className=" font-roboto font-normal">
//                 {t("Mechanical")}
//               </span>
//             </h1>
//             <h1 className="text-white mb-2 text-[100px] sm:text-[110px] md:text-[120px] lg:text-[130px] xl:text-[140px] font-light leading-none  tracking-[-0.02em] text-center">
//               <span className="font-times font-normal">{t("Bulls")}</span>
//             </h1>
            
//           </div>
//           <div className="py-0 md:py-3 absolute bottom-6 sm:bottom-10">
//             <Button type="button" className=" bg-red-600 rounded-md">
//               {t("Order here")}
//             </Button>
//           </div>
//         </div>
//         <div className="hidden sm:block absolute bottom-0 right-0 w-[60vw] lg:w-[50%] h-full">
//           <img
//             src={bullandman}
//             className="w-full h-full min-w-full min-h-full right-0"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

//==============================

// Exitoso hasta el momento

// import bullandman from "../assets/bullandman.png";
// import bullandman1 from "../assets/bullandperson1.png";
// import { Button } from "./ui/button";
// import { useTranslation } from "react-i18next";

// const Hero = () => {
//   const { t } = useTranslation();

//   return (
//     <div className="bg-stone-950">
//       <div className="relative min-h-[430px] sm:min-h-[70dvh] md:min-h-[80dvh] lg:min-h-[85dvh] xl:min-h-[90dvh] 2xl:min-h-[80vdh] overflow-hidden">
//         <div className="absolute inset-0 flex justify-center">
//           <div className="flex flex-col justify-start text-center px-4 sm:px-6 lg:px-8 xl:px-10 max-w-1xl mx-auto mt-0">
//             <h1 className="text-white mb-0 leading-none tracking-[-0.02em] text-center mt-0">
//               <span className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] font-basker font-[10] align-text-bottom leading-snug sm:leading-none">
//                 {t("the ")}
//               </span>
//               {""}
//               <span className="text-[70px] sm:text-[80px] md:text-[90px] lg:text-[100px] xl:text-[110px] font-basker font-normal">
//                 {t("Art")}
//               </span>
//             </h1>
//             <h1 className="text-white mb-1 leading-6 sm:leading-10 tracking-[-0.02em] text-center mt-0 ">
//             <span className="text-[60px] sm:text-[70px] md:text-[80px] lg:text-[90px] xl:text-[100px] italic font-times font-[10] align-super ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('of ')}</span>
//             </h1>
//             {/* <h1 className="text-white mb-1 font-light leading-none tracking-tight text-center mt-0">
//               <span className="block text-[42px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[110px] italic font-roboto font-thin">
//                 {t("of")}
//               </span>
//             </h1> */}
//             <h1 className="text-white mb-7 text-[25px] sm:text-[35px] md:text-[45px] lg:text-[55px] xl:text-[60px] leading-none tracking-[-0.02em] text-center font-thin">
//               <span className="italic font-roboto font-thin align-middle">
//                 {t("domesticating")}
//               </span>
//             </h1>
//             <h1 className="text-white mb-2 text-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[90px] font-light leading-none  tracking-[-0.02em] text-center">
//               <span className=" font-roboto font-normal">
//                 {t("Mechanical")}
//               </span>
//             </h1>
//             <h1 className="text-white mb-2 text-[100px] sm:text-[110px] md:text-[120px] lg:text-[130px] xl:text-[140px] font-light leading-none  tracking-[-0.02em] text-center">
//               <span className="font-times font-normal">{t("Bulls")}</span>
//             </h1>
            
//           </div>
//           <div className="py-0 md:py-3 absolute bottom-6 z-10 sm:bottom-10">
//             <Button type="button" className=" bg-red-600 rounded-md">
//               {t("Order here")}
//             </Button>
//           </div>
//         </div>
//         <div className="hidden sm:block absolute bottom-0 right-0 w-[60vw] lg:w-[50%] h-full">
//           <img
//             src={bullandman}
//             className="w-full h-full min-w-full min-h-full right-0"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

//=============================================================

//Intento definitivo 25 JUN/ sin modificaciones


// import bullandman from "../assets/bullandman.png";
// import bullandman1 from "../assets/bullandperson1.png";
// import { Button } from "./ui/button";
// import { useTranslation } from "react-i18next";

// const Hero = () => {
//   const { t } = useTranslation();

//   return (
//     <div className="bg-stone-950">
//       <div className="relative min-h-[440px] xs:min-h-[380px] sm:min-h-[510px] md:min-h-[570px] lg:min-h-[600px] xl:min-h-[630px] 2xl:min-h-[700px] overflow-hidden ">
//         <div className="absolute inset-0 flex justify-center">
//           <div className="flex flex-col justify-start text-center px-4 sm:px-6 lg:px-8 xl:px-10 max-w-1xl mx-auto mt-0">
//             <h1 className="text-white mb-0 leading-none tracking-[-0.02em] text-center mt-0">
//               <span className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] font-basker font-[10] align-text-bottom leading-snug sm:leading-none">
//                 {t("the ")}
//               </span>
//               {""}
//               <span className="text-[70px] sm:text-[80px] md:text-[90px] lg:text-[100px] xl:text-[110px] font-basker font-normal">
//                 {t("Art")}
//               </span>
//             </h1>
//             <h1 className="text-white mb-1 leading-6 sm:leading-10 tracking-[-0.02em] text-center mt-0 ">
//             <span className="text-[60px] sm:text-[70px] md:text-[80px] lg:text-[90px] xl:text-[100px] italic font-times font-[10] align-super ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('of ')}</span>
//             </h1>
//             {/* <h1 className="text-white mb-1 font-light leading-none tracking-tight text-center mt-0">
//               <span className="block text-[42px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[110px] italic font-roboto font-thin">
//                 {t("of")}
//               </span>
//             </h1> */}
//             <h1 className="text-white mb-7 text-[25px] sm:text-[35px] md:text-[45px] lg:text-[55px] xl:text-[60px] leading-none tracking-[-0.02em] text-center font-thin">
//               <span className="italic font-roboto font-thin align-middle">
//                 {t("domesticating")}
//               </span>
//             </h1>
//             <h1 className="text-white mb-2 text-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[90px] font-light leading-none  tracking-[-0.02em] text-center">
//               <span className=" font-roboto font-normal">
//                 {t("Mechanical")}
//               </span>
//             </h1>
//             <h1 className="text-white mb-2 text-[100px] xs:text-[70px] sm:text-[110px] md:text-[120px] lg:text-[130px] xl:text-[140px] font-light leading-none  tracking-[-0.02em] text-center">
//               <span className="font-times font-normal">{t("Bulls")}</span>
//             </h1>
            
//           </div>
//           <div className="py-0 md:py-3 absolute bottom-6 z-10 sm:bottom-10">
//             <Button type="button" className=" bg-red-600 rounded-md">
//               {t("Order here")}
//             </Button>
//           </div>
//         </div>
//         <div className="absolute bottom-0 right-0 w-[45vw] lg:w-[45vw] h-contain lg:h-full">
//           <img
//             src={bullandman}
//             className="w-full h-full min-w-full min-h-full right-0"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


//===============================================================

// INTENTO NUEVo CON MODI 25 JUN


import bullandman from "../assets/bullandman.png";
import bullandman1 from "../assets/bullandperson1.png";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-stone-950">
      <div className="relative min-h-[440px] xs:min-h-[380px] sm:min-h-[510px] md:min-h-[620px] lg:min-h-[650px] xl:min-h-[630px] 2xl:min-h-[750px] overflow-hidden ">
        <div className="absolute inset-0 flex justify-center">
          <div className="flex flex-col justify-start text-center px-4 sm:px-6 lg:px-8 xl:px-10 max-w-1xl mx-auto mt-0">
            <h1 className="text-white mb-0 leading-none tracking-[-0.02em] text-center mt-0">
              <span className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] font-basker font-[10] align-text-bottom leading-snug sm:leading-none">
                {t("the ")}
              </span>
              {""}
              <span className="text-[70px] sm:text-[80px] md:text-[90px] lg:text-[100px] xl:text-[110px] font-basker font-normal">
                {t("Art")}
              </span>
            </h1>
            <h1 className="text-white mb-1 leading-6 sm:leading-10 tracking-[-0.02em] text-center mt-0 ">
            <span className="text-[60px] sm:text-[70px] md:text-[80px] lg:text-[90px] xl:text-[100px] italic font-times font-[10] align-super ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{t('of ')}</span>
            </h1>
            {/* <h1 className="text-white mb-1 font-light leading-none tracking-tight text-center mt-0">
              <span className="block text-[42px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[110px] italic font-roboto font-thin">
                {t("of")}
              </span>
            </h1> */}
            <h1 className="text-white mb-7 text-[25px] sm:text-[35px] md:text-[45px] lg:text-[55px] xl:text-[60px] leading-none tracking-[-0.02em] text-center font-thin">
              <span className="italic font-roboto font-thin align-middle">
                {t("domesticating")}
              </span>
            </h1>
            <h1 className="text-white mb-2 text-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[90px] font-light leading-none  tracking-[-0.02em] text-center">
              <span className=" font-roboto font-normal">
                {t("Mechanical")}
              </span>
            </h1>
            <h1 className="text-white mb-2 text-[100px] xs:text-[70px] sm:text-[110px] md:text-[120px] lg:text-[130px] xl:text-[140px] font-light leading-none  tracking-[-0.02em] text-center">
              <span className="font-times font-normal">{t("Bulls")}</span>
            </h1>

            
            
          </div>

          {/* <div className="absolute text-white mb-7 text-[25px] sm:text-[35px] md:text-[45px] lg:text-[55px] xl:text-[60px] leading-none tracking-[-0.02em] text-center justify-center font-thin bottom-10 left-10 ">
              <h2 className="italic font-bree font-thin align-middle">
                {t("Fallacies")}
              </h2>
              <h2 className="italic font-bree font-thin align-middle">
                {t("of the ")}
              </h2>
              <h2 className="italic font-bree font-thin align-middle">
                {t("corporate world")}
              </h2>
            </div> */}

          {/* <div className="py-0 md:py-3 absolute bottom-6 z-10 sm:bottom-10">
            <Button type="button" className=" bg-red-600 rounded-md">
              {t("Order here")}
            </Button>
          </div> */}
        </div>
        <div className="absolute bottom-0 right-0 w-[45vw] lg:w-[45vw] h-contain lg:h-full">
          <img
            src={bullandman}
            className="w-full h-full min-w-full min-h-full right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;