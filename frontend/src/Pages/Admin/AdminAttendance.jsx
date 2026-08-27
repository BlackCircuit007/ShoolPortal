import './AdminAttendance.css'

function AdminAttendance() {

    return (
        <div className="admin-page">

            <div className="admin-page-header">

                <div>
                    <span>STUDENT MANAGEMENT</span>

                    <h1>
                        Attendance
                    </h1>

                    <p>
                        Monitor attendance across the school.
                    </p>
                </div>

            </div>


            <div className="attendance-management-grid">

                <div>
                    <span>Today's Attendance</span>
                    <strong>94%</strong>
                </div>

                <div>
                    <span>Present</span>
                    <strong>1,173</strong>
                </div>

                <div>
                    <span>Absent</span>
                    <strong>75</strong>
                </div>

            </div>


            <div className="admin-table-card">

                <div className="admin-table-wrapper">

                    <table>

                        <thead>
                            <tr>
                                <th>Class</th>
                                <th>Students</th>
                                <th>Present</th>
                                <th>Absent</th>
                                <th>Rate</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td>JSS 1A</td>
                                <td>38</td>
                                <td>36</td>
                                <td>2</td>
                                <td>95%</td>
                            </tr>

                            <tr>
                                <td>JSS 2A</td>
                                <td>42</td>
                                <td>40</td>
                                <td>2</td>
                                <td>95%</td>
                            </tr>

                            <tr>
                                <td>SS 1A</td>
                                <td>36</td>
                                <td>33</td>
                                <td>3</td>
                                <td>92%</td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    )
}

export default AdminAttendance