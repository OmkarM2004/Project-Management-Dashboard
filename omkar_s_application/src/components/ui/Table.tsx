import React from 'react';
import Button from './Button';
import Dropdown from './Dropdown';

interface TableColumn {
  key: string;
  label: string;
  icon?: string;
  width?: string;
}

interface TableRow {
  [key: string]: any;
}

interface TableProps {
  columns: TableColumn[];
  data: TableRow[];
  className?: string;
}

const Table: React.FC<TableProps> = ({
  columns,
  data,
  className = ""
}) => {
  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case 'complete':
        return 'success';
      case 'in-process':
        return 'warning';
      case 'need to start':
        return 'secondary';
      case 'blocked':
        return 'danger';
      default:
        return 'primary';
    }
  };

  return (
    <div className={`flex flex-col border border-global-6 ${className}`}>
      {/* Table Header */}
      <div className="flex flex-row border-b border-global-6">
        {columns.map((column, index) => (
          <div key={index} className={`${column.width || "flex-1"} ${index < columns.length - 1 ? 'border-r border-global-6' : ''}`}>
            <Dropdown
              label={column.label}
              icon={column.icon}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Table Data */}
      <div className="flex flex-col">
        {data.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-row h-8 border-b border-global-6 last:border-b-0">
            {columns.map((column, colIndex) => (
              <div
                key={colIndex}
                className={`flex items-center px-2 bg-global-11 ${column.width || "flex-1"} ${colIndex < columns.length - 1 ? 'border-r border-global-6' : ''}`}
              >
                {column.key === 'status' ? (
                  <Button
                    variant={getStatusVariant(row[column.key])}
                    size="sm"
                    className="rounded-xl"
                  >
                    {row[column.key]}
                  </Button>
                ) : column.key === 'jobRequest' ? (
                  <Button variant="primary" size="sm" className="justify-start text-left w-full">
                    {row[column.key]}
                  </Button>
                ) : (
                  <span className="text-xs text-global-1 font-work-sans">
                    {row[column.key]}
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;