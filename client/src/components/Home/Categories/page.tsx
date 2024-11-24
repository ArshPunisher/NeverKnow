import React from 'react'
import ProductCard from '../ProductCard/page';
import lipstick from '../../../../assets/images/nykaa/PinkLip.avif'
import liquidLip from '../../../../assets/images/nykaa/liquidLipStick.avif'
import lipGlos from '../../../../assets/images/nykaa/lipGlos.avif'
import foundation from '../../../../assets/images/nykaa/foundation.avif'
import Lqfoundation from '../../../../assets/images/nykaa/liquidFoundation.avif'

const products = [
    {
      image: liquidLip,
      name: "Nykaa Matte To Last! Transferproof Liquid Lipstick",
      mrp: 675,
      discount: 20,
    },
    {
      image: lipGlos,
      name: "Nykaa Gloss To Last! Transferproof Lipstick",
      mrp: 575,
      discount: 23,
    },
    {
      image: lipstick,
      name: "Nykaa Cosmetics Get Cheeky Blush Stick",
      mrp: 599,
      discount: 10,
    },
    {
      image: foundation,
      name: "Nykaa foundation - Confetti Blast",
      mrp: 849,
      discount: 24,
    },
    {
      image: Lqfoundation,
      name: "Nykaa natural foundation - Liquid Foundation",
      mrp: 749,
      discount: 21,
    },
  ];

const Categories = () => {
    return (
        <div className="my-3 px-2 md:px-4 lg:px-6 bg-gray-50">
            <div id="Nykaa" className="p-3 md:p-5 lg:p-8 bg-white rounded-lg shadow-md overflow-hidden">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-3 md:mb-5">Nykaa Makeup</h2>
                <ProductCard products={products} />
            </div>
        </div>
    );
    
}

export default Categories
