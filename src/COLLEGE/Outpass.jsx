import React, { useState } from "react";

function Outpass() {

    const [formData, setFormData] = useState({
        reason: "",
        date: "",
        time: "",
        destination: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !formData.reason ||
            !formData.date ||
            !formData.time ||
            !formData.destination
        ) {
            alert("Please fill all the fields.");
            return;
        }

        alert(
            "Outpass request submitted successfully!\n\nApproval system will be connected to the backend later."
        );

        setFormData({
            reason: "",
            date: "",
            time: "",
            destination: ""
        });
    };

    return (
        <div className="module-page">

            <div className="module-header">
                <h1>🚪 Outpass Request</h1>
                <p>
                    Request permission to leave the campus
                </p>
            </div>

            <div className="form-card">

                <h2>Request Outpass</h2>

                <form onSubmit={handleSubmit}>

                    <label>Reason</label>

                    <textarea
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        placeholder="Enter reason for outpass"
                        rows="4"
                    ></textarea>


                    <label>Date</label>

                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                    />


                    <label>Time</label>

                    <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                    />


                    <label>Destination</label>

                    <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        placeholder="Enter destination"
                    />


                    <button
                        type="submit"
                        className="module-button"
                    >
                        Submit Request
                    </button>

                </form>

            </div>


            <div className="status-card">

                <h2>My Outpass Requests</h2>

                <div className="status-item">

                    <div>
                        <h3>Sample Outpass</h3>
                        <p>
                            Destination: Home
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

export default Outpass;