import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'
import { useNavigate, useLocation } from 'react-router-dom'
import Button from './UI/Button'

const Navbar = () => {
  const { dToken, setDToken } = useContext(DoctorContext)
  const { aToken, setAToken } = useContext(AdminContext)
  const navigate = useNavigate()
  const location = useLocation()

  const logout = () => {
    navigate('/')
    dToken && setDToken('')
    dToken && localStorage.removeItem('dToken')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
  }

  const goToUserPanel = () => {
    window.open('http://localhost:5173', '_blank')
  }

  const isOnDashboard =
    location.pathname === '/admin-dashboard' ||
    location.pathname === '/doctor-dashboard'

  return (
    <div className='flex justify-between items-center px-6 sm:px-10 py-4 border-b bg-white/80 backdrop-blur-md sticky top-0 z-10 shadow-sm'>
      <div className='flex items-center gap-4'>
        {/* Text Logo */}
        <div 
          onClick={() => navigate('/')} 
          className='flex items-center gap-2 cursor-pointer group'
        >
          <div className='w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-premium transform group-hover:rotate-12 transition-transform duration-300'>
            <span className='text-white font-bold text-xl'>M</span>
          </div>
          <span className='text-2xl font-bold tracking-tight text-gray-800 hidden sm:block'>
            Medi<span className='text-primary'>Sync</span>
          </span>
        </div>

        {/* Role Label */}
        <span className='px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold uppercase tracking-wider border border-gray-200'>
          {aToken ? 'Admin' : 'Doctor'}
        </span>

        {/* User Panel Button */}
        {isOnDashboard && (
          <Button
            onClick={goToUserPanel}
            variant="ghost"
            className='text-xs py-1.5'
          >
            User Panel
          </Button>
        )}
      </div>

      {/* Logout */}
      <Button
        onClick={logout}
        className='text-sm px-8'
      >
        Logout
      </Button>
    </div>
  )
}

export default Navbar
