import Heading from '../constants/Heading';
import { IoIosMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { SectionWrapper } from './hoc';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/email/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: error.message
      });
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className='container px-4 md:px-0'>
      <div>
        <Heading className={`h1 text-color-title bg-blue-650 py-6 md:py-10`} title='Contact us' />
      </div>
      <div className='my-10 md:my-20 mx-auto max-w-[90%] flex flex-col md:flex-row items-start md:items-center content-center justify-between gap-10 md:gap-0'>
        <div className='w-full md:w-[48%] text-color-pcol'>
          <h3 className='text-color-tcol font-bold text-xl md:text-2xl flex items-center mb-4'>Send us a message.</h3>
          <p className='max-w-[450px] leading-snug mb-6'>Feel free to Contact us via email or find our details below. Your feedback and suggestions are vital as we work to ensure the success of this MUN conference.</p>
          <ul>
            <li className='flex items-center my-3 md:my-5 mx-0'><IoIosMail size={20} className="mr-2" /> Email</li>
            <li className='flex items-center my-3 md:my-5 mx-0'><IoLogoWhatsapp size={20} className="mr-2" /> WhatsApp</li>
            <li className='flex items-start my-3 md:my-5 mx-0'><FaLocationDot size={20} className="mr-2 mt-1" /> <span>Deerwalk Institute of technology <br />Siphal, Kathmandu</span></li>
          </ul>
        </div>
        <div className='w-full md:w-[48%] text-color-pcol'>
          <form onSubmit={handleSubmit} className=''>
            <label htmlFor="name" className="block mb-1">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder='Enter your Full name'
              required
              className='block w-full bg-color-form-col p-3 border-0 outline-none mb-4 mt-1 resize-none rounded'
            />
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter your email'
              required
              className='block w-full bg-color-form-col p-3 border-0 outline-none mb-4 mt-1 resize-none rounded'
            />
            <label htmlFor="subject" className="block mb-1">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder='Enter the subject'
              required
              className='block w-full bg-color-form-col p-3 border-0 outline-none mb-4 mt-1 resize-none rounded'
            />
            <label htmlFor="message" className="block mb-1">Your Message</label>
            <textarea
              name="message"
              id="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder='Enter your message'
              required
              className='block w-full bg-color-form-col p-3 border-0 outline-none mb-4 mt-1 resize-none rounded'
            ></textarea>
            {status.error && (
              <div className="text-red-500 mt-2">{status.error}</div>
            )}
            {status.submitted && (
              <div className="text-green-500 mt-2">Message sent successfully!</div>
            )}
            <button
              type="submit"
              disabled={status.submitting}
              className='bg-color-royal-blue px-6 py-3 text-color-white font-bold rounded-full border-none outline-none cursor-pointer hover:bg-blue-700 transition-colors duration-300'
            >
              {status.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Contact, "Contact");