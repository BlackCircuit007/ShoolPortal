import './AdminProfile.css'

function AdminProfile() {

    return (
        <div className="admin-page">

            <div className="admin-page-header">

                <div>
                    <span>ACCOUNT</span>

                    <h1>
                        Administrator Profile
                    </h1>

                    <p>
                        Manage your administrator account.
                    </p>
                </div>

            </div>


            <div className="admin-profile-card">

                <div className="admin-profile-avatar">
                    AD
                </div>


                <div className="admin-profile-info">

                    <h2>
                        School Administrator
                    </h2>

                    <p>
                        Administrator
                    </p>

                </div>


                <div className="admin-profile-details">

                    <div>
                        <span>Name</span>
                        <strong>School Administrator</strong>
                    </div>

                    <div>
                        <span>Email</span>
                        <strong>admin@school.edu</strong>
                    </div>

                    <div>
                        <span>Role</span>
                        <strong>Administrator</strong>
                    </div>

                </div>


                <button>
                    Edit Profile
                </button>

            </div>

        </div>
    )
}

export default AdminProfile