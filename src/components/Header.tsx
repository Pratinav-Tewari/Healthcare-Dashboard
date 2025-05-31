import React, { ReactNode } from 'react';
import { Search, Bell, Plus } from 'lucide-react';

interface HeaderProps {
  children?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="bg-white shadow-sm z-10">
      <div className="px-4 sm:px-6 py-4 flex items-center justify-between">
        {children}
        
        <div className="hidden sm:block relative flex-1 max-w-xs ml-4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search size={18} className="text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 w-full rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-600 rounded-full"></span>
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center">
              <span className="text-white text-sm font-medium">JD</span>
            </div>
            
            <button className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors">
              <Plus size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;