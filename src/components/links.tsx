import {
  IconType,
  SiBuymeacoffee,
  SiGithub,
  SiGmail,
  SiX,
} from '@icons-pack/react-simple-icons';
import React from 'react';

export default function Links() {
  // eslint-disable-next-line react/display-name
  const SiLinkedin: IconType = React.forwardRef((props, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ));
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiGmail,
      href: 'lermalizarraga@gmail.com',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/Lermaz',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/isaac-lerma-866b12168/',
    },
    {
      icon: SiX,
      href: 'https://x.com/LermazCope',
    },
    {
      icon: SiBuymeacoffee,
      href: 'https://buymeacoffee.com/lermalizarr',
    },
  ];

  return (
    <div className="mr-auto mt-20 flex w-full flex-wrap items-center gap-10">
      {links.map((link, id) => {
        return (
          <a target="_blank" key={id} href={link.href}>
            <link.icon title="" />
          </a>
        );
      })}
    </div>
  );
}
