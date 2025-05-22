
import { Icon, Section } from "@/components";

const Hero = () => {
  return (
    <Section id="home" className="flex flex-col-reverse lg:flex-row items-center justify-center text-center text-dark-0 dark:text-light-0 bg-light-0 dark:bg-dark-0 shadow-md shadow-dark-0/10">
      <div className="mt-12 lg:mt-0 lg:mr-16 flex flex-col items-center">
        <div className="flex flex-col justify-center items-center">
          <p className="text-xl md:text-3xl text-dark-0 dark:text-light-0 font-semibold leading-10 lg:leading-14">
            Hello,<br />
            <span className="flex flex-row items-start text-sm md:text-lg">I'm
              <span className="pl-1 text-2xl md:text-4xl text-primary font-serif font-bold">
                Farell Reyhan Pradana
              </span>
            </span>
          </p>
          <p className="text-sm md:text-lg text-dark-0 dark:text-light-0 font-semibold leading-2 md:leading-6">
            Website Developer
          </p>
        </div>
        <a href="#about" className="w-40 px-4 py-2 mt-8 hover:-translate-y-1 text-sm md:text-lg text-primary hover:text-light-0 font-semibold hover:bg-primary border-2 border-primary rounded-md transition-all duration-300">
          About Me
        </a>
      </div>
      <div className="flex flex-col lg:flex-row">
        <img
          alt="Violet Evergarden"
          className="max-w-xs md:max-w-sm w-auto h-auto hover:-translate-y-2 rounded-full border-1 border-primary shadow-lg hover:shadow-2xl object-contain transition-all duration-300"
          src="violet_evergarden.png"
          height={300}
          width={200}
        />
        <div className="flex flex-col justify-center text-4xl text-dark-0 dark:text-light-0">
          <hr className="w-32 md:w-46 lg:w-32 h-1 mx-auto my-4 lg:mb-36 lg:translate-y-16 lg:rotate-90 bg-primary border-0 rounded-sm" />
          <a
            aria-label="Github"
            className="mx-auto my-1 hover:-translate-y-1 hover:text-primary transition-all duration-300"
            href="#"
            target="_blank">
            <Icon name={"github"} />
          </a>
        </div>
      </div>
    </Section>
  )
}

export { Hero };
