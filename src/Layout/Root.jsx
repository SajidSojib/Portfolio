import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Root = () => {
  const navigation = useNavigation();
AOS.init();
  if(navigation.state === 'loading'){
    return <div className='flex items-center justify-center h-screen'><span className="loading loading-dots loading-xl"></span></div>
  }
    return (
      <div className="bg-info scroll-smooth">
        <div className="sticky z-50 top-0 bg-[#042b30] border-b-2  border-[rgba(102, 102, 102, 0.5)] scroll-smooth">
          <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
        {/* <Footer></Footer> */}
      </div>
    );
};

export default Root;