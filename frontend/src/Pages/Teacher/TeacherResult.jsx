import './TeacherResult.css'

function TeacherResults() {

    const classes = [
        {
            className: 'JSS 2A',
            subject: 'Mathematics',
            students: 31,
            entered: 31,
            status: 'Complete'
        },
        {
            className: 'JSS 3A',
            subject: 'Mathematics',
            students: 29,
            entered: 26,
            status: 'Pending'
        },
        {
            className: 'SS 1B',
            subject: 'Further Mathematics',
            students: 27,
            entered: 24,
            status: 'Pending'
        },
        {
            className: 'SS 2A',
            subject: 'Mathematics',
            students: 28,
            entered: 28,
            status: 'Complete'
        }
    ]

    return (
        <div className="teacher-page">

            <div className="teacher-page-heading">

                <span>ACADEMICS</span>

                <h1>Results</h1>

                <p>
                    Enter and manage student academic results.
                </p>

            </div>


            <section className="teacher-results-card">

                <div className="teacher-results-header">

                    <div>
                        <h2>Result Submission</h2>

                        <p>
                            Manage results for your assigned classes.
                        </p>
                    </div>

                </div>


                <div className="teacher-results-list">

                    {classes.map((item, index) => (

                        <div
                            className="teacher-result-row"
                            key={index}
                        >

                            <div className="result-class">

                                <strong>
                                    {item.subject}
                                </strong>

                                <span>
                                    {item.className}
                                </span>

                            </div>


                            <div className="result-progress">

                                <span>
                                    Results entered
                                </span>

                                <strong>
                                    {item.entered} / {item.students}
                                </strong>

                            </div>


                            <span
                                className={
                                    item.status === 'Complete'
                                        ? 'result-status complete'
                                        : 'result-status pending'
                                }
                            >
                                {item.status}
                            </span>


                            <button className="enter-result-button">
                                {item.status === 'Complete'
                                    ? 'View Results'
                                    : 'Enter Results'
                                }
                            </button>

                        </div>

                    ))}

                </div>

            </section>

        </div>
    )
}

export default TeacherResults