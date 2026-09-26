import React from "react";
import "./FacultyProfile.css";

function FacultyProfile() {
  return (
    <div className="faculty-profile-page">

      {/* PAGE HEADER */}
      <div className="faculty-profile-header">
        <div>
          <p className="faculty-profile-label">FACULTY PORTAL</p>

          <h1>My Profile</h1>

          <p className="faculty-profile-subtitle">
            View and manage your faculty profile
          </p>
        </div>
      </div>

      {/* PROFILE CARD */}
      <div className="faculty-profile-card">

        {/* TOP PROFILE SECTION */}
        <div className="faculty-profile-top">

          <div className="faculty-profile-avatar">
            PS
          </div>

          <div className="faculty-profile-basic">
            <h2>Dr. Priya Sharma</h2>

            <p className="faculty-designation">
              Assistant Professor
            </p>

            <p className="faculty-department">
              Computer Science & Engineering
            </p>
          </div>

          <button className="edit-profile-btn">
            Edit Profile
          </button>

        </div>

        <div className="faculty-profile-divider"></div>

        {/* INFORMATION GRID */}
        <div className="faculty-information-grid">

          <div className="faculty-info-box">
            <span>Faculty ID</span>
            <strong>FAC2026001</strong>
          </div>

          <div className="faculty-info-box">
            <span>Email</span>
            <strong>priya.sharma@college.edu</strong>
          </div>

          <div className="faculty-info-box">
            <span>Department</span>
            <strong>Computer Science & Engineering</strong>
          </div>

          <div className="faculty-info-box">
            <span>Designation</span>
            <strong>Assistant Professor</strong>
          </div>

          <div className="faculty-info-box">
            <span>Subjects</span>
            <strong>DBMS, Data Structures</strong>
          </div>

          <div className="faculty-info-box">
            <span>Sections</span>
            <strong>CSE-A, CSE-B</strong>
          </div>

        </div>

      </div>

    </div>
  );
}

export default FacultyProfile;