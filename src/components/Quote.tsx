//definitivo marquee



// import Marquee from 'react-fast-marquee';
// import { useTranslation } from 'react-i18next';


// const TextEffectComponent = () => {

//   const { t } = useTranslation();

//   return (
//     <div className="relative bg-amber-500 h-[15vh] sm:h-[16vh] md:h-[22vh] lg:h-[28vh] xl:h-[35vh] flex items-center justify-center overflow-hidden">
//       {/* Texto de fondo con movimiento */}
//       <Marquee autoFill>
//       <div className="relative whitespace-nowrap ">
//         <p className="text-amber-800 text-opacity-20 text-[90px] sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[112px] font-bold tracking-wide">
//         {/* {t("What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it.")} */}
//         {t(" What is important in this life is not taught, but when you learn it, you don't forget it. ")}{" "}
//         </p>
//       </div>
//       </Marquee>
//       {/* Texto principal con movimiento */}
//       <div className="absolute text-center items-center">
//         <span className="text-amber-950 text-[18px] sm:text-[22px] md:text-[34px] lg:text-[45px] xl:text-[57px] font-semibold tracking-wide">
//           {t(" What is important in this life is not taught, but when you learn it, you don't forget it. ")}{" "}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default TextEffectComponent;

//==================================================

import { useTranslation } from 'react-i18next';
import Marquee from 'react-fast-marquee';

const TextEffectComponent2 = () => {

  const { t } = useTranslation();

  return (
    <div className="relative bg-amber-500 h-[15vh] sm:h-[16vh] md:h-[22vh] lg:h-[28vh] xl:h-[35vh] flex items-center justify-center overflow-hidden">
      {/* Texto de fondo con movimiento */}
      <Marquee autoFill speed={15}>
      <div className="relative whitespace-nowrap ">
        <p className="text-amber-800 font-times text-opacity-20 text-[90px] sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[112px] font-bold tracking-wide">
        {/* {t("What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it.")} */}
        {t(" Hope has given me resilience and resilience has given me hope ")}{" "}
        </p>
      </div>
      </Marquee>
      {/* Texto principal con movimiento */}
      <div className="absolute text-center items-center container">
        <span className="text-amber-950 font-times text-[26px] sm:text-[34px] md:text-[42px] lg:text-[55px] xl:text-[65px] font-semibold tracking-wide">
          {t(" Hope has given me resilience and resilience has given me hope ")}{" "}
        </span>
      </div>
    </div>
  );
};

export default TextEffectComponent2;