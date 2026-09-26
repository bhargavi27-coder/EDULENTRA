import React from "react";

function FacultyPDFs() {

    const pdfs = [
        {
            id: 1,
            title: "DBMS Unit 1 Notes",
            subject: "Database Management Systems",
            faculty: "Faculty",
            date: "Recently Uploaded"
        },
        {
            id: 2,
            title: "Operating Systems Notes",
            subject: "Operating Systems",
            faculty: "Faculty",
            date: "Recently Uploaded"
        },
        {
            id: 3,
            title: "Java Programming Materials",
            subject: "Java Programming",
            faculty: "Faculty",
            date: "Recently Uploaded"
        }
    ];

    const openPdf = (pdf) => {
        alert(
            `${pdf.title}\n\nPDF viewing will be connected to the backend later.`
        );
    };

    return (
        <div className="module-page">

            <div className="module-header">
                <h1>📚 Faculty PDFs</h1>
                <p>
                    Study materials and notes shared by faculty
                </p>
            </div>

            <div className="module-grid">

                {pdfs.map((pdf) => (

                    <div className="module-card" key={pdf.id}>

                        <div className="module-card-icon">
                            📄
                        </div>

                        <h3>{pdf.title}</h3>

                        <p>
                            <strong>Subject:</strong>{" "}
                            {pdf.subject}
                        </p>

                        <p>
                            <strong>Uploaded by:</strong>{" "}
                            {pdf.faculty}
                        </p>

                        <p className="module-date">
                            {pdf.date}
                        </p>

                        <button
                            className="module-button"
                            onClick={() => openPdf(pdf)}
                        >
                            View PDF
                        </button>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default FacultyPDFs;