import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const TopDoctors = () => {
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext)
  const container = useRef()

  useGSAP(() => {
    gsap.from('.doctor-card', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
      scale: 0.9,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(1.7)'
    })
  }, { scope: container })

  return (
    <div ref={container} className='flex flex-col items-center gap-6 my-24 text-slate-800 md:mx-10'>
      <h1 className='text-4xl font-bold'>Featured Specialists</h1>
      <p className='sm:w-1/2 text-center text-slate-500 text-lg'>Experience the highest quality care from our handpicked top-rated medical professionals.</p>
      
      <div className='w-full grid grid-cols-auto gap-8 pt-10 gap-y-10 px-3 sm:px-0'>
        {doctors.slice(0, 10).map((item, index) => (
          <div 
            onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} 
            className='doctor-card group border border-slate-100 rounded-3xl overflow-hidden cursor-pointer bg-white shadow-soft hover:shadow-premium hover:-translate-y-3 transition-all duration-500' 
            key={index}
          >
            <div className='relative overflow-hidden bg-slate-50'>
              <img className='w-full transition-transform duration-700 group-hover:scale-110 h-64 object-cover' src={item.image} alt="" />
              <div className='absolute top-4 left-4'>
                <div className={`glass-card flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold ${item.available ? 'text-green-600' : "text-slate-500"}`}>
                  <p className={`w-2 h-2 rounded-full animate-pulse ${item.available ? 'bg-green-500' : "bg-slate-400"}`}></p>
                  {item.available ? 'Available' : "Reserved"}
                </div>
              </div>
            </div>
            
            <div className='p-6'>
              <p className='text-slate-900 text-xl font-bold mb-1 group-hover:text-accent transition-colors'>{item.name}</p>
              <p className='text-slate-500 text-sm font-medium mb-4'>{item.speciality}</p>
              <div className='flex items-center justify-between mt-2 pt-4 border-t border-slate-50'>
                 <span className='text-xs font-bold text-slate-400 uppercase tracking-wider'>Exp: {item.experience}</span>
                 <button className='text-accent text-sm font-bold group-hover:underline'>Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button 
        onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} 
        className='mt-16 bg-primary text-white px-14 py-4 rounded-full font-bold shadow-premium hover:bg-slate-800 hover:shadow-accent-glow transition-all active:scale-95'
      >
        View All Doctors
      </button>
    </div>
  )
}

export default TopDoctors
