'use client';

const WorkExperience = () => {
  const experiences = [
    {
      company: "Tech Solutions Ltd.",
      position: "Full Stack Developer",
      duration: "2023 - Present",
      tech: ["Next.js", "Laravel", "React", "MySQL"],
      description: [
        "Developed and maintained multiple web applications using Next.js and Laravel",
        "Implemented responsive designs and improved user experience",
        "Collaborated with cross-functional teams to deliver high-quality solutions",
        "Reduced application load time by 40% through optimization techniques"
      ]
    },
    {
      company: "Digital Innovations Inc.",
      position: "Frontend Developer",
      duration: "2021 - 2023",
      tech: ["React.js", "Redux", "TypeScript", "REST APIs"],
      description: [
        "Built responsive and interactive user interfaces using React.js",
        "Worked with REST APIs and state management solutions",
        "Participated in code reviews and mentored junior developers",
        "Implemented modern web development best practices"
      ]
    }
  ];

  return (
    <div className="relative mx-auto max-w-6xl px-4 pt-18 sm:pt-[60px]" id="experience">
      {/* heading */}
      <div className="relative space-y-4 text-center">
        <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
          <svg
            className="h-6 w-6 text-emerald-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>

        <p className="font-ovo text-xl text-emerald-600">Career Path</p>
        <h2 className="font-ovo text-4xl font-bold text-gray-800 sm:text-5xl">
          Professional Experience
        </h2>
        <div className="mx-auto h-1 w-24 bg-emerald-500" />
      </div>

      <div className="mt-16 grid gap-8">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="group relative rounded-xl bg-white p-6 shadow-lg transition-all duration-300 
                     hover:shadow-2xl hover:scale-[1.02] border border-gray-100 overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-100/20 to-transparent rounded-bl-full"></div>
            
            <div className="relative">
              {/* Company and Duration Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                <h3 className="font-ovo text-2xl font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">
                  {experience.company}
                </h3>
                <div className="flex items-center bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-full text-sm">
                  <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                  {experience.duration}
                </div>
              </div>

              {/* Position Tag */}
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium shadow-sm transform transition-transform group-hover:translate-y-[-2px]">
                  {experience.position}
                </span>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {experience.tech.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium
                             transition-all duration-300 hover:bg-emerald-50 hover:text-emerald-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description List */}
              <ul className="space-y-3">
                {experience.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 group/item">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 
                                 transform transition-transform group-hover/item:scale-125"></span>
                    <span className="text-gray-600 group-hover/item:text-gray-800 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;