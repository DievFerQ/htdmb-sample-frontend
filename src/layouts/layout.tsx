
// import Footer from "@/components/Footer";
// import Header from "@/components/Header";


// type Props = {
//     children: React.ReactNode;

// }

// const Layout = ({ children }: Props) => {
//     return(
//         <div className="flex flex-col min-h-screen ">
//             <Header />
//             <div className="">{children}</div>
//             <Footer />
//         </div>
//     )
// }

// export default Layout;


//======================================

// INTENTO DE TRADUCCION

import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';


type Props = {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  

  return (
    <div className="flex flex-col max-h-screen">
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
