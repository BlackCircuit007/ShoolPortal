import './TeacherAssignment.css'

function TeacherAssignments() {

    const assignments = [
        {
            title: 'Algebra Exercises',
            subject: 'Mathematics',
            className: 'JSS 2A',
            submissions: '27 / 31',
            due: 'Aug 28'
        },
        {
            title: 'Geometry Assignment',
            subject: 'Mathematics',
            className: 'JSS 3A',
            submissions: '24 / 29',
            due: 'Aug 29'
        },
        {
            title: 'Further Mathematics Test',
            subject: 'Further Mathematics',
            className: 'SS 1B',
            submissions: '19 / 27',
            due: 'Sep 1'
        }
    ]

    return (
        <div className="teacher-page">

            <div className="teacher-page-heading">

                <span>ACADEMICS</span>

                <h1>Assignments</h1>

                <p>
                    Create, manage and review class assignments.
                </p>

            </div>


            <section className="teacher-assignments-card">

                <div className="teacher-assignments-header">

                    <div>
                        <h2>Active Assignments</h2>

                        <p>
                            Assignments currently assigned to your students.
                        </p>
                    </div>

                    <button className="create-assignment-button">
                        Create Assignment
                    </button>

                </div>


                <div className="teacher-assignment-list">

                    {assignments.map((assignment, index) => (

                        <div
                            className="teacher-assignment-row"
                            key={index}
                        >

                            <div className="assignment-main">

                                <span>
                                    {assignment.subject}
                                </span>

                                <strong>
                                    {assignment.title}
                                </strong>

                                <small>
                                    {assignment.className}
                                </small>

                            </div>


                            <div className="assignment-submissions">

                                <span>
                                    {assignment.submissions}
                                </span>

                                <small>
                                    submissions
                                </small>

                            </div>


                            <div className="assignment-due">

                                <span>
                                    Due
                                </span>

                                <strong>
                                    {assignment.due}
                                </strong>

                            </div>

                        </div>

                    ))}

                </div>

            </section>

        </div>
    )
}

export default TeacherAssignments