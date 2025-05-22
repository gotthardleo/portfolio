
import { Icon, Section } from "@/components";

const About = () => {
  const skills = [
    {
      name: "HTML & CSS",
      icon: [ "html", "css" ],
    },
    {
      name: "JavaScript",
      icon: [ "javascript" ],
    },
    {
      name: "Tailwind CSS",
      icon: [ "tailwindcss" ],
    },
    {
      name: "React & Next.js",
      icon: [ "react", "nextjs" ],
    },
  ]
  return (
    <Section id="about" className="max-w-4xl w-full h-full mx-auto flex flex-col justify-center items-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-dark-0 dark:text-light-0 uppercase mb-6 text-center">
        ABOUT ME
      </h2>
      <p className="mb-6 px-4 lg:p-0 text-dark-1 dark:text-light-1 text-sm sm:text-base text-pretty leading-relaxed">
        Farell Reyhan Pradana, a passionate web developer dedicated to crafting user-friendly interfaces while constantly exploring the latest technologies. Committed to enhancing the digital experience through innovation and design.
      </p>
      <button className="block px-6 py-3 mx-auto hover:-translate-y-1 text-sm text-primary hover:text-light-0 font-semibold hover:bg-primary border-2 border-primary rounded-md transition-all duration-300">
        DOWNLOAD CV
      </button>
      <div className="mt-12">
        <h3 className="text-lg sm:text-xl font-extrabold text-dark-0 dark:text-light-0 uppercase mb-6 text-center">
          My Skills
        </h3>
        <div className="flex flex-col justify-center gap-4">
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="w-40 h-30 hover:-translate-y-2 flex flex-col justify-center items-center text-6xl text-center text-dark-1 dark:text-light-1 hover:text-light-1 dark:hover:text-dark-1 font-semibold cursor-pointer hover:bg-dark-1/40 dark:hover:bg-light-1/40 border border-dark-1/40 dark:border-light-1/40 rounded-md shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between">
                  {skill.icon.map((icon) => (
                    <Icon name={icon} key={icon} className="p-1" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm">{skill.name}</p>
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export { About };
