export interface JobRequest {
  id: string;
  jobRequest: string;
  submitted: string;
  status: 'Complete' | 'In-process' | 'Need to start' | 'Blocked';
  submitter: string;
  url: string;
  assigned: string;
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  estValue: number;
}

export interface TableColumn {
  key: string;
  label: string;
  icon?: string;
  width?: string;
}

export interface FilterState {
  jobRequest: string;
  submitted: string;
  status: string;
  submitter: string;
  url: string;
  assigned: string;
  priority: string;
  dueDate: string;
  estValue: string;
}