import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./StudentLogin.css";

import bookCover from "../assets/ChatGPT Image Sep 23, 2026, 12_49_11 PM.png";
import goldKey from "../assets/ChatGPT Image Sep 23, 2026, 12_50_12 PM.png";
import paper from "../assets/paper.png";


function StudentLogin() {

    /* =====================================================
       NAVIGATION
    ===================================================== */

    const navigate = useNavigate();


    /* =====================================================
       BOOK STATES
    ===================================================== */

    const [openBook, setOpenBook] = useState(false);

    const [rotateKey, setRotateKey] = useState(false);

    const [showSignup, setShowSignup] = useState(false);


    /* =====================================================
       LOGIN DATA
    ===================================================== */

    const [loginData, setLoginData] = useState({

        rollNumber: "",

        password: ""

    });


    /* =====================================================
       SIGNUP DATA
    ===================================================== */

    const emptySignupData = {

        name: "",

        rollNumber: "",

        email: "",

        department: "",

        section: "",

        studentType: "",

        password: "",

        confirmPassword: ""

    };


    const [signupData, setSignupData] =
        useState(emptySignupData);


    /* =====================================================
       OPEN BOOK
    ===================================================== */

    const unlockBook = () => {

        /*
         * Prevent clicking the key multiple times
         */

        if (openBook || rotateKey) {

            return;

        }


        /*
         * Start key rotation
         */

        setRotateKey(true);


        /*
         * After key animation,
         * open the book
         */

        setTimeout(() => {

            setOpenBook(true);

        }, 1000);

    };


    /* =====================================================
       LOGIN INPUT CHANGE
    ===================================================== */

    const handleLoginChange = (e) => {

        const { name, value } = e.target;


        setLoginData((previousData) => ({

            ...previousData,

            [name]: value

        }));

    };


    /* =====================================================
       SIGNUP INPUT CHANGE
    ===================================================== */

    const handleSignupChange = (e) => {

        const { name, value } = e.target;


        setSignupData((previousData) => ({

            ...previousData,

            [name]: value

        }));

    };


    /* =====================================================
       LOGIN
    ===================================================== */

    const handleLogin = (e) => {

        e.preventDefault();


        /*
         * Check empty fields
         */

        if (
            !loginData.rollNumber.trim() ||
            !loginData.password.trim()
        ) {

            alert(
                "Please enter Roll Number and Password."
            );

            return;

        }


        /*
         * Login will later be connected
         * to your backend.
         */

        alert("Login successful!");


        /*
         * Go to Student Dashboard
         */

        navigate("/student-dashboard");

    };


    /* =====================================================
       STUDENT SIGNUP
    ===================================================== */

    const handleSignup = (e) => {

        e.preventDefault();


        /* =================================================
           CHECK ALL FIELDS
        ================================================= */

        if (

            !signupData.name.trim() ||

            !signupData.rollNumber.trim() ||

            !signupData.email.trim() ||

            !signupData.department.trim() ||

            !signupData.section.trim() ||

            !signupData.studentType ||

            !signupData.password ||

            !signupData.confirmPassword

        ) {

            alert(
                "Please fill all the registration fields."
            );

            return;

        }


        /* =================================================
           PASSWORD CHECK
        ================================================= */

        if (
            signupData.password !==
            signupData.confirmPassword
        ) {

            alert(
                "Passwords do not match."
            );

            return;

        }


        /* =================================================
           REGISTRATION DETAILS
        ================================================= */

        const registrationDetails = {

            name:
                signupData.name.trim(),

            rollNumber:
                signupData.rollNumber.trim(),

            email:
                signupData.email.trim(),

            department:
                signupData.department.trim(),

            section:
                signupData.section.trim(),

            studentType:
                signupData.studentType,

            status:
                "Pending Approval",

            submittedAt:
                new Date().toISOString()

        };


        /* =================================================
           GET EXISTING REGISTRATIONS
        ================================================= */

        let pendingStudents = [];


        try {

            const existingData =
                localStorage.getItem(
                    "pendingStudentRegistrations"
                );


            if (existingData) {

                pendingStudents =
                    JSON.parse(existingData);

            }

        }

        catch (error) {

            console.error(
                "Unable to read pending registrations:",
                error
            );

            pendingStudents = [];

        }


        /* =================================================
           ADD NEW REGISTRATION
        ================================================= */

        pendingStudents.push(
            registrationDetails
        );


        /* =================================================
           SAVE REGISTRATION
        ================================================= */

        try {

            localStorage.setItem(

                "pendingStudentRegistrations",

                JSON.stringify(
                    pendingStudents
                )

            );

        }

        catch (error) {

            console.error(
                "Unable to save registration:",
                error
            );

        }


        /* =================================================
           SUCCESS MESSAGE
        ================================================= */

        alert(

            "Registration details sent successfully!\n\n" +

            "Your details have been submitted for approval.\n\n" +

            "Please wait for approval from your Class Teacher / Authority."

        );


        /* =================================================
           CLEAR SIGNUP DATA
        ================================================= */

        setSignupData(
            emptySignupData
        );


        /* =================================================
           CLEAR LOGIN DATA
        ================================================= */

        setLoginData({

            rollNumber: "",

            password: ""

        });


        /* =================================================
           RETURN TO LOGIN
        ================================================= */

        setShowSignup(false);

    };


    /* =====================================================
       OPEN SIGNUP
    ===================================================== */

    const openSignup = () => {

        setSignupData(
            emptySignupData
        );

        setShowSignup(true);

    };


    /* =====================================================
       OPEN LOGIN
    ===================================================== */

    const openLogin = () => {

        setSignupData(
            emptySignupData
        );

        setShowSignup(false);

    };


    /* =====================================================
       PAGE
    ===================================================== */

    return (

        <div className="student-login-page">


            {/* =================================================
               TITLE
            ================================================= */}

            <h1>
                EduLentra Student Portal
            </h1>


            {/* =================================================
               BOOK
            ================================================= */}

            <div
                className={
                    `student-book ${
                        openBook
                            ? "book-open"
                            : ""
                    }`
                }
            >


                {/* =================================================
                   INSIDE PAPER
                ================================================= */}

                <div
                    className="student-inside-page"

                    style={{
                        backgroundImage:
                            `url(${paper})`
                    }}
                >


                    {/* =================================================
                       STUDENT LOGIN
                    ================================================= */}

                    {!showSignup && (

                        <div
                            className="student-form"
                            key="login-form"
                        >

                            <h2>
                                Student Login
                            </h2>


                            <form
                                onSubmit={handleLogin}
                            >


                                {/* ROLL NUMBER */}

                                <input
                                    type="text"

                                    name="rollNumber"

                                    placeholder="Enter Roll Number"

                                    value={
                                        loginData.rollNumber
                                    }

                                    onChange={
                                        handleLoginChange
                                    }

                                    autoComplete="username"
                                />


                                {/* PASSWORD */}

                                <input
                                    type="password"

                                    name="password"

                                    placeholder="Enter Password"

                                    value={
                                        loginData.password
                                    }

                                    onChange={
                                        handleLoginChange
                                    }

                                    autoComplete="current-password"
                                />


                                {/* LOGIN */}

                                <button
                                    type="submit"
                                >
                                    Login
                                </button>


                            </form>


                            {/* ACCOUNT MESSAGE */}

                            <p className="student-account-text">

                                Don't have an account?

                            </p>


                            {/* SIGN UP */}

                            <button
                                type="button"

                                className="student-secondary-btn"

                                onClick={openSignup}
                            >
                                Sign Up
                            </button>


                        </div>

                    )}


                    {/* =================================================
                       STUDENT REGISTRATION
                    ================================================= */}

                    {showSignup && (

                        <div
                            className={
                                "student-form " +
                                "student-signup-form"
                            }

                            key="signup-form"
                        >

                            <h2>
                                Student Registration
                            </h2>


                            <form
                                onSubmit={handleSignup}
                            >


                                {/* NAME */}

                                <input
                                    type="text"

                                    name="name"

                                    placeholder="Full Name"

                                    value={
                                        signupData.name
                                    }

                                    onChange={
                                        handleSignupChange
                                    }

                                    autoComplete="name"
                                />


                                {/* ROLL NUMBER */}

                                <input
                                    type="text"

                                    name="rollNumber"

                                    placeholder="Roll Number"

                                    value={
                                        signupData.rollNumber
                                    }

                                    onChange={
                                        handleSignupChange
                                    }
                                />


                                {/* EMAIL */}

                                <input
                                    type="email"

                                    name="email"

                                    placeholder="Email ID"

                                    value={
                                        signupData.email
                                    }

                                    onChange={
                                        handleSignupChange
                                    }

                                    autoComplete="email"
                                />


                                {/* DEPARTMENT */}

                                <input
                                    type="text"

                                    name="department"

                                    placeholder="Department"

                                    value={
                                        signupData.department
                                    }

                                    onChange={
                                        handleSignupChange
                                    }
                                />


                                {/* SECTION */}

                                <input
                                    type="text"

                                    name="section"

                                    placeholder="Section"

                                    value={
                                        signupData.section
                                    }

                                    onChange={
                                        handleSignupChange
                                    }
                                />


                                {/* STUDENT TYPE */}

                                <select
                                    name="studentType"

                                    value={
                                        signupData.studentType
                                    }

                                    onChange={
                                        handleSignupChange
                                    }
                                >

                                    <option value="">
                                        Select Student Type
                                    </option>

                                    <option value="Day Scholar">
                                        Day Scholar
                                    </option>

                                    <option value="Hosteler">
                                        Hosteler
                                    </option>

                                </select>


                                {/* PASSWORD */}

                                <input
                                    type="password"

                                    name="password"

                                    placeholder="Create Password"

                                    value={
                                        signupData.password
                                    }

                                    onChange={
                                        handleSignupChange
                                    }

                                    autoComplete="new-password"
                                />


                                {/* CONFIRM PASSWORD */}

                                <input
                                    type="password"

                                    name="confirmPassword"

                                    placeholder="Confirm Password"

                                    value={
                                        signupData.confirmPassword
                                    }

                                    onChange={
                                        handleSignupChange
                                    }

                                    autoComplete="new-password"
                                />


                                {/* REGISTER */}

                                <button
                                    type="submit"
                                >
                                    Register
                                </button>


                            </form>


                            {/* ALREADY HAVE ACCOUNT */}

                            <p className="student-account-text">

                                Already have an account?

                            </p>


                            {/* BACK TO LOGIN */}

                            <button
                                type="button"

                                className="student-secondary-btn"

                                onClick={openLogin}
                            >
                                Login
                            </button>


                        </div>

                    )}

                </div>


                {/* =================================================
                   BOOK COVER
                ================================================= */}

                <div className="student-book-cover">


                    {/* BOOK COVER IMAGE */}

                    <img
                        src={bookCover}

                        alt="Student Book Cover"

                        className="student-cover-image"
                    />


                    {/* BOOK SPINE */}

                    <div
                        className="student-book-spine"
                    >
                    </div>


                    {/* =================================================
                       GOLDEN KEY
                    ================================================= */}

                    <img
                        src={goldKey}

                        alt="Golden Key"

                        className={
                            rotateKey
                                ? "student-key key-rotate"
                                : "student-key"
                        }

                        onClick={unlockBook}
                    />


                </div>


            </div>


            {/* =================================================
               INSTRUCTION
            ================================================= */}

            {!openBook && (

                <p className="student-instruction">

                    Click the key to Enter the Student Portal

                </p>

            )}


        </div>

    );

}


export default StudentLogin;