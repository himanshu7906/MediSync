import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Header = () => {
    const container = useRef()

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        
        tl.from('.header-content h1', { y: 100, opacity: 0, duration: 1.2, delay: 0.2 })
          .from('.header-content p', { y: 50, opacity: 0, duration: 0.8 }, '-=0.8')
          .from('.header-content a', { scale: 0.8, opacity: 0, duration: 0.6 }, '-=0.4')
          .from('.header-right img', { x: 100, opacity: 0, duration: 1.5, ease: 'expo.out' }, '-=1.2')
          .from('.bg-dot', { scale: 0, opacity: 0, stagger: 0.2, duration: 1 }, '-=1')
    }, { scope: container })

    return (
        <div ref={container} className='flex flex-col md:flex-row flex-wrap bg-primary rounded-3xl px-6 md:px-10 lg:px-20 relative overflow-hidden shadow-premium min-h-[500px]'>
            {/* Background Decoration */}
            <div className='bg-dot absolute top-0 right-0 w-80 h-80 bg-accent/20 rounded-full -mr-40 -mt-40 blur-3xl'></div>
            <div className='bg-dot absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full -ml-40 -mb-40 blur-3xl'></div>
            
            {/* --------- Header Left --------- */}
            <div className='header-content md:w-1/2 flex flex-col items-start justify-center gap-6 py-10 m-auto md:py-[8vw] md:mb-[-30px] z-10'>
                <h1 className='text-4xl md:text-5xl lg:text-7xl text-white font-bold leading-tight'>
                    Book Appointment <br /> 
                    <span className='text-gradient'>With Trusted Doctors</span>
                </h1>
                <div className='flex flex-col md:flex-row items-center gap-4 text-slate-300 text-lg font-medium'>
                    <img className='w-28 filter brightness-110' src={assets.group_profiles} alt="" />
                    <p className='max-w-md'>Simply browse through our extensive list of trusted doctors, schedule your appointment <span className='text-white font-bold'>hassle-free</span>.</p>
                </div>
                <a href='#speciality' className='flex items-center gap-3 bg-white px-10 py-5 rounded-full text-primary font-bold text-base shadow-soft hover:shadow-accent-glow hover:-translate-y-1 transition-all duration-300 group'>
                    Book appointment 
                    <img className='w-4 group-hover:translate-x-1 transition-transform' src={assets.arrow_icon} alt="" />
                </a>
            </div>

            {/* --------- Header Right --------- */}
            <div className='header-right md:w-1/2 relative z-0 flex items-end justify-center pt-10 md:pt-0'>
                <div className='relative w-full max-w-lg'>
                    {/* Glass Circle behind doctor */}
                    <div className='absolute inset-0 bg-accent/10 rounded-full blur-2xl scale-110'></div>
                    <img className='w-full h-auto rounded-b-lg relative z-10 filter drop-shadow-2xl' src={assets.header_img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header