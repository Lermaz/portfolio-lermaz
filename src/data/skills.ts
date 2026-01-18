import {
  type IconType,
  SiAndroidstudio,
  SiAngular,
  SiAstro,
  SiClaude,
  SiDjango,
  SiDocker,
  SiDrizzle,
  SiExpo,
  SiFastapi,
  SiGit,
  SiGooglecloud,
  SiJavascript,
  SiKotlin,
  SiMongodb,
  SiMysql,
  SiN8n,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiPytorch,
  SiReact,
  SiRedis,
  SiShadcnui,
  SiSqlite,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVercel,
} from '@icons-pack/react-simple-icons';
import { Aws, Lambda } from '@lobehub/icons';

const SKILLS: { field: string; skills: { skill: string; icon: IconType}[] }[] =
  [
    {
      field: 'Frontend',
      skills: [
        { skill: 'Nextjs', icon: SiNextdotjs },
        { skill: 'React', icon: SiReact },
        { skill: 'Tailwind', icon: SiTailwindcss },
        { skill: 'Astro', icon: SiAstro },
        {
          skill: 'Shadcn/ui',
          icon: SiShadcnui,
        },
        {
          skill: 'Angular',
          icon: SiAngular,
        },
      ],
    },
    {
      field: 'Backend',
      skills: [
        {
          skill: 'Nodejs',
          icon: SiNodedotjs,
        },
        {
          skill: 'Nestjs',
          icon: SiNestjs,
        },
        {
          skill: 'Lambda',
          icon: Lambda,
        },
        {
          skill: 'Django',
          icon: SiDjango,
        },
        {
          skill: 'Fastapi',
          icon: SiFastapi,
        },
        {
          skill: 'Supabase',
          icon: SiSupabase,
        },
        { 
          skill: 'Drizzle',
          icon: SiDrizzle
        },
        {
          skill: 'Prisma',
          icon: SiPrisma,
        },
        {
          skill: 'Redis',
          icon: SiRedis,
        }
      ],
    },
    {
      field: 'Databases',
      skills: [
        {
          skill: 'Postgresql',
          icon: SiPostgresql,
        },
        {
          skill: 'Mongodb',
          icon: SiMongodb,
        },
        {
          skill: 'MySQL',
          icon: SiMysql,
        },
        {
          skill: 'Sqlite',
          icon: SiSqlite,
        }
      ]
    },
    {
      field: 'Cloud',
      skills: [
        { skill: 'AWS', icon: Aws },
        { skill: 'Terraform', icon: SiTerraform },
        { skill: 'Vercel', icon: SiVercel },
        { skill: 'Google Cloud Platform', icon: SiGooglecloud },
      ]
    },
    {
      field: 'Language',
      skills: [
        { skill: 'Typescript', icon: SiTypescript },
        { skill: 'Javascript', icon: SiJavascript },
        { skill: 'Python', icon: SiPython },
        { skill: 'Kotlin', icon: SiKotlin },
      ]
    },
    {
      field: 'Other',
      skills: [
        { skill: 'Expo', icon: SiExpo },
        { skill: 'Android Studio', icon: SiAndroidstudio },
        { skill: 'Docker', icon: SiDocker },
        { skill: 'Git', icon: SiGit },
        { skill: 'Claude Code', icon: SiClaude },
        { skill: 'Stripe', icon: SiStripe },
      ],
    },
    {
      field: "My next Tech's to learn",
      skills: [
        { skill: 'Pytorch', icon: SiPytorch },
        { skill: 'n8n', icon: SiN8n },
      ],
    },
  ];

export default SKILLS;
