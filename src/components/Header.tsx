import MobileNav from "./MobileNav";
import MainNav from "./MainNav";


const Header = () => {
    return(
        <div className="order-b-5 bg-stone-950 py-3">
            <div className=" flex mx-auto justify-between items-center">
                <a className="text-sm sm:text-base md:text-base lg:text-1xl xl:text-2xl font-bold tracking-tight text-stone-400">
                    By Onid Sacla
                </a>
                <div className="md:hidden ">
                    <MobileNav />
                </div>
                <div className="hidden md:block">
                    <MainNav />
                </div>
            </div>
        </div>
    );
};

export default Header;

//======================================

// import MobileNav from "./MobileNav";
// import MainNav from "./MainNav";


// const Header = () => {
//     return(
//         <div className="order-b-0 bg-stone-950 py-3">
//             <div className="container mx-auto flex justify-between items-center ">
//                 <a className="text-sm sm:text-base md:text-base lg:text-1xl xl:text-2xl font-bold tracking-tight text-stone-400">
//                     By Onid Sacla
//                 </a>
//                 <div className="md:hidden ">
//                     <MobileNav />
//                 </div>
//                 <div className="hidden md:block">
//                     <MainNav />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Header;