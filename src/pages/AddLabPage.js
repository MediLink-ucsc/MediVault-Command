import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Layout/Sidebar';
import '../styles/AddClinicPage.css';

const AddLabPage = () => {
  const navigate = useNavigate();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('lab');
  
  const [labData, setLabData] = useState({
    labName: '',
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
    labType: '',
    specializations: [],
    operatingHours: '',
    emergencyContact: ''
  });

  const [technicianData, setTechnicianData] = useState([
    {
      id: 1,
      fullName: '',
      title: '',
      nic: '',
      licenseNumber: '',
      licenseExpiryDate: '',
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

  const labTypes = [
    'Diagnostic Center', 'Pathology Lab', 'Blood Bank',
    'Imaging Center', 'Research Lab', 'Clinical Laboratory'
  ];

  const labSpecializations = [
    'Hematology', 'Biochemistry', 'Microbiology', 'Histopathology',
    'Cytology', 'Immunology', 'Molecular Biology', 'Radiology'
  ];

  const staffPositions = [
    'Lab Technician', 'Lab Assistant', 'Phlebotomist',
    'Pathologist', 'Radiographer', 'Receptionist', 'Cleaner'
  ];

  const handleLabInputChange = (e) => {
    const { name, value } = e.target;
    setLabData(prev => ({ ...prev, [name]: value }));
  };

  const handleTechnicianInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedTechnicians = [...technicianData];
    updatedTechnicians[index] = { ...updatedTechnicians[index], [name]: value };
    setTechnicianData(updatedTechnicians);
  };

  const addTechnician = () => {
    setTechnicianData([...technicianData, {
      id: technicianData.length + 1,
      fullName: '',
      title: '',
      nic: '',
      licenseNumber: '',
      licenseExpiryDate: '',
      specialization: '',
      qualifications: '',
      experience: '',
      phoneNumber: '',
      email: '',
      address: '',
      emergencyContact: ''
    }]);
  };

  const removeTechnician = (index) => {
    if (technicianData.length > 1) {
      setTechnicianData(technicianData.filter((_, i) => i !== index));
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
    console.log('Lab Data:', labData);
    console.log('Technician Data:', technicianData);
    console.log('Staff Data:', staffData);
    alert('Lab registered successfully!');
    navigate('/manage-clinics-labs?tab=labs');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'lab':
        return (
          <div className="tab-content">
            <h3>Lab Information</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Lab Name *</label>
                <input
                  type="text"
                  name="labName"
                  value={labData.labName}
                  onChange={handleLabInputChange}
                  placeholder="Enter lab name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Registration Number *</label>
                <input
                  type="text"
                  name="registrationNumber"
                  value={labData.registrationNumber}
                  onChange={handleLabInputChange}
                  placeholder="Enter registration number"
                  required
                />
              </div>

              <div className="form-group">
                <label>License Number *</label>
                <input
                  type="text"
                  name="licenseNumber"
                  value={labData.licenseNumber}
                  onChange={handleLabInputChange}
                  placeholder="Enter license number"
                  required
                />
              </div>

              <div className="form-group">
                <label>License Expiry Date *</label>
                <input
                  type="date"
                  name="licenseExpiryDate"
                  value={labData.licenseExpiryDate}
                  onChange={handleLabInputChange}
                  required
                />
              </div>

              <div className="form-group full-width">
                <label>Address *</label>
                <textarea
                  name="address"
                  value={labData.address}
                  onChange={handleLabInputChange}
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
                  value={labData.city}
                  onChange={handleLabInputChange}
                  placeholder="Enter city"
                  required
                />
              </div>

              <div className="form-group">
                <label>District *</label>
                <input
                  type="text"
                  name="district"
                  value={labData.district}
                  onChange={handleLabInputChange}
                  placeholder="Enter district"
                  required
                />
              </div>

              <div className="form-group">
                <label>Province *</label>
                <select
                  name="province"
                  value={labData.province}
                  onChange={handleLabInputChange}
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
                  value={labData.postalCode}
                  onChange={handleLabInputChange}
                  placeholder="Enter postal code"
                />
              </div>

              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={labData.phoneNumber}
                  onChange={handleLabInputChange}
                  placeholder="0112345678"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={labData.email}
                  onChange={handleLabInputChange}
                  placeholder="lab@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Website</label>
                <input
                  type="url"
                  name="website"
                  value={labData.website}
                  onChange={handleLabInputChange}
                  placeholder="https://www.lab.com"
                />
              </div>

              <div className="form-group">
                <label>Established Date</label>
                <input
                  type="date"
                  name="establishedDate"
                  value={labData.establishedDate}
                  onChange={handleLabInputChange}
                />
              </div>

              <div className="form-group">
                <label>Lab Type *</label>
                <select
                  name="labType"
                  value={labData.labType}
                  onChange={handleLabInputChange}
                  required
                >
                  <option value="">Select Lab Type</option>
                  {labTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="form-group full-width">
                <label>Operating Hours</label>
                <textarea
                  name="operatingHours"
                  value={labData.operatingHours}
                  onChange={handleLabInputChange}
                  placeholder="Mon-Fri: 7:00 AM - 8:00 PM, Sat: 7:00 AM - 2:00 PM"
                  rows="2"
                />
              </div>

              <div className="form-group">
                <label>Emergency Contact</label>
                <input
                  type="tel"
                  name="emergencyContact"
                  value={labData.emergencyContact}
                  onChange={handleLabInputChange}
                  placeholder="0771234567"
                />
              </div>
            </div>
          </div>
        );

      case 'technician':
        return (
          <div className="tab-content">
            <div className="staff-header">
              <h3>Lab Technician Information</h3>
              <button type="button" className="add-staff-btn" onClick={addTechnician}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
                Add Technician
              </button>
            </div>

            {technicianData.map((technician, index) => (
              <div key={technician.id} className="staff-card">
                <div className="staff-card-header">
                  <h4>Technician {index + 1}</h4>
                  {technicianData.length > 1 && (
                    <button
                      type="button"
                      className="remove-staff-btn"
                      onClick={() => removeTechnician(index)}
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
                      value={technician.title}
                      onChange={(e) => handleTechnicianInputChange(index, e)}
                    >
                      <option value="">Select Title</option>
                      <option value="Mr.">Mr.</option>
                      <option value="Ms.">Ms.</option>
                      <option value="Mrs.">Mrs.</option>
                      <option value="Dr.">Dr.</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={technician.fullName}
                      onChange={(e) => handleTechnicianInputChange(index, e)}
                      placeholder="Enter technician's full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>NIC Number *</label>
                    <input
                      type="text"
                      name="nic"
                      value={technician.nic}
                      onChange={(e) => handleTechnicianInputChange(index, e)}
                      placeholder="123456789V or 199812345678"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>License Number *</label>
                    <input
                      type="text"
                      name="licenseNumber"
                      value={technician.licenseNumber}
                      onChange={(e) => handleTechnicianInputChange(index, e)}
                      placeholder="Enter license number"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>License Expiry Date *</label>
                    <input
                      type="date"
                      name="licenseExpiryDate"
                      value={technician.licenseExpiryDate}
                      onChange={(e) => handleTechnicianInputChange(index, e)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Specialization *</label>
                    <select
                      name="specialization"
                      value={technician.specialization}
                      onChange={(e) => handleTechnicianInputChange(index, e)}
                      required
                    >
                      <option value="">Select Specialization</option>
                      {labSpecializations.map(spec => (
                        <option key={spec} value={spec}>{spec}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group full-width">
                    <label>Qualifications *</label>
                    <textarea
                      name="qualifications"
                      value={technician.qualifications}
                      onChange={(e) => handleTechnicianInputChange(index, e)}
                      placeholder="BSc in Medical Laboratory Science, Diploma, etc."
                      rows="2"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Experience (Years)</label>
                    <input
                      type="number"
                      name="experience"
                      value={technician.experience}
                      onChange={(e) => handleTechnicianInputChange(index, e)}
                      placeholder="Enter years of experience"
                      min="0"
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={technician.phoneNumber}
                      onChange={(e) => handleTechnicianInputChange(index, e)}
                      placeholder="0771234567"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={technician.email}
                      onChange={(e) => handleTechnicianInputChange(index, e)}
                      placeholder="technician@example.com"
                      required
                    />
                  </div>

                  <div className="form-group full-width">
                    <label>Address</label>
                    <textarea
                      name="address"
                      value={technician.address}
                      onChange={(e) => handleTechnicianInputChange(index, e)}
                      placeholder="Enter technician's address"
                      rows="2"
                    />
                  </div>

                  <div className="form-group">
                    <label>Emergency Contact</label>
                    <input
                      type="tel"
                      name="emergencyContact"
                      value={technician.emergencyContact}
                      onChange={(e) => handleTechnicianInputChange(index, e)}
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
              <h3>Lab Staff Information</h3>
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
                      placeholder="e.g., Lab Technician License"
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
          <h1>Add New Lab</h1>
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
              className={`tab-btn ${activeTab === 'lab' ? 'active' : ''}`}
              onClick={() => setActiveTab('lab')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9,22 9,12 15,12 15,22"></polyline>
              </svg>
              Lab Details
            </button>
            <button
              className={`tab-btn ${activeTab === 'technician' ? 'active' : ''}`}
              onClick={() => setActiveTab('technician')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Technician Details
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
              Lab Staff
            </button>
          </div>

          <form onSubmit={handleSubmit} className="clinic-form">
            {renderTabContent()}

            <div className="form-actions">
              <button type="button" className="cancel-btn" onClick={() => navigate('/dashboard')}>
                Cancel
              </button>
              <button type="submit" className="submit-btn">
                Register Lab
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddLabPage;