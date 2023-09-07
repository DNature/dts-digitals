"use client";

import Image from "next/image";
import Link from "next/link";

export const ProjectCard = ({
  description,
  imageUrl,
  tags,
  title,
  websiteUrl,
  className,
}: {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  websiteUrl: string;
  tags: string[];
  className: string;
}) => {
  return (
    <div
      data-aos="zoom-in-up"
      className="card card-compact max-w-sm bg-base-100 shadow-xl"
    >
      <figure>
        <Image
          loading="lazy"
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
    </div>
  );
};
