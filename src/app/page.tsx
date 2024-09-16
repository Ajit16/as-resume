import EmploymentHistory from '@/components/employment-history';
import Chart from '@/components/highchart';
import LogoSlider from '@/components/logo-slider';

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
  { name: 'Angular', value: '70%' }
];
const BESkills: skillsProps[] = [{ name: 'Nodejs/MongoDB', value: '50%' }];

export default function Home() {
  // Generate the chart

  return (
    <>
      {/* Top Section  */}
      <div className="container m-auto pr-10 bg-[#616161] flex gap-4">
        <div className="w-52  min-w-52 h-52 overflow-hidden relative">
          <img
            src="https://ajit16.github.io/static/media/webimg.655af47c.jpg"
            alt="Ajit Singh"
            width="100%"
          />
          <span className="absolute top-0 -right-1">
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
          <div className="py-6 text-white">
            <h1 className="text-2xl uppercase text-white font-bold">
              Ajit Singh
            </h1>
            <h3 className="text-md uppercase font-bold mb-4">
              Sr. Software Engineer
            </h3>

            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined">mail</span>
                ajit.dhiman16@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined">phone_iphone</span>
                +91 8872295804
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined">phone_iphone</span>
                +91 7009751937
              </li>
            </ul>
          </div>
          <div className="py-6 text-white">
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="text-white"
                >
                  <path
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                    fill="white"
                  />
                </svg>
                linkedin
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
                github
              </li>
              <li className="flex items-center gap-2">
                <svg
                  height="18"
                  viewBox="0 0 32 32"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m.32 15.406v5.248h8.736v1.76h6.976v-1.76h15.649v-10.495h-31.36v5.248zm8.735 0v3.488h-1.76v-5.216h-1.697v5.216h-3.582v-6.976h7.039zm8.724.006-.019 3.488-3.425-.012v1.766h-3.582v-8.736h7.039l-.012 3.494zm12.204-.006v3.488h-1.76v-5.216h-1.76v5.248l-1.76-.038v-5.21h-1.697v5.216h-3.519v-6.976h10.495v3.488zm-15.648 0v1.728h1.634v-3.457h-1.634v1.728z"
                    fill="#fff"
                  />
                </svg>
                npm package
              </li>
              <li className="flex items-center gap-2 relative">
                <span className="material-symbols-outlined">link</span>
                <span id="npm-install-copy-button">link</span>
                <button
                  data-copy-to-clipboard-target="npm-install-copy-button"
                  data-tooltip-target="tooltip-copy-npm-install-copy-button"
                  className="absolute end-2 top-1/2 -translate-y-1/2 text-gray-200 dark:text-gray-400 hover:text-white dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center"
                >
                  <span id="default-icon">
                    <svg
                      className="w-3.5 h-3.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 20"
                    >
                      <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                    </svg>
                  </span>
                  <span
                    id="success-icon"
                    className="hidden inline-flex items-center"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 12"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5.917 5.724 10.5 15 1.5"
                      />
                    </svg>
                  </span>
                </button>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined">download</span>
                Download my updated resume
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Summary Section  */}
      <div className="container m-auto py-4 border border-x-2 border-y-0">
        <h2 className="text-xl uppercase font-bold px-4">Summary Section</h2>
        <hr className="my-4" />
        <p className="px-4">
          IT Professional with 10+ Years of Expertise. I am an accomplished IT
          professional with over a decade of experience in web development and
          software engineering. My expertise spans a wide range of technologies,
          including HTML, CSS, JavaScript, SAAS/LESS, and modern frameworks such
          as React.js, Redux, Next.js, and AngularJS. I am proficient in
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
      <div className="container m-auto py-4 border border-x-2 border-y-0">
        <h2 className="text-xl uppercase font-bold px-4">
          My Total Experience
        </h2>
        <hr className="my-4" />
        <div className="px-4">
          <Chart />
        </div>
      </div>

      {/* Technologies logo */}
      <div className="container m-auto py-6 px-4 border-2">
        <LogoSlider />
      </div>

      {/* Work Experience */}
      {/* Skills & Tools with bar , Education, Lang, interest */}
      <div className="container flex m-auto border border-x-2 border-y-0">
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
            <strong className=" text-slate-700">Backend</strong>
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
      <div className="container m-auto pb-4 border border-x-2 border-y-0">
        <h2 className="text-xl uppercase font-bold px-4">Portfolio</h2>
        <hr className="my-4" />
        <div className="px-4">
          <strong className="text-slate-700">AJNA</strong>
          <p>
            <strong className="text-slate-700 text-sm">Description:</strong>{' '}
            Developed a web app for provide staff recruitment services.
          </p>
          <p>
            <strong className="text-slate-700 text-sm">URL: </strong>
            <a href="https://www.premiertalentpartners.com/">
              https://www.premiertalentpartners.com/
            </a>{' '}
            <br />
            <small>
              <strong className="text-slate-700 text-sm">SUB-URL: </strong>
              <br />
              <a href="https://www.premiertalentpartners.com/">
                https://premierlogin.ajnainside.com/
              </a>{' '}
              <strong>(Landing page)</strong>,<br />
              <a href="https://www.premiertalentpartners.com/">
                https://premiercandidate.ajnainside.com/login
              </a>{' '}
              (candidate portal),
              <br />
              <a href="https://www.premiertalentpartners.com/">
                https://premierclient.ajnainside.com/login
              </a>{' '}
              (client portal),
              <br />
              <a href="https://www.premiertalentpartners.com/">
                https://premieradmin.ajnainside.com/login
              </a>{' '}
              (admin portal){' '}
            </small>
            <br />
          </p>
          <p>
            <strong>Environment:</strong> ReactJS, CSS3, Custom Components,
            HTML5, JSON, MVC etc.
          </p>
          <p>
            <strong>Backend:</strong> Node.js, Mongodb, AWS etc.
          </p>
          <p>
            <strong>Team:</strong> 15+
          </p>
          <p>
            <strong>Duration:</strong> 3+ years
          </p>
        </div>
      </div>

      {/* Scan QR code and contact me */}
      {/* <div className="container m-auto py-4 border border-x-2 border-y-0"></div> */}
    </>
  );
}
