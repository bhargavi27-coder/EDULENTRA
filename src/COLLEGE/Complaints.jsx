import React, { useState } from "react";

function Complaints() {

    const [complaint, setComplaint] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!complaint.trim()) {
            alert("Please enter your complaint.");
            return;
        }

        alert(
            "Complaint submitted successfully!\n\nBackend connection will be added later."
        );

        setComplaint("");
    };

    return (
        <div className="module-page">

            <div className="module-header">
                <h1>📝 Complaint Box</h1>
                <p>
                    Submit and track your complaints
                </p>
            </div>

            <div className="form-card">

                <h2>Submit a Complaint</h2>

                <form onSubmit={handleSubmit}>

                    <label>
                        Complaint
                    </label>

                    <textarea
                        value={complaint}
                        onChange={(e) =>
                            setComplaint(e.target.value)
                        }
                        placeholder="Enter your complaint here..."
                        rows="6"
                    ></textarea>

                    <button
                        type="submit"
                        className="module-button"
                    >
                        Submit Complaint
                    </button>

                </form>

            </div>


            <div className="status-card">

                <h2>Complaint Status</h2>

                <div className="status-item">

                    <div>
                        <h3>Sample Complaint</h3>
                        <p>
                            This is an example complaint.
                        </p>
                    </div>

                    <span className="status-pending">
                        Pending
                    </span>

                </div>

            </div>

        </div>
    );
}

export default Complaints;