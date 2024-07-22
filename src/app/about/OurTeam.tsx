import Image from "next/image";

const team = [
  {
    name: "Divine Hycenth",
    title: "Full-Stack Engineer",
    image: "/team/divine.png",
  },
  {
    name: "Success Hycenth",
    title: "Software Developer - Mobile & Web",
    image: "/team/success.jpg",
  },
  {
    name: "Joseph Chikeme",
    title: "Full-Stack Engineer",
    image: "/team/joe.jpeg",
  },
];

export function OurTeam() {
  return (
    <section className="w-full bg-[url(/get-bg.svg)] py-40 px-4 mt-10">
      <div className="mx-auto max-w-screen-lg">
        <h3 data-aos="zoom-in-up" className="mb-10">
          Meet Our Leadership Team
        </h3>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-3">
          {team.map((i, idx) => (
            <div data-aos="zoom-in-up" key={idx}>
              <div className="avatar">
                <div className="relative w-40 rounded-full ring ring-offset-2 sm:w-72 ring-primary ring-offset-base-100">
                  <Image src={i.image} layout="fill" alt="team-member" />
                </div>
              </div>
              <h4 className="mt-4 text-lg text-center sm:text-2xl">{i.name}</h4>
              <p className="mt-2 text-center text-gray-500">{i.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
