import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import Card from '../../components/UI/Card'

const DoctorsList = () => {

  const { doctors , aToken , getAllDoctors, changeAvailability} = useContext(AdminContext)

  useEffect(() => {
    if (aToken) {
        getAllDoctors()
    }
}, [aToken])

  return (
    <div className='m-6 max-h-[90vh] overflow-y-auto'>
      <h1 className='text-2xl font-bold text-gray-800 tracking-tight mb-6'>All Doctors</h1>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {doctors.map((item, index) => (
          <Card key={index} className='p-0 overflow-hidden group' hover={true}>
            <div className='relative overflow-hidden aspect-square'>
              <img className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' src={item.image} alt={item.name} />
              <div className='absolute top-3 right-3'>
                <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm ${item.available ? 'bg-green-500 text-white' : 'bg-gray-400 text-white'}`}>
                  {item.available ? 'Available' : 'Unavailable'}
                </div>
              </div>
            </div>
            <div className='p-5'>
              <p className='text-gray-900 text-xl font-bold'>{item.name}</p>
              <p className='text-primary text-sm font-semibold mb-4'>{item.speciality}</p>
              <div className='flex items-center justify-between pt-4 border-t border-gray-50'>
                <div className='flex items-center gap-2'>
                  <input 
                    onChange={() => changeAvailability(item._id)} 
                    type="checkbox" 
                    checked={item.available} 
                    id={`available-${index}`}
                    className='w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer'
                  />
                  <label htmlFor={`available-${index}`} className='text-sm text-gray-600 font-medium cursor-pointer'>Availability</label>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default DoctorsList