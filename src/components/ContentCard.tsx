import React from 'react'

type ContentProps = {
  product : {
    title: string,
    brand: string,
    thumbnail: string,
    price: number,
    description: string
  }
}

const ContentCard: React.FC<ContentProps> = ({ product }: ContentProps) => {
  const {title, brand, thumbnail, price, description} = product
  return (
    <div className='flex w-2/5 mb-4 border-solid border-black border-2 rounded-lg mx-auto bg-slate-100'>
        <img src={`${thumbnail}`} className='h-40 w-48 object-fill rounded-tl-lg rounded-bl-lg' alt='thumb'/>
        <div className='flex flex-col justify-around'>
            <h1 className='text-left ml-4 text-xl font-bold'>{title}</h1>
            <p className='text-left ml-4'>{brand}</p>
            <p className='text-left ml-4 font-bold'>{price}$</p>
            <p className='text-left ml-4'>{description}</p>
        </div>
    </div>
  )
}

export default ContentCard