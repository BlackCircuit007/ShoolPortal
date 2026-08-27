import './AdminTeachers.css'

function AdminTeachers() {

    const teachers = [
        {
            id: 'TCH001',
            name: 'Sarah Adams',
            subject: 'Mathematics',
            classes: 'JSS 2A, JSS 3A',
            status: 'Active'
        },
        {
            id: 'TCH002',
            name: 'David Johnson',
            subject: 'English',
            classes: 'JSS 1A, JSS 2B',
            status: 'Active'
        },
        {
            id: 'TCH003',
            name: 'Michael Brown',
            subject: 'Physics',
            classes: 'SS 2A, SS 3A',
            status: 'Active'
        }
    ]

    return (
        <div className="admin-page">

            <div className="admin-page-header">

                <div>
                    <span>ADMINISTRATION</span>

                    <h1>
                        Teachers
                    </h1>

                    <p>
                        Manage teachers and their assignments.
                    </p>
                </div>

                <button>
                    Add Teacher
                </button>

            </div>


            <div className="admin-table-card">

                <div className="admin-table-wrapper">

                    <table>

                        <thead>
                            <tr>
                                <th>Teacher ID</th>
                                <th>Name</th>
                                <th>Subject</th>
                                <th>Classes</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>

                            {teachers.map((teacher) => (

                                <tr key={teacher.id}>

                                    <td>{teacher.id}</td>

                                    <td>{teacher.name}</td>

                                    <td>{teacher.subject}</td>

                                    <td>{teacher.classes}</td>

                                    <td>
                                        <span className="status-active">
                                            {teacher.status}
                                        </span>
                                    </td>

                                    <td>
                                        <button className="table-action">
                                            View
                                        </button>
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    )
}

export default AdminTeachers