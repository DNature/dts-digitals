import { ProjectCard } from "@/app/works/ProjectCard";
import { worksData } from "@/app/works/works";
import Image from "next/image";
import Link from "next/link";

export function Projects() {
  return (
    <section id="projects" className="w-full my-10 bg-base-80 py-40 px-4 mt-20">
      <div className="grid max-w-screen-xl items-start mx-auto">
        <h2 data-aos="zoom-in-up" className="text-start text-white">
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
          className="btn font-medium text-xl max-w-sm text-black hover:bg-gray-300 bg-white h-16 mt-7 rounded-full"
        >
          Explore all projects
        </Link>
      </div>
    </section>
  );
}
