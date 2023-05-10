import React from 'react';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
    return (
        <div className="Layout">
            <Navbar />
            {children}
        </div>
    );
}

export default Layout;