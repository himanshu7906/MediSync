import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { toast } from 'react-toastify'
import axios from 'axios'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'
import Button from '../../components/UI/Button'
import Card from '../../components/UI/Card'

const AddDoctor = () => {

  const [docImg, setDocImg] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [experience, setExperience] = useState('1 Year')
  const [fees, setFees] = useState('')
  const [about, setAbout] = useState('')
  const [speciality, setSpeciality] = useState('General physician')
  const [degree, setDegree] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')

  const { backendUrl } = useContext(AdminContext)
  const { aToken } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (!docImg) {
        return toast.error('Image Not Selected');
      }

      const formData = new FormData();

      formData.append('image', docImg);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('experience', experience);
      formData.append('fees', Number(fees));
      formData.append('about', about);
      formData.append('speciality', speciality);
      formData.append('degree', degree);
      formData.append('address', JSON.stringify({ line1: address1, line2: address2 }));

      // Debugging FormData (optional, can remove later)
      formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });

      const response = await axios.post(`${backendUrl}/api/admin/add-doctor`, formData, {
        headers: { aToken}  })
      const data= response.data;
      if (data.success) {
                toast.success(data.message)
                setDocImg(false)
                setName('')
                setPassword('')
                setEmail('')
                setAddress1('')
                setAddress2('')
                setDegree('')
                setAbout('')
                setFees('')
            } else {
                toast.error(data.message)
            }

    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
      console.error(error);
    }
  }


  return (
    <form onSubmit={onSubmitHandler} className='m-6 w-full max-w-5xl'>
      <div className='flex items-center justify-between mb-6'>
        <h1 className='text-2xl font-bold text-gray-800 tracking-tight'>Add New Doctor</h1>
      </div>

      <Card className='p-8' hover={false}>
        <div className='flex items-center gap-6 mb-10 pb-8 border-b border-gray-100'>
          <label htmlFor="doc-img">
            <img className='w-16 bg-gray-100 rounded-full cursor-pointer' src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} alt="" />
          </label>
          <input onChange={(e) => setDocImg(e.target.files[0])} type="file" name="" id="doc-img" hidden />
          <p>Upload doctor <br /> picture</p>
        </div>

        <div className='flex flex-col lg:flex-row items-start gap-12 text-gray-600'>

          <div className='w-full lg:flex-1 flex flex-col gap-5'>

            <div className='flex-1 flex flex-col gap-2'>
              <p className='font-semibold text-gray-700 text-sm'>Full Name</p>
              <input onChange={e =>填setName(e.target.value)} value={name} className='border border-gray-200 rounded-xl px-4 py-3 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all' type="text" placeholder='Name' required />
            </div>

            <div className='flex-1 flex flex-col gap-2'>
              <p className='font-semibold text-gray-700 text-sm'>Doctor Email</p>
              <input onChange={e => setEmail(e.target.value)} value={email} className='border border-gray-200 rounded-xl px-4 py-3 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all' type="email" placeholder='Email' required />
            </div>

            <div className='flex-1 flex flex-col gap-2'>
              <p className='font-semibold text-gray-700 text-sm'>Set Password</p>
              <input onChange={e => setPassword(e.target.value)} value={password} className='border border-gray-200 rounded-xl px-4 py-3 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all' type="password" placeholder='Password' required />
            </div>

            <div className='flex-1 flex flex-col gap-2'>
              <p className='font-semibold text-gray-700 text-sm'>Experience</p>
              <select onChange={e => setExperience(e.target.value)} value={experience} className='border border-gray-200 rounded-xl px-4 py-3 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all bg-white' >
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Years</option>
                <option value="3 Year">3 Years</option>
                <option value="4 Year">4 Years</option>
                <option value="5 Year">5 Years</option>
                <option value="6 Year">6 Years</option>
                <option value="8 Year">8 Years</option>
                <option value="9 Year">9 Years</option>
                <option value="10 Year">10+ Years</option>
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-2'>
              <p className='font-semibold text-gray-700 text-sm'>Consultation Fees</p>
              <input onChange={e => setFees(e.target.value)} value={fees} className='border border-gray-200 rounded-xl px-4 py-3 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all' type="number" placeholder='Doctor fees' required />
            </div>

          </div>

          <div className='w-full lg:flex-1 flex flex-col gap-5'>

            <div className='flex-1 flex flex-col gap-2'>
              <p className='font-semibold text-gray-700 text-sm'>Speciality</p>
              <select onChange={e => setSpeciality(e.target.value)} value={speciality} className='border border-gray-200 rounded-xl px-4 py-3 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all bg-white'>
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-2'>
              <p className='font-semibold text-gray-700 text-sm'>Education / Degree</p>
              <input onChange={e => setDegree(e.target.value)} value={degree} className='border border-gray-200 rounded-xl px-4 py-3 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all' type="text" placeholder='Degree' required />
            </div>

            <div className='flex-1 flex flex-col gap-2'>
              <p className='font-semibold text-gray-700 text-sm'>Address</p>
              <input onChange={e => setAddress1(e.target.value)} value={address1} className='border border-gray-200 rounded-xl px-4 py-3 mb-2 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all' type="text" placeholder='Address Line 1' required />
              <input onChange={e => setAddress2(e.target.value)} value={address2} className='border border-gray-200 rounded-xl px-4 py-3 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all' type="text" placeholder='Address Line 2' required />
            </div>

          </div>

        </div>

        <div className='mt-8'>
          <p className='font-semibold text-gray-700 text-sm mb-2'>Professional Summary / About</p>
          <textarea onChange={e => setAbout(e.target.value)} value={about} className='w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all' rows={5} placeholder='Write a brief professional overview...'></textarea>
        </div>

        <div className='mt-10 pt-6 border-t border-gray-100 flex justify-end'>
          <Button type='submit' className='w-full md:w-auto px-16'>Add Doctor Profile</Button>
        </div>
      </Card>


    </form>
  )
}

export default AddDoctor