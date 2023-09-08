import Image from "next/image";
import Link from "next/link";

const data = [
  {
    title: "DISCOVERY",
    image: "/discovery.svg",
    desc: "Our team will create the estimation for your project. Then the Business Analysts will deeply analyze your requirements to uncover the best-fitting strategy. DT-team is your go-to partner, so we'll go into every market detail to crush-test your idea.",
  },
  {
    title: "PREPARATION",
    image: "/preparation.svg",
    desc: "Our legal profs will handle the paperwork, while we’ll be creating a custom team from selected developers. As we approve the business logic and user flow, our designers will cover your idea in visuals.",
  },
  {
    title: "DEVELOPMENT",
    image: "/development.svg",
    desc: "Our team is all about customization. The next step is fitting our development and project management skills to your specific needs. After everything is developed, tested, and reviewed by our Tech Heads, we celebrate the successful launch.",
  },
  {
    title: "SUPPORT",
    image: "/support.svg",
    desc: "DT-team's not just another development company but a partner for the long haul. Get you back covered with 6 months of free support and maintenance.",
  },
];

export function OurProcess() {
  return (
    <section
      id="more"
      className="w-full bg-[url(/get-bg.svg)] py-40 px-4 mt-10"
    >
      <div className="max-w-screen-xl mx-auto grid">
        <h2 data-aos="zoom-in-up" className="my-10">
          Our Process
        </h2>
        <div className="grid lg:grid-cols-2 justify-center my-20 gap-10 items-center">
          {data.map((item, id) => (
            <div
              data-aos="zoom-in-up"
              key={id}
              className="self-center flex-1 z-10 card w-fit min-h-72 h-full md:h-64 bg-opacity-30 backdrop-blur-lg bg-white p-6"
            >
              <h4 className="lg:mt-0 font-light">{item.title}</h4>
              <p className="my-4 text-gray-500 text-lg md:text-xl">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <Link
          href={"/#projects"}
          className="btn max-w-xs bg-black my-7 h-20 px-10 text-xl hover:bg-primary rounded-full text-white"
        >
          See Projects
        </Link>
      </div>
    </section>
  );
}
