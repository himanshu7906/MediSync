import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="px-6 md:px-10">
      <div className="grid md:grid-cols-[3fr_1fr_1fr] gap-12 my-10 mt-24 text-sm items-start">
        {/* Left Section */}
        <div className="flex flex-col items-start gap-6">
          <div className='flex items-center gap-2 cursor-pointer group'>
            <div className='w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-premium transform group-hover:rotate-12 transition-all duration-300'>
              <span className='text-white font-bold text-xl'>M</span>
            </div>
            <span className='text-2xl font-bold tracking-tight text-gray-800'>
              Medi<span className='text-primary'>Sync</span>
            </span>
          </div>
          <p className="text-gray-500 leading-relaxed md:max-w-[85%]">
            <strong className="text-gray-800 font-bold tracking-wide">MediSync – Effortless Healthcare Scheduling</strong> <br />
            Patients can instantly book appointments with trusted doctors—from routine check-ups to specialist care—in just a few clicks. Designed for modern healthcare, we save time for both patients and providers.
          </p>
        </div>


        {/* Middle Section */}
        <div>
          <p className="text-lg font-semibold mb-4">COMPANY</p>
          <ul className="flex flex-col gap-3 text-gray-500 font-medium">
            <li className="hover:text-primary cursor-pointer transition-colors">Home</li>
            <li className="hover:text-primary cursor-pointer transition-colors">About Us</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Contact Us</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <p className="text-lg font-semibold mb-4">GET IN TOUCH</p>
          <ul className="flex flex-col gap-3 text-gray-500 font-medium">
            <li className="hover:text-primary cursor-pointer transition-colors">+91-90000-90000</li>
            <li className="hover:text-primary cursor-pointer transition-colors">support@medisync.io</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <hr className="border-gray-100" />
      <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-medium">
        <p>© 2025 MediSync.io — All Rights Reserved.</p>
        <div className="flex gap-6 uppercase tracking-widest text-[10px]">
          <span className="cursor-pointer hover:text-primary transition-colors">Terms</span>
          <span className="cursor-pointer hover:text-primary transition-colors">Cookies</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
