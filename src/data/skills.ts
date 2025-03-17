import {
  type IconType,
  SiAmazonwebservices,
  SiAngular,
  SiAstro,
  SiDrizzle,
  SiExpo,
  SiGit,
  SiGo,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPytorch,
  SiReact,
  SiShadcnui,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTiktok,
  SiTrpc,
  SiTypescript,
  SiV0,
  SiVercel,
} from '@icons-pack/react-simple-icons';

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: 'Frontend',
      skills: [
        { skill: 'typescript', icon: SiTypescript },
        { skill: 'nextjs', icon: SiNextdotjs },
        { skill: 'react', icon: SiReact },
        { skill: 'tailwind', icon: SiTailwindcss },
        { skill: 'astro', icon: SiAstro },
        {
          skill: 'shadcn/ui',
          icon: SiShadcnui,
        },
        {
          skill: 'angular',
          icon: SiAngular,
        },
      ],
    },
    {
      field: 'Backend',
      skills: [
        {
          skill: 'nodejs',
          icon: SiNodedotjs,
        },
        {
          skill: 'nestjs',
          icon: SiNestjs,
        },
        {
          skill: 'supabase',
          icon: SiSupabase,
        },
        {
          skill: 'trpc',
          icon: SiTrpc,
        },
        {
          skill: 'postgresql',
          icon: SiPostgresql,
        },
        {
          skill: 'mongodb',
          icon: SiMongodb,
        },
        {
          skill: 'mysql',
          icon: SiMysql,
        },
      ],
    },
    {
      field: 'Other',
      skills: [
        { skill: 'Vercel', icon: SiVercel },
        { skill: 'AWS', icon: SiAmazonwebservices },
        { skill: 'Git', icon: SiGit },
        { skill: 'Drizzle', icon: SiDrizzle },
        { skill: 'ChatGPT', icon: SiOpenai },
        { skill: 'V0', icon: SiV0 },
        { skill: 'Stripe', icon: SiStripe },
      ],
    },
    {
      field: "My next Tech's to learn",
      skills: [
        { skill: 'Go', icon: SiGo },
        { skill: 'Pytorch', icon: SiPytorch },
        { skill: 'Expo', icon: SiExpo },
        { skill: 'Lynx', icon: SiTiktok },
      ],
    },
  ];

export default SKILLS;
