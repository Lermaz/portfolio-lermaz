import Certifications from '@/components/sections/certifications';
import Experience from '@/components/sections/experience';
import Skills from '@/components/sections/skills';

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
        Hi, I’m Isaac Lerma, a Senior Full-Stack Engineer with 7+ years building scalable web applications, cloud-native systems, and mobile solutions for enterprise clients. Deep expertise across TypeScript/Node.js, Python, and AWS infrastructure (Lambda, ECS, RDS, OpenSearch), with hands-on experience integrating LLM-based tools and conversational AI into production workflows. Comfortable owning projects end-to-end across cross-functional, multi-timezone teams.
        </p>
      </div>

      <Skills />

      <Experience />

      <Certifications />
    </div>
  );
}
