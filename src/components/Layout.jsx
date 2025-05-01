// src/Layout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ darkMode, setDarkMode, isScrolled }) => {
  return (
    <div className={`${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} min-h-screen transition-colors duration-300`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} isScrolled={isScrolled} />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default Layout;