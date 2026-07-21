interface workDataProps {
  title: string;
  companyName: string;
  city: string;
  workingPeriod: string;
  details?: string;
  duties: string[];
}

const workData: workDataProps[] = [
  {
    title: "Frontend Lead (Freelance)",
    companyName: "Hocrox",
    city: "Remote",
    workingPeriod: "Dec 2025 - Present",
    details: "",
    duties: [
      "Designed and implemented a reusable component library using React, TypeScript, Redux, and Tailwind CSS, improving development consistency, reducing code duplication, and increasing maintainability by 35%",
      "Partnered with backend engineers to define API contracts, integrate RESTful services, and resolve integration issues, reducing API-related defects by 25% and improving release stability.",
      "Established frontend development standards through regular code reviews, technical mentoring, and best practices, improving code quality, onboarding, and team productivity.",
      "Coordinated Agile ceremonies including sprint planning, backlog refinement, daily stand-ups, and retrospectives using Jira and Microsoft Teams/Zoom, ensuring timely delivery and effective cross-functional communication.",
      "Collaborated with product managers, UI/UX designers, and QA engineers to translate business requirements into high-quality, user-centric frontend solutions.",
      "Took ownership of project planning, task prioritization, risk identification, and release coordination, consistently delivering features within sprint timelines.",
    ],
  },
  {
    title: "Frontend Team Lead (Contract Hybrid Work Environment)",
    companyName: "APIdots Pvt. Ltd",
    city: "Mohali",
    workingPeriod: "Oct 2024 - July 2025",
    details: "",
    duties: [
      "Led a cross-functional frontend team of 6 developers, delivering scalable React.js applications for SaaS-based API platforms.",
      "Architected and implemented reusable component libraries using React, Redux, TypeScript, and Tailwind CSS, improving code maintainability by 35%.",
      "Collaborated closely with the backend team on REST API integration, enhancing frontend-backend coordination and reducing API-related bugs by 25%.",
      "Conducted weekly code reviews and mentoring sessions, improving code quality and junior developer efficiency.",
      "Spearheaded performance optimization efforts, reducing average page load time.",
      "Utilized Team, Zoom, and Jira for daily standup, sprint planning, and collaboration.",
      "Took ownership of task prioritization and self-managed deadlines using Agile workflows.",
    ],
  },
  {
    title: "Sr. Software Engineer",
    companyName: "Closeloop Technologies Pvt. Ltd",
    city: "Mohali",
    workingPeriod: "Dec 2020 - Oct 2024",
    details: "",
    duties: [
      "Managed a team of frontend developers, ensuring timely and high-quality task completion.",
      "Designed and developed engaging, user-interactive web pages using ReactJS.",
      "Incorporated custom dynamic components to enhance functionality and user experience.",
      "Implemented the MVC design pattern for efficient application structuring.",
      "Utilized REST APIs to enable seamless communication between frontend and backend.",
      "Optimized application performance through AJAX for asynchronous data loading.",
      "Employed Webpack for effective bundling and asset management.",
      "Facilitated effective communication between frontend and backend teams to ensure cohesive development efforts.",
      "Conducted code reviews to maintain code quality, consistency, and adherence to best practices.",
    ],
  },
  {
    title: "Software Engineer",
    companyName: "Infostride Pvt. Ltd",
    city: "Mohali",
    workingPeriod: "May 2018 - Nov 2020",
    details: "",
    duties: [
      "Created engaging, user-interactive web pages using ReactJS.",
      "Oversaw project timelines, delegated tasks, and coordinated efforts to achieve project milestones.",
      "Designed and implemented custom dynamic components to enhance functionality and user experience",
      "Implemented the MVC design pattern for efficient application structuring.",
      "Integrated REST APIs to ensure smooth communication between frontend and backend systems.",
      "Leveraged AJAX for asynchronous data loading and improved application performance",
    ],
  },
  {
    title: "Front-end Developer",
    companyName: "Wegile Technologies Pvt. Ltd",
    city: "Mohali",
    workingPeriod: "Feb 2016 - Apr 2018",
    details: "",
    duties: [
      "Developed interactive and responsive web pages using ReactJS/Angular, ensuring a high-quality user experience.",
      "Designed and implemented custom dynamic components to enhance user interface functionality.",
      "Utilized the MVC design pattern to efficiently structure frontend applications.",
      "Integrated REST APIs to enable seamless data exchange between frontend and backend systems.",
      "Ensured web applications were compatible across different browsers and devices.",
      "Prioritized user experience in the design and development process to create intuitive and engaging interfaces.",
      "Implemented responsive design techniques to ensure web pages were accessible and functional on various screen sizes.",
      "Followed best practices for code quality, including writing clean, maintainable code and participating in code reviews.",
      "Troubleshot and resolved frontend issues, ensuring smooth functionality and performance of web applications.",
    ],
  },
  {
    title: "HTML Developer",
    companyName: "Miracle Studio",
    city: "IT Park Chandigarh",
    workingPeriod: "Jan 2015 - Jan 2016",
    details: "",
    duties: [
      "Created and structured web pages using HTML and CSS, ensuring clean and semantic code.",
      "Ensured web applications were compatible across different browsers and devices.",
      "Prioritized user experience in the design and development process to create intuitive and engaging interfaces.",
      "Optimized HTML and CSS for performance, including minimizing code, reducing load times, and ensuring fast rendering.",
      "Implemented responsive design techniques to ensure web pages were accessible and functional on various screen sizes.",
      "Followed best practices for code quality, including writing clean, maintainable code and participating in code reviews.",
      "Troubleshot and resolved frontend issues, ensuring smooth functionality and performance of web applications.",
    ],
  },
  // {
  //   title: "Web Designer",
  //   companyName: "Adiksu Technologies",
  //   city: "Zirakpur (Punjab)",
  //   workingPeriod: "Oct 2013 - Jan 2015",
  //   details: "",
  //   duties: [],
  // },
  // {
  //   title: "Web Designer",
  //   companyName: "Climb Solutions Info",
  //   city: "Zirakpur (Punjab)",
  //   workingPeriod: "Feb 2013 - Jul 2013",
  //   details: "",
  //   duties: [],
  // },
];

export default function EmploymentHistory() {
  return (
    <>
      <h2 className="text-xl uppercase font-bold px-4 pt-4">
        Employment History
      </h2>
      {/* <hr className="my-4" /> */}
      <div className="pl-6 pr-4 my-4">
        <ol className="relative text-gray-500 border-s-2 border-gray-200 dark:border-gray-700 dark:text-gray-400">
          {workData.map((item, index) => (
            <li key={index} className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-4 h-4 bg-gray-500 rounded-full -start-2 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900"></span>
              <div className="relative">
                <h3 className="font-lg font-bold leading-tight ">
                  {item.title} at {item.companyName}, {item.city}
                </h3>
                <p className="text-sm">{item.workingPeriod}</p>
                {item.details && <p className="text-sm">{item.details}</p>}
                <ul className="list-disc ps-4">
                  {item?.duties.map((duty, i) => (
                    <li key={i}>{duty}</li>
                  ))}
                </ul>
                {index === workData.length - 1 && (
                  <span
                    className={`bg-white w-4 h-full -left-8 absolute  top-4 `}
                  />
                )}
              </div>
            </li>
          ))}

          {/* <li className="ms-6">
            <span className="absolute flex items-center justify-center w-4 h-4 bg-gray-100 rounded-full -start-2 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"></span>
            <h3 className="font-medium leading-tight">Confirmation</h3>
            <p className="text-sm">Step details here</p>
          </li> */}
        </ol>
      </div>
    </>
  );
}
