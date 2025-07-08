import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Layout/Sidebar';
import '../styles/ManageClinicsPage.css';

const ManageClinicsPage = () => {
  const navigate = useNavigate();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Sample clinic data
  const [clinics, setClinics] = useState([
    {
      id: 1,
      clinicName: 'Central Medical Center',
      registrationNumber: 'CMC001',
      city: 'Colombo',
      province: 'Western',
      phoneNumber: '0112345678',
      email: 'info@centralmedical.lk',
      clinicType: 'Multi-Specialty Clinic',
      establishedDate: '2015-03-15',
      status: 'active',
      isVerified: true,
      doctorCount: 3,
      staffCount: 8
    },
    {
      id: 2,
      clinicName: 'Green Valley Clinic',
      registrationNumber: 'GVC002',
      city: 'Kandy',
      province: 'Central',
      phoneNumber: '0812345678',
      email: 'contact@greenvalley.lk',
      clinicType: 'General Practice',
      establishedDate: '2018-07-22',
      status: 'active',
      isVerified: false,
      doctorCount: 2,
      staffCount: 5
    },
    {
      id: 3,
      clinicName: 'Sunrise Eye Care',
      registrationNumber: 'SEC003',
      city: 'Galle',
      province: 'Southern',
      phoneNumber: '0912345678',
      email: 'info@sunriseeye.lk',
      clinicType: 'Eye Clinic',
      establishedDate: '2020-01-10',
      status: 'banned',
      isVerified: true,
      doctorCount: 1,
      staffCount: 3
    },
    {
      id: 4,
      clinicName: 'Family Health Center',
      registrationNumber: 'FHC004',
      city: 'Jaffna',
      province: 'Northern',
      phoneNumber: '0212345678',
      email: 'admin@familyhealth.lk',
      clinicType: 'General Practice',
      establishedDate: '2017-11-05',
      status: 'active',
      isVerified: true,
      doctorCount: 2,
      staffCount: 6
    },
    {
      id: 5,
      clinicName: 'Dental Care Plus',
      registrationNumber: 'DCP005',
      city: 'Negombo',
      province: 'Western',
      phoneNumber: '0312345678',
      email: 'info@dentalplus.lk',
      clinicType: 'Dental Clinic',
      establishedDate: '2019-09-12',
      status: 'active',
      isVerified: false,
      doctorCount: 1,
      staffCount: 4
    }
  ]);

  const handleStatusChange = (clinicId, newStatus) => {
    setClinics(clinics.map(clinic => 
      clinic.id === clinicId 
        ? { ...clinic, status: newStatus }
        : clinic
    ));
  };

  const handleVerificationChange = (clinicId, newVerificationStatus) => {
    setClinics(clinics.map(clinic => 
      clinic.id === clinicId 
        ? { ...clinic, isVerified: newVerificationStatus === 'verified' }
        : clinic
    ));
  };

  const handleViewDetails = (clinicId) => {
    navigate(`/clinic-details/${clinicId}`);
  };

  const filteredClinics = clinics.filter(clinic => {
    const matchesSearch = clinic.clinicName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         clinic.registrationNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         clinic.city.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || clinic.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status) => {
    return (
      <span className={`status-badge ${status}`}>
        {status === 'active' ? 'Active' : 'Banned'}
      </span>
    );
  };

  const getVerificationBadge = (isVerified) => {
    return (
      <span className={`verification-badge ${isVerified ? 'verified' : 'unverified'}`}>
        {isVerified ? 'Verified' : 'Unverified'}
      </span>
    );
  };

  return (
    <div className="dashboard-layout">
      <Sidebar onToggle={setIsSidebarExpanded} />
      <div className={`dashboard-content ${isSidebarExpanded ? 'expanded' : ''}`}>
        <div className="page-header">
          <h1>Manage Clinics</h1>
          <button className="add-clinic-btn" onClick={() => navigate('/add-clinic')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            Add New Clinic
          </button>
        </div>

        <div className="clinics-container">
          <div className="filters-section">
            <div className="search-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="M21 21l-4.35-4.35"></path>
              </svg>
              <input
                type="text"
                placeholder="Search clinics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="filter-dropdown">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="banned">Banned</option>
              </select>
            </div>

            <div className="results-count">
              {filteredClinics.length} clinics found
            </div>
          </div>

          <div className="table-container">
            <table className="clinics-table">
              <thead>
                <tr>
                  <th>Clinic Name</th>
                  <th>Registration No.</th>
                  <th>Location</th>
                  <th>Type</th>
                  <th>Contact</th>
                  <th>Staff</th>
                  <th>Status</th>
                  <th>Verification</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredClinics.map(clinic => (
                  <tr key={clinic.id}>
                    <td>
                      <div className="clinic-info">
                        <strong>{clinic.clinicName}</strong>
                        <small>Est. {new Date(clinic.establishedDate).getFullYear()}</small>
                      </div>
                    </td>
                    <td>{clinic.registrationNumber}</td>
                    <td>
                      <div className="location-info">
                        <span>{clinic.city}</span>
                        <small>{clinic.province}</small>
                      </div>
                    </td>
                    <td>{clinic.clinicType}</td>
                    <td>
                      <div className="contact-info">
                        <span>{clinic.phoneNumber}</span>
                        <small>{clinic.email}</small>
                      </div>
                    </td>
                    <td>
                      <div className="staff-count">
                        <span>{clinic.doctorCount} Doctors</span>
                        <small>{clinic.staffCount} Staff</small>
                      </div>
                    </td>
                    <td>
                      <div className="status-control">
                        {getStatusBadge(clinic.status)}
                        <select
                          className="status-dropdown"
                          value={clinic.status}
                          onChange={(e) => handleStatusChange(clinic.id, e.target.value)}
                        >
                          <option value="active">Active</option>
                          <option value="banned">Banned</option>
                        </select>
                      </div>
                    </td>
                    <td>
                      <div className="verification-control">
                        {getVerificationBadge(clinic.isVerified)}
                        <select
                          className="verification-dropdown"
                          value={clinic.isVerified ? 'verified' : 'unverified'}
                          onChange={(e) => handleVerificationChange(clinic.id, e.target.value)}
                        >
                          <option value="verified">Verified</option>
                          <option value="unverified">Unverified</option>
                        </select>
                      </div>
                    </td>
                    <td>
                      <div className="action-buttons">
                        <button
                          className="view-btn"
                          onClick={() => handleViewDetails(clinic.id)}
                          title="View Details"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredClinics.length === 0 && (
              <div className="no-results">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="M21 21l-4.35-4.35"></path>
                </svg>
                <h3>No clinics found</h3>
                <p>Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageClinicsPage;