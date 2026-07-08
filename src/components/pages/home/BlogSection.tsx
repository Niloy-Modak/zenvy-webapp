import SecondaryButton from "@/components/shared/ui/SecondaryButton";
import Image from "next/image";
import React from "react";

const BlogSection = () => {
  const BlogElements = {
    image: "/clothes_collection.jpg",
    shortHeadLine: "From The Blog",
    headLine: "How to combine your daily outfit to looks fresh and cool.",
    description:
      "Maybe you don’t need to buy new clothes to have nice, cool, fresh looking outfit everyday. Maybe what you need is to combine your clothes collections. Mix and match is the key.",
  };

  return (
    <section className="w-full standard-width pb-12 md:pb-20 text-primary">
      {/* Small Top Heading */}
      <h2 className="text-xl md:text-2xl font-normal mb-6 md:mb-7.5">
        {BlogElements.shortHeadLine}
      </h2>

      <div className="flex flex-col lg:flex-row gap-7 lg:gap-16 lg:items-stretch">
        {/* FIX: Removed the flex and min-h-[300px] classes here */}
        <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden bg-gray-100">
          <Image
            src={BlogElements.image}
            alt="Blog featured image"
            width={800}
            height={600}
            // FIX: h-auto on mobile prevents the gray gap, lg:h-full stretches it on desktop
            className="w-full h-auto lg:h-full object-cover"
          />
        </div>

        {/* Text & Button Container */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-4 lg:gap-6  lg:py-0">
          <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.1] tracking-tight">
            {BlogElements.headLine}
          </h3>

          <p className="text-paragraph">{BlogElements.description}</p>

          <div className="mt-4">
            <SecondaryButton text="READ MORE" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
