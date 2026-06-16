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
  repoUrl: string;
  icon: IconType;
  badge?: string;
  tags: { label: string; icon: IconType }[];
};

const PROJECTS: Project[] = [
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

export default PROJECTS;
