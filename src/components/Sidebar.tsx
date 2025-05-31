import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  History, 
  Calendar, 
  BookUser, 
  BarChart2, 
  MessageSquare, 
  HeadphonesIcon, 
  Settings,
  X
} from 'lucide-react';

interface SidebarProps {
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  return (
    <aside className="h-full flex flex-col bg-white shadow-md z-10">
      <div className="p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <span className="text-cyan-500">Health</span>
          <span className="text-gray-800">care.</span>
        </h1>
        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        )}
      </div>
      
      <nav className="flex-1 px-4">
        <div className="mb-6">
          <p className="text-xs uppercase text-gray-400 mb-4 font-medium tracking-wider">General</p>
          <ul>
            <SidebarItem to="/" icon={<LayoutDashboard size={20} />} label="Dashboard" />
            <SidebarItem to="/history" icon={<History size={20} />} label="History" />
            <SidebarItem to="/calendar" icon={<Calendar size={20} />} label="Calendar" />
            <SidebarItem to="/appointments" icon={<BookUser size={20} />} label="Appointments" />
            <SidebarItem to="/statistics" icon={<BarChart2 size={20} />} label="Statistics" />
          </ul>
        </div>
        
        <div>
          <p className="text-xs uppercase text-gray-400 mb-4 font-medium tracking-wider">Tools</p>
          <ul>
            <SidebarItem to="/chat" icon={<MessageSquare size={20} />} label="Chat" />
            <SidebarItem to="/support" icon={<HeadphonesIcon size={20} />} label="Support" />
          </ul>
        </div>
      </nav>
      
      <div className="px-4 py-6">
        <SidebarItem to="/settings" icon={<Settings size={20} />} label="Setting" />
      </div>
    </aside>
  );
};

interface SidebarItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ to, icon, label }) => {
  return (
    <li className="mb-2">
      <NavLink 
        to={to} 
        className={({ isActive }) => `
          flex items-center px-4 py-3 text-gray-600 rounded-md hover:bg-gray-100 transition-colors
          ${isActive ? 'bg-blue-50 text-blue-600' : ''}
        `}
      >
        <span className="mr-3">{icon}</span>
        <span className="text-sm font-medium">{label}</span>
      </NavLink>
    </li>
  );
};

export default Sidebar;