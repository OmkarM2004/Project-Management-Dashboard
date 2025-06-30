import React from 'react';
import { Link } from 'react-router-dom';
import SearchView from '../ui/SearchView';

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full h-14 bg-global-11 border-b border-global-6 px-4">
      {/* Left Section - Breadcrumb */}
      <div className="flex flex-row items-center gap-2">
        <Link to="/" className="flex items-center">
          <img src="/images/img_panel.svg" alt="Panel" className="w-6 h-6" />
        </Link>
        <span className="text-sm font-medium text-global-11 font-work-sans">
          Workspace
        </span>
        <img src="/images/img_chevron.svg" alt="Chevron" className="w-3 h-3" />
        <span className="text-sm font-medium text-global-11 font-work-sans">
          Folder 2
        </span>
        <img src="/images/img_chevron.svg" alt="Chevron" className="w-3 h-3" />
        <span className="text-sm font-medium text-global-1 font-work-sans">
          Spreadsheet 3
        </span>
        <img src="/images/img_icon_frame.svg" alt="Icon Frame" className="w-6 h-6 ml-2" />
      </div>

      {/* Right Section */}
      <div className="flex flex-row items-center gap-1">
        {/* Search */}
        <SearchView placeholder="Search within sheet" />
        
        {/* Notifications */}
        <div className="relative flex items-center justify-center w-10 h-10 bg-global-11 rounded-lg">
          <img src="/images/img_alert.svg" alt="Alert" className="w-6 h-6" />
          <div className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 bg-header-1 text-header-1 text-xs font-medium rounded-lg border-2 border-global-11">
            2
          </div>
        </div>

        {/* User Profile */}
        <div className="flex flex-row items-center gap-2 px-2 py-1 bg-global-11 rounded-lg">
          <img src="/images/img_ellipse_1.png" alt="Profile" className="w-7 h-7 rounded-full" />
          <span className="text-xs text-global-9 font-work-sans">
            john.doe@companyname.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;