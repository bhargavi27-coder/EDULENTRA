import React from "react";

function Announcements() {

    const announcements = [
        {
            id: 1,
            title: "Internal Examinations",
            message:
                "Internal examinations will begin from Monday. Students are requested to prepare accordingly.",
            postedBy: "HOD",
            date: "Recently Posted"
        },
        {
            id: 2,
            title: "Assignment Submission",
            message:
                "Students are requested to submit their pending assignments before the deadline.",
            postedBy: "Faculty",
            date: "Recently Posted"
        },
        {
            id: 3,
            title: "College Event",
            message:
                "The upcoming college event will be conducted in the main auditorium.",
            postedBy: "Admin",
            date: "Recently Posted"
        }
    ];

    return (
        <div className="module-page">

            <div className="module-header">
                <h1>📢 Announcements</h1>
                <p>
                    Latest announcements and important updates
                </p>
            </div>

            <div className="announcement-list">

                {announcements.map((announcement) => (

                    <div
                        className="announcement-card"
                        key={announcement.id}
                    >

                        <div className="announcement-icon">
                            📢
                        </div>

                        <div className="announcement-content">

                            <h2>
                                {announcement.title}
                            </h2>

                            <p>
                                {announcement.message}
                            </p>

                            <div className="announcement-meta">
                                <span>
                                    Posted by:{" "}
                                    {announcement.postedBy}
                                </span>

                                <span>
                                    {announcement.date}
                                </span>
                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Announcements;