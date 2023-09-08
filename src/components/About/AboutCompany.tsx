import Image from "next/image";
import React from "react";

export function AboutCompany() {
  return (
    <>
      <div className="relative w-full h-96">
        <Image
          src="/about.jpg"
          layout="fill"
          alt="about"
          className="object-cover blur"
        />
      </div>
      <div className="px-6 mx-auto max-w-screen-lg">
        <h3 data-aos="zoom-in-up" className="my-10">
          <strong>
            Doing Things <em>digital</em>
          </strong>{" "}
          is a <span className="text-primary">Leading Tech Company</span> In
          Creating Powerful Softwares & Technologies.
        </h3>
        <p data-aos="zoom-in-up" className="my-7">
          Starting from basic IT solutions to high-tech softwares, mobile app
          development, blockchain development, and web development, or detailed
          designs and consultancy - we offer you the best digital services to
          drive sales and success with powerful software. We are passionate
          about helping your business reach its technological goals and
          converting your innovative ideas into digital realities. When you
          choose DT Digitals, you will receive the best, personalized services
          tailored to your needs and goals.
        </p>
      </div>
    </>
  );
}
