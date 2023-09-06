"use client";
import React, { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { getNChars } from "@/utils/getNchars";
import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";
const RightVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    // display: 'block',
    transition: { duration: 1 },
  },
  hidden: {
    opacity: 0,
    scale: 0.6,
    // x: 500,
    // display: 'none',
  },
};

const BottomVariants = {
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0.6, y: 50 },
};

export const HomeWorksCard = ({
  description,
  githubUrl,
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
  let fallbackSrc: any = imageUrl.split(".");

  if (fallbackSrc[fallbackSrc.length - 1] === "gif") {
    fallbackSrc = fallbackSrc.join(".").replace(/\/c_scale.*?\//gis, "/w_50/");
  } else {
    fallbackSrc = imageUrl.replace(/\/c_scale.*?\//gis, "/c_scale,w_0.01/");
  }

  const [ref, inView] = useInView();
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else controls.start("hidden");
  }, [controls, inView]);

  return (
    <>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={BottomVariants}
        className={clsx(className, "p-6 rounded-2xl bg-glass-card")}
      >
        <div className="md:grid grid-cols-2 gap-4 items-center">
          <div className="grid">
            <Image
              loading="lazy"
              src={imageUrl}
              alt={title}
              layout="fill"
              className="rounded-2xl h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold mb-2">{title}</h3>
            {tags && (
              <div>
                {tags.map((tag, i) => (
                  <div className="bg-primary badge badge-primary" key={tag + i}>
                    {tag}
                  </div>
                ))}
              </div>
            )}
            <p className="my-4">{getNChars(description, 300)}</p>
            <div>
              <Link className="btn bg-black" type="button" href={websiteUrl}>
                Visit site
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export const WorksCard = ({
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
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else controls.start("hidden");
  }, [controls, inView]);

  return (
    <div className={"relative h-full "} style={{ height: "60vh" }}>
      <div className="grid">
        <Image
          loading="lazy"
          src={imageUrl}
          height={700}
          width={1000}
          alt={title}
          className="rounded-2xl h-full w-4/6 object-cover object-left"
        />
      </div>
      <div className="absolute top-0 right-0 w-2/5 py-12">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={RightVariants}
          className="bg-white w-full h-full shadow-2xl rounded-2xl px-8 py-20 flex items-center"
        >
          <div>
            <h4>{title}</h4>
            {tags && (
              <div className="my-2 flex gap-x-3">
                {tags.map((tag, i) => (
                  <div className="badge badge-info" key={tag + i}>
                    {tag}
                  </div>
                ))}
              </div>
            )}
            <p className="text-xl mb-6">{description}</p>
            <div>
              <Link target="_blank" color="gradient" href={websiteUrl}>
                Visit site
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const MobileCard = ({
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
  const [ref, inView] = useInView();
  const controls = useAnimation();

  console.log({ title });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="p-0">
      <div className="grid grid-rows-2">
        <Image
          loading="lazy"
          src={imageUrl}
          alt={title}
          height={700}
          width={500}
          className="w-full h-72 object-cover object-left"
        />
        <div className="p-4">
          <h3 className="font-bold text-lg">{title}</h3>
          {tags && (
            <div className="flex gap-x-2 my-2">
              {tags.map((tag, i) => (
                <div className="badge" key={tag + i}>
                  {tag}
                </div>
              ))}
            </div>
          )}
          <p>{description}</p>
          <div className="my-4 flex justify-between">
            <Link className="btn" href={websiteUrl}>
              Visit site
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
