import React from 'react';

interface data {
  frequency: string;
  category: string;
  description: string;
  isDone: boolean;
}

function Details({ frequency, category, description, isDone }: data) {
  //  const { frequency, category, description } = data;
  return (
    <div className="flex flex-col flex-wrap w-full gap-2 text-white lg:grid lg:w-1/2">
      <div className="bg-secondary-regular dark:bg-secondary-dark rounded-lg w-full p-3 text-center lg:bg-white lg:text-black lg:lg-border-solid lg:border lg:flex lg:gap-2 md:my-2">
        <span className="italic font-bold">Description: </span>
        <p className="dark:text-secondary-light">{description}</p>
      </div>
      <div className="flex w-full gap-2 lg:grid ">
        <div className="bg-secondary-regular dark:bg-secondary-dark rounded-lg w-full p-3 text-center lg:bg-white lg:text-black lg:lg-border-solid lg:border lg:flex lg:gap-2 lg:my-2">
          <span className="italic font-bold">Category:</span>
          <p className="dark:text-secondary-light">{category}</p>
        </div>
        <div className="bg-secondary-regular dark:bg-secondary-dark rounded-lg w-full p-3 text-center lg:bg-white lg:text-black lg:lg-border-solid lg:border lg:flex lg:gap-2 lg:my-2">
          <span className="italic font-bold">Frequency:</span>
          <p className="dark:text-secondary-light">{frequency}</p>
        </div>
      </div>

      <div className="bg-secondary-regular dark:bg-secondary-dark rounded-lg w-full p-3 text-center lg:bg-white lg:text-black lg:lg-border-solid lg:border lg:flex lg:gap-2 md:my-2">
        <span className="italic font-bold">Completed: </span>
        <p className="dark:text-secondary-light">{JSON.stringify(isDone)}</p>
      </div>
    </div>
  );
}

export default Details;
