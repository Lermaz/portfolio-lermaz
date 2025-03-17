import Links from '@/components/links';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-base">
      <Image
        className="border-border dark:border-darkBorder h-28 w-28 rounded-full border-2 xl:h-[184px] xl:w-[184px]"
        src="/pro.jpg"
        alt="profile picture"
        width={184}
        height={184}
      />
      <h1 className="text-2xl font-heading sm:text-4xl">Isaac Lerma</h1>
      <p className="mt-2 text-lg sm:text-xl">Senior Full Stack Developer</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>
          Hi, my name is Isaac Lerma, Senior Full Stack Developer based in
          Mexico.
        </p>
        <br />
        <p>
          A passionate developer fueled by curiosity and driven by the love for
          clean code. With a knack for creating seamless user experiences and
          robust back-end solutions, I thrive in the world where pixels meet
          databases.
        </p>
      </div>

      <Links />
    </div>
  );
}
