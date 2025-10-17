import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import AddClinicPage from './pages/AddClinicPage';
import AddLabPage from './pages/AddLabPage';
import ManageClinicsLabsPage from './pages/ManageClinicsLabsPage';
import ClinicDetailsPage from './pages/ClinicDetailsPage';
import LabDetailsPage from './pages/LabDetailsPage';
import './styles/colors.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/add-clinic" element={<AddClinicPage />} />
         <Route path="/manage-clinics-labs" element={<ManageClinicsLabsPage />} />
           <Route path="/lab-details/:labId" element={<LabDetailsPage />} />
          <Route path="/clinic-details/:clinicId" element={<ClinicDetailsPage />} />
           <Route path="/add-lab" element={<AddLabPage />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;