import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // JS se auto year

  return (
    <footer className="footer">
      © {currentYear} Your Company. All rights reserved.
    </footer>
  );
};

export default Footer;
