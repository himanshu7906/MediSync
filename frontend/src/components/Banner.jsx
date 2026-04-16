import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Banner = () => {
    const navigate = useNavigate()
    const container = useRef()

    useGSAP(() => {
        gsap.from('.banner-content', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 80%',
            },
            x: -100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        })
        
        gsap.from('.banner-image', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 80%',
            },
            x: 100,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out'
        })
    }, { scope: container })

    return (
        <div ref={container} className='flex bg-primary rounded-3xl px-6 sm:px-10 md:px-14 lg:px-20 my-28 md:mx-10 relative overflow-hidden shadow-premium min-h-[400px]'>
            {/* Decoration */}
            <div className='absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full -ml-32 -mt-32 blur-3xl'></div>
            <div className='absolute bottom-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full -mr-32 -mb-32 blur-3xl'></div>

            {/* ------- Left Side ------- */}
            <div className='banner-content flex-1 py-12 sm:py-16 md:py-24 lg:py-32 z-10'>
                <div className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight'>
                    <p>Experience Healthcare</p>
                    <p className='mt-2'>
                        <span className='text-gradient'>At Your Fingertips</span>
                    </p>
                </div>
                <p className='text-slate-400 mt-6 text-lg max-w-md hidden sm:block'>
                    Join thousands of satisfied patients who have found their perfect doctor through our platform.
                </p>
                <button 
                    onClick={() => { navigate('/login'); scrollTo(0, 0) }} 
                    className='bg-white text-primary font-extrabold px-12 py-5 rounded-full mt-10 shadow-soft hover:shadow-accent-glow hover:-translate-y-1 transition-all duration-300 active:scale-95'
                >
                    Get Started Now
                </button>
            </div>

            {/* ------- Right Side ------- */}
            <div className='banner-image hidden md:flex md:w-1/2 items-end justify-end relative z-0'>
                <img className='w-full max-w-lg filter drop-shadow-2xl translate-y-10' src={assets.appointment_img} alt="Appointment" />
            </div>
        </div>
    )
}

export default Banner