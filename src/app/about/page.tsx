import Experience from '@/components/sections/experience';
import Skills from '@/components/sections/skills';

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
          Hey there! 👋 I&apos;m Isaac Lerma, a passionate Full Stack Developer
          who thrives on building seamless user experiences and scalable
          back-end solutions. With a strong foundation in JavaScript,
          TypeScript, Kotlin, and Python, I love crafting clean, efficient code
          that brings ideas to life.
        </p>
      </div>

      <Skills />

      <Experience />
    </div>
  );
}
