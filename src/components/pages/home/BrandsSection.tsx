import React from 'react';
import Image from 'next/image';

const BrandsSection = () => {
    const brandsImages = [
        { id: 1, src: '/brands/versace.png', alt: 'versace' },
        { id: 2, src: '/brands/zara.png', alt: 'zara' },
        { id: 3, src: '/brands/gucci.png', alt: 'gucci' },
        { id: 4, src: '/brands/prada.png', alt: 'prada' },
        { id: 5, src: '/brands/calvin.png', alt: 'calvin' },
    ];

    return (
        <section className="w-full bg-black py-6 px-4 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-center md:justify-between gap-8 md:gap-4">
                {brandsImages.map((brand) => (
                    <div 
                        key={brand.id} 
                        className="relative h-8 w-28 sm:w-32 md:w-36 flex items-center justify-center object-contain brightness-0 invert"
                    >
                        {/* Replace with your preferred width/height if using static sizes */}
                        <Image
                            src={brand.src}
                            alt={brand.alt}
                            width={140}
                            height={35}
                            className="object-contain max-h-full max-w-full"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BrandsSection;