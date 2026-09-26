import React from "react";

function Placements() {

    const placements = [
        {
            id: 1,
            company: "ABC Technologies",
            role: "Software Developer",
            package: "6 LPA",
            eligibility: "B.Tech CSE",
            lastDate: "20 September"
        },
        {
            id: 2,
            company: "Tech Solutions",
            role: "Frontend Developer",
            package: "5 LPA",
            eligibility: "B.Tech CSE",
            lastDate: "25 September"
        },
        {
            id: 3,
            company: "Digital Systems",
            role: "Junior Software Engineer",
            package: "7 LPA",
            eligibility: "B.Tech CSE",
            lastDate: "30 September"
        }
    ];

    const applyPlacement = (company) => {
        alert(
            `You selected ${company}.\n\nPlacement application will be connected to the backend later.`
        );
    };

    return (
        <div className="module-page">

            <div className="module-header">
                <h1>💼 Placements</h1>
                <p>
                    Latest placement opportunities
                </p>
            </div>

            <div className="placement-grid">

                {placements.map((placement) => (

                    <div
                        className="placement-card"
                        key={placement.id}
                    >

                        <div className="company-icon">
                            💼
                        </div>

                        <h2>
                            {placement.company}
                        </h2>

                        <h3>
                            {placement.role}
                        </h3>

                        <div className="placement-details">

                            <p>
                                <strong>
                                    Package:
                                </strong>{" "}
                                {placement.package}
                            </p>

                            <p>
                                <strong>
                                    Eligibility:
                                </strong>{" "}
                                {placement.eligibility}
                            </p>

                            <p>
                                <strong>
                                    Last Date:
                                </strong>{" "}
                                {placement.lastDate}
                            </p>

                        </div>

                        <button
                            className="module-button"
                            onClick={() =>
                                applyPlacement(
                                    placement.company
                                )
                            }
                        >
                            Apply
                        </button>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Placements;