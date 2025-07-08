import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../components/Layout/Sidebar';
import '../styles/ClinicDetailsPage.css';

const ClinicDetailsPage = () => {
  const navigate = useNavigate();
  const { clinicId } = useParams();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  // Sample clinic data (in real app, fetch from API using clinicId)
  const clinicData = {
    id: parseInt(clinicId),
    clinicName: 'Central Medical Center',
    registrationNumber: 'CMC001',
    licenseNumber: 'LIC2023001',
    licenseExpiryDate: '2025-12-31',
    address: '123, Galle Road, Colombo 03',
    city: 'Colombo',
    district: 'Colombo',
    province: 'Western',
    postalCode: '00300',
    phoneNumber: '0112345678',
    email: 'info@centralmedical.lk',
    website: 'https://www.centralmedical.lk',
    establishedDate: '2015-03-15',
    clinicType: 'Multi-Specialty Clinic',
    operatingHours: 'Mon-Fri: 8:00 AM - 6:00 PM, Sat: 8:00 AM - 12:00 PM',
    emergencyContact: '0771234567',
    status: 'active',
    isVerified: true,
    
    doctors: [
      {
        id: 1,
        title: 'Dr.',
        fullName: 'Asanka Perera',
        nic: '198512345678',
        slmcNumber: 'SLMC001',
        slmcExpiryDate: '2025-06-30',
        specialization: 'Cardiology',
        qualifications: 'MBBS, MD (Cardiology), MRCP',
        experience: '15',
        phoneNumber: '0771234567',
        email: 'asanka@centralmedical.lk'
      },
      {
        id: 2,
        title: 'Dr.',
        fullName: 'Nimesha Silva',
        nic: '199012345679',
        slmcNumber: 'SLMC002',
        slmcExpiryDate: '2025-08-15',
        specialization: 'Pediatrics',
        qualifications: 'MBBS, MD (Pediatrics), DCH',
        experience: '12',
        phoneNumber: '0771234568',
        email: 'nimesha@centralmedical.lk'
      }
    ],
    
    staff: [
      {
        id: 1,
        fullName: 'Kamani Jayawardena',
        position: 'Nurse',
        nic: '198712345680',
        licenseNumber: 'NUR001',
        licenseType: 'Nursing License',
        licenseExpiryDate: '2025-12-31',
        qualifications: 'Diploma in Nursing',
        phoneNumber: '0771234569',
        email: 'kamani@centralmedical.lk'
      },
      {
        id: 2,
        fullName: 'Sunil Fernando',
        position: 'Lab Technician',
        nic: '198912345681',
        licenseNumber: 'LAB001',
        licenseType: 'Lab Technician License',
        licenseExpiryDate: '2025-10-15',
        qualifications: 'Diploma in Medical Laboratory Technology',
        phoneNumber: '0771234570',
        email: 'sunil@centralmedical.lk'
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
            <h1>{clinicData.clinicName}</h1>
            <div className="header-badges">
              {getStatusBadge(clinicData.status)}
              {getVerificationBadge(clinicData.isVerified)}
            </div>
          </div>
          <div className="header-actions">
            <button className="back-btn" onClick={() => navigate('/manage-clinics')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
              Back to Clinics
            </button>
            <button className="edit-btn" onClick={() => navigate(`/edit-clinic/${clinicId}`)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
              Edit Clinic
            </button>
          </div>
        </div>

        <div className="details-container">
          {/* Clinic Information Section */}
          <div className="details-card">
            <div className="card-header">
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9,22 9,12 15,12 15,22"></polyline>
                </svg>
                Clinic Information
              </h3>
            </div>
            <div className="card-content">
              <div className="info-grid">
                <div className="info-item">
                  <label>Registration Number</label>
                  <span>{clinicData.registrationNumber}</span>
                </div>
                <div className="info-item">
                  <label>License Number</label>
                  <span>{clinicData.licenseNumber}</span>
                </div>
                <div className="info-item">
                  <label>License Expiry</label>
                  <span>{new Date(clinicData.licenseExpiryDate).toLocaleDateString()}</span>
                </div>
                <div className="info-item">
                  <label>Clinic Type</label>
                  <span>{clinicData.clinicType}</span>
                </div>
                <div className="info-item">
                  <label>Established Date</label>
                  <span>{new Date(clinicData.establishedDate).toLocaleDateString()}</span>
                </div>
                <div className="info-item">
                  <label>Phone Number</label>
                  <span>{clinicData.phoneNumber}</span>
                </div>
                <div className="info-item full-width">
                  <label>Address</label>
                  <span>{clinicData.address}, {clinicData.city}, {clinicData.district}, {clinicData.province} {clinicData.postalCode}</span>
                </div>
                <div className="info-item">
                  <label>Email</label>
                  <span>{clinicData.email}</span>
                </div>
                <div className="info-item">
                  <label>Website</label>
                  <span><a href={clinicData.website} target="_blank" rel="noopener noreferrer">{clinicData.website}</a></span>
                </div>
                <div className="info-item full-width">
                  <label>Operating Hours</label>
                  <span>{clinicData.operatingHours}</span>
                </div>
                <div className="info-item">
                  <label>Emergency Contact</label>
                  <span>{clinicData.emergencyContact}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Doctors Section */}
          <div className="details-card">
            <div className="card-header">
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Doctors ({clinicData.doctors.length})
              </h3>
            </div>
            <div className="card-content">
              <div className="members-list">
                {clinicData.doctors.map(doctor => (
                  <div key={doctor.id} className="member-card">
                    <div className="member-header">
                      <h4>{doctor.title} {doctor.fullName}</h4>
                      <span className="member-type">Doctor</span>
                    </div>
                    <div className="member-details">
                      <div className="detail-row">
                        <span className="label">Specialization:</span>
                        <span className="value">{doctor.specialization}</span>
                      </div>
                      <div className="detail-row">
                        <span className="label">SLMC Number:</span>
                        <span className="value">{doctor.slmcNumber}</span>
                      </div>
                      <div className="detail-row">
                        <span className="label">SLMC Expiry:</span>
                        <span className="value">{new Date(doctor.slmcExpiryDate).toLocaleDateString()}</span>
                      </div>
                      <div className="detail-row">
                        <span className="label">Qualifications:</span>
                        <span className="value">{doctor.qualifications}</span>
                      </div>
                      <div className="detail-row">
                        <span className="label">Experience:</span>
                        <span className="value">{doctor.experience} years</span>
                      </div>
                      <div className="detail-row">
                        <span className="label">Contact:</span>
                        <span className="value">{doctor.phoneNumber} | {doctor.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Staff Section */}
          <div className="details-card">
            <div className="card-header">
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Hospital Staff ({clinicData.staff.length})
              </h3>
            </div>
            <div className="card-content">
              <div className="members-list">
                {clinicData.staff.map(staff => (
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

export default ClinicDetailsPage;