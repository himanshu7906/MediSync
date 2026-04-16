import React, { useRef } from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SpecialityMenu = () => {
    const container = useRef()

    useGSAP(() => {
        gsap.from('.speciality-item', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 80%',
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out'
        })
    }, { scope: container })

    return (
        <div ref={container} id='speciality' className='flex flex-col items-center gap-6 py-20 text-slate-800'>
            <h1 className='text-4xl font-bold'>Find by Speciality</h1>
            <p className='sm:w-1/2 text-center text-slate-500 text-lg'>
                Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' /> 
                schedule your appointment hassle-free.
            </p>
            <div className='flex sm:justify-center gap-8 pt-10 w-full overflow-x-auto pb-4 scrollbar-hide'>
                {specialityData.map((item, index) => (
                    <Link to={`/doctors/${item.speciality}`} onClick={() => scrollTo(0, 0)} className='speciality-item flex flex-col items-center text-sm font-semibold cursor-pointer flex-shrink-0 group' key={index}>
                        <div className='w-20 h-20 sm:w-28 sm:h-28 mb-4 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300 shadow-sm border border-slate-100 group-hover:border-accent/30 group-hover:-translate-y-2 group-hover:shadow-md'>
                            <img className='w-12 sm:w-16 transition-transform duration-500 group-hover:scale-110' src={item.image} alt="" />
                        </div>
                        <p className='group-hover:text-accent transition-colors'>{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SpecialityMenu