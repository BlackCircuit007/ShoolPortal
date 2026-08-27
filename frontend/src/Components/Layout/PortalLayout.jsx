import { useState } from 'react'

import Sidebar from './Sidebar'
import Topbar from './Topbar'

import './PortalLayout.css'


function PortalLayout({
    children,
    userName,
    userRole,
    userInitials
}) {

    const [sidebarOpen, setSidebarOpen] = useState(false)


    return (

        <div className="portal-layout">

            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                userRole={userRole}
                // notification={notification}
            />


            <div className="portal-main">

                <Topbar
                    setSidebarOpen={setSidebarOpen}
                    userName={userName}
                    userRole={userRole}
                    userInitials={userInitials}
                />


                <main className="portal-content">
                    {children}
                </main>

            </div>

        </div>

    )
}

export default PortalLayout