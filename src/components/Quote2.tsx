import { useTranslation } from 'react-i18next';
import Marquee from 'react-fast-marquee';

const TextEffectComponent2 = () => {

  const { t } = useTranslation();

  return (
    <div className="relative bg-amber-500 h-[15vh] sm:h-[16vh] md:h-[22vh] lg:h-[28vh] xl:h-[35vh] flex items-center justify-center overflow-hidden ">
      {/* Texto de fondo con movimiento */}
      <Marquee autoFill speed={15}>
      <div className="relative whitespace-nowrap ">
        <p className="text-amber-800 font-times text-opacity-20 text-[90px] sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[112px] font-bold tracking-wide">
        {/* {t("What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it. What is important in this life is not taught, but when you learn it, you don't forget it.")} */}
        {t("Standing tall, we won't be small")}{" "}
        </p>
      </div>
      </Marquee>
      {/* Texto principal con movimiento */}
      <div className="flex absolute text-center items-center justify-center container">
        <span className="text-amber-950 font-times text-[26px] sm:text-[34px] md:text-[42px] lg:text-[55px] xl:text-[65px] font-semibold tracking-wide">
          {t("Standing tall, we won't be small")}{" "}
        </span>
      </div>
    </div>
  );
};

export default TextEffectComponent2;