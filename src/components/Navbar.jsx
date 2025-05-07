import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-8 fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-black">AwanBongsu</div>
        <ul className="flex space-x-6 text-black">
          <li>
            <Link 
              to="home" 
              smooth={false} 
              duration={300}  
              className="cursor-pointer hover:text-primary"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="about" 
              smooth={false} 
              duration={500}  
              className="cursor-pointer hover:text-primary"
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="services" 
              smooth={false} 
              duration={500}  
              className="cursor-pointer hover:text-primary"
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              to="certificates" 
              smooth={false} 
              duration={500}  
              className="cursor-pointer hover:text-primary"
            >
              Certificates
            </Link>
          </li>
          <li>
            <Link 
              to="contact" 
              smooth={false} 
              duration={500}  
              className="cursor-pointer hover:text-primary"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
