import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="grid gap-6 content-center pt-40 mx-auto max-w-screen-xl min-h-screen md:px-8 lg:px-4 lg:pt-0 2xl:px-0">
      <Image
        src="/gradients.svg"
        height={2000}
        width={2000}
        className="absolute top-0 right-0 bottom-0 left-0"
        alt="map"
        priority
      />
      <div
        data-aos="zoom-in-up"
        className="z-10 self-center bg-transparent max-lg:px-4"
      >
        <span className="mb-4 text-3xl text-zinc-900">
          One-Stop Solution For All Your Business Needs
        </span>
        <h1 className="font-bold lg:mt-10 leading-tight">
          Creating <span className="text-primary">Softwares</span> & Digital
          Excellence
        </h1>
        <p className="mt-8 w-4/5 text-xl">
          We developing enterprise{" "}
          <span className="text-primary">Digital Products</span> & ventures for
          all businesses.
        </p>
        <Link
          href={"/#more"}
          className="px-10 bg-black my-7 h-20 text-xl text-white rounded-full btn hover:bg-primary"
        >
          Explore more
        </Link>
      </div>
    </section>
  );
}
