import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Layout/Sidebar';
import '../styles/AddClinicPage.css';

const AddClinicPage = () => {
  const navigate = useNavigate();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('clinic');
  
  // Form data states
  const [clinicData, setClinicData] = useState({
    clinicName: '',
    registrationNumber: '',
    licenseNumber: '',
    licenseExpiryDate: '',
    address: '',
    city: '',
    district: '',
    province: '',
    postalCode: '',
    phoneNumber: '',
    email: '',
    website: '',
    establishedDate: '',
    clinicType: '',
    specializations: [],
    operatingHours: '',
    emergencyContact: ''
  });

  // Changed to array for multiple doctors
  const [doctorData, setDoctorData] = useState([
    {
      id: 1,
      fullName: '',
      title: '',
      nic: '',
      slmcNumber: '',
      slmcExpiryDate: '',
      specialization: '',
      qualifications: '',
      experience: '',
      phoneNumber: '',
      email: '',
      address: '',
      emergencyContact: ''
    }
  ]);

  const [staffData, setStaffData] = useState([
    {
      id: 1,
      fullName: '',
      position: '',
      nic: '',
      licenseNumber: '',
      licenseType: '',
      licenseExpiryDate: '',
      qualifications: '',
      phoneNumber: '',
      email: '',
      address: ''
    }
  ]);

  const sriLankanProvinces = [
    'Western', 'Central', 'Southern', 'Northern', 'Eastern',
    'North Western', 'North Central', 'Uva', 'Sabaragamuwa'
  ];

  const clinicTypes = [
    'General Practice', 'Specialist Clinic', 'Dental Clinic',
    'Eye Clinic', 'Pediatric Clinic', 'Maternity Clinic',
    'Diagnostic Center', 'Multi-Specialty Clinic'
  ];

  const medicalSpecializations = [
    'General Medicine', 'Cardiology', 'Dermatology', 'Orthopedics',
    'Pediatrics', 'Gynecology', 'Neurology', 'Psychiatry',
    'Ophthalmology', 'ENT', 'Dental', 'Radiology'
  ];

  const staffPositions = [
    'Nurse', 'Lab Technician', 'Pharmacist', 'Radiographer',
    'Physiotherapist', 'Receptionist', 'Assistant', 'Cleaner'
  ];

  const handleClinicInputChange = (e) => {
    const { name, value } = e.target;
    setClinicData(prev => ({ ...prev, [name]: value }));
  };

  // Updated doctor functions for multiple doctors
  const handleDoctorInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedDoctors = [...doctorData];
    updatedDoctors[index] = { ...updatedDoctors[index], [name]: value };
    setDoctorData(updatedDoctors);
  };

  const addDoctor = () => {
    setDoctorData([...doctorData, {
      id: doctorData.length + 1,
      fullName: '',
      title: '',
      nic: '',
      slmcNumber: '',
      slmcExpiryDate: '',
      specialization: '',
      qualifications: '',
      experience: '',
      phoneNumber: '',
      email: '',
      address: '',
      emergencyContact: ''
    }]);
  };

  const removeDoctor = (index) => {
    if (doctorData.length > 1) {
      setDoctorData(doctorData.filter((_, i) => i !== index));
    }
  };

  const handleStaffInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedStaff = [...staffData];
    updatedStaff[index] = { ...updatedStaff[index], [name]: value };
    setStaffData(updatedStaff);
  };

  const addStaffMember = () => {
    setStaffData([...staffData, {
      id: staffData.length + 1,
      fullName: '',
      position: '',
      nic: '',
      licenseNumber: '',
      licenseType: '',
      licenseExpiryDate: '',
      qualifications: '',
      phoneNumber: '',
      email: '',
      address: ''
    }]);
  };

  const removeStaffMember = (index) => {
    if (staffData.length > 1) {
      setStaffData(staffData.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Clinic Data:', clinicData);
    console.log('Doctor Data:', doctorData);
    console.log('Staff Data:', staffData);
    alert('Clinic registered successfully!');
    navigate('/manage-clinics');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'clinic':
        return (
          <div className="tab-content">
            <h3>Clinic Information</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Clinic Name *</label>
                <input
                  type="text"
                  name="clinicName"
                  value={clinicData.clinicName}
                  onChange={handleClinicInputChange}
                  placeholder="Enter clinic name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Registration Number *</label>
                <input
                  type="text"
                  name="registrationNumber"
                  value={clinicData.registrationNumber}
                  onChange={handleClinicInputChange}
                  placeholder="Enter registration number"
                  required
                />
              </div>

              <div className="form-group">
                <label>License Number *</label>
                <input
                  type="text"
                  name="licenseNumber"
                  value={clinicData.licenseNumber}
                  onChange={handleClinicInputChange}
                  placeholder="Enter license number"
                  required
                />
              </div>

              <div className="form-group">
                <label>License Expiry Date *</label>
                <input
                  type="date"
                  name="licenseExpiryDate"
                  value={clinicData.licenseExpiryDate}
                  onChange={handleClinicInputChange}
                  required
                />
              </div>

              <div className="form-group full-width">
                <label>Address *</label>
                <textarea
                  name="address"
                  value={clinicData.address}
                  onChange={handleClinicInputChange}
                  placeholder="Enter complete address"
                  rows="3"
                  required
                />
              </div>

              <div className="form-group">
                <label>City *</label>
                <input
                  type="text"
                  name="city"
                  value={clinicData.city}
                  onChange={handleClinicInputChange}
                  placeholder="Enter city"
                  required
                />
              </div>

              <div className="form-group">
                <label>District *</label>
                <input
                  type="text"
                  name="district"
                  value={clinicData.district}
                  onChange={handleClinicInputChange}
                  placeholder="Enter district"
                  required
                />
              </div>

              <div className="form-group">
                <label>Province *</label>
                <select
                  name="province"
                  value={clinicData.province}
                  onChange={handleClinicInputChange}
                  required
                >
                  <option value="">Select Province</option>
                  {sriLankanProvinces.map(province => (
                    <option key={province} value={province}>{province}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={clinicData.postalCode}
                  onChange={handleClinicInputChange}
                  placeholder="Enter postal code"
                />
              </div>

              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={clinicData.phoneNumber}
                  onChange={handleClinicInputChange}
                  placeholder="0112345678"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={clinicData.email}
                  onChange={handleClinicInputChange}
                  placeholder="clinic@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Website</label>
                <input
                  type="url"
                  name="website"
                  value={clinicData.website}
                  onChange={handleClinicInputChange}
                  placeholder="https://www.clinic.com"
                />
              </div>

              <div className="form-group">
                <label>Established Date</label>
                <input
                  type="date"
                  name="establishedDate"
                  value={clinicData.establishedDate}
                  onChange={handleClinicInputChange}
                />
              </div>

              <div className="form-group">
                <label>Clinic Type *</label>
                <select
                  name="clinicType"
                  value={clinicData.clinicType}
                  onChange={handleClinicInputChange}
                  required
                >
                  <option value="">Select Clinic Type</option>
                  {clinicTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="form-group full-width">
                <label>Operating Hours</label>
                <textarea
                  name="operatingHours"
                  value={clinicData.operatingHours}
                  onChange={handleClinicInputChange}
                  placeholder="Mon-Fri: 8:00 AM - 6:00 PM, Sat: 8:00 AM - 12:00 PM"
                  rows="2"
                />
              </div>

              <div className="form-group">
                <label>Emergency Contact</label>
                <input
                  type="tel"
                  name="emergencyContact"
                  value={clinicData.emergencyContact}
                  onChange={handleClinicInputChange}
                  placeholder="0771234567"
                />
              </div>
            </div>
          </div>
        );

      case 'doctor':
        return (
          <div className="tab-content">
            <div className="staff-header">
              <h3>Doctor Information</h3>
              <button type="button" className="add-staff-btn" onClick={addDoctor}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
                Add Doctor
              </button>
            </div>

            {doctorData.map((doctor, index) => (
              <div key={doctor.id} className="staff-card">
                <div className="staff-card-header">
                  <h4>Doctor {index + 1}</h4>
                  {doctorData.length > 1 && (
                    <button
                      type="button"
                      className="remove-staff-btn"
                      onClick={() => removeDoctor(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label>Title</label>
                    <select
                      name="title"
                      value={doctor.title}
                      onChange={(e) => handleDoctorInputChange(index, e)}
                    >
                      <option value="">Select Title</option>
                      <option value="Dr.">Dr.</option>
                      <option value="Prof.">Prof.</option>
                      <option value="Consultant">Consultant</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={doctor.fullName}
                      onChange={(e) => handleDoctorInputChange(index, e)}
                      placeholder="Enter doctor's full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>NIC Number *</label>
                    <input
                      type="text"
                      name="nic"
                      value={doctor.nic}
                      onChange={(e) => handleDoctorInputChange(index, e)}
                      placeholder="123456789V or 199812345678"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>SLMC Registration Number *</label>
                    <input
                      type="text"
                      name="slmcNumber"
                      value={doctor.slmcNumber}
                      onChange={(e) => handleDoctorInputChange(index, e)}
                      placeholder="Enter SLMC number"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>SLMC License Expiry Date *</label>
                    <input
                      type="date"
                      name="slmcExpiryDate"
                      value={doctor.slmcExpiryDate}
                      onChange={(e) => handleDoctorInputChange(index, e)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Specialization *</label>
                    <select
                      name="specialization"
                      value={doctor.specialization}
                      onChange={(e) => handleDoctorInputChange(index, e)}
                      required
                    >
                      <option value="">Select Specialization</option>
                      {medicalSpecializations.map(spec => (
                        <option key={spec} value={spec}>{spec}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group full-width">
                    <label>Qualifications *</label>
                    <textarea
                      name="qualifications"
                      value={doctor.qualifications}
                      onChange={(e) => handleDoctorInputChange(index, e)}
                      placeholder="MBBS, MD, MRCP, etc."
                      rows="2"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Experience (Years)</label>
                    <input
                      type="number"
                      name="experience"
                      value={doctor.experience}
                      onChange={(e) => handleDoctorInputChange(index, e)}
                      placeholder="Enter years of experience"
                      min="0"
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={doctor.phoneNumber}
                      onChange={(e) => handleDoctorInputChange(index, e)}
                      placeholder="0771234567"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={doctor.email}
                      onChange={(e) => handleDoctorInputChange(index, e)}
                      placeholder="doctor@example.com"
                      required
                    />
                  </div>

                  <div className="form-group full-width">
                    <label>Address</label>
                    <textarea
                      name="address"
                      value={doctor.address}
                      onChange={(e) => handleDoctorInputChange(index, e)}
                      placeholder="Enter doctor's address"
                      rows="2"
                    />
                  </div>

                  <div className="form-group">
                    <label>Emergency Contact</label>
                    <input
                      type="tel"
                      name="emergencyContact"
                      value={doctor.emergencyContact}
                      onChange={(e) => handleDoctorInputChange(index, e)}
                      placeholder="0771234567"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'staff':
        return (
          <div className="tab-content">
            <div className="staff-header">
              <h3>Hospital Staff Information</h3>
              <button type="button" className="add-staff-btn" onClick={addStaffMember}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
                Add Staff Member
              </button>
            </div>

            {staffData.map((staff, index) => (
              <div key={staff.id} className="staff-card">
                <div className="staff-card-header">
                  <h4>Staff Member {index + 1}</h4>
                  {staffData.length > 1 && (
                    <button
                      type="button"
                      className="remove-staff-btn"
                      onClick={() => removeStaffMember(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={staff.fullName}
                      onChange={(e) => handleStaffInputChange(index, e)}
                      placeholder="Enter staff member's name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Position *</label>
                    <select
                      name="position"
                      value={staff.position}
                      onChange={(e) => handleStaffInputChange(index, e)}
                      required
                    >
                      <option value="">Select Position</option>
                      {staffPositions.map(position => (
                        <option key={position} value={position}>{position}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>NIC Number *</label>
                    <input
                      type="text"
                      name="nic"
                      value={staff.nic}
                      onChange={(e) => handleStaffInputChange(index, e)}
                      placeholder="123456789V or 199812345678"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>License Number</label>
                    <input
                      type="text"
                      name="licenseNumber"
                      value={staff.licenseNumber}
                      onChange={(e) => handleStaffInputChange(index, e)}
                      placeholder="Enter license number (if applicable)"
                    />
                  </div>

                  <div className="form-group">
                    <label>License Type</label>
                    <input
                      type="text"
                      name="licenseType"
                      value={staff.licenseType}
                      onChange={(e) => handleStaffInputChange(index, e)}
                      placeholder="e.g., Nursing License, Lab Technician License"
                    />
                  </div>

                  <div className="form-group">
                    <label>License Expiry Date</label>
                    <input
                      type="date"
                      name="licenseExpiryDate"
                      value={staff.licenseExpiryDate}
                      onChange={(e) => handleStaffInputChange(index, e)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Qualifications</label>
                    <input
                      type="text"
                      name="qualifications"
                      value={staff.qualifications}
                      onChange={(e) => handleStaffInputChange(index, e)}
                      placeholder="Enter qualifications/certifications"
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={staff.phoneNumber}
                      onChange={(e) => handleStaffInputChange(index, e)}
                      placeholder="0771234567"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={staff.email}
                      onChange={(e) => handleStaffInputChange(index, e)}
                      placeholder="staff@example.com"
                    />
                  </div>

                  <div className="form-group full-width">
                    <label>Address</label>
                    <textarea
                      name="address"
                      value={staff.address}
                      onChange={(e) => handleStaffInputChange(index, e)}
                      placeholder="Enter staff member's address"
                      rows="2"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar onToggle={setIsSidebarExpanded} />
      <div className={`dashboard-content ${isSidebarExpanded ? 'expanded' : ''}`}>
        <div className="page-header">
          <h1>Add New Clinic</h1>
          <button className="back-btn" onClick={() => navigate('/dashboard')}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
            Back to Dashboard
          </button>
        </div>

        <div className="form-container">
          <div className="form-tabs">
            <button
              className={`tab-btn ${activeTab === 'clinic' ? 'active' : ''}`}
              onClick={() => setActiveTab('clinic')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9,22 9,12 15,12 15,22"></polyline>
              </svg>
              Clinic Details
            </button>
            <button
              className={`tab-btn ${activeTab === 'doctor' ? 'active' : ''}`}
              onClick={() => setActiveTab('doctor')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Doctor Details
            </button>
            <button
              className={`tab-btn ${activeTab === 'staff' ? 'active' : ''}`}
              onClick={() => setActiveTab('staff')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              Hospital Staff
            </button>
          </div>

          <form onSubmit={handleSubmit} className="clinic-form">
            {renderTabContent()}

            <div className="form-actions">
              <button type="button" className="cancel-btn" onClick={() => navigate('/dashboard')}>
                Cancel
              </button>
              <button type="submit" className="submit-btn">
                Register Clinic
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClinicPage;