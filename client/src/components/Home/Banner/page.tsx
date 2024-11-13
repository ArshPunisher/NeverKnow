// components/Banner.tsx
import React from 'react';

// Import each image file
import img1 from '../../../../assets/images/man_img.webp';
import img2 from '../../../../assets/images/ethnic.webp';
import img3 from '../../../../assets/images/sale.webp';
import img4 from '../../../../assets/images/models.webp';
import img5 from '../../../../assets/images/red_sale.webp';
import img6 from '../../../../assets/images/fashion_sale.webp';
import img7 from '../../../../assets/images/woolen.webp';
import Carousel from '../Carousel/page';

const Banner: React.FC = () => {
    // Pass the imported images as an array
    const images = [img1, img2, img3, img4, img5, img6, img7];

    return (
        <div>
            <Carousel images={images} />
        </div>
    );
};

export default Banner;
