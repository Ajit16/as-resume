import Image from 'next/image';
import ReactIcon from '@/assets/react.svg';
import BootstrapIcon from '@/assets/bootstrap-plain.svg';
import CssIcon from '@/assets/css-3.svg';
import AngularIcon from '@/assets/file-type-angular.svg';
import GitHubIcon from '@/assets/github.svg';
import GitLabIcon from '@/assets/gitlab.svg';
import HtmlIcon from '@/assets/html-5.svg';
import JavaScriptIcon from '@/assets/javascript-js.svg';
import NextJsIcon from '@/assets/nextjs.svg';
import NpmIcon from '@/assets/npm.svg';

interface LogoArrProps {
  img: any;
  name: string;
}

const logoArr: LogoArrProps[] = [
  { img: ReactIcon, name: 'React' },
  { img: BootstrapIcon, name: 'Bootstrap' },
  { img: CssIcon, name: 'CSS' },
  { img: AngularIcon, name: 'Angular' },
  { img: GitHubIcon, name: 'GitHub' },
  { img: GitLabIcon, name: 'GitLab' },
  { img: HtmlIcon, name: 'Html' },
  { img: JavaScriptIcon, name: 'JavaScript' },
  { img: NextJsIcon, name: 'NextJs' },
  { img: NpmIcon, name: 'Npm' }
];

export default function LogoSlider() {
  return (
    <ul className="flex justify-center gap-4 items-center">
      {logoArr.map((item) => (
        <li key={item.name}>
          <Image
            src={item?.img || ''}
            alt="logo"
            width={60}
            height={60}
            className="w-auto min-w-16 max-w-16 max-h-16"
          />
        </li>
      ))}
    </ul>
  );
}
