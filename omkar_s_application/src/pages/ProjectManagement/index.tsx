import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Button from '../../components/ui/Button';
import Dropdown from '../../components/ui/Dropdown';
import { JobRequest, FilterState } from '../../types/ProjectManagement';

const ProjectManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All Orders');
  const [filters, setFilters] = useState<FilterState>({
    jobRequest: '',
    submitted: '',
    status: '',
    submitter: '',
    url: '',
    assigned: '',
    priority: '',
    dueDate: '',
    estValue: ''
  });

  const jobRequests: JobRequest[] = [
    {
      id: '1',
      jobRequest: 'Launch social media campaign for product XYZ',
      submitted: '15-11-2024',
      status: 'In-process',
      submitter: 'Aisha Patel',
      url: 'www.aishapatel.com',
      assigned: 'Sophie Choudhury',
      priority: 'Medium',
      dueDate: '20-11-2024',
      estValue: 6200000
    },
    {
      id: '2',
      jobRequest: 'Update press kit for company redesign',
      submitted: '28-10-2024',
      status: 'Need to start',
      submitter: 'Irfan Khan',
      url: 'www.irfankhanportfolio.com',
      assigned: 'Tejas Pandey',
      priority: 'High',
      dueDate: '30-10-2024',
      estValue: 3500000
    },
    {
      id: '3',
      jobRequest: 'Finalize user testing feedback for app update',
      submitted: '05-12-2024',
      status: 'In-process',
      submitter: 'Mark Johnson',
      url: 'www.markjohnsondesigns.com',
      assigned: 'Rachel Lee',
      priority: 'Medium',
      dueDate: '10-12-2024',
      estValue: 4750000
    },
    {
      id: '4',
      jobRequest: 'Design new features for the website',
      submitted: '10-01-2025',
      status: 'Complete',
      submitter: 'Emily Green',
      url: 'www.emilygreenart.com',
      assigned: 'Tom Wright',
      priority: 'Low',
      dueDate: '15-01-2025',
      estValue: 5900000
    },
    {
      id: '5',
      jobRequest: 'Prepare financial report for Q4',
      submitted: '25-01-2025',
      status: 'Blocked',
      submitter: 'Jessica Brown',
      url: 'www.jessicabrowncreative.com',
      assigned: 'Kevin Smith',
      priority: 'Low',
      dueDate: '30-01-2025',
      estValue: 2800000
    }
  ];

  const tabs = ['All Orders', 'Pending', 'Reviewed', 'Arrived'];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Complete':
        return 'success';
      case 'In-process':
        return 'warning';
      case 'Need to start':
        return 'secondary';
      case 'Blocked':
        return 'danger';
      default:
        return 'primary';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'text-button-7';
      case 'Medium':
        return 'text-button-6';
      case 'Low':
        return 'text-button-2';
      default:
        return 'text-global-1';
    }
  };

  const formatCurrency = (value: number) => {
    return `${value.toLocaleString()} ₹`;
  };

  const handleToolbarAction = (action: string) => {
    console.log(`${action} clicked`);
    // Add functionality for each toolbar action
  };

  const handleNewAction = () => {
    console.log('New Action clicked');
    // Add functionality for creating new action
  };

  return (
    <div className="flex flex-col w-full h-screen bg-global-8">
      {/* Header */}
      <Header />

      {/* Toolbar */}
      <div className="flex flex-row items-center justify-between w-full h-12 bg-global-11 border-b border-global-6 px-2">
        <div className="flex flex-row items-center gap-4">
          <Button 
            variant="secondary" 
            size="md"
            onClick={() => handleToolbarAction('Tool bar')}
          >
            Tool bar
          </Button>
          
          <div className="w-px h-6 bg-global-6"></div>
          
          <Button 
            variant="secondary" 
            size="md"
            onClick={() => handleToolbarAction('Hide fields')}
            className="gap-2"
          >
            <img src="/images/img_eye.svg" alt="Eye" className="w-5 h-5" />
            Hide fields
          </Button>
          
          <Button 
            variant="secondary" 
            size="md"
            onClick={() => handleToolbarAction('Sort')}
          >
            Sort
          </Button>
          
          <Button 
            variant="secondary" 
            size="md"
            onClick={() => handleToolbarAction('Filter')}
            className="gap-2"
          >
            <img src="/images/img_filter.svg" alt="Filter" className="w-5 h-5" />
            Filter
          </Button>
          
          <Button 
            variant="secondary" 
            size="md"
            onClick={() => handleToolbarAction('Cell view')}
            className="gap-2"
          >
            <img src="/images/img_arrow_autofit.svg" alt="Cell view" className="w-5 h-5" />
            Cell view
          </Button>
        </div>

        <div className="flex flex-row items-center gap-2">
          <Button 
            variant="secondary" 
            size="md"
            onClick={() => handleToolbarAction('Import')}
            className="gap-2 border border-global-6"
          >
            <img src="/images/img_arrow_download.svg" alt="Import" className="w-5 h-5" />
            Import
          </Button>
          
          <Button 
            variant="secondary" 
            size="md"
            onClick={() => handleToolbarAction('Export')}
            className="gap-2 border border-global-6"
          >
            <img src="/images/img_arrow_upload.svg" alt="Export" className="w-5 h-5" />
            Export
          </Button>
          
          <Button 
            variant="secondary" 
            size="md"
            onClick={() => handleToolbarAction('Share')}
            className="gap-2 border border-global-6"
          >
            <img src="/images/img_share.svg" alt="Share" className="w-5 h-5" />
            Share
          </Button>
          
          <Button 
            variant="primary" 
            size="md"
            onClick={handleNewAction}
            className="gap-2 bg-global-12 text-global-11"
          >
            <img src="/images/img_arrow_split.svg" alt="New Action" className="w-5 h-5" />
            New Action
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-row flex-1 bg-global-7">
        {/* Row Numbers */}
        <div className="flex flex-col w-8 bg-global-11 border-r border-global-6">
          <div className="h-8 bg-global-11 border-b border-global-6"></div>
          <div className="h-8 bg-global-6 flex items-center justify-center border-b border-global-6">
            <img src="/images/img_tabletitlecell.svg" alt="Table Title" className="w-8 h-8" />
          </div>
          {Array.from({ length: 25 }, (_, index) => (
            <div key={index} className="h-8 bg-global-11 flex items-center justify-center border-b border-global-6">
              <span className="text-sm text-global-9 font-work-sans">{index + 1}</span>
            </div>
          ))}
        </div>

        {/* Table Content */}
        <div className="flex flex-col flex-1 border-l border-global-6">
          {/* Financial Overview Header */}
          <div className="flex flex-row h-8 border-b border-global-6">
            <div className="relative w-64 h-8 bg-global-3 border-r border-global-6">
              <div className="absolute inset-0 flex items-center px-2 bg-global-6 rounded">
                <img src="/images/img_link.svg" alt="Link" className="w-4 h-4 mr-2" />
                <span className="text-xs text-global-5 font-work-sans">Q3 Financial Overview</span>
                <img src="/images/img_arrow_sync.svg" alt="Sync" className="w-4 h-4 ml-auto" />
              </div>
              <div className="absolute inset-0 bg-global-11"></div>
            </div>
            <div className="flex-1 h-8 bg-global-11"></div>
          </div>

          {/* Table Headers */}
          <div className="flex flex-row h-8 border-b border-global-6">
            <div className="w-64 h-8 border-r border-global-6">
              <Dropdown
                label="Job Request"
                icon="/images/img_briefcase.svg"
                className="w-full h-full"
              />
            </div>
            <div className="w-31 h-8 border-r border-global-6">
              <Dropdown
                label="Submitted"
                icon="/images/img_calendar.svg"
                className="w-full h-full"
              />
            </div>
            <div className="w-31 h-8 border-r border-global-6">
              <Dropdown
                label="Status"
                icon="/images/img_chevron_circle.svg"
                className="w-full h-full"
              />
            </div>
            <div className="w-31 h-8 border-r border-global-6">
              <Dropdown
                label="Submitter"
                icon="/images/img_person.svg"
                className="w-full h-full"
              />
            </div>
            <div className="w-31 h-8 border-r border-global-6">
              <Dropdown
                label="URL"
                icon="/images/img_globe.svg"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-row bg-global-1 h-8 w-31 border-r border-global-6">
              <div className="flex items-center px-2 gap-2 w-full">
                <img src="/images/img_arrow_split_gray_500.svg" alt="ABC" className="w-4 h-4" />
                <span className="text-sm font-medium text-global-4 font-work-sans">ABC</span>
                <img src="/images/img_icon_frame.svg" alt="Icon" className="w-5 h-5" />
              </div>
            </div>
            <div className="flex flex-row bg-global-4 h-8 w-31 border-r border-global-6">
              <div className="flex items-center px-2 gap-2 w-full">
                <img src="/images/img_emoji.svg" alt="Assigned" className="w-4 h-4" />
                <span className="text-xs font-semibold text-global-7 font-work-sans">Assigned</span>
              </div>
            </div>
            <div className="flex flex-row bg-global-2 h-8 w-40 border-r border-global-6">
              <div className="flex items-center px-2 gap-2 w-full">
                <img src="/images/img_arrow_split.svg" alt="Answer" className="w-4 h-4" />
                <span className="text-sm font-medium text-global-3 font-work-sans">Answer a question</span>
                <img src="/images/img_icon_frame.svg" alt="Icon" className="w-5 h-5" />
              </div>
            </div>
            <div className="flex flex-row bg-global-5 h-8 w-31 border-r border-global-6">
              <div className="flex items-center px-2 w-full">
                <span className="text-xs font-semibold text-global-6 font-work-sans">Priority</span>
              </div>
            </div>
            <div className="flex flex-row bg-global-5 h-8 w-31 border-r border-global-6">
              <div className="flex items-center px-2 w-full">
                <span className="text-xs font-semibold text-global-6 font-work-sans">Due Date</span>
              </div>
            </div>
            <div className="flex flex-row bg-global-9 h-8 w-31 border-r border-global-6">
              <div className="flex items-center px-2 gap-2 w-full">
                <img src="/images/img_arrow_split.svg" alt="Extract" className="w-4 h-4" />
                <span className="text-sm font-medium text-global-8 font-work-sans">Extract</span>
                <img src="/images/img_icon_frame.svg" alt="Icon" className="w-5 h-5" />
              </div>
            </div>
            <div className="flex flex-row bg-global-10 h-8 w-31">
              <div className="flex items-center px-2 w-full">
                <span className="text-xs font-semibold text-global-10 font-work-sans">Est. Value</span>
              </div>
            </div>
          </div>

          {/* Table Data */}
          <div className="flex flex-col">
            {jobRequests.map((request, index) => (
              <div key={request.id} className="flex flex-row h-8 border-b border-global-6">
                {/* Job Request */}
                <div className="w-64 h-8 bg-global-11 flex items-center px-2 border-r border-global-6">
                  <Button variant="primary" size="sm" className="text-left justify-start text-xs w-full">
                    {request.jobRequest}
                  </Button>
                </div>
                
                {/* Submitted */}
                <div className="w-31 h-8 bg-global-11 flex items-center justify-end px-2 border-r border-global-6">
                  <span className="text-xs text-global-1 font-work-sans">{request.submitted}</span>
                </div>
                
                {/* Status */}
                <div className="w-31 h-8 bg-global-11 flex items-center justify-center px-2 border-r border-global-6">
                  <Button
                    variant={getStatusVariant(request.status)}
                    size="sm"
                    className="rounded-xl"
                  >
                    {request.status}
                  </Button>
                </div>
                
                {/* Submitter */}
                <div className="w-31 h-8 bg-global-11 flex items-center px-2 border-r border-global-6">
                  <span className="text-xs text-global-1 font-work-sans">{request.submitter}</span>
                </div>
                
                {/* URL */}
                <div className="w-31 h-8 bg-global-11 flex items-center px-2 border-r border-global-6">
                  <Button variant="primary" size="sm" className="text-left justify-start text-xs underline">
                    {request.url}
                  </Button>
                </div>
                
                {/* ABC Column */}
                <div className="w-31 h-8 bg-global-11 flex items-center px-2 border-r border-global-6">
                  <span className="text-xs text-global-1 font-work-sans">-</span>
                </div>
                
                {/* Assigned */}
                <div className="w-31 h-8 bg-global-11 flex items-center px-2 border-r border-global-6">
                  <span className="text-xs text-global-1 font-work-sans">{request.assigned}</span>
                </div>
                
                {/* Answer a question Column */}
                <div className="w-40 h-8 bg-global-11 flex items-center px-2 border-r border-global-6">
                  <span className="text-xs text-global-1 font-work-sans">-</span>
                </div>
                
                {/* Priority */}
                <div className="w-31 h-8 bg-global-11 flex items-center justify-center px-2 border-r border-global-6">
                  <Button variant="secondary" size="sm" className="rounded-xl">
                    <span className={`text-xs font-semibold ${getPriorityColor(request.priority)}`}>
                      {request.priority}
                    </span>
                  </Button>
                </div>
                
                {/* Due Date */}
                <div className="w-31 h-8 bg-global-11 flex items-center justify-end px-2 border-r border-global-6">
                  <span className="text-xs text-global-1 font-work-sans">{request.dueDate}</span>
                </div>
                
                {/* Extract Column */}
                <div className="w-31 h-8 bg-global-11 flex items-center px-2 border-r border-global-6">
                  <span className="text-xs text-global-1 font-work-sans">-</span>
                </div>
                
                {/* Est. Value */}
                <div className="w-31 h-8 bg-global-11 flex items-center justify-end px-2">
                  <span className="text-xs text-global-1 font-work-sans mr-1">
                    {request.estValue.toLocaleString()}
                  </span>
                  <span className="text-xs font-medium text-global-11 font-work-sans">₹</span>
                </div>
              </div>
            ))}
            
            {/* Empty rows */}
            {Array.from({ length: 20 }, (_, index) => (
              <div key={`empty-${index}`} className="flex flex-row h-8 border-b border-global-6">
                <div className="w-64 h-8 bg-global-11 border-r border-global-6"></div>
                <div className="w-31 h-8 bg-global-11 border-r border-global-6"></div>
                <div className="w-31 h-8 bg-global-11 border-r border-global-6"></div>
                <div className="w-31 h-8 bg-global-11 border-r border-global-6"></div>
                <div className="w-31 h-8 bg-global-11 border-r border-global-6"></div>
                <div className="w-31 h-8 bg-global-11 border-r border-global-6"></div>
                <div className="w-31 h-8 bg-global-11 border-r border-global-6"></div>
                <div className="w-40 h-8 bg-global-11 border-r border-global-6"></div>
                <div className="w-31 h-8 bg-global-11 border-r border-global-6"></div>
                <div className="w-31 h-8 bg-global-11 border-r border-global-6"></div>
                <div className="w-31 h-8 bg-global-11 border-r border-global-6"></div>
                <div className="w-31 h-8 bg-global-11"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Tabs */}
      <div className="flex flex-row items-center w-full h-12 bg-global-11 border-t border-global-6 px-8">
        <div className="flex flex-row items-center gap-8">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`flex items-center px-4 py-2 cursor-pointer ${
                activeTab === tab
                  ? 'bg-global-4 border-t-2 border-global-12 text-global-2 font-semibold' :'text-global-9 font-medium hover:text-global-1'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              <span className="text-base font-work-sans">{tab}</span>
            </div>
          ))}
          <div className="flex items-center justify-center w-11 h-11">
            <img src="/images/img_viewitem.svg" alt="View Item" className="w-9 h-11" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagement;