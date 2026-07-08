import React from "react";
import Image from "next/image";

const CustomerCare = () => {
  const Elements = [
    {
      id: 1,
      title: "Take care with love",
      description:
        "We take care your package with full of attention and of course full of love. We want to make sure you’ll receive your package like you receive your birthday gift.",
      image: "/customerCare/Love_circle.png",
    },
    {
      id: 2,
      title: "Friendly Customer Service",
      description:
        "You do not need to worry when you want to check your package. We will always answer whatever your questions. Just click on the chat icon and we will talk.",
      image: "/customerCare/Call_circle_icon.png",
    },
    {
      id: 3, // Fixed duplicate id from 2 to 3
      title: "Refund Process",
      description:
        "Refund is a such bad experience and we don’t want that thing happen to you. But when it’s happen we will make sure you will through smooth and friendly process.",
      image: "/customerCare/Refund_circle_icon.png",
    },
  ];

  return (
    <section className="w-full standard-width py-10 text-primary">
      {/* Main Section Header */}
      <h2 className="text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.15] tracking-tight max-w-2xl mb-12 md:mb-16">
        Why you&apos;ll love to shop on our website
      </h2>

      {/* Grid Container: Stacks on mobile, splits into 3 columns on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        {Elements.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start gap-4 md:gap-5"
          >
            {/* Circular Icon Container */}
            <div className="relative w-20 h-20 select-none">
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                className="w-full h-full object-contain"
                priority
              />
            </div>

            {/* Feature Title */}
            <h3 className="text-xl md:text-2xl font-medium tracking-tight text-primary mt-1 ">
              {item.title}
            </h3>

            {/* Feature Description */}
            <p className="text-paragraph">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerCare;
