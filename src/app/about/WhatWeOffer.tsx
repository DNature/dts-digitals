const data = [
  {
    title: "Software Design",
    desc: "Design stunning, fully responsive, and powerful software for your company with our tech experts and professionals. We can provide you with the best advice, designs, technology, and more!",
  },
  {
    title: "Software Development",
    desc: "We provide you the best and most innovative software and mobile app development services. Join us to build well-designed and fast-performing software today!",
  },

  {
    title: "Web & Mobile Development",
    desc: "Get all your website-related solutions and build with professional designs completely hassle-free with our team here at DT Digitals",
  },
  {
    title: "BlockChain Development",
    desc: "Design stunning, fully responsive, and powerful software for your company with our tech experts and professionals. We can provide you with the best advice, designs, technology, and more!",
  },
  {
    title: "SEO Optimization",
    desc: "Receive in-depth, insightful market research to grow your SEO with modern, cutting-edge strategies. Grow your business, increase sales & make your brand stand out.",
  },
];
export function WhatWeOffer() {
  return (
    <section
      id="projects"
      className="w-full bg-[url(/get-bg.svg)] bg-base-80 py-40 px-4 mt-20"
    >
      <div className="grid max-w-screen-xl items-start mx-auto">
        <h2 data-aos="zoom-in-up" className="text-start text-primary">
          What We Offer
        </h2>
        <div className="grid sm:grid-cols-2 gap-10 sm:gap-20 mt-10">
          {data.map((i, index) => (
            <div data-aos="zoom-in-up" key={index} className="text-gray-500">
              <h4 className="text-black font-medium mb-7">{i.title}</h4>
              <p className="text-lg sm:text-xl">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
