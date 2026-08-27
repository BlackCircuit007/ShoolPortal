import './StudentAttendance.css'

function StudentAttendance() {

    const attendance = [
        {
            subject: 'Mathematics',
            classes: 24,
            present: 23,
            absent: 1,
            percentage: '96%'
        },
        {
            subject: 'English Language',
            classes: 24,
            present: 22,
            absent: 2,
            percentage: '92%'
        },
        {
            subject: 'Basic Science',
            classes: 22,
            present: 21,
            absent: 1,
            percentage: '95%'
        },
        {
            subject: 'Computer Studies',
            classes: 20,
            present: 19,
            absent: 1,
            percentage: '95%'
        },
        {
            subject: 'Social Studies',
            classes: 21,
            present: 19,
            absent: 2,
            percentage: '90%'
        }
    ]

    return (
        <div className="student-page">

            <div className="page-heading">

                <span>ATTENDANCE</span>

                <h1>My Attendance</h1>

                <p>
                    Track your attendance throughout the academic term.
                </p>

            </div>


            {/* SUMMARY */}

            <section className="attendance-summary">

                <div className="attendance-summary-card">

                    <span>Overall Attendance</span>

                    <strong>94%</strong>

                    <small>
                        Current term
                    </small>

                </div>


                <div className="attendance-summary-card">

                    <span>Classes Attended</span>

                    <strong>104</strong>

                    <small>
                        This term
                    </small>

                </div>


                <div className="attendance-summary-card">

                    <span>Classes Missed</span>

                    <strong>7</strong>

                    <small>
                        This term
                    </small>

                </div>

            </section>


            {/* ATTENDANCE TABLE */}

            <section className="attendance-card">

                <div className="attendance-card-header">

                    <div>
                        <h2>Attendance by Subject</h2>

                        <p>
                            Your attendance record for each subject.
                        </p>
                    </div>

                </div>


                <div className="attendance-table-wrapper">

                    <table className="attendance-table">

                        <thead>

                            <tr>
                                <th>Subject</th>
                                <th>Classes</th>
                                <th>Present</th>
                                <th>Absent</th>
                                <th>Attendance</th>
                            </tr>

                        </thead>


                        <tbody>

                            {attendance.map((item, index) => (

                                <tr key={index}>

                                    <td>
                                        <strong>
                                            {item.subject}
                                        </strong>
                                    </td>

                                    <td>
                                        {item.classes}
                                    </td>

                                    <td>
                                        {item.present}
                                    </td>

                                    <td>
                                        {item.absent}
                                    </td>

                                    <td>
                                        <span className="attendance-percentage">
                                            {item.percentage}
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

export default StudentAttendance