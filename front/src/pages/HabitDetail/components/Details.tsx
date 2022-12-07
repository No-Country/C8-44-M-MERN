import React from 'react';

     interface data {
        frecuency: string;
        category: string;
        description: string;
     };

function Details({ frecuency, category, description }: data) {
   //  const { frecuency, category, description } = data;
   return (
      <div className='flex flex-col flex-wrap w-full gap-2 text-white lg:grid lg:w-1/2'>
         <div className='flex w-full gap-2 lg:grid '>
            <div className='bg-orange-300 rounded-lg w-full p-3 text-center lg:bg-white lg:text-black lg:lg-border-solid lg:border lg:flex lg:gap-2 lg:my-2'>
               <span className='italic font-bold'>Frecuency:</span>
               <p>{frecuency}</p>
            </div>
            <div className='bg-orange-300 rounded-lg w-full p-3 text-center lg:bg-white lg:text-black lg:lg-border-solid lg:border lg:flex lg:gap-2 lg:my-2'>
               <span className='italic font-bold'>Category:</span>
               <p>{category}</p>
            </div>
         </div>
         <div className='bg-orange-300 rounded-lg w-full p-3 text-center lg:bg-white lg:text-black lg:lg-border-solid lg:border lg:flex lg:gap-2 md:my-2'>
            <span className='italic font-bold'>Description: </span>
            <p>{description}</p>
         </div>
      </div>
   );
}

export default Details;
