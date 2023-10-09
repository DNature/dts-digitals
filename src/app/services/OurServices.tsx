import Image from "next/image";
import Link from "next/link";

const BookConsultationButton = () => (
  <Link href="/contact" className="mt-4 text-lg btn">
    Book a free consultation
  </Link>
);
export function OurServices() {
  return (
    <section
      id="services"
      className="w-full bg-[url(/get-bg.svg)] py-40 px-4 mt-10"
    >
      <div className="grid mx-auto max-w-screen-xl">
        <div className="z-10 self-center bg-transparent">
          <h2 data-aos="zoom-in-up" className="lg:mt-0">
            Turning Your Ideas Into Cutting-edge Technologies
          </h2>
        </div>

        <div className="grid gap-4 mt-10 w-full">
          <div className="py-10 mb-4 md:px-6 bg-white/50 collapse collapse-arrow">
            <input type="radio" name="services" defaultChecked />
            <h4 className="font-medium collapse-title">Software Development</h4>
            <div className="collapse-content">
              <div className="grid sm:grid-cols-2">
                <div className="flex flex-col justify-center items-start ml-4 max-w-md">
                  <p className="text-lg">
                    With a keen focus on your business objectives, we transform
                    your unique ideas into robust, responsive websites that not
                    only meet industry standards but also provide an immersive
                    and engaging user experience.
                  </p>

                  <BookConsultationButton />
                </div>
                <div className="relative p-4 mt-6 h-96 sm:mt-0">
                  <Image
                    src={"/images/software-design.jpg"}
                    alt="image"
                    layout="fill"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="py-10 md:px-6 bg-white/50 collapse collapse-arrow">
            <input type="radio" name="services" />
            <h4 className="font-medium collapse-title">
              Web Design & Development
            </h4>
            <div className="collapse-content">
              <div className="grid sm:grid-cols-2">
                <div className="flex flex-col justify-center items-start ml-4 max-w-md">
                  <p className="text-lg">
                    Our expert designers are dedicated to enhancing your online
                    presence by creating visually stunning and user-centric
                    websites that not only captivate visitors but also drive
                    conversions.
                  </p>

                  <BookConsultationButton />
                </div>
                <div className="relative p-4 mt-6 h-96 sm:mt-0">
                  <Image
                    src={"/images/software-design.jpg"}
                    alt="image"
                    layout="fill"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="py-10 md:px-6 bg-white/50 collapse collapse-arrow">
            <input type="radio" name="services" />
            <h4 className="font-medium collapse-title">
              Web3 & BlockChain Development
            </h4>
            <div className="collapse-content">
              <div className="grid sm:grid-cols-2">
                <div className="flex flex-col justify-center items-start ml-4 max-w-md">
                  <p className="text-lg">
                    Leverage the transformative power of blockchain technology
                    with our comprehensive development services, tailored to
                    your specific industry needs, ensuring secure, transparent,
                    and efficient solutions.
                  </p>
                  <BookConsultationButton />
                </div>
                <div className="relative p-4 mt-6 h-96 sm:mt-0">
                  <Image
                    src={"/images/software-design.jpg"}
                    alt="image"
                    layout="fill"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="py-10 md:px-6 bg-white/50 collapse collapse-arrow">
            <input type="radio" name="services" />
            <h4 className="font-medium collapse-title">
              Mobile App Development
            </h4>
            <div className="collapse-content">
              <div className="grid sm:grid-cols-2">
                <div className="flex flex-col justify-center items-start ml-4 max-w-md">
                  <p className="text-lg">
                    We specialize in crafting cutting-edge mobile applications
                    that not only meet but exceed user expectations, offering
                    intuitive interfaces, seamless functionality, and
                    exceptional performance to keep your audience engaged and
                    satisfied.
                  </p>

                  <BookConsultationButton />
                </div>
                <div className="relative p-4 mt-6 h-96 sm:mt-0">
                  <Image
                    src={"/images/software-design.jpg"}
                    alt="image"
                    layout="fill"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="py-10 md:px-6 collapse collapse-arrow bg-white/50">
            <input type="radio" name="services" />
            <h4 className="font-medium collapse-title">
              Smart Contract Development
            </h4>
            <div className="collapse-content">
              <div className="grid sm:grid-cols-2">
                <div className="flex flex-col justify-center items-start ml-4 max-w-md">
                  <p className="text-lg">
                    Streamline and automate trust-based transactions and
                    agreements in your business processes with our customized
                    smart contract solutions built on blockchain technology,
                    enhancing transparency and security while reducing friction.
                  </p>

                  <BookConsultationButton />
                </div>
                <div className="relative p-4 mt-6 h-96 sm:mt-0">
                  <Image
                    src={"/images/software-design.jpg"}
                    alt="image"
                    layout="fill"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="py-10 md:px-6 collapse collapse-arrow bg-white/50">
            <input type="radio" name="services" />
            <h4 className="font-medium collapse-title">NFT Marketplace</h4>
            <div className="collapse-content">
              <div className="grid sm:grid-cols-2">
                <div className="flex flex-col justify-center items-start ml-4 max-w-md">
                  <p className="text-lg">
                    We will develop your NFT Marketplace, IDO Launchpads, P2E
                    platforms and Launch end-to-end by creating a killer smart
                    contract backend, optimized and seamless UI/UX and generate
                    your unique collection.
                  </p>

                  <BookConsultationButton />
                </div>
                <div className="relative p-4 mt-6 h-96 sm:mt-0">
                  <Image
                    src={"/images/software-design.jpg"}
                    alt="image"
                    layout="fill"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="py-10 md:px-6 collapse collapse-arrow bg-white/50">
            <input type="radio" name="services" />
            <h4 className="font-medium collapse-title">ERC-20 tokens</h4>
            <div className="collapse-content">
              <div className="grid sm:grid-cols-2">
                <div className="flex flex-col justify-center items-start ml-4 max-w-md">
                  <p className="text-lg">
                    We will develop and help you launch a custom ERC-20 token
                    with burn, buyback, tax, reflections, rebase or any other
                    feature you may need. We will also work out robust and
                    sustainable tokenomics and help you setup a whitepaper for
                    your token.
                  </p>

                  <BookConsultationButton />
                </div>
                <div className="relative p-4 mt-6 h-96 sm:mt-0">
                  <Image
                    src={"/images/software-design.jpg"}
                    alt="image"
                    layout="fill"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="py-10 md:px-6 collapse collapse-arrow bg-white/50">
            <input type="radio" name="services" />
            <h4 className="font-medium collapse-title">DEFI Development</h4>
            <div className="collapse-content">
              <div className="grid sm:grid-cols-2">
                <div className="flex flex-col justify-center items-start ml-4 max-w-md">
                  <p className="text-lg">
                    Decentralized Exchanges, DEX Aggregators, Lending &
                    Borrowing platforms, Yield farming applications, LP Lockers.
                    We help you work out, create and launch complicated DEFI
                    products that will impress even the savviest crypto
                    enthusiast.
                  </p>

                  <BookConsultationButton />
                </div>
                <div className="relative p-4 mt-6 h-96 sm:mt-0">
                  <Image
                    src={"/images/software-design.jpg"}
                    alt="image"
                    layout="fill"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="py-10 md:px-6 collapse collapse-arrow bg-white/50">
            <input type="radio" name="services" />
            <h4 className="font-medium collapse-title">
              Smart Contract Audit Services
            </h4>
            <div className="collapse-content">
              <div className="grid sm:grid-cols-2">
                <div className="flex flex-col justify-center items-start ml-4 max-w-md">
                  <p className="text-lg">
                    Ensure the integrity, security, and compliance of your
                    blockchain projects with our meticulous smart contract
                    audits, providing your stakeholders with the confidence and
                    peace of mind they deserve.
                  </p>

                  <BookConsultationButton />
                </div>
                <div className="relative p-4 mt-6 h-96 sm:mt-0">
                  <Image
                    src={"/images/software-design.jpg"}
                    alt="image"
                    layout="fill"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="py-10 md:px-6 collapse-arrow bg-white/50 collapse">
            <input type="radio" name="services" />
            <h4 className="font-medium collapse-title">
              Search Engine Optimization (SEO)
            </h4>
            <div className="collapse-content">
              <div className="grid sm:grid-cols-2">
                <div className="flex flex-col justify-center items-start ml-4 max-w-md">
                  <p className="text-lg">
                    Boost your online visibility and drive organic traffic to
                    your website with our proven SEO strategies, helping your
                    business rise to the top of search engine rankings and reach
                    a broader audience.
                  </p>

                  <BookConsultationButton />
                </div>
                <div className="relative p-4 mt-6 h-96 sm:mt-0">
                  <Image
                    src={"/images/software-design.jpg"}
                    alt="image"
                    layout="fill"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
