import type { Project } from '@/data/projects';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { ExternalLink } from 'lucide-react';

const ARCHITECTURE_PREVIEW = `AppModule
├── CoreModule
├── AuthModule
├── HealthModule
└── TodosModule`;

type ProjectsProps = {
  projects: Project[];
  showArchitecturePreview?: boolean;
};

export default function Projects({
  projects,
  showArchitecturePreview = false,
}: ProjectsProps) {
  return (
    <div className="flex flex-col gap-6">
      {projects.map((project, index) => (
        <article
          key={project.name}
          className="border-border shadow-shadow rounded-base group border-2 bg-secondary-background overflow-hidden">
          <div className="border-border bg-main text-main-foreground flex flex-wrap items-center justify-between gap-3 border-b-2 px-4 py-3 sm:px-5">
            <div className="flex items-center gap-3">
              <span className="font-heading text-2xl leading-none opacity-50">
                {String(index + 1).padStart(2, '0')}
              </span>
              <project.icon className="h-6 w-6 shrink-0" title={project.tags[0]?.label ?? ''} />
              <h2 className="font-heading text-lg sm:text-xl">{project.name}</h2>
            </div>
            {project.badge ? (
              <span className="border-border rounded-base text-foreground border bg-background px-2.5 py-1 text-xs font-base">
                {project.badge}
              </span>
            ) : null}
          </div>

          {showArchitecturePreview ? (
            <div className="border-border bg-background border-b-2 px-4 py-4 sm:px-5">
              <pre
                aria-hidden
                className="text-foreground/75 overflow-x-auto font-mono text-xs leading-relaxed sm:text-sm">
                {ARCHITECTURE_PREVIEW}
              </pre>
            </div>
          ) : null}

          <div className="px-4 py-4 sm:px-5 sm:py-5">
            <p className="text-sm sm:text-base">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag.label}
                  className="border-border shadow-shadow rounded-base text-main-foreground flex items-center gap-1.5 border-2 bg-main px-2.5 py-1 text-xs sm:text-sm">
                  <tag.icon className="h-3.5 w-3.5 shrink-0" title="" />
                  {tag.label}
                </span>
              ))}
            </div>

            {project.repoUrl || project.liveUrl ? (
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                {project.liveUrl ? (
                  <a
                    className="border-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none flex w-full items-center justify-center gap-2 rounded-base border-2 bg-background px-4 py-2.5 text-sm transition-all sm:text-base"
                    href={project.liveUrl}
                    rel="noopener noreferrer"
                    target="_blank">
                    <ExternalLink className="h-4 w-4 shrink-0" />
                    Visit site
                  </a>
                ) : null}
                {project.repoUrl ? (
                  <a
                    className="border-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none flex w-full items-center justify-center gap-2 rounded-base border-2 bg-background px-4 py-2.5 text-sm transition-all sm:text-base"
                    href={project.repoUrl}
                    rel="noopener noreferrer"
                    target="_blank">
                    <SiGithub className="h-4 w-4 shrink-0" title="" />
                    View on GitHub
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
