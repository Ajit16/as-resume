import Image from 'next/image';
import AjnaImg from '@/assets/projects/ajna.jpg';
import DSRProject from '@/assets/projects/dsr.jpg';
import FProject from '@/assets/projects/1851.png';

const PortfolioList = [
  {
    name: 'Premier Talent Partners (AJNA)',
    detail:
      'Developed a web application to streamline staff recruitment services, enhancing the efficiency of the hiring process. This involved designing a user-friendly interface, integrating robust search and filtering functionalities, and implementing features for job postings, candidate tracking, and application management, ultimately improving the overall recruitment workflow for users.',
    url: ['https://www.premiertalentpartners.com/'],
    subUrl: [
      {
        url: 'https://premierlogin.ajnainside.com/',
        subtitle: '(Landing page)'
      },
      {
        url: 'https://premiercandidate.ajnainside.com',
        subtitle: '(candidate portal)'
      },
      {
        url: 'https://premierclient.ajnainside.com',
        subtitle: '(client portal)'
      },
      { url: 'https://premieradmin.ajnainside.com', subtitle: '(admin portal)' }
    ],
    image: AjnaImg,
    video: '',
    technologies: [
      'React',
      'Typescript',
      'Saas',
      'Redux',
      'Node',
      'MongoDB',
      'AWS',
      'Big Calender'
    ]
  },
  {
    name: 'Daily Status Reports',
    detail:
      'Developed a web application to efficiently track and record employee daily status data. The application features an intuitive interface for employees to update their status, and includes backend functionality for data storage, reporting, and analysis. This system streamlined daily reporting processes, improved data accuracy, and facilitated better management oversight.',
    url: ['dsr.closeloop.com'],
    subUrl: [
      {
        url: 'dsr.closeloop.dev',
        subtitle: '(Dev Server link)'
      }
    ],
    image: DSRProject,
    video: '',
    technologies: [
      'React',
      'Vite',
      'Typescript',
      'Saas',
      'Node',
      'MongoDB',
      'AWS'
    ]
  },
  {
    name: '1851 Franchise',
    detail:
      'Developed a comprehensive web platform for 1851 Franchise to support franchise development and consulting services. The platform features tools for franchise marketing, operational guidance, and strategic planning, aimed at helping businesses expand through franchising. It includes user-friendly interfaces for both franchisors and potential franchisees, facilitating the management of franchise systems and the discovery of new business opportunities. The project streamlined the process of launching and managing franchises, enhancing overall efficiency and effectiveness for users.',
    url: ['https://1851franchise.com/', 'https://1851dev.com'],
    subUrl: [
      {
        url: 'https://admin.1851dev.com/site/login',
        subtitle: 'Admin portal'
      },
      {
        url: 'https://1851dev.com/growth-club',
        subtitle: '(sub domain)'
      }
    ],
    image: FProject,
    video: '',
    technologies: [
      'React',
      'Nextjs',
      'Typescript',
      'Saas',
      'Figma Design',
      'MaterialUI',
      'Tailwind'
    ]
  }
];

export default function Portfolio() {
  return (
    <>
      <h2 className="text-xl uppercase font-bold px-4">Portfolio</h2>
      <hr className="my-4" />
      <ul>
        {PortfolioList.map((item, index) => (
          <li key={index} className="px-4 mb-4">
            <h4 className="text-slate-700 font-bold text-lg">{item.name}</h4>
            <p>{item.detail}</p>
            {item.url && (
              <p>
                <strong className="text-slate-700 text-sm">URL: </strong>{' '}
                {item.url.map((link, i) => (
                  <a href={link} key={i} target="_blank">
                    {link} {item.url.length !== i + 1 && <>, </>}
                  </a>
                ))}
              </p>
            )}
            {item.subUrl && (
              <p>
                <strong className="text-slate-700 text-sm">SUBURL: </strong>{' '}
                {item.subUrl.map((link, i) => (
                  <>
                    <a href={link.url} key={i} target="_blank">
                      {link.url}
                    </a>
                    {link.subtitle && <small> {link.subtitle}</small>}
                    {item.subUrl.length !== i + 1 && <>, </>}
                  </>
                ))}
              </p>
            )}
            <p className="text-sm">
              <strong className="text-slate-700 uppercase">
                Technologies:{' '}
              </strong>{' '}
              {/* {item.technologies.toString()} etc. */}
              {item.technologies.map((name) => (
                <span
                  key={name}
                  className="bg-gray-700 text-gray-100 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-full me-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500 "
                >
                  {name}
                </span>
              ))}
            </p>
            {item.image && (
              <Image
                src={item.image}
                width={1024}
                height={670}
                alt="project image"
                className="mt-4"
              />
            )}
            {item.video && (
              <video width="320" height="240" controls preload="none">
                <source src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
