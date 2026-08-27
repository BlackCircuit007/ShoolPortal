import './StudentResult.css'

function StudentResults() {

    const results = [
        {
            subject: 'Mathematics',
            ca: 18,
            exam: 68,
            total: 86,
            grade: 'A'
        },
        {
            subject: 'English Language',
            ca: 17,
            exam: 64,
            total: 81,
            grade: 'A'
        },
        {
            subject: 'Basic Science',
            ca: 16,
            exam: 63,
            total: 79,
            grade: 'B'
        },
        {
            subject: 'Computer Studies',
            ca: 19,
            exam: 65,
            total: 84,
            grade: 'A'
        },
        {
            subject: 'Social Studies',
            ca: 16,
            exam: 61,
            total: 77,
            grade: 'B'
        },
        {
            subject: 'Basic Technology',
            ca: 15,
            exam: 60,
            total: 75,
            grade: 'B'
        }
    ]

    return (
        <div className="student-page">

            <div className="page-heading">

                <span>ACADEMICS</span>

                <h1>My Results</h1>

                <p>
                    View your academic results and performance.
                </p>

            </div>


            {/* RESULT SUMMARY */}

            <section className="result-summary-grid">

                <div className="result-summary-card">

                    <span>Overall Average</span>

                    <strong>82%</strong>

                    <small>
                        Current term
                    </small>

                </div>


                <div className="result-summary-card">

                    <span>Class Position</span>

                    <strong>8th</strong>

                    <small>
                        Out of 42 students
                    </small>

                </div>


                <div className="result-summary-card">

                    <span>Subjects</span>

                    <strong>6</strong>

                    <small>
                        Results available
                    </small>

                </div>

            </section>


            {/* RESULTS */}

            <section className="results-card">

                <div className="results-card-header">

                    <div>

                        <span className="results-label">
                            2025 / 2026
                        </span>

                        <h2>
                            First Term Results
                        </h2>

                        <p>
                            Your performance for the current term.
                        </p>

                    </div>

                </div>


                <div className="results-table-wrapper">

                    <table className="results-table">

                        <thead>

                            <tr>
                                <th>Subject</th>
                                <th>CA</th>
                                <th>Exam</th>
                                <th>Total</th>
                                <th>Grade</th>
                            </tr>

                        </thead>


                        <tbody>

                            {results.map((result, index) => (

                                <tr key={index}>

                                    <td>
                                        <strong>
                                            {result.subject}
                                        </strong>
                                    </td>

                                    <td>
                                        {result.ca}
                                    </td>

                                    <td>
                                        {result.exam}
                                    </td>

                                    <td>
                                        <strong>
                                            {result.total}
                                        </strong>
                                    </td>

                                    <td>

                                        <span
                                            className={`grade grade-${result.grade}`}
                                        >
                                            {result.grade}
                                        </span>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </section>

        </div>
    )
}

export default StudentResults