import React from 'react';

interface SearchViewProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const SearchView: React.FC<SearchViewProps> = ({
  placeholder = "Search",
  value = "",
  onChange,
  className = ""
}) => {
  return (
    <div className={`flex flex-row items-center gap-3 px-3 py-2 bg-global-7 rounded-md ${className}`}>
      <img src="/images/img_search2.svg" alt="Search" className="w-4 h-4" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="text-xs font-work-sans text-global-9 bg-transparent border-none outline-none flex-1"
      />
    </div>
  );
};

export default SearchView;