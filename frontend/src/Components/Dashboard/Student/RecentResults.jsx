import './RecentResults.css'

function RecentResults() {
    return (
        <section className="dashboard-section results-section">

            <div className="section-header">
                <div>
                    <h2>Recent Results</h2>
                    <p>Your latest academic performance</p>
                </div>

                <button className="view-all-btn">
                    View all
                </button>
            </div>

            <div className="results-list">

                <div className="result-item">
                    <div className="result-info">
                        <h3>Mathematics</h3>
                        <p>First Term Examination</p>
                    </div>

                    <div className="result-score">
                        <strong>82%</strong>
                    </div>
                </div>

                <div className="result-item">
                    <div className="result-info">
                        <h3>Physics</h3>
                        <p>Class Test</p>
                    </div>

                    <div className="result-score">
                        <strong>88%</strong>
                    </div>
                </div>

                <div className="result-item">
                    <div className="result-info">
                        <h3>English</h3>
                        <p>Assignment</p>
                    </div>

                    <div className="result-score">
                        <strong>76%</strong>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default RecentResults