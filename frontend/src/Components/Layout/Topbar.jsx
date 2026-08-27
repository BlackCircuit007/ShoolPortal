import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Topbar.css'
import TeacherNotification from '../Notification/TeacherNotification'
import './Topbar.css'

function Topbar({
    setSidebarOpen,
    userName,
    userRole,
    userInitials
}) {

    const navigate = useNavigate()

    const [search, setSearch] = useState('')
    const [showResults, setShowResults] = useState(false)

    const studentPages = [
        {
            name: 'Dashboard',
            path: '/student'
        },
        {
            name: 'Assignments',
            path: '/student/assignments'
        },
        {
            name: 'Attendance',
            path: '/student/attendance'
        },
        {
            name: 'Results',
            path: '/student/results'
        },
        {
            name: 'Profile',
            path: '/student/profile'
        }
    ]

    const teacherPages = [
        {
            name: 'Dashboard',
            path: '/teacher'
        },
        {
            name: 'My Classes',
            path: '/teacher/classes'
        },
        {
            name: 'Students',
            path: '/teacher/students'
        },
        {
            name: 'Assignments',
            path: '/teacher/assignments'
        },
        {
            name: 'Attendance',
            path: '/teacher/attendance'
        },
        {
            name: 'Results',
            path: '/teacher/results'
        },
        {
            name: 'Profile',
            path: '/teacher/profile'
        }
    ]

    const pages =
        userRole === 'Student'
            ? studentPages
            : teacherPages

    const filteredPages = pages.filter(page =>
        page.name
            .toLowerCase()
            .includes(search.toLowerCase())
    )

    function handleSearchChange(event) {

        const value = event.target.value

        setSearch(value)

        setShowResults(value.length > 0)
    }

    function handleResultClick(path) {

        navigate(path)

        setSearch('')
        setShowResults(false)
    }

    return (
        <header className="topbar">

            <button
                className="menu-button"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open navigation"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>


            <div className="topbar-search">

                <input
                    type="text"
                    placeholder="Search anything..."
                    value={search}
                    onChange={handleSearchChange}
                    onFocus={() => {
                        if (search) {
                            setShowResults(true)
                        }
                    }}
                />


                {showResults && (

                    <div className="search-results">

                        {filteredPages.length > 0 ? (

                            filteredPages.map(page => (

                                <button
                                    key={page.path}
                                    className="search-result"
                                    onClick={() =>
                                        handleResultClick(page.path)
                                    }
                                >
                                    {page.name}
                                </button>

                            ))

                        ) : (

                            <div className="no-search-results">
                                No results found
                            </div>

                        )}

                    </div>

                )}

            </div>


            <div className="topbar-actions">

{userRole === 'Teacher' && (
    <TeacherNotification />
)}

{userRole === 'Student' && (
    <button className="notification-btn">
        Notifications
    </button>
)}


                <div className="user-profile">

                    <div className="user-avatar">
                        {userInitials}
                    </div>


                    <div className="user-info">

                        <span className="user-name">
                            {userName}
                        </span>

                        <span className="user-role">
                            {userRole}
                        </span>

                    </div>

                </div>

            </div>

        </header>
    )
}

export default Topbar