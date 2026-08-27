import './StudentAssignment.css'

function StudentAssignments() {

    const assignments = [
        {
            subject: 'Mathematics',
            title: 'Algebra Exercises',
            due: 'Tomorrow',
            status: 'Pending'
        },
        {
            subject: 'English Language',
            title: 'Essay Writing',
            due: 'Friday',
            status: 'Pending'
        },
        {
            subject: 'Basic Science',
            title: 'Science Project',
            due: 'Monday',
            status: 'Submitted'
        },
        {
            subject: 'Computer Studies',
            title: 'HTML Assignment',
            due: 'Next Week',
            status: 'Pending'
        }
    ]

    return (
        <div className="student-page">

            <div className="page-heading">

                <span>ACADEMICS</span>

                <h1>Assignments</h1>

                <p>
                    View and keep track of your assignments.
                </p>

            </div>


            <section className="assignment-card">

                {assignments.map((assignment, index) => (

                    <div
                        className="assignment-row"
                        key={index}
                    >

                        <div className="assignment-info">

                            <span>
                                {assignment.subject}
                            </span>

                            <strong>
                                {assignment.title}
                            </strong>

                        </div>


                        <div className="assignment-meta">

                            <span>
                                Due {assignment.due}
                            </span>

                            <small
                                className={
                                    assignment.status === 'Submitted'
                                        ? 'submitted'
                                        : 'pending'
                                }
                            >
                                {assignment.status}
                            </small>

                        </div>

                    </div>

                ))}

            </section>

        </div>
    )
}

export default StudentAssignments