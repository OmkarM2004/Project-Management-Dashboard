import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import ProjectManagementPage from './pages/ProjectManagement';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/project-management" element={<ProjectManagementPage />} />
        <Route path="/" element={<ProjectManagementPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;