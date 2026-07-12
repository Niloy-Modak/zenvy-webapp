import React from 'react';
import Image from 'next/image';

interface DressStyle {
    id: number;
    title: string;
    cover_image: string;
    gridClass: string;
    text?: string;
}

const DressStyleSection = () => {
    const styles: DressStyle[] = [
        { 
            id: 1, 
            title: "Casual", 
            cover_image: "/dress_style/smart_casual.webp", 
            gridClass: "md:col-span-5",
            text: "text-primary" 
        },
        { 
            id: 2, 
            title: "Formal", 
            cover_image: "/dress_style/formal.png",
            gridClass: "md:col-span-7",
            text: "text-primary" 
        },
        { 
            id: 3, 
            title: "Minimalist", 
            cover_image: "/dress_style/minimalist.jpg", 
            gridClass: "md:col-span-7", 
            text: "text-white"
        },
        { 
            id: 4, 
            title: "Streetwear", 
            cover_image: "/dress_style/streetwear.jpg", 
            gridClass: "md:col-span-5",
            text: "text-white" 
        }
    ];

    return (
        <section className="standard-width my-10 md:my-15 xl:my-20">
            <div className="bg-background rounded-[40px] p-6 md:p-16">
                <h2 className="text-3xl md:text-5xl  font-extrabold text-center mb-8 md:mb-14 text-primary uppercase tracking-wide">
                    Browse by dress style
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
                    {styles.map((style) => (
                        <div
                            key={style.id}
                            className={`relative bg-white rounded-3xl h-50 md:h-72.25 overflow-hidden ${style.gridClass}`}
                        >
                            <h3 className={`absolute top-6 right-6 md:top-8 md:right-9 text-2xl md:text-3xl font-bold z-10 ${style.text}`}>
                                {style.title}
                            </h3>
                            
                            {/* Next.js Image component filling the parent area */}
                            <Image
                                src={style.cover_image}
                                alt={style.title}
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DressStyleSection;