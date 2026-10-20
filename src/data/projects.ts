import {
  type IconType,
  SiDrizzle,
  SiFastapi,
  SiNestjs,
  SiPostgresql,
  SiPython,
  SiSqlite,
  SiTypescript,
} from '@icons-pack/react-simple-icons';

export type Project = {
  name: string;
  description: string;
  icon: IconType;
  badge?: string;
  repoUrl?: string;
  liveUrl?: string;
  tags: { label: string; icon: IconType }[];
};

export const SELECTED_WORK: Project[] = [
  {
    name: 'Pigui.ai',
    description:
      'Backend engineer using FastAPI; integrated AI-driven features to power loyalty programs for restaurants and retail stores.',
    liveUrl: 'https://pigui.ai',
    icon: SiFastapi,
    tags: [
      { label: 'FastAPI', icon: SiFastapi },
      { label: 'Python', icon: SiPython },
    ],
  },
];

export const OPEN_SOURCE: Project[] = [
  {
    name: 'NestJS Starter Mono',
    description:
      'Production-oriented modular monolith with enforced module boundaries, JWT auth, user-scoped todos, MikroORM migrations, and security hardening — plus dependency-cruiser checks in CI.',
    repoUrl: 'https://github.com/Lermaz/nestjs-starter-mono',
    icon: SiNestjs,
    tags: [
      { label: 'NestJS', icon: SiNestjs },
      { label: 'TypeScript', icon: SiTypescript },
      { label: 'MikroORM', icon: SiSqlite },
    ],
  },
  {
    name: 'NestJS Starter + Drizzle',
    description:
      'Same clean-architecture foundation as the MikroORM starter, migrated to Drizzle ORM with PostgreSQL — versioned SQL migrations, PGlite e2e tests, and Docker Compose ready.',
    repoUrl: 'https://github.com/Lermaz/nestjs-starter-mono-with-drizzle',
    badge: 'Drizzle variant',
    icon: SiNestjs,
    tags: [
      { label: 'NestJS', icon: SiNestjs },
      { label: 'TypeScript', icon: SiTypescript },
      { label: 'Drizzle', icon: SiDrizzle },
      { label: 'PostgreSQL', icon: SiPostgresql },
    ],
  },
  {
    name: 'FastAPI Starter',
    description:
      'Production-style FastAPI baseline with JWT auth and refresh-token rotation, code-defined role permissions, videogame CRUD, Alembic migrations, admin bootstrap CLI, and hardened GitHub Actions CI (Ruff, pytest).',
    repoUrl: 'https://github.com/Lermaz/fastapi-starter-ai',
    icon: SiFastapi,
    tags: [
      { label: 'FastAPI', icon: SiFastapi },
      { label: 'Python', icon: SiPython },
      { label: 'SQLAlchemy', icon: SiSqlite },
    ],
  },
];

const PROJECTS: Project[] = [...SELECTED_WORK, ...OPEN_SOURCE];

export default PROJECTS;
