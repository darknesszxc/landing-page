import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-black shadow h-16 w-full m-0">
      <nav
        className="flex justify-between items-center mx-0 w-full p-4
              tablet:px-[39px] 
              mobile:px-[15px] 
              desktop:px-[85px]"
      >
        
        <div className="flex items-center">
          <img
            src="./assets/icons/Logo.svg"
            alt="Logo"
            className="w-[35px] h-[33px]"
          />
        </div>

        
        <ul className="hidden tablet:flex space-x-8 font-montserrat text-subtitle2 font-semibold leading-6 text-center">
          <li>
            <a href="#MainPage" className="hover:text-lavender text-lavender">
              Main
            </a>
          </li>
          <li>
            <a href="#About" className="hover:text-lavender">
              About
            </a>
          </li>
          <li>
            <a href="#GetInTouch" className="hover:text-lavender">
              Get in touch
            </a>
          </li>
        </ul>

        
        <div className="tablet:hidden flex items-center">
          <button onClick={toggleMenu}>
            <img
              src="./assets/icons/menu.svg"
              alt="menu"
              className="w-[32px] h-[32px]"
            />
          </button>
        </div>
      </nav>

      
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

     
      <div
        className={`tablet:hidden fixed top-0 right-0 h-screen w-[50%] bg-white shadow-md z-50 border rounded-l-[16px] transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-black hover:text-lavender focus:outline-none"
          >
            ✖
          </button>
        </div>

        <ul className="flex flex-col space-y-4 p-6 font-montserrat text-subtitle2 font-semibold leading-6 text-center">
          <li>
            <a
              href="#MainPage"
              className="hover:text-lavender"
              onClick={() => setIsMenuOpen(false)}
            >
              Main
            </a>
          </li>
          <li>
            <a
              href="#About"
              className="hover:text-lavender"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#GetInTouch"
              className="hover:text-lavender"
              onClick={() => setIsMenuOpen(false)}
            >
              Get in touch
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
