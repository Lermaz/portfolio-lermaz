import Experience from '@/components/sections/experience';
import Skills from '@/components/sections/skills';

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
        Hi, I’m Isaac Lerma, a Full-Stack Developer focused on building modern, scalable applications.
        I combine strong front-end skills with solid back-end engineering, working with JavaScript, TypeScript, Kotlin, and Python to deliver clean and maintainable solutions. I also design and deploy cloud-ready systems using AWS, Terraform, and Vercel, ensuring performance, reliability, and scalability from day one.
        </p>
      </div>

      <Skills />

      <Experience />
    </div>
  );
}
