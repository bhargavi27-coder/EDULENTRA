import React, { useState } from "react";
import "./FacultyDashboard.css";

function FacultyDashboard() {
  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const faculty = {
    name: "Dr. Priya Sharma",
    facultyId: "FAC2026001",
    department: "Computer Science & Engineering",
    designation: "Assistant Professor",
  };

  const students = [
    {
      id: 1,
      name: "Sai Kumar",
      roll: "23CS001",
      section: "CSE-A",
      attendance: 92,
      performance: "Good",
    },
    {
      id: 2,
      name: "Bhargavi",
      roll: "23CS002",
      section: "CSE-A",
      attendance: 78,
      performance: "Average",
    },
    {
      id: 3,
      name: "Rahul",
      roll: "23CS003",
      section: "CSE-A",
      attendance: 68,
      performance: "Needs Attention",
    },
    {
      id: 4,
      name: "Anjali",
      roll: "23CS004",
      section: "CSE-A",
      attendance: 95,
      performance: "Excellent",
    },
    {
      id: 5,
      name: "Kiran",
      roll: "23CS005",
      section: "CSE-A",
      attendance: 83,
      performance: "Good",
    },
  ];

  const timetable = [
    {
      time: "09:00 - 10:00",
      subject: "DBMS",
      section: "CSE-A",
      room: "Room 204",
    },
    {
      time: "10:00 - 11:00",
      subject: "Database Lab",
      section: "CSE-B",
      room: "Lab 2",
    },
    {
      time: "11:30 - 12:30",
      subject: "Data Structures",
      section: "CSE-A",
      room: "Room 205",
    },
    {
      time: "02:00 - 03:00",
      subject: "DBMS",
      section: "CSE-B",
      room: "Room 204",
    },
  ];

  const announcements = [
    {
      title: "Internal Examination Schedule",
      date: "23 Sep 2026",
      priority: "Important",
    },
    {
      title: "Faculty Meeting at 3:30 PM",
      date: "24 Sep 2026",
      priority: "Normal",
    },
    {
      title: "Assignment Submission Deadline",
      date: "26 Sep 2026",
      priority: "Urgent",
    },
  ];

  const assignments = [
    {
      title: "DBMS Normalization Assignment",
      section: "CSE-A",
      submitted: 32,
      total: 40,
      deadline: "25 Sep 2026",
    },
    {
      title: "SQL Query Practice",
      section: "CSE-B",
      submitted: 28,
      total: 35,
      deadline: "27 Sep 2026",
    },
    {
      title: "Data Structures Assignment",
      section: "CSE-A",
      submitted: 35,
      total: 40,
      deadline: "30 Sep 2026",
    },
  ];

  const outpassRequests = [
    {
      student: "Rahul",
      roll: "23CS003",
      reason: "Medical Appointment",
      date: "23 Sep",
      status: "Pending",
    },
    {
      student: "Anjali",
      roll: "23CS004",
      reason: "Family Function",
      date: "24 Sep",
      status: "Pending",
    },
  ];

  const notifications = [
    "3 new assignment submissions",
    "2 outpass requests are waiting",
    "Department meeting tomorrow",
    "Attendance warning for 4 students",
  ];

  const menuItems = [
    {
      id: "dashboard",
      icon: "🏠",
      label: "Dashboard",
    },
    {
      id: "students",
      icon: "👨‍🎓",
      label: "Students",
    },
    {
      id: "attendance",
      icon: "📋",
      label: "Attendance",
    },
    {
      id: "notes",
      icon: "📚",
      label: "Notes & Materials",
    },
    {
      id: "assignments",
      icon: "📝",
      label: "Assignments",
    },
    {
      id: "announcements",
      icon: "📢",
      label: "Announcements",
    },
    {
      id: "outpass",
      icon: "🚪",
      label: "Outpass Requests",
    },
    {
      id: "timetable",
      icon: "🗓️",
      label: "My Timetable",
    },
    {
      id: "performance",
      icon: "📊",
      label: "Student Performance",
    },
    {
      id: "notifications",
      icon: "🔔",
      label: "Notifications",
    },
    {
      id: "profile",
      icon: "👤",
      label: "My Profile",
    },
  ];

  const handleMenuClick = (page) => {
    setActivePage(page);
    setSidebarOpen(false);
  };

  const getAttendanceClass = (attendance) => {
    if (attendance >= 85) return "attendance-good";
    if (attendance >= 75) return "attendance-warning";
    return "attendance-danger";
  };

  const renderDashboard = () => {
    return (
      <>
        <div className="faculty-welcome">
          <div>
            <p className="welcome-small">Welcome back,</p>

            <h1>
              {faculty.name} <span>👋</span>
            </h1>

            <p className="faculty-subtitle">
              {faculty.designation} • {faculty.department}
            </p>
          </div>

          <div className="faculty-date">
            <span>📅</span>
            <div>
              <strong>23 September 2026</strong>
              <small>Wednesday</small>
            </div>
          </div>
        </div>

        <div className="stats-grid">
          <div className="faculty-stat-card blue">
            <div className="stat-icon">👨‍🎓</div>
            <div>
              <span>Assigned Students</span>
              <h2>120</h2>
            </div>
          </div>

          <div className="faculty-stat-card green">
            <div className="stat-icon">📋</div>
            <div>
              <span>Attendance Pending</span>
              <h2>3</h2>
            </div>
          </div>

          <div className="faculty-stat-card orange">
            <div className="stat-icon">📝</div>
            <div>
              <span>To Evaluate</span>
              <h2>18</h2>
            </div>
          </div>

          <div className="faculty-stat-card purple">
            <div className="stat-icon">🚪</div>
            <div>
              <span>Outpass Requests</span>
              <h2>2</h2>
            </div>
          </div>
        </div>

        <div className="faculty-content-grid">
          <section className="faculty-card today-class-card">
            <div className="card-header">
              <div>
                <span className="card-label">TODAY'S WORK</span>
                <h2>Today's Classes</h2>
              </div>

              <button
                className="view-button"
                onClick={() => handleMenuClick("timetable")}
              >
                View Timetable
              </button>
            </div>

            <div className="class-list">
              {timetable.slice(0, 3).map((item, index) => (
                <div className="class-item" key={index}>
                  <div className="class-time">
                    {item.time}
                  </div>

                  <div className="class-line"></div>

                  <div className="class-info">
                    <h3>{item.subject}</h3>
                    <p>
                      {item.section} • {item.room}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="faculty-card quick-actions-card">
            <div className="card-header">
              <div>
                <span className="card-label">QUICK ACCESS</span>
                <h2>Quick Actions</h2>
              </div>
            </div>

            <div className="quick-actions">
              <button onClick={() => handleMenuClick("attendance")}>
                <span>📋</span>
                <small>Take Attendance</small>
              </button>

              <button onClick={() => handleMenuClick("notes")}>
                <span>📚</span>
                <small>Upload Notes</small>
              </button>

              <button onClick={() => handleMenuClick("assignments")}>
                <span>📝</span>
                <small>Create Assignment</small>
              </button>

              <button onClick={() => handleMenuClick("students")}>
                <span>👨‍🎓</span>
                <small>View Students</small>
              </button>
            </div>
          </section>
        </div>

        <div className="faculty-content-grid lower-grid">
          <section className="faculty-card">
            <div className="card-header">
              <div>
                <span className="card-label">ACADEMIC</span>
                <h2>Attendance Overview</h2>
              </div>

              <button
                className="view-button"
                onClick={() => handleMenuClick("attendance")}
              >
                Manage
              </button>
            </div>

            <div className="attendance-overview">
              <div className="attendance-circle">
                <strong>86%</strong>
                <span>Overall</span>
              </div>

              <div className="attendance-details">
                <div>
                  <span className="dot present"></span>
                  Present
                  <strong>1,032</strong>
                </div>

                <div>
                  <span className="dot absent"></span>
                  Absent
                  <strong>168</strong>
                </div>

                <div>
                  <span className="dot warning"></span>
                  Below 75%
                  <strong>12</strong>
                </div>
              </div>
            </div>
          </section>

          <section className="faculty-card">
            <div className="card-header">
              <div>
                <span className="card-label">ACTION REQUIRED</span>
                <h2>Pending Outpass</h2>
              </div>

              <button
                className="view-button"
                onClick={() => handleMenuClick("outpass")}
              >
                View All
              </button>
            </div>

            {outpassRequests.map((request, index) => (
              <div className="mini-request" key={index}>
                <div className="student-avatar">
                  {request.student.charAt(0)}
                </div>

                <div>
                  <strong>{request.student}</strong>
                  <p>
                    {request.roll} • {request.reason}
                  </p>
                </div>

                <span className="pending-badge">Pending</span>
              </div>
            ))}
          </section>
        </div>

        <section className="faculty-card full-width-card">
          <div className="card-header">
            <div>
              <span className="card-label">RECENT</span>
              <h2>Latest Announcements</h2>
            </div>

            <button
              className="view-button"
              onClick={() => handleMenuClick("announcements")}
            >
              View All
            </button>
          </div>

          <div className="announcement-list">
            {announcements.map((item, index) => (
              <div className="announcement-row" key={index}>
                <div className="announcement-icon">📢</div>

                <div className="announcement-info">
                  <strong>{item.title}</strong>
                  <span>{item.date}</span>
                </div>

                <span
                  className={`priority-badge ${item.priority.toLowerCase()}`}
                >
                  {item.priority}
                </span>
              </div>
            ))}
          </div>
        </section>
      </>
    );
  };

  const renderStudents = () => {
    return (
      <PageWrapper
        title="Student List"
        subtitle="Students assigned to your classes"
      >
        <div className="filter-bar">
          <input
            type="text"
            placeholder="🔍 Search student..."
          />

          <select>
            <option>All Sections</option>
            <option>CSE-A</option>
            <option>CSE-B</option>
          </select>

          <select>
            <option>All Subjects</option>
            <option>DBMS</option>
            <option>Data Structures</option>
          </select>
        </div>

        <div className="table-container">
          <table className="faculty-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Roll Number</th>
                <th>Section</th>
                <th>Attendance</th>
                <th>Performance</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>
                    <div className="table-student">
                      <div className="student-avatar">
                        {student.name.charAt(0)}
                      </div>

                      <strong>{student.name}</strong>
                    </div>
                  </td>

                  <td>{student.roll}</td>

                  <td>
                    <span className="section-badge">
                      {student.section}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`attendance-pill ${getAttendanceClass(
                        student.attendance
                      )}`}
                    >
                      {student.attendance}%
                    </span>
                  </td>

                  <td>{student.performance}</td>

                  <td>
                    <button className="small-action">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PageWrapper>
    );
  };

  const renderAttendance = () => {
    return (
      <PageWrapper
        title="Attendance Management"
        subtitle="Mark and monitor student attendance"
      >
        <div className="attendance-controls">
          <select>
            <option>Select Subject</option>
            <option>DBMS</option>
            <option>Data Structures</option>
          </select>

          <select>
            <option>Select Section</option>
            <option>CSE-A</option>
            <option>CSE-B</option>
          </select>

          <input type="date" defaultValue="2026-09-23" />

          <button className="primary-button">
            Load Students
          </button>
        </div>

        <div className="attendance-action-bar">
          <div>
            <strong>CSE-A • DBMS</strong>
            <p>23 September 2026</p>
          </div>

          <button className="mark-all-button">
            ✓ Mark All Present
          </button>
        </div>

        <div className="table-container">
          <table className="faculty-table">
            <thead>
              <tr>
                <th>Roll No</th>
                <th>Student</th>
                <th>Attendance</th>
                <th>Today's Status</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.roll}</td>

                  <td>
                    <strong>{student.name}</strong>
                  </td>

                  <td>
                    <span
                      className={`attendance-pill ${getAttendanceClass(
                        student.attendance
                      )}`}
                    >
                      {student.attendance}%
                    </span>
                  </td>

                  <td>
                    <div className="attendance-buttons">
                      <button className="present-button">
                        Present
                      </button>

                      <button className="absent-button">
                        Absent
                      </button>

                      <button className="late-button">
                        Late
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="save-attendance">
          Save Attendance
        </button>
      </PageWrapper>
    );
  };

  const renderNotes = () => {
    return (
      <PageWrapper
        title="Notes & Study Materials"
        subtitle="Upload and manage academic materials"
      >
        <div className="upload-section">
          <div className="upload-icon">📚</div>

          <h3>Upload Study Material</h3>

          <p>
            Upload PDF notes, study materials and reference documents.
          </p>

          <input type="file" />

          <button className="primary-button">
            Upload Material
          </button>
        </div>

        <div className="material-grid">
          <MaterialCard
            title="DBMS Unit - 1 Notes"
            subject="Database Management Systems"
            type="PDF"
          />

          <MaterialCard
            title="SQL Queries Reference"
            subject="DBMS"
            type="PDF"
          />

          <MaterialCard
            title="Data Structures Notes"
            subject="Data Structures"
            type="PDF"
          />
        </div>
      </PageWrapper>
    );
  };

  const renderAssignments = () => {
    return (
      <PageWrapper
        title="Assignment Management"
        subtitle="Create assignments and evaluate submissions"
      >
        <div className="assignment-top">
          <div>
            <h3>Assignments</h3>
            <p>Manage assignments for your classes.</p>
          </div>

          <button className="primary-button">
            + Create Assignment
          </button>
        </div>

        <div className="assignment-grid">
          {assignments.map((assignment, index) => (
            <div className="assignment-card" key={index}>
              <div className="assignment-icon">📝</div>

              <div className="assignment-content">
                <h3>{assignment.title}</h3>

                <p>
                  {assignment.section} • Deadline:{" "}
                  {assignment.deadline}
                </p>

                <div className="submission-progress">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${
                        (assignment.submitted /
                          assignment.total) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>

                <span>
                  {assignment.submitted} / {assignment.total}{" "}
                  submissions
                </span>
              </div>

              <button className="small-action">
                Manage
              </button>
            </div>
          ))}
        </div>
      </PageWrapper>
    );
  };

  const renderAnnouncements = () => {
    return (
      <PageWrapper
        title="Announcements"
        subtitle="Create and manage announcements"
      >
        <div className="announcement-action">
          <div>
            <h3>Department Announcements</h3>
            <p>
              Share important information with your students.
            </p>
          </div>

          <button className="primary-button">
            + New Announcement
          </button>
        </div>

        <div className="large-announcement-list">
          {announcements.map((item, index) => (
            <div className="large-announcement" key={index}>
              <div className="large-announcement-icon">
                📢
              </div>

              <div>
                <span
                  className={`priority-badge ${item.priority.toLowerCase()}`}
                >
                  {item.priority}
                </span>

                <h3>{item.title}</h3>

                <p>
                  Announcement for assigned students and
                  department members.
                </p>

                <small>{item.date}</small>
              </div>

              <button className="small-action">
                Edit
              </button>
            </div>
          ))}
        </div>
      </PageWrapper>
    );
  };

  const renderOutpass = () => {
    return (
      <PageWrapper
        title="Outpass Requests"
        subtitle="Review student outpass requests"
      >
        <div className="outpass-grid">
          {outpassRequests.map((request, index) => (
            <div className="outpass-card" key={index}>
              <div className="outpass-top">
                <div className="student-avatar">
                  {request.student.charAt(0)}
                </div>

                <div>
                  <h3>{request.student}</h3>
                  <p>{request.roll}</p>
                </div>

                <span className="pending-badge">
                  {request.status}
                </span>
              </div>

              <div className="outpass-details">
                <div>
                  <span>📅 Date</span>
                  <strong>{request.date}</strong>
                </div>

                <div>
                  <span>📍 Reason</span>
                  <strong>{request.reason}</strong>
                </div>
              </div>

              <div className="outpass-actions">
                <button className="approve-button">
                  ✓ Approve
                </button>

                <button className="reject-button">
                  ✕ Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </PageWrapper>
    );
  };

  const renderTimetable = () => {
    return (
      <PageWrapper
        title="My Timetable"
        subtitle="Your weekly teaching schedule"
      >
        <div className="faculty-timetable">
          {timetable.map((item, index) => (
            <div className="faculty-class-card" key={index}>
              <div className="faculty-class-time">
                {item.time}
              </div>

              <div className="faculty-class-details">
                <span>Class {index + 1}</span>
                <h3>{item.subject}</h3>
                <p>
                  {item.section} • {item.room}
                </p>
              </div>

              <div className="class-status">
                {index === 0 ? "Next" : "Scheduled"}
              </div>
            </div>
          ))}
        </div>
      </PageWrapper>
    );
  };

  const renderPerformance = () => {
    return (
      <PageWrapper
        title="Student Performance"
        subtitle="Monitor academic progress"
      >
        <div className="performance-summary">
          <div>
            <span>Class Average</span>
            <strong>78%</strong>
          </div>

          <div>
            <span>High Performers</span>
            <strong>24</strong>
          </div>

          <div>
            <span>Need Attention</span>
            <strong>12</strong>
          </div>

          <div>
            <span>Assignments Pending</span>
            <strong>18</strong>
          </div>
        </div>

        <div className="table-container">
          <table className="faculty-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Roll No</th>
                <th>Attendance</th>
                <th>Performance</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.roll}</td>
                  <td>
                    <span
                      className={`attendance-pill ${getAttendanceClass(
                        student.attendance
                      )}`}
                    >
                      {student.attendance}%
                    </span>
                  </td>
                  <td>{student.performance}</td>
                  <td>
                    <button className="small-action">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PageWrapper>
    );
  };

  const renderNotifications = () => {
    return (
      <PageWrapper
        title="Notifications"
        subtitle="Stay updated with your academic activities"
      >
        <div className="notification-page-list">
          {notifications.map((notification, index) => (
            <div className="notification-page-item" key={index}>
              <div className="notification-big-icon">
                🔔
              </div>

              <div>
                <strong>{notification}</strong>
                <p>Today • 10:{20 + index} AM</p>
              </div>

              <span className="unread-dot"></span>
            </div>
          ))}
        </div>
      </PageWrapper>
    );
  };

  const renderProfile = () => {
    return (
      <PageWrapper
        title="My Profile"
        subtitle="View and manage your faculty profile"
      >
        <div className="profile-page">
          <div className="profile-header">
            <div className="large-profile-avatar">
              PS
            </div>

            <div>
              <h2>{faculty.name}</h2>
              <p>{faculty.designation}</p>
              <span>{faculty.department}</span>
            </div>

            <button className="primary-button">
              Edit Profile
            </button>
          </div>

          <div className="profile-information">
            <div>
              <label>Faculty ID</label>
              <strong>{faculty.facultyId}</strong>
            </div>

            <div>
              <label>Email</label>
              <strong>priya.sharma@college.edu</strong>
            </div>

            <div>
              <label>Department</label>
              <strong>{faculty.department}</strong>
            </div>

            <div>
              <label>Designation</label>
              <strong>{faculty.designation}</strong>
            </div>

            <div>
              <label>Subjects</label>
              <strong>DBMS, Data Structures</strong>
            </div>

            <div>
              <label>Sections</label>
              <strong>CSE-A, CSE-B</strong>
            </div>
          </div>
        </div>
      </PageWrapper>
    );
  };

  const renderPage = () => {
    switch (activePage) {
      case "students":
        return renderStudents();

      case "attendance":
        return renderAttendance();

      case "notes":
        return renderNotes();

      case "assignments":
        return renderAssignments();

      case "announcements":
        return renderAnnouncements();

      case "outpass":
        return renderOutpass();

      case "timetable":
        return renderTimetable();

      case "performance":
        return renderPerformance();

      case "notifications":
        return renderNotifications();

      case "profile":
        return renderProfile();

      default:
        return renderDashboard();
    }
  };

  return (
    <div className="faculty-dashboard">

      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <aside
        className={`faculty-sidebar ${
          sidebarOpen ? "sidebar-open" : ""
        }`}
      >
        <div className="faculty-logo">
          <div className="logo-symbol">🎓</div>

          <div>
            <h2>EduLentra</h2>
            <span>Faculty Portal</span>
          </div>
        </div>

        <div className="faculty-profile-mini">
          <div className="mini-profile-avatar">
            PS
          </div>

          <div>
            <strong>{faculty.name}</strong>
            <span>{faculty.facultyId}</span>
          </div>
        </div>

        <nav className="faculty-navigation">
          <p className="navigation-title">
            MAIN MENU
          </p>

          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`faculty-nav-item ${
                activePage === item.id ? "active" : ""
              }`}
              onClick={() => handleMenuClick(item.id)}
            >
              <span className="nav-icon">
                {item.icon}
              </span>

              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="faculty-sidebar-bottom">
          <div className="faculty-help">
            <span>💡</span>
            <div>
              <strong>Need Help?</strong>
              <p>Contact Admin</p>
            </div>
          </div>

          <button className="logout-button">
            🚪 Logout
          </button>
        </div>
      </aside>

      <main className="faculty-main">

        <header className="faculty-topbar">
          <button
            className="mobile-menu-button"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>

          <div className="topbar-title">
            <span>Faculty Workspace</span>
          </div>

          <div className="topbar-actions">
            <button
              className="notification-button"
              onClick={() => handleMenuClick("notifications")}
            >
              🔔
              <span>4</span>
            </button>

            <div className="topbar-profile">
              <div className="topbar-avatar">
                PS
              </div>

              <div>
                <strong>{faculty.name}</strong>
                <span>Faculty</span>
              </div>
            </div>
          </div>
        </header>

        <div className="faculty-page-content">
          {renderPage()}
        </div>

      </main>
    </div>
  );
}

function PageWrapper({ title, subtitle, children }) {
  return (
    <>
      <div className="page-heading">
        <div>
          <span>FACULTY PORTAL</span>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>

      {children}
    </>
  );
}

function MaterialCard({ title, subject, type }) {
  return (
    <div className="material-card">
      <div className="material-icon">📄</div>

      <div>
        <h3>{title}</h3>
        <p>{subject}</p>

        <span className="file-type">
          {type}
        </span>
      </div>

      <button className="small-action">
        Manage
      </button>
    </div>
  );
}

export default FacultyDashboard;