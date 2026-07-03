import PrimeButton from "@/components/shared/ui/PimeButton";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="w-full overflow-hidden">
      <div className=" lg:pt-10 flex flex-col md:flex-row items-stretch justify-between md:gap-4">
        {/* LEFT TEXT CONTENT */}
        <div className="flex-1 flex flex-col justify-center items-start pt-10 md:pt-12 z-10 pb-6 md:pb-24">
          <h1 className="text-[36px] sm:text-5xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-black text-left font-sans">
            FIND CLOTHES <br />
            THAT MATCHES <br />
            YOUR STYLE
          </h1>

          <p className="mt-5 text-gray-500 text-sm sm:text-base max-w-lg text-left leading-relaxed">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div className="mt-6 md:mt-8  w-full sm:w-auto">
            <PrimeButton text="Shop Now" />
          </div>

        </div>

        {/* RIGHT IMAGE CONTAINER (Flushed to bottom) */}
        <div className="flex-1 relative min-h-75  w-full flex items-end">
          <div className="relative w-full h-95 sm:h-120 md:h-95 lg:h-145">
            <Image
              src="/banner.png"
              alt="banner models"
              fill
              priority
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
