// components/Banner.tsx
import React from 'react';

// Import each image file
import img1 from '../../../../assets/images/man_img.webp';
import img2 from '../../../../assets/images/ethnic.webp';
import img3 from '../../../../assets/images/dazzling.avif';
import img4 from '../../../../assets/images/fashion_sale.webp';
import img5 from '../../../../assets/images/red_sale.webp';
import img6 from '../../../../assets/images/mehnoor.avif';
import img8 from '../../../../assets/images/nykaa.avif';
import img7 from '../../../../assets/images/woolen.webp';
import celebration from '../../../../assets/images/celebration.webp';
import Carousel from '../Carousel/page';
import Image from 'next/image';

const Banner: React.FC = () => {
    // Pass the imported images as an array
    const images = [img1, img8, img3, img4, img2, img5, img6, img7];

    return (
        <div>
          <Carousel images={images} />
          <div className="mt-2">
            <Image src={celebration} alt="Celebration Banner" layout="responsive" />
          </div>
        </div>
      );
    };

export default Banner;
