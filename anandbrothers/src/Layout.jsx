import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Sidebar from './components/Sidebar.jsx';
import { Menu } from 'lucide-react';

function Layout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const sidebarWidth = sidebarOpen ? 'w-64' : 'w-16';
    const mainContentPad = sidebarOpen ? 'pl-64' : 'pl-16'; // Tailwind: pl-64 = 16rem, pl-16 = 4rem

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="w-full h-full m-0 p-0">
            {/* Sidebar (fixed, overlaps header/footer) */}
            <div className={`fixed top-0 left-0 h-screen z-50 transition-all duration-300 ease-in-out ${sidebarWidth}`}>
                <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
            </div>

            {/* Main content area with left padding */}
            <div className={`transition-all duration-300  ${mainContentPad}`}>
                <Header />
                <div className="min-h-screen w-full m-0 p-0">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Layout;
