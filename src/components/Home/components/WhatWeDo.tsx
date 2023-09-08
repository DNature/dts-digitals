import Image from "next/image";
import Link from "next/link";

export function WhatWeDo() {
  return (
    <section
      id="more"
      className="w-full bg-[url(/get-bg.svg)] py-40 px-4 mt-10"
    >
      <div className="max-w-screen-xl mx-auto grid">
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
          <div className="self-center z-10 bg-transparent">
            <h2 data-aos="zoom-in-up" className="lg:mt-0">
              Turning Your Ideas Into Cutting-edge Technologies
            </h2>
            <Link
              href={"/#projects"}
              className="btn my-7 h-20 px-10 text-xl hover:bg-primary rounded-full text-white"
            >
              See Recent Projects
            </Link>
          </div>

          <Image
            data-aos="zoom-in-up"
            src="/get-image.svg"
            height={800}
            width={800}
            className=""
            alt="hero"
            priority
          />
        </div>
      </div>
    </section>
  );
}
