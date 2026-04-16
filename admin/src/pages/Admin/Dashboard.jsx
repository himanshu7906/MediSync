import React, { useContext, useEffect } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'
import Card, { DashboardStatCard } from '../../components/UI/Card'

const Dashboard = () => {

  const { aToken, getDashData, cancelAppointment, dashData } = useContext(AdminContext)
  const { slotDateFormat } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getDashData()
    }
  }, [aToken])

  return dashData && (
    <div className='m-5'>

      <div className='flex flex-wrap gap-4'>
        <DashboardStatCard 
          icon={assets.doctor_icon} 
          value={dashData.doctors} 
          label="Doctors" 
          color="primary"
        />
        <DashboardStatCard 
          icon={assets.appointments_icon} 
          value={dashData.appointments} 
          label="Appointments" 
          color="secondary"
        />
        <DashboardStatCard 
          icon={assets.patients_icon} 
          value={dashData.patients} 
          label="Patients" 
          color="accent"
        />
      </div>

      <Card className='mt-10 p-0 overflow-hidden' hover={false}>
        <div className='flex items-center gap-2.5 px-6 py-5 border-b bg-gray-50/50'>
          <img className="w-5" src={assets.list_icon} alt="" />
          <p className='font-bold text-gray-800 uppercase tracking-wider text-sm'>Latest Bookings</p>
        </div>

        <div className='divide-y divide-gray-100'>
          {dashData.latestAppointments.slice(0, 5).map((item, index) => (
            <div className='flex items-center px-6 py-4 gap-4 hover:bg-gray-50/80 transition-colors' key={index}>
              <div className="relative">
                <img className='rounded-full w-12 h-12 object-cover border-2 border-white shadow-sm' src={item.docData.image} alt="" />
                <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${item.cancelled ? 'bg-red-400' : item.isCompleted ? 'bg-green-500' : 'bg-blue-400'}`}></div>
              </div>
              <div className='flex-1'>
                <p className='text-gray-900 font-bold'>{item.docData.name}</p>
                <p className='text-gray-500 text-sm'>Booking on <span className="font-medium text-gray-700">{slotDateFormat(item.slotDate)}</span></p>
              </div>
              <div>
                {item.cancelled ? (
                  <span className='px-3 py-1 rounded-full bg-red-50 text-red-500 text-xs font-bold uppercase tracking-tighter'>Cancelled</span>
                ) : item.isCompleted ? (
                  <span className='px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold uppercase tracking-tighter'>Completed</span>
                ) : (
                  <button 
                    onClick={() => cancelAppointment(item._id)} 
                    className='p-2 hover:bg-red-50 rounded-full transition-colors group'
                  >
                    <img className='w-6 opacity-60 group-hover:opacity-100' src={assets.cancel_icon} alt="Cancel" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>

    </div>
  )
}

export default Dashboard