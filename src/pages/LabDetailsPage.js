import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../components/Layout/Sidebar';
import '../styles/ClinicDetailsPage.css';

const LabDetailsPage = () => {
  const navigate = useNavigate();
  const { labId } = useParams();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const labData = {
    id: parseInt(labId),
    labName: 'Central Diagnostic Lab',
    registrationNumber: 'CDL001',
    licenseNumber: 'LIC2023002',
    licenseExpiryDate: '2025-12-31',
    address: '456, Galle Road, Colombo 03',
    city: 'Colombo',
    district: 'Colombo',
    province: 'Western',
    postalCode: '00300',
    phoneNumber: '0112345679',
    email: 'info@centrallab.lk',
    website: 'https://www.centrallab.lk',
    establishedDate: '2016-05-20',
    labType: 'Diagnostic Center',
    operatingHours: 'Mon-Fri: 7:00 AM - 8:00 PM, Sat: 7:00 AM - 2:00 PM',
    emergencyContact: '0771234568',
    status: 'active',
    isVerified: true,
    
    technicians: [
      {
        id: 1,
        title: 'Mr.',
        fullName: 'Rajesh Fernando',
        nic: '198512345679',
        licenseNumber: 'TECH001',
        licenseExpiryDate: '2025-06-30',
        specialization: 'Hematology',
        qualifications: 'BSc in Medical Laboratory Science',
        experience: '8',
        phoneNumber: '0771234571',
        email: 'rajesh@centrallab.lk'
      },
      {
        id: 2,
        title: 'Ms.',
        fullName: 'Priya Silva',
        nic: '199012345680',
        licenseNumber: 'TECH002',
        licenseExpiryDate: '2025-08-15',
        specialization: 'Biochemistry',
        qualifications: 'Diploma in Medical Laboratory Technology',
        experience: '6',
        phoneNumber: '0771234572',
        email: 'priya@centrallab.lk'
      }
    ],
    
    staff: [
      {
        id: 1,
        fullName: 'Kamal Perera',
        position: 'Lab Assistant',
        nic: '198712345681',
        licenseNumber: 'ASS001',
        licenseType: 'Lab Assistant License',
        licenseExpiryDate: '2025-12-31',
        qualifications: 'Certificate in Laboratory Assistance',
        phoneNumber: '0771234573',
        email: 'kamal@centrallab.lk'
      },
      {
        id: 2,
        fullName: 'Nisha Rathnayake',
        position: 'Receptionist',
        nic: '198912345682',
        licenseNumber: '',
        licenseType: '',
        licenseExpiryDate: '',
        qualifications: 'Diploma in Office Administration',
        phoneNumber: '0771234574',
        email: 'nisha@centrallab.lk'
      }
    ]
  };

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
          <div className="header-info">
            <h1>{labData.labName}</h1>
            <div className="header-badges">
              {getStatusBadge(labData.status)}
              {getVerificationBadge(labData.isVerified)}
            </div>
          </div>
          <div className="header-actions">
            <button className="back-btn" onClick={() => navigate('/manage-clinics-labs?tab=labs')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
              Back to Labs
            </button>
            <button className="edit-btn" onClick={() => navigate(`/edit-lab/${labId}`)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
              Edit Lab
            </button>
          </div>
        </div>

        <div className="details-container">
          <div className="details-card">
            <div className="card-header">
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9,22 9,12 15,12 15,22"></polyline>
                </svg>
                Lab Information
              </h3>
            </div>
            <div className="card-content">
              <div className="info-grid">
                <div className="info-item">
                  <label>Registration Number</label>
                  <span>{labData.registrationNumber}</span>
                </div>
                <div className="info-item">
                  <label>License Number</label>
                  <span>{labData.licenseNumber}</span>
                </div>
                <div className="info-item">
                  <label>License Expiry</label>
                  <span>{new Date(labData.licenseExpiryDate).toLocaleDateString()}</span>
                </div>
                <div className="info-item">
                  <label>Lab Type</label>
                  <span>{labData.labType}</span>
                </div>
                <div className="info-item">
                  <label>Established Date</label>
                  <span>{new Date(labData.establishedDate).toLocaleDateString()}</span>
                </div>
                <div className="info-item">
                  <label>Phone Number</label>
                  <span>{labData.phoneNumber}</span>
                </div>
                <div className="info-item full-width">
                  <label>Address</label>
                  <span>{labData.address}, {labData.city}, {labData.district}, {labData.province} {labData.postalCode}</span>
                </div>
                <div className="info-item">
                  <label>Email</label>
                  <span>{labData.email}</span>
                </div>
                <div className="info-item">
                  <label>Website</label>
                  <span><a href={labData.website} target="_blank" rel="noopener noreferrer">{labData.website}</a></span>
                </div>
                <div className="info-item full-width">
                  <label>Operating Hours</label>
                  <span>{labData.operatingHours}</span>
                </div>
                <div className="info-item">
                  <label>Emergency Contact</label>
                  <span>{labData.emergencyContact}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="details-card">
            <div className="card-header">
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Lab Technicians ({labData.technicians.length})
              </h3>
            </div>
            <div className="card-content">
              <div className="members-list">
                {labData.technicians.map(technician => (
                  <div key={technician.id} className="member-card">
                    <div className="member-header">
                      <h4>{technician.title} {technician.fullName}</h4>
                      <span className="member-type">Lab Technician</span>
                    </div>
                    <div className="member-details">
                      <div className="detail-row">
                        <span className="label">Specialization:</span>
                        <span className="value">{technician.specialization}</span>
                      </div>
                      <div className="detail-row">
                        <span className="label">License Number:</span>
                        <span className="value">{technician.licenseNumber}</span>
                      </div>
                      <div className="detail-row">
                        <span className="label">License Expiry:</span>
                        <span className="value">{new Date(technician.licenseExpiryDate).toLocaleDateString()}</span>
                      </div>
                      <div className="detail-row">
                        <span className="label">Qualifications:</span>
                        <span className="value">{technician.qualifications}</span>
                      </div>
                      <div className="detail-row">
                        <span className="label">Experience:</span>
                        <span className="value">{technician.experience} years</span>
                      </div>
                      <div className="detail-row">
                        <span className="label">Contact:</span>
                        <span className="value">{technician.phoneNumber} | {technician.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="details-card">
            <div className="card-header">
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Lab Staff ({labData.staff.length})
              </h3>
            </div>
            <div className="card-content">
              <div className="members-list">
                {labData.staff.map(staff => (
                  <div key={staff.id} className="member-card">
                    <div className="member-header">
                      <h4>{staff.fullName}</h4>
                      <span className="member-type">{staff.position}</span>
                    </div>
                    <div className="member-details">
                      <div className="detail-row">
                        <span className="label">NIC:</span>
                        <span className="value">{staff.nic}</span>
                      </div>
                      <div className="detail-row">
                        <span className="label">License Number:</span>
                        <span className="value">{staff.licenseNumber}</span>
                      </div>
                      <div className="detail-row">
                        <span className="label">License Type:</span>
                        <span className="value">{staff.licenseType}</span>
                      </div>
                      <div className="detail-row">
                        <span className="label">License Expiry:</span>
                        <span className="value">{new Date(staff.licenseExpiryDate).toLocaleDateString()}</span>
                      </div>
                      <div className="detail-row">
                        <span className="label">Qualifications:</span>
                        <span className="value">{staff.qualifications}</span>
                      </div>
                      <div className="detail-row">
                        <span className="label">Contact:</span>
                        <span className="value">{staff.phoneNumber} | {staff.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabDetailsPage;