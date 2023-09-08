"use client";

import Image from "next/image";
import Link from "next/link";

export const ProjectCard = ({
  description,
  imageUrl,
  tags,
  title,
  websiteUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
  websiteUrl: string;
  tags: string[];
}) => {
  return (
    <>
      <div className="my-14" data-aos="zoom-in-up">
        <div className="grid sm:grid-cols-2">
          <div className="relative h-96 md:h-[500px] p-4">
            <Image
              src={imageUrl}
              alt="image"
              layout="fill"
              loading="lazy"
              className="object-cover"
            />
          </div>
          <div className="sm:ml-10 mt-10 text-gray-500 sm:mt-0 flex gap-y-10 flex-col items-end max-w-md justify-center">
            {tags && (
              <div className="flex gap-x-2 my-2 self-start">
                {tags.map((tag, i) => (
                  <div className="badge badge-accent" key={tag + i}>
                    {tag}
                  </div>
                ))}
              </div>
            )}
            <h4 className="font-medium self-start">{title}</h4>
            <p className="text-lg">{description}</p>

            <Link
              href={websiteUrl}
              className="mt-4 border-gray-500 text-gray-500 rounded-full h-16 px-6 btn-outline btn text-lg"
            >
              Explore Project
            </Link>
          </div>
        </div>
      </div>
      {/* <div
        data-aos="zoom-in-up"
        className="card card-compact max-w-sm bg-base-100 shadow-xl"
      >
        <figure>
          <Image
            src={imageUrl}
            alt={title}
            height={700}
            width={500}
            className="w-full h-full object-cover object-left"
          />
        </figure>
        <div className="card-body bg-zinc-100 rounded-b-xl">
          {tags && (
            <div className="flex gap-x-2 my-2">
              {tags.map((tag, i) => (
                <div className="badge badge-info" key={tag + i}>
                  {tag}
                </div>
              ))}
            </div>
          )}
          <h2 className="card-title text-black">{title}</h2>
          <p className="text-gray-500">{description}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-zinc-200 hover:bg-primary hover:text-white">
              <Link className="" href={websiteUrl}>
                View Project
              </Link>
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
};
