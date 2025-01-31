import React, { useState } from 'react';
import { AiOutlineUser, AiOutlineMessage } from 'react-icons/ai';
import logo from '../Screens/logo.png';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom

function Navbar(props) {
  const { Id } = props;  // Extract userId prop
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();  // Initialize useNavigate hook
  
  // Toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Navigate to the chat page when the chat icon is clicked
  const handleChatClick = () => {
    navigate(`/chatbot`);  // Navigate to /chat/${userId}
  };
  const handleAboutClick = ()=>{
    navigate('/about');
  }

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 rounded-lg h-16 bg-white shadow-md border flex items-center justify-between px-4 md:px-6 z-50">
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Logo */}
        <div className="text-xl font-semibold text-gray-700 mx-auto md:mx-0">
          <img src={logo} className="h-11 w-36 object-cover" alt="Logo" />
        </div>

        {/* Navigation Links (Hidden on mobile) */}
        <div className="hidden md:flex gap-8 text-gray-600 font-medium">
          <a href="#home" className="hover:text-blue-500 transition-all">
            Home
          </a>
          <a href="/about" className="hover:text-blue-500 transition-all">
            About
          </a>
          <a href="#contact" className="hover:text-blue-500 transition-all">
            Contact
          </a>
        </div>

        {/* Right side: Profile and Chat icons */}
        <div className="flex items-center gap-4">
          <AiOutlineMessage
            size={24}
            className="text-gray-600 hover:text-blue-500 cursor-pointer transition-all"
            onClick={handleChatClick}  
          />
          <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden border cursor-pointer">
            <img
              src="https://img.freepik.com/free-vector/young-woman-white_25030-39527.jpg?t=st=1737539224~exp=1737542824~hmac=b36c85d617383c947a1e73c35c4634855a1dd447fedb5164169027adb5df6cd1&w=1380"
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </nav>

      {/* Dropdown Menu for Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 rounded-lg mt-16 mx-2">
          <a href="#home" className="block py-2 px-4 hover:bg-gray-100 rounded-md">
            Home
          </a>
          <a className="block py-2 px-4 hover:bg-gray-100 rounded-md" onClick={handleAboutClick}>
            About
          </a>
          <a href="#contact" className="block py-2 px-4 hover:bg-gray-100 rounded-md">
            Contact
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
