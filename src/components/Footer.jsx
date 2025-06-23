import React from 'react';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            {/* <Code2 className="h-6 w-6 text-blue-400" /> */}
            <span className="text-lg font-bold text-white">Allanagari Renuka</span>
          </div>
          <div className="text-gray-400 text-sm mt-4 md:mt-0">
            ©2024 All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;