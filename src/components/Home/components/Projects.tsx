import Image from "next/image";

const data = [
  {
    id: 1,
    title: "E-Commerce Website Design For Fashion Brand",
    desc: "Our company was dedicated to building professional and 100% responsive eCommerce websites for the newest online business in town – TechBox. With dynamic designs and software, they are already attracting many clients.",
    image: "/project-images/project-image-1.jpg",
  },
  {
    id: 2,
    title: "AI-Powered Software For Digital Recruitment",
    desc: "We have recently created an excellent, top-class AI-powered technology for the purpose of digital recruitment for the company TechBox. The software build is fully responsive and 100% accurate",
    image: "/project-images/project-image-2.jpg",
  },
];

export function Projects() {
  return (
    <section id="projects" className="w-full my-10 bg-base-80 py-40 px-4 mt-20">
      <div className="grid max-w-screen-lg items-start mx-auto">
        <h2 data-aos="zoom-in-up" className="text-start text-white">
          Latest Projects
        </h2>

        <div className="mt-10 text-gray-200">
          {data.map((item) => (
            <div className="my-14" key={item.id}>
              <div className="grid sm:grid-cols-2">
                <div className="relative h-[500px] p-4">
                  <Image
                    src={item.image}
                    alt="image"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
                <div className="sm:ml-10 mt-10 sm:mt-0 flex gap-y-10 flex-col items-end max-w-md justify-center">
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-lg">{item.desc}</p>

                  <button className="mt-4 border-white rounded-full h-16 px-6 btn-outline btn text-lg">
                    Explore Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="btn font-medium text-xl max-w-sm text-black hover:bg-gray-300 bg-white h-16 mt-7 rounded-full">
          Explore all projects
        </button>
      </div>
    </section>
  );
}
