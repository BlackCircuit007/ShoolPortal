import './AdminResults.css'

function AdminResults() {

    return (
        <div className="admin-page">

            <div className="admin-page-header">

                <div>
                    <span>ACADEMICS</span>

                    <h1>
                        Results
                    </h1>

                    <p>
                        Monitor and manage academic results.
                    </p>
                </div>

            </div>


            <div className="results-management-grid">

                <div className="result-management-card">
                    <span>SUBMITTED</span>
                    <strong>28</strong>
                    <p>Classes with submitted results</p>
                </div>

                <div className="result-management-card">
                    <span>PENDING</span>
                    <strong>4</strong>
                    <p>Classes awaiting results</p>
                </div>

                <div className="result-management-card">
                    <span>APPROVED</span>
                    <strong>24</strong>
                    <p>Classes with approved results</p>
                </div>

            </div>


            <div className="admin-table-card">

                <div className="admin-table-wrapper">

                    <table>

                        <thead>
                            <tr>
                                <th>Class</th>
                                <th>Term</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr>
                                <td>JSS 2A</td>
                                <td>First Term</td>
                                <td>Submitted</td>
                                <td>
                                    <button className="table-action">
                                        Review
                                    </button>
                                </td>
                            </tr>

                            <tr>
                                <td>SS 1A</td>
                                <td>First Term</td>
                                <td>Pending</td>
                                <td>
                                    <button className="table-action">
                                        View
                                    </button>
                                </td>
                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    )
}

export default AdminResults