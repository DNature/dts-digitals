"use client";
import { MobileCard, WorksCard } from "./MobileCard";
import { worksData } from "./works";

const Works = () => {
  return (
    <main className="max-w-screen-lg mx-auto px-6">
      <div className="relative z-10">
        <h3
          style={{
            minHeight: "20vh",
          }}
          className="grid mt-28"
        >
          Explore our projects
        </h3>

        <div className=" md:hidden mb-20">
          <div className="flex flex-col gap-5">
            {worksData.map((work, idx) => (
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
        </div>

        <div className="mx-auto max-w-screen-lg my-12 lg:px-0 hidden md:flex">
          <div className="w-full flex flex-col">
            {worksData.map((work, idx) => (
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
    </main>
  );
};

export default Works;
