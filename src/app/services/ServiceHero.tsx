import Image from "next/image";
import Link from "next/link";

export function ServiceHero() {
  return (
    <section>
      <div className="grid gap-6 content-center pt-40 mx-auto max-w-screen-xl min-h-screen md:px-8 lg:px-4 lg:pt-0 2xl:px-0">
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
          <span className="mb-4 text-3xl text-zinc-900">Services</span>{" "}
          <h2 className="font-bold lg:mt-10">
            Get the best, cost-effective{" "}
            <span className="text-primary"> digital services</span> for your
            software.
          </h2>
          <p className="mt-8 w-4/5 text-xl">
            We developing enterprise{" "}
            <span className="text-primary">Digital Products</span> & ventures
            for all businesses.
          </p>
          <div className="grid gap-x-10 items-center sm:flex">
            <Link
              href={"/services/#services"}
              className="px-10 my-7 h-20 text-xl bg-black text-white rounded-full btn hover:bg-primary"
            >
              Explore our services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
