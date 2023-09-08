import Image from "next/image";

const team = [
  {
    name: "Divine Hycenth",
    title: "Co-Founder. Full-Stack & Senior BlockChain Engineer",
    image: "/team/divine.png",
  },
  {
    name: "Tareq Abdalla",
    title: "Co-Founder. Full-Stack & Senior BlockChain Engineer",
    image: "/team/tarek.jpeg",
  },
  {
    name: "Success Hycenth",
    title: "Co-Founder. Full-Stack & Mobile & Web Developer",
    image: "/team/success.jpg",
  },
  {
    name: "Sandra De Jong",
    title: "CMO",
    image: "/team/not-available.jpg",
  },
  {
    name: "Katerista Dmitry",
    title: "UI/UX Designer",
    image: "/team/not-available.jpg",
  },
];

export function OurTeam() {
  return (
    <section className="w-full bg-[url(/get-bg.svg)] py-40 px-4 mt-10">
      <div className="mx-auto max-w-screen-lg">
        <h2 data-aos="zoom-in-up" className="mb-10">
          Meet Our Team
        </h2>

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
