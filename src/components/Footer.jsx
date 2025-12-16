import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-100 py-6 mt-12">
      <div className="max-w-5xl mx-auto px-6 text-center text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} Ayomide Oyelola. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
