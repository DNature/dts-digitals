"use client";
import { ProjectCard } from "./MobileCard";
import { worksData } from "./works";

const Works = () => {
  return (
    <main className="max-w-screen-xl mx-auto px-6">
      <div className="relative z-10">
        <h3
          style={{
            minHeight: "20vh",
          }}
          className="grid mt-28"
        >
          Explore our projects
        </h3>

        <div className="mb-20">
          <div className="mt-10 flex flex-col items-center gap-10 md:grid grid-cols-3 mb-20">
            {worksData.map((work, idx) => (
              <ProjectCard
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
        </div>
      </div>
    </main>
  );
};

export default Works;
