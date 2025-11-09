'use client';
import * as motion from "motion/react-client";

const WorkExperience = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className='py-24 bg-gradient-to-b from-gray-50 to-white' 
      id='experience'
    >
      <div className='container mx-auto px-4 max-w-6xl'>
        <div className='space-y-2 text-center mb-16'>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-ovo text-xl text-gray-600"
          >
            Career Path
          </motion.p>
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className='text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-800 bg-clip-text text-transparent'
          >
            Work Experience
          </motion.h2>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className='w-32 h-1.5 bg-gradient-to-r from-gray-800 to-gray-800 mx-auto rounded-full'
          ></motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className='grid grid-cols-1 lg:grid-cols-2 gap-10'
        >
          {/* First Experience */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className='group relative bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200'
          >
            <div className='absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-sky-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
            <div className='absolute top-[50%] left-0 h-10 w-full max-w-[500rem] rotate-45 bg-gradient-to-r from-sky-500 from-10% via-indigo-500/90 via-30% to-emerald-500 to-90% blur-[65px] sm:-rotate-[30deg]' />
            <div className='flex flex-col h-full'>
              <h3 className='text-3xl font-bold text-gray-800 mb-3 bg-gradient-to-r from-gray-800 to-gray-800 bg-clip-text text-transparent'>
                Software Developer (Remote)
              </h3>
              <div className='text-gray-950 font-bold text-lg mb-2'>Ensiner</div>
              <div className='text-gray-600 mb-6 flex items-center'>
                <svg className='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clipRule='evenodd'/>
                </svg>
                2024 - Present
              </div>
              <ul className='list-none text-gray-700 mb-6 space-y-3 flex-grow'>
                <li className='flex items-start'>
                  <svg className='w-5 h-5 mr-3 text-gray-950 mt-1 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'/>
                  </svg>
                  Led development of microservices architecture using Laravel and JavaScript
                </li>
                <li className='flex items-start'>
                  <svg className='w-5 h-5 mr-3 text-gray-950 mt-1 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'/>
                  </svg>
                  Implemented CI/CD pipelines reducing deployment time by 40%
                </li>
                <li className='flex items-start'>
                  <svg className='w-5 h-5 mr-3 text-gray-950 mt-1 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'/>
                  </svg>
                  Mentored junior developers and conducted code reviews
                </li>
              </ul>
              <div className='flex flex-wrap gap-2'>
                <span className='px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-800 text-white rounded-full text-sm font-semibold shadow-md'>PHP</span>
                <span className='px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-800 text-white rounded-full text-sm font-semibold shadow-md'>Laravel</span>
                <span className='px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-800 text-white rounded-full text-sm font-semibold shadow-md'>JavaScript</span>
                <span className='px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-800 text-white rounded-full text-sm font-semibold shadow-md'>jQuery</span>
                <span className='px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-800 text-white rounded-full text-sm font-semibold shadow-md'>Ajax</span>
                <span className='px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-800 text-white rounded-full text-sm font-semibold shadow-md'>CI/CD</span>
                <span className='px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-800 text-white rounded-full text-sm font-semibold shadow-md'>React</span>
                <span className='px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-800 text-white rounded-full text-sm font-semibold shadow-md'>MySQL</span>
                <span className='px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-800 text-white rounded-full text-sm font-semibold shadow-md'>PostgreSQL</span>
                <span className='px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-800 text-white rounded-full text-sm font-semibold shadow-md'>AWS</span>
              </div>
            </div>
          </motion.div>

          {/* Second Experience */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className='group relative bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200'
          >
            <div className='absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-sky-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
            <div className='absolute top-[50%] left-0 h-10 w-full max-w-[500rem] rotate-45 bg-gradient-to-r from-sky-500 from-10% via-indigo-500/90 via-30% to-emerald-500 to-90% blur-[65px] sm:-rotate-[30deg]' />
            <div className='flex flex-col h-full'>
              <h3 className='text-3xl font-bold text-gray-800 mb-3 bg-gradient-to-r from-indigo-950 to-purple-600 bg-clip-text text-transparent'>
                Laravel and JavaScript Developer
              </h3>
              <div className='text-gray-950 font-bold text-lg mb-2'>Zaman IT</div>
              <div className='text-gray-600 mb-6 flex items-center'>
                <svg className='w-5 h-5 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clipRule='evenodd'/>
                </svg>
                2021 - 2024
              </div>
              <ul className='list-none text-gray-700 mb-6 space-y-3 flex-grow'>
                <li className='flex items-start'>
                  <svg className='w-5 h-5 mr-3 text-gray-950 mt-1 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'/>
                  </svg>
                  Developed responsive web applications using PHP frameworks Laravel and JavaScript frameworks
                </li>
                <li className='flex items-start'>
                  <svg className='w-5 h-5 mr-3 text-gray-950 mt-1 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'/>
                  </svg>
                  Built RESTful APIs and GraphQL endpoints
                </li>
                <li className='flex items-start'>
                  <svg className='w-5 h-5 mr-3 text-gray-950 mt-1 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'/>
                  </svg>
                  Optimized database queries improving performance by 50%
                </li>
              </ul>
              <div className='flex flex-wrap gap-2'>
                <span className='px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-800 text-white rounded-full text-sm font-semibold shadow-md'>Laravel</span>
                <span className='px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-800 text-white rounded-full text-sm font-semibold shadow-md'>JavaScript</span>
                <span className='px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-800 text-white rounded-full text-sm font-semibold shadow-md'>React</span>
                <span className='px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-800 text-white rounded-full text-sm font-semibold shadow-md'>jQuery</span>
                <span className='px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-800 text-white rounded-full text-sm font-semibold shadow-md'>Next.js</span>
                <span className='px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-800 text-white rounded-full text-sm font-semibold shadow-md'>MySQL</span>
                <span className='px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-800 text-white rounded-full text-sm font-semibold shadow-md'>PostgreSQL</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WorkExperience;
