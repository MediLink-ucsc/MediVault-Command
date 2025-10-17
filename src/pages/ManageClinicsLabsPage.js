import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Sidebar from '../components/Layout/Sidebar';
import '../styles/ManageClinicsPage.css';

const ManageClinicsLabsPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'clinics');

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
    }
  ]);

  const [labs, setLabs] = useState([
    {
      id: 1,
      labName: 'Central Diagnostic Lab',
      registrationNumber: 'CDL001',
      city: 'Colombo',
      province: 'Western',
      phoneNumber: '0112345679',
      email: 'info@centrallab.lk',
      labType: 'Diagnostic Center',
      establishedDate: '2016-05-20',
      status: 'active',
      isVerified: true,
      technicianCount: 5,
      staffCount: 12
    },
    {
      id: 2,
      labName: 'Bio Medical Labs',
      registrationNumber: 'BML002',
      city: 'Kandy',
      province: 'Central',
      phoneNumber: '0812345679',
      email: 'contact@biomedical.lk',
      labType: 'Pathology Lab',
      establishedDate: '2019-08-15',
      status: 'active',
      isVerified: true,
      technicianCount: 3,
      staffCount: 8
    }
  ]);

  const handleStatusChange = (id, newStatus, type) => {
    if (type === 'clinic') {
      setClinics(clinics.map(item => 
        item.id === id 
          ? { ...item, status: newStatus }
          : item
      ));
    } else {
      setLabs(labs.map(item => 
        item.id === id 
          ? { ...item, status: newStatus }
          : item
      ));
    }
  };

  const handleVerificationChange = (id, newVerificationStatus, type) => {
    if (type === 'clinic') {
      setClinics(clinics.map(item => 
        item.id === id 
          ? { ...item, isVerified: newVerificationStatus === 'verified' }
          : item
      ));
    } else {
      setLabs(labs.map(item => 
        item.id === id 
          ? { ...item, isVerified: newVerificationStatus === 'verified' }
          : item
      ));
    }
  };

  const handleViewDetails = (id, type) => {
    if (type === 'clinic') {
      navigate(`/clinic-details/${id}`);
    } else {
      navigate(`/lab-details/${id}`);
    }
  };

  const filteredClinics = clinics.filter(item => {
    const matchesSearch = item.clinicName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.registrationNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.city.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || item.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  const filteredLabs = labs.filter(item => {
    const matchesSearch = item.labName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.registrationNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.city.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || item.status === filterStatus;
    
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

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  return (
    <div className="dashboard-layout">
      <Sidebar onToggle={setIsSidebarExpanded} />
      <div className={`dashboard-content ${isSidebarExpanded ? 'expanded' : ''}`}>
        <div className="page-header">
          <h1>Manage {activeTab === 'clinics' ? 'Clinics' : 'Labs'}</h1>
          <button className="add-clinic-btn" onClick={() => navigate(activeTab === 'clinics' ? '/add-clinic' : '/add-lab')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
            Add New {activeTab === 'clinics' ? 'Clinic' : 'Lab'}
          </button>
        </div>

        <div className="clinics-container">
          <div className="tabs-section">
            <button 
              className={`tab-btn ${activeTab === 'clinics' ? 'active' : ''}`}
              onClick={() => handleTabChange('clinics')}
            >
              Clinics
            </button>
            <button 
              className={`tab-btn ${activeTab === 'labs' ? 'active' : ''}`}
              onClick={() => handleTabChange('labs')}
            >
              Labs
            </button>
          </div>

          <div className="filters-section">
            <div className="search-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="M21 21l-4.35-4.35"></path>
              </svg>
              <input
                type="text"
                placeholder={`Search ${activeTab}...`}
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
              {activeTab === 'clinics' ? filteredClinics.length : filteredLabs.length} {activeTab} found
            </div>
          </div>

          <div className="table-container">
            <table className="clinics-table">
              <thead>
                <tr>
                  <th>{activeTab === 'clinics' ? 'Clinic Name' : 'Lab Name'}</th>
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
                {activeTab === 'clinics' ? (
                  filteredClinics.map(clinic => (
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
                            onChange={(e) => handleStatusChange(clinic.id, e.target.value, 'clinic')}
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
                            onChange={(e) => handleVerificationChange(clinic.id, e.target.value, 'clinic')}
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
                            onClick={() => handleViewDetails(clinic.id, 'clinic')}
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
                  ))
                ) : (
                  filteredLabs.map(lab => (
                    <tr key={lab.id}>
                      <td>
                        <div className="clinic-info">
                          <strong>{lab.labName}</strong>
                          <small>Est. {new Date(lab.establishedDate).getFullYear()}</small>
                        </div>
                      </td>
                      <td>{lab.registrationNumber}</td>
                      <td>
                        <div className="location-info">
                          <span>{lab.city}</span>
                          <small>{lab.province}</small>
                        </div>
                      </td>
                      <td>{lab.labType}</td>
                      <td>
                        <div className="contact-info">
                          <span>{lab.phoneNumber}</span>
                          <small>{lab.email}</small>
                        </div>
                      </td>
                      <td>
                        <div className="staff-count">
                          <span>{lab.technicianCount} Technicians</span>
                          <small>{lab.staffCount} Staff</small>
                        </div>
                      </td>
                      <td>
                        <div className="status-control">
                          {getStatusBadge(lab.status)}
                          <select
                            className="status-dropdown"
                            value={lab.status}
                            onChange={(e) => handleStatusChange(lab.id, e.target.value, 'lab')}
                          >
                            <option value="active">Active</option>
                            <option value="banned">Banned</option>
                          </select>
                        </div>
                      </td>
                      <td>
                        <div className="verification-control">
                          {getVerificationBadge(lab.isVerified)}
                          <select
                            className="verification-dropdown"
                            value={lab.isVerified ? 'verified' : 'unverified'}
                            onChange={(e) => handleVerificationChange(lab.id, e.target.value, 'lab')}
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
                            onClick={() => handleViewDetails(lab.id, 'lab')}
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
                  ))
                )}
              </tbody>
            </table>

            {(activeTab === 'clinics' ? filteredClinics.length === 0 : filteredLabs.length === 0) && (
              <div className="no-results">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="M21 21l-4.35-4.35"></path>
                </svg>
                <h3>No {activeTab} found</h3>
                <p>Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageClinicsLabsPage;