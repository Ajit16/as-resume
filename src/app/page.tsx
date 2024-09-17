import EmploymentHistory from '@/components/employment-history';
import Chart from '@/components/highchart';
import LogoSlider from '@/components/logo-slider';
import Portfolio from '@/components/portfolio';
import Image from 'next/image';
import LinkedInIcon from '@/assets/linkedin.svg';
import GithubIcon from '@/assets/githubicon.svg';
import NPMIcon from '@/assets/npmicon.svg';
// import curveImg from '@/assets/curve.svg';
import AjitImg from '@/assets/ajit.jpg';
interface skillsProps {
  name: string;
  value: string;
}

const FESkills: skillsProps[] = [
  { name: 'HTML 5', value: '100%' },
  { name: 'CSS', value: '100%' },
  { name: 'Bootstrap', value: '100%' },
  { name: 'Tailwind', value: '100%' },
  { name: 'Javascript', value: '90%' },
  { name: 'Reactjs', value: '95%' },
  { name: 'Redux', value: '95%' },
  { name: 'Nextjs', value: '90%' },
  { name: 'Angular', value: '70%' },
  { name: 'Typescript', value: '90%' }
];
const BESkills: skillsProps[] = [{ name: 'Nodejs/MongoDB', value: '50%' }];

const Detail = {
  name: 'Ajit Singh',
  position: 'Sr. Software Engineer',
  content: [
    {
      title: 'email',
      MuIcon: 'email',
      icon: '',
      value: 'ajit.dhiman16@gmail.com',
      link: 'ajit.dhiman16@gmail.com',
      linkType: 'emailTo'
    },
    {
      title: 'phone',
      MuIcon: 'phone_iphone',
      icon: '',
      value: '+91 8872295804',
      link: '+91 8872295804',
      linkType: 'tel'
    },
    {
      title: 'phone',
      MuIcon: 'phone_iphone',
      icon: '',
      value: '+91 7009751937',
      link: '+91 7009751937',
      linkType: 'tel'
    },

    {
      title: 'Linkedin',
      MuIcon: '',
      icon: LinkedInIcon,
      value: 'https://www.linkedin.com/in/ajit-singh-panesar/',
      link: 'https://www.linkedin.com/in/ajit-singh-panesar/',
      linkType: ''
    },
    {
      title: 'Github',
      MuIcon: '',
      icon: GithubIcon,
      value: 'https://github.com/aspanesar',
      link: 'https://github.com/aspanesar',
      linkType: ''
    },
    {
      title: 'Github',
      MuIcon: '',
      icon: GithubIcon,
      value: 'https://github.com/Ajit16',
      link: 'https://github.com/Ajit16',
      linkType: ''
    },
    {
      title: 'NPM',
      MuIcon: '',
      icon: NPMIcon,
      value: 'https://www.npmjs.com/package/as-slider',
      link: 'https://www.npmjs.com/package/as-slider',
      linkType: ''
    },
    {
      title: 'Profile Link',
      MuIcon: 'link',
      icon: '',
      value: 'https://ajit16.github.io/',
      link: 'https://ajit16.github.io/',
      linkType: ''
    },
    {
      title: 'Download Resume',
      MuIcon: 'download',
      icon: '',
      value: 'Download my updated resume',
      link: '../media/Ajit-Singh-Resume.pdf',
      linkType: ''
    }
  ]
};

export default function Home() {
  // Generate the chart

  return (
    <div className="max-w-screen-lg m-auto">
      {/* Top Section  */}
      <div className="bg-[#616161] print:bg-[#616161] flex gap-4">
        <div className="w-56 min-w-56 h-56 overflow-hidden relative">
          <Image
            src={AjitImg}
            alt="Ajit Singh"
            width={300}
            height={300}
            className="w-full"
          />
          <span className="absolute top-0 -right-1">
            {/* <curveImg /> */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 529 535"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M476 164.5C524.373 125.701 528.5 29 492.999 0H528.5V534.5H0.5C87.7485 525.89 104.758 526.153 164 484C190 465.5 227 440 303.5 454.5C380 469 463 402.5 445 316C434.997 289.164 428.001 203 476 164.5Z"
                fill="#616161"
              />
            </svg>
          </span>
        </div>
        {/* Detail  */}
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="py-3 text-white">
            <h1 className="text-2xl uppercase text-white font-bold">
              {Detail.name}
            </h1>
            <h3 className="text-md uppercase font-bold mb-2">
              {Detail.position}
            </h3>

            <ul className="flex flex-col gap-2">
              {Detail.content.slice(0, 4).map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-5 flex justify-center text-white">
                    {item.MuIcon && (
                      <span className="material-symbols-outlined">
                        {item.MuIcon}
                      </span>
                    )}
                    {item.icon && (
                      <Image
                        src={item.icon}
                        width={16}
                        height={20}
                        alt="icon"
                      />
                    )}
                  </span>
                  <a
                    href={`${item.linkType ? item.linkType + ':' : ''}${
                      item.link
                    }`}
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="py-6 text-white">
            <ul className="flex flex-col gap-2">
              {Detail.content.slice(4).map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-5 flex justify-center">
                    {item.MuIcon && (
                      <span className="material-symbols-outlined">
                        {item.MuIcon}
                      </span>
                    )}
                    {item.icon && (
                      <Image
                        src={item.icon}
                        width={16}
                        height={20}
                        alt="icon"
                      />
                    )}
                  </span>

                  <a
                    href={`${item.linkType ? item.linkType + ':' : ''}${
                      item.link
                    }`}
                  >
                    {item.value}
                  </a>
                </li>
              ))}

              {/* <li className="flex items-center gap-2 relative">
                <span className="material-symbols-outlined">link</span>
                <span id="npm-install-copy-button">
                  https://ajit16.github.io/
                </span>
                <button
                  data-copy-to-clipboard-target="npm-install-copy-button"
                  data-tooltip-target="tooltip-copy-npm-install-copy-button"
                  className="absolute end-2 top-1/2 -translate-y-1/2 text-gray-200 dark:text-gray-400 hover:text-white dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center"
                >
                  <span id="default-icon">note icon</span>
                  <span
                    id="success-icon"
                    className="hidden inline-flex items-center"
                  >
                    check icon
                  </span>
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      </div>

      {/* Summary Section  */}
      <div className="py-4 border border-x-2 border-y-0">
        <h2 className="text-xl uppercase font-bold px-4">Summary Section</h2>
        <hr className="my-4" />
        <p className="px-4">
          IT Professional with 10+ Years of Expertise. I am an accomplished IT
          professional with over a decade of experience in web development and
          software engineering. My expertise spans a wide range of technologies,
          including HTML, CSS, JavaScript, SAAS/LESS, and modern frameworks such
          as React.js, Redux, Next.js and Angular. I am proficient in
          TypeScript, Tailwind CSS, and Bootstrap for creating responsive and
          visually appealing interfaces. Additionally, I have substantial
          experience with backend technologies, including Node.js (NoSQL) and
          Express.js, and am skilled in designing and implementing RESTful APIs.
        </p>
        <p className="px-4">
          I am known for my positive attitude, strong decision-making
          capabilities, and proven ability to excel both as an individual
          contributor and as a collaborative team member. I approach every
          project with professionalism, a proactive mindset, and a commitment to
          delivering high-quality results. As a fast learner and dedicated team
          player, I am eager to take on challenging and rewarding opportunities
          where I can leverage my technical skills and experience to drive
          success.
        </p>
      </div>

      {/* Total Experience with chart */}
      <div className="py-4 border border-x-2 border-y-0 w-full">
        <h2 className="text-xl uppercase font-bold px-4">
          My Total Experience
        </h2>
        <hr className="my-4" />
        <div className="px-4">
          <Chart />
        </div>
      </div>

      {/* Technologies logo */}
      <div className="py-6 px-4 border-2">
        <LogoSlider />
      </div>

      {/* Work Experience */}
      {/* Skills & Tools with bar , Education, Lang, interest */}
      <div className="w-full flex border border-x-2 border-y-0">
        <div className="w-full">
          <EmploymentHistory />
        </div>
        <div className="w-full max-w-72 ">
          <h2 className="text-xl uppercase font-bold px-4 pt-4">
            Skills & Tools
            {/* with bar */}
          </h2>
          {/* <hr className="my-4" /> */}
          <div className="p-4">
            <strong className="text-slate-700">Frontend</strong>
            <ul className="w-full mb-4">
              {FESkills.map((items) => (
                <li key={items.name}>
                  {items.name}
                  <div className="w-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 text-xs font-medium text-blue-100 text-center py-0.5 leading-none"
                      style={{ width: items.value }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
            <strong className=" text-slate-700">Backend</strong>
            <ul className="w-full mb-4">
              {BESkills.map((items) => (
                <li key={items.name}>
                  {items.name}
                  <div className="w-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 text-xs font-medium text-blue-100 text-center py-0.5 leading-none"
                      style={{ width: items.value }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
            <strong className=" text-slate-700">Other</strong>
            <p>Code Review, Git, Unit Testing, Ionic, Adobe Photoshop, Figma</p>
          </div>

          <h2 className="text-xl uppercase font-bold px-4">Education</h2>
          <div className="p-4">
            <strong className="text-slate-700">
              Bachelor of Computer Applications (BCA)
            </strong>
            <p>
              Mata Gujri Collage, Fatehgarh Sahib (Punjabi University) <br />{' '}
              <small>2009 - 2012</small>
            </p>
          </div>

          <h2 className="text-xl uppercase font-bold px-4">Lang</h2>
          <div className="p-4">
            <strong className="text-slate-700">English </strong>
            <small>(Professional)</small> <br />
            <strong className="text-slate-700">Hindi </strong>
            <small>(Professional)</small>
            <br />
            <strong className="text-slate-700">Punjabi </strong>
            <small>(Native)</small>
          </div>

          <h2 className="text-xl uppercase font-bold px-4">interest</h2>
          <div className="p-4">
            Watching Movies
            <br />
            Traveling
          </div>
        </div>
      </div>

      {/* Portfolio */}
      <div className="pb-4 border border-x-2 border-y-0">
        <Portfolio />
      </div>

      {/* Scan QR code and contact me */}
      {/* <div className="py-4 border border-x-2 border-y-0"></div> */}
    </div>
  );
}
