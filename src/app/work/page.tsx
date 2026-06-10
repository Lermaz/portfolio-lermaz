import Projects from '@/components/sections/projects';

export default function Work() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Work</h1>
      <div className="mb-10 text-base sm:text-lg">
        <p>
          Some projects I&apos;ve worked on are subject to confidentiality
          agreements, so I can&apos;t share specific details. However, I&apos;m
          available to discuss my experience and approach to development in a
          conversation.
        </p>
      </div>

      <div>
        <h2 className="mb-6 text-xl font-heading sm:text-2xl">Open source</h2>
        <Projects />
      </div>
    </div>
  );
}
