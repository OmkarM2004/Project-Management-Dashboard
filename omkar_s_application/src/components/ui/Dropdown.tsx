import React, { useState } from 'react';

interface DropdownProps {
  label: string;
  icon?: string;
  options?: string[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  icon,
  options = [],
  value = "",
  onChange,
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <div 
        className="flex flex-row items-center gap-2 px-2 py-2 bg-global-6 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {icon && <img src={icon} alt="Icon" className="w-4 h-4" />}
        <span className="text-xs font-semibold text-global-9 font-work-sans">
          {label}
        </span>
        <img src="/images/img_arrowdown.svg" alt="Arrow Down" className="w-5 h-5 ml-auto" />
      </div>
      
      {isOpen && options.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-global-11 border border-global-6 rounded-md shadow-lg z-10">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-3 py-2 text-xs text-global-1 hover:bg-global-7 cursor-pointer"
              onClick={() => {
                onChange?.(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;