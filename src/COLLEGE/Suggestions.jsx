import React, { useState } from "react";

function Suggestions() {

    const [suggestion, setSuggestion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!suggestion.trim()) {
            alert("Please enter your suggestion.");
            return;
        }

        alert(
            "Suggestion submitted successfully!\n\nBackend connection will be added later."
        );

        setSuggestion("");
    };

    return (
        <div className="module-page">

            <div className="module-header">
                <h1>💡 Suggestions</h1>
                <p>
                    Share your ideas and suggestions
                </p>
            </div>

            <div className="form-card">

                <h2>Submit Your Suggestion</h2>

                <form onSubmit={handleSubmit}>

                    <label>
                        Your Suggestion
                    </label>

                    <textarea
                        value={suggestion}
                        onChange={(e) =>
                            setSuggestion(e.target.value)
                        }
                        placeholder="Enter your suggestion..."
                        rows="7"
                    ></textarea>

                    <button
                        type="submit"
                        className="module-button"
                    >
                        Submit Suggestion
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Suggestions;