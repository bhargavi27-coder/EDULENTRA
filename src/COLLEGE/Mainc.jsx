import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Highlights from "./Highlights";
import Login from "./Login";
import Contact from "./Contact";

import Role from "./Role";
import StudentLogin from "./StudentLogin";
import StudentDashboard from "./StudentDashboard";

import Faculty from "./Faculty";
import FacultyDashboard from "./FacultyDashboard";
import FacultyProfile from "./FacultyProfile";

import Hod from "./Hod";
import Admin from "./Admin";


function LandingPage() {

    return (
        <>
            <Home />
            <About />
            <Highlights />
            <Login />
            <Contact />
        </>
    );

}


function Mainc() {

    return (

        <Router>

            <Routes>

                {/* LANDING PAGE */}
                <Route
                    path="/"
                    element={<LandingPage />}
                />

                {/* ROLE SELECTION */}
                <Route
                    path="/role"
                    element={<Role />}
                />

                {/* STUDENT */}
                <Route
                    path="/student"
                    element={<StudentLogin />}
                />

                <Route
                    path="/student-dashboard"
                    element={<StudentDashboard />}
                />

                {/* FACULTY */}
                <Route
                    path="/faculty"
                    element={<Faculty />}
                />

                <Route
                    path="/faculty/dashboard"
                    element={<FacultyDashboard />}
                />

                <Route
                    path="/faculty/profile"
                    element={<FacultyProfile />}
                />

                {/* HOD */}
                <Route
                    path="/hod"
                    element={<Hod />}
                />

                {/* ADMIN */}
                <Route
                    path="/admin"
                    element={<Admin />}
                />

            </Routes>

        </Router>

    );

}


export default Mainc;