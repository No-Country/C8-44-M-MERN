import React from 'react'

interface Props {
  data: {
    frequency: string;
    category: string;
    description: string;
    priority: number
  }
}

function Details({data}: Props) {
  const  { frequency, category, description , priority } = data
  return (
    <div className="flex flex-col flex-wrap w-full gap-2 text-white">
      <div className="flex w-full gap-2">
        <div className="bg-orange-300 rounded-lg w-full p-3 text-center">
          <span className="italic font-bold">Frecuency</span>
          <p>{ frequency }</p>
        </div>
        <div className="bg-orange-300 rounded-lg w-full p-3 text-center">
          <span className="italic font-bold">Category</span>
          <p>{ category }</p>
        </div>
      </div>    
     <div className="bg-orange-300 rounded-lg w-full p-3 text-center">
        <span className="italic font-bold">Description</span>
        <p>{ description }</p>
     </div>
    <p className="bg-orange-500 rounded-lg w-full p-3 text-center font-bold">Priority: {priority}</p>
    </div>
  )
}

export default Details