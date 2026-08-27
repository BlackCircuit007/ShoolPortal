import './TeacherStudent.css'

function TeacherStudents() {

    const students = [
        ['STU-001', 'John Doe', 'JSS 2A', '88%'],
        ['STU-002', 'Mary James', 'JSS 2A', '91%'],
        ['STU-003', 'David Okafor', 'JSS 2A', '79%'],
        ['STU-004', 'Daniel Smith', 'JSS 2A', '84%'],
        ['STU-005', 'Grace Williams', 'JSS 2A', '93%'],
        ['STU-006', 'Peter Johnson', 'JSS 2A', '76%']
    ]

    return (
        <div className="teacher-page">

            <div className="teacher-page-heading">

                <span>STUDENTS</span>

                <h1>My Students</h1>

                <p>
                    View students across your assigned classes.
                </p>

            </div>


            <section className="students-card">

                <div className="students-card-header">

                    <div>
                        <h2>JSS 2A</h2>

                        <p>
                            31 students
                        </p>
                    </div>

                </div>


                <div className="students-table-wrapper">

                    <table className="students-table">

                        <thead>

                            <tr>
                                <th>Student ID</th>
                                <th>Name</th>
                                <th>Class</th>
                                <th>Average</th>
                            </tr>

                        </thead>


                        <tbody>

                            {students.map((student, index) => (

                                <tr key={index}>

                                    <td>
                                        {student[0]}
                                    </td>

                                    <td>
                                        <strong>
                                            {student[1]}
                                        </strong>
                                    </td>

                                    <td>
                                        {student[2]}
                                    </td>

                                    <td>
                                        <span className="student-average">
                                            {student[3]}
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

export default TeacherStudents