import portada from "../assets/image.png";
import { Button } from "./ui/button";

const BookSectionEs = () => {
  return (
    <div className="flex flex-col xl:gap-5 " id="ES">
      <div className="grid lg:grid-cols-2 mt-10 ">
        <img
          src={portada}
          alt="portada"
          className="w-[55%] mx-auto md:mt-5 shadow-right-custom"
        />
        <div className="container flex flex-col justify-start lg:justify-left gap-10 text-center lg:text-left mt-10 mx-auto xl:mr-48  ">
          <span className="font-bold text-5xl lg:mr-54">
            Nuevo libro por Onid Sacla:
          </span>
          <span className="xl:mt-3 font-light text-xl">
            The Art of domesticating Mechanical Bulls
          </span>
          <span className="xl:mt-3 font-light text-xl">
            The Art of Domesticating Mechanical bulls - Fallacies of the
            Corporate World is the first installment of a book series that
            compiles common business fallacies and focuses on personal
            encouragement to thrive even when we are unable to tame the behavior
            of an enterprise.
          </span>
          <span className="xl:mt-3 font-light text-xl ">
            The book is based on true scenarios experienced by the author.  All
            characters, organizations, locations, timing details are not shared
            to respect privacy. The circumstances are used to illustrate some
            aspects of the work-life of millions of people around the globe
          </span>
        </div>
      </div>
      <div className="py-6 items-center text-center relative z-10">
        <Button type="button" className=" bg-red-600 rounded-md">
          Get it Here
        </Button>
      </div>
    </div>
  );
};

export default BookSectionEs;