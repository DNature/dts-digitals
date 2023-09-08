"use client";
import { ProjectCard } from "./ProjectCard";
import { worksData } from "./works";

const Works = () => {
  return (
    <main className="max-w-screen-xl mx-auto px-6">
      <div className="relative z-10">
        <h3 className="grid my-40">Explore our projects</h3>

        <div className="mb-20">
          <div className="items-center gap-10 mb-20">
            {worksData.map((work, idx) => (
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
        </div>
      </div>
    </main>
  );
};

export default Works;
