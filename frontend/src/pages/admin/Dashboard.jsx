import React from 'react'
import AdminMenu from '../../components/AdminMenu'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'

const Dashboard = () => {
    return (
      <div className="flex min-h-screen">
      <Navbar />
        <div className="w-64 bg-gray-800 text-white p-4 mt-10">
          <AdminMenu />
        </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 mt-10">
        <Outlet />
      </div>
    </div>


    )
}

export default Dashboard
