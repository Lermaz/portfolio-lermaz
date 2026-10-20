import {
  type IconType,
  SiAndroidstudio,
  SiAngular,
  SiAnthropic,
  SiAstro,
  SiClaude,
  SiCursor,
  SiDjango,
  SiDocker,
  SiDrizzle,
  SiExpo,
  SiFastapi,
  SiGin,
  SiGit,
  SiGo,
  SiGooglecloud,
  SiJavascript,
  SiKotlin,
<<<<<<< HEAD
  SiKubernetes,
=======
  SiModelcontextprotocol,
>>>>>>> 15b903d2500a1a4baba64536a68ecfdfb03e3cf7
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiSentry,
  SiShadcnui,
  SiSonarqubecloud,
  SiSqlite,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVercel,
} from '@icons-pack/react-simple-icons';
import { Aws, Lambda } from '@lobehub/icons';

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
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
          icon: SiDrizzle,
        },
        {
          skill: 'Prisma',
          icon: SiPrisma,
        },
        {
          skill: 'Redis',
          icon: SiRedis,
        },
<<<<<<< HEAD
        {
          skill: 'Gin',
          icon: SiGin,
        },
=======
>>>>>>> 15b903d2500a1a4baba64536a68ecfdfb03e3cf7
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
        },
      ],
    },
    {
      field: 'Cloud',
      skills: [
        { skill: 'AWS', icon: Aws },
        { skill: 'Terraform', icon: SiTerraform },
        { skill: 'Vercel', icon: SiVercel },
        { skill: 'Google Cloud Platform', icon: SiGooglecloud },
<<<<<<< HEAD
        { skill: 'Sentry', icon: SiSentry },
        { skill: 'SonarQube', icon: SiSonarqubecloud },
=======
>>>>>>> 15b903d2500a1a4baba64536a68ecfdfb03e3cf7
      ],
    },
    {
      field: 'Language',
      skills: [
        { skill: 'Typescript', icon: SiTypescript },
        { skill: 'Javascript', icon: SiJavascript },
        { skill: 'Python', icon: SiPython },
        { skill: 'Kotlin', icon: SiKotlin },
<<<<<<< HEAD
        { skill: 'Golang', icon: SiGo },
=======
      ],
    },
    {
      field: 'AI',
      skills: [
        { skill: 'Claude Code', icon: SiClaude },
        { skill: 'Anthropic Claude API', icon: SiAnthropic },
        { skill: 'Cursor', icon: SiCursor },
        { skill: 'Model Context Protocol', icon: SiModelcontextprotocol },
>>>>>>> 15b903d2500a1a4baba64536a68ecfdfb03e3cf7
      ],
    },
    {
      field: 'Other',
      skills: [
        { skill: 'Expo', icon: SiExpo },
        { skill: 'Android Studio', icon: SiAndroidstudio },
        { skill: 'React Native', icon: SiReact },
        { skill: 'Docker', icon: SiDocker },
        { skill: 'Kubernetes', icon: SiKubernetes },
        { skill: 'Git', icon: SiGit },
<<<<<<< HEAD
        { skill: 'Claude Code', icon: SiClaude },
        { skill: 'Cursor', icon: SiCursor },
=======
>>>>>>> 15b903d2500a1a4baba64536a68ecfdfb03e3cf7
        { skill: 'Stripe', icon: SiStripe },
      ],
    },
  ];

export default SKILLS;
