import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import Button from './UI/Button'

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  return (
    <div className='flex items-center justify-between text-sm py-5 mb-8 border-b border-slate-100 bg-white/80 backdrop-blur-xl sticky top-0 z-50'>
      {/* Text Logo */}
      <div 
        onClick={() => { navigate('/'); scrollTo(0, 0) }} 
        className='flex items-center gap-3 cursor-pointer group'
      >
        <div className='w-11 h-11 bg-primary rounded-2xl flex items-center justify-center shadow-premium transform group-hover:rotate-6 transition-all duration-500 border border-slate-800/10'>
          <span className='text-white font-bold text-2xl'>M</span>
        </div>
        <span className='text-2xl font-black tracking-tighter text-slate-900'>
          Medi<span className='text-accent'>Sync</span>
        </span>
      </div>

      <ul className='hidden md:flex items-center gap-10 font-bold text-slate-500'>
        <NavLink to='/' className={({isActive}) => isActive ? 'text-accent' : 'hover:text-accent transition-colors'}>
          <li className='py-1 uppercase tracking-widest text-[11px]'>Home</li>
        </NavLink>
        <NavLink to='/doctors' className={({isActive}) => isActive ? 'text-accent' : 'hover:text-accent transition-colors'}>
          <li className='py-1 uppercase tracking-widest text-[11px]'>All Doctors</li>
        </NavLink>
        <NavLink to='/about' className={({isActive}) => isActive ? 'text-accent' : 'hover:text-accent transition-colors'}>
          <li className='py-1 uppercase tracking-widest text-[11px]'>About</li>
        </NavLink>
        <NavLink to='/contact' className={({isActive}) => isActive ? 'text-accent' : 'hover:text-accent transition-colors'}>
          <li className='py-1 uppercase tracking-widest text-[11px]'>Contact</li>
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>

        {token && userData ? (
          <div className='flex items-center gap-3 cursor-pointer group relative bg-slate-50 pl-2 pr-5 py-2 rounded-full hover:bg-slate-100 transition-all border border-slate-200 shadow-sm'>
            <img className='w-9 h-9 rounded-full border-2 border-white object-cover' src={userData.image || '/fallback-user.png'} alt="profile" />
            <div className='flex flex-col'>
              <p className='text-[11px] font-black text-slate-900 leading-none'>{userData.name.split(' ')[0]}</p>
              <p className='text-[10px] font-bold text-accent'>Profile</p>
            </div>
            <div className='absolute top-full right-0 pt-3 text-sm font-bold text-slate-600 z-20 hidden group-hover:block'>
              <div className='min-w-56 bg-white rounded-2xl shadow-premium border border-slate-100 flex flex-col overflow-hidden'>
                <p onClick={() => navigate('my-profile')} className='px-6 py-4 hover:bg-accent/5 hover:text-accent cursor-pointer transition-colors border-b border-slate-50'>Account Settings</p>
                <p onClick={() => navigate('my-appointments')} className='px-6 py-4 hover:bg-accent/5 hover:text-accent cursor-pointer transition-colors border-b border-slate-50'>Appointments History</p>
                <p onClick={logout} className='px-6 py-4 hover:bg-red-50 hover:text-red-600 cursor-pointer transition-colors'>Sign Out</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className='hidden md:block bg-primary text-white text-xs font-black px-8 py-3.5 rounded-full hover:bg-slate-800 hover:shadow-accent-glow transition-all active:scale-95 shadow-premium'
          >
            Sign In
          </button>
        )}

        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden cursor-pointer' src={assets.menu_icon} alt="" />

        {/* ---- Mobile Menu ---- */}
        <div className={`md:hidden ${showMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 z-50 overflow-hidden bg-white/95 backdrop-blur-xl transition-all duration-500`}>
          <div className='flex items-center justify-between px-6 py-8'>
             <span className='text-2xl font-black text-slate-900 font-sans'>MediSync</span>
            <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-8 cursor-pointer' alt="" />
          </div>
          <ul className='flex flex-col items-center gap-6 mt-10 px-6 text-xl font-black text-slate-900'>
            <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-8 py-3 rounded-2xl'>Home</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/doctors' ><p className='px-8 py-3 rounded-2xl'>All Doctors</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about' ><p className='px-8 py-3 rounded-2xl'>About Us</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact' ><p className='px-8 py-3 rounded-2xl'>Contact Support</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
