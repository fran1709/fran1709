// Layout.tsx
import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className=''>
      <Navbar />
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
