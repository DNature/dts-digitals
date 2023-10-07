"use client";
import Slider from "react-slick";

const data = [
  {
    title: "Dominika Onyks",
    id: 1,
    desc: "DT Digital's remarkable expertise shone during our blockchain collaborations, with unwavering professionalism, reliability, and superb communication. Their profound blockchain knowledge and versatility are truly commendable, and I eagerly await future partnerships.",
  },
  {
    title: "Joas Souza",
    id: 2,
    desc: "DT Digital's front-end developers demonstrates a strong commitment to improving UX. They actively engage with our UX team to enhance code and usability, fostering a positive work atmosphere.",
  },
];

export function InfoCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section
      data-aos="zoom-in-up"
      className="content-center mx-auto max-w-screen-xl md:px-5"
    >
      <div className="p-3 my-7 mx-auto max-w-2xl">
        <Slider
          {...settings}
          autoplay
          // fade
          vertical={false}
          arrows={false}
          verticalSwiping
          dots
        >
          {data.map((item) => (
            <div
              key={item.id}
              className="py-8 px-10 text-white lg:px-20 w-[512px] h-[320px] card bg-primary"
            >
              <h4>{item.title}</h4>
              <p className="mt-5 leading-loose lg:text-lg">{item.desc}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
