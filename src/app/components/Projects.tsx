import { ProjectCard } from "@/app/works/ProjectCard";
import { worksData } from "@/app/works/works";
import Link from "next/link";

export function Projects() {
  return (
    <section
      id="projects"
      className="py-40 px-4 my-10 mt-20 w-full bg-base-80"
      style={{ overflowX: "hidden" }}
    >
      <div className="grid items-start mx-auto max-w-screen-xl">
        <h2 data-aos="zoom-in-up" className="text-white text-start">
          Latest Projects
        </h2>

        <div className="mt-10 mb-20">
          {worksData.slice(0, 3).map((work, idx) => (
            <ProjectCard
              description={work.description}
              imageUrl={work.imageUrl}
              tags={work.tags}
              title={work.title}
              websiteUrl={work.websiteUrl}
              key={idx}
            />
          ))}
        </div>
        <Link
          href={"/works"}
          className="mt-7 max-w-sm h-16 text-xl font-medium text-black bg-white rounded-full hover:bg-gray-300 btn"
        >
          Explore all projects
        </Link>
      </div>
    </section>
  );
}
