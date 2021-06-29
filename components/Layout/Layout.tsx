import Navbar from "@components/Navbar/Navbar";
import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <footer>Footer content</footer>
    </>
  );
};

export default Layout;
