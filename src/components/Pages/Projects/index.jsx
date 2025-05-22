
import DataProjects from "./projects.json";
import { Carousel, CarouselItem, Section, P } from "@/components";

const Project = ({ data = {releaseDate: "", lastModified: "", title: "", description: "", imgSrc: "", imgAlt: "", url: ""} }) => {
  return (
    <article className="container mx-auto mt-30 px-10 flex justify-center">
      <a href={data.url} className="hover:-translate-y-4 flex flex-col lg:flex-row justify-center items-center transition-translate duration-300">
        <img
          alt={data.title}
          className="w-sm mb-6 rounded-md shadow-md hover:shadow-lg"
          src={data.imgSrc}
          height={640}
          width={1024}
        />
        <div className="lg:ml-6 w-sm md:w-md xl:w-xl flex flex-col justify-between items-start">
          <div className="mb-3">
            <h3 className="text-xl font-semibold text-dark-0 dark:text-light-0">{data.title}</h3>
            <div className="ml-2 text-xs text-dark-1/50 dark:text-light-1/50 leading-3">
              <p>Relese Date: {data.releaseDate}</p>
              <p>Last Modified: {data.lastModified}</p>
            </div>
          </div>
          <P className="mb-8 text-dark-1 dark:text-light-1 text-sm sm:text-base" text={data.description} limit={200} />
        </div>
      </a>
    </article>
  );
};

const Projects = () => {
  return (
    <Section id="projects" className="bg-light-0 dark:bg-dark-0 overflow-hidden shadow-md shadow-dark-0/10">
      <div className="w-full h-full mx-auto flex flex-col justify-center items-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-dark-0 dark:text-light-0 uppercase">
          PROJECTS
        </h2>
        <Carousel autoSlideInterval={5000}>
          {DataProjects.map(({ releaseDate, lastModified, title, description, imgSrc, imgAlt, url }) => (
            <CarouselItem key={title}>
              <Project
                key={title}
                data={{
                  releaseDate: releaseDate,
                  lastModified: lastModified,
                  title: title,
                  description: description,
                  imgSrc: imgSrc,
                  imgAlt:imgAlt,
                  url: url
                }}
              />
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </Section>
  );
};

export { Projects };
