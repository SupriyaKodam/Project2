import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBrandDropdownOpen, setIsBrandDropdownOpen] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateAndScroll = (path, sectionId) => {
    navigate(path);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    }, 100);
  };

  const handleNavigation = (path, sectionId) => {
    setIsMenuOpen(false);

    if (sectionId) {
      navigateAndScroll(path, sectionId);
    } else {
      navigate(path);
      setIsMenuOpen(false); // Close menu after navigating
    }
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className="flex items-center justify-between bg-white py-4 px-6">
        
        <img className="w-40 h-20" src="./Images/mark.png" alt="logo" />

        {/* Menu Icon for medium screens and below */}
        <div className="lg:hidden flex items-center space-x-4">
          <MenuIcon 
            className="text-gray-700 hover:text-gray-900 cursor-pointer"
            onClick={toggleMenu}  
          />
        </div>

        {/* Links shown only on large screens */}
        <nav className="hidden lg:flex space-x-8 text-base text-gray-700 mx-auto cursor-pointer">
          <a onClick={() => navigateAndScroll('/', 'home')} className="hover:text-gray-900">Home</a>
          <a onClick={() => navigateAndScroll('/', 'collections')} className="hover:text-gray-900">Our Collection</a>
          <a onClick={() => navigateAndScroll('/', 'collections1')} className="hover:text-gray-900">Latest Collections</a>
          <a onClick={() => handleNavigation('/order')} className="hover:text-gray-900">OrderNow</a>
          <div className="relative hover:text-gray-900 cursor-pointer"
            onClick={() => setIsBrandDropdownOpen(!isBrandDropdownOpen)}
          >Brand <ArrowDropDownIcon />
            {isBrandDropdownOpen && (
              <div className="absolute bg-black text-white shadow-md rounded-md py-2 mt-2 w-40"
                onMouseLeave={() => setIsBrandDropdownOpen(false)}
              >
                <a className="block px-4 py-2" onClick={() => handleNavigation('/brand/nike')}>Nike</a>
                <a className="block px-4 py-2" onClick={() => handleNavigation('/brand/adidas')}>Adidas</a>
                <a className="block px-4 py-2" onClick={() => handleNavigation('/brand/puma')}>Puma</a>
                <a className="block px-4 py-2" onClick={() => handleNavigation('/brand/reebok')}>Reebok</a>
              </div>
            )}
          </div>
          <a className="hover:text-gray-900">My Cart</a>
          <a onClick={() => handleNavigation('/contact')} className="hover:text-gray-900">Contact Us</a>
          <a onClick={() => handleNavigation('/aboutus')} className="hover:text-gray-900">About Us</a>
          <a className="hover:text-gray-900">Track Your Order</a>
        </nav>

        <div className="flex items-center space-x-4">
          <SearchIcon className="text-gray-700 hover:text-gray-900 cursor-pointer" />
          <ShoppingCartIcon className="text-gray-700 hover:text-gray-900 cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu (Visible when `isMenuOpen` is true) */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <a onClick={() => navigateAndScroll('/', 'home')} className="hover:text-gray-900">Home</a>
            <a onClick={() => navigateAndScroll('/', 'collections')} className="hover:text-gray-900">Our Collection</a>
            <a onClick={() => navigateAndScroll('/', 'collections1')} className="hover:text-gray-900">Latest Collections</a>
            <a onClick={() => handleNavigation('/order')} className="hover:text-gray-900">OrderNow</a>
            <div className="hover:text-gray-900 cursor-pointer">
              Brand <ArrowDropDownIcon onClick={() => setIsBrandDropdownOpen(!isBrandDropdownOpen)} />
              {isBrandDropdownOpen && (
                <div className="bg-black text-white shadow-md rounded-md py-2 mt-2 w-40">
                  <a className="block px-4 py-2" onClick={() => handleNavigation('/brand/nike')}>Nike</a>
                  <a className="block px-4 py-2" onClick={() => handleNavigation('/brand/adidas')}>Adidas</a>
                  <a className="block px-4 py-2" onClick={() => handleNavigation('/brand/puma')}>Puma</a>
                  <a className="block px-4 py-2" onClick={() => handleNavigation('/brand/reebok')}>Reebok</a>
                </div>
              )}
            </div>
            <a className="hover:text-gray-900">My Cart</a>
            <a onClick={() => handleNavigation('/contact')} className="hover:text-gray-900">Contact Us</a>
            <a onClick={() => handleNavigation('/aboutus')} className="hover:text-gray-900">About Us</a>
            <a className="hover:text-gray-900">Track Your Order</a>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Navbar;
