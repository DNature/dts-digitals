import { MobileCard, WorksCard } from "@/app/works/MobileCard";
import { worksData } from "@/app/works/works";
import Image from "next/image";
import Link from "next/link";

export function Projects() {
  return (
    <section id="projects" className="w-full my-10 bg-base-80 py-40 px-4 mt-20">
      <div className="grid max-w-screen-lg items-start mx-auto">
        <h2 data-aos="zoom-in-up" className="text-start text-white">
          Latest Projects
        </h2>

        <div className="mt-10">
          <div className="flex flex-col gap-5 md:hidden mb-20">
            {worksData.slice(0, 3).map((work, idx) => (
              <MobileCard
                description={work.description}
                className=""
                githubUrl=""
                imageUrl={work.imageUrl}
                tags={work.tags}
                title={work.title}
                websiteUrl={work.websiteUrl}
                key={idx}
              />
            ))}
          </div>

          <div className="mx-auto max-w-screen-lg my-12 lg:px-0 hidden md:flex">
            <div className="w-full flex flex-col">
              {worksData.slice(0, 3).map((work, idx) => (
                <WorksCard
                  description={work.description}
                  imageUrl={work.imageUrl}
                  tags={work.tags}
                  title={work.title}
                  websiteUrl={work.websiteUrl}
                  key={idx}
                />
              ))}
            </div>
          </div>
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
