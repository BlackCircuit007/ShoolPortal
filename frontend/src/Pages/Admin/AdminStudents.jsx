import { useState } from 'react'
import './AdminStudents.css'

function AdminStudents() {

    const [search, setSearch] = useState('')

    const students = [
        {
            id: 'STU001',
            name: 'John Doe',
            className: 'JSS 2A',
            status: 'Active'
        },
        {
            id: 'STU002',
            name: 'Mary James',
            className: 'JSS 2A',
            status: 'Active'
        },
        {
            id: 'STU003',
            name: 'David Smith',
            className: 'SS 1A',
            status: 'Active'
        },
        {
            id: 'STU004',
            name: 'Sarah Brown',
            className: 'SS 2B',
            status: 'Inactive'
        }
    ]

    const filteredStudents = students.filter((student) =>
        student.name
            .toLowerCase()
            .includes(search.toLowerCase()) ||
        student.id
            .toLowerCase()
            .includes(search.toLowerCase())
    )

    return (
        <div className="admin-page">

            <div className="admin-page-header">

                <div>
                    <span>ADMINISTRATION</span>

                    <h1>
                        Students
                    </h1>

                    <p>
                        Manage student accounts and records.
                    </p>
                </div>

                <button>
                    Add Student
                </button>

            </div>


            <div className="admin-table-card">

                <div className="admin-table-toolbar">

                    <input
                        type="text"
                        placeholder="Search students..."
                        value={search}
                        onChange={(event) =>
                            setSearch(event.target.value)
                        }
                    />

                </div>


                <div className="admin-table-wrapper">

                    <table>

                        <thead>

                            <tr>
                                <th>Student ID</th>
                                <th>Name</th>
                                <th>Class</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>

                        </thead>

                        <tbody>

                            {filteredStudents.map((student) => (

                                <tr key={student.id}>

                                    <td>{student.id}</td>

                                    <td>{student.name}</td>

                                    <td>{student.className}</td>

                                    <td>
                                        <span
                                            className={
                                                student.status === 'Active'
                                                    ? 'status-active'
                                                    : 'status-inactive'
                                            }
                                        >
                                            {student.status}
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

export default AdminStudents