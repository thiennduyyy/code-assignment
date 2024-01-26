
import React, { useEffect, useState } from 'react'
import ContentCard from '../../components/ContentCard'

const Products: React.FC = () => {
    const [search, setSearch] = useState('')
    const [products, setProducts] = useState([])
    const [amount, setAmount] = useState(20)
    
    useEffect(() => {
        function loadMore(){
            //checking if page is scrolled to the end
            if ((document.scrollingElement && window.innerHeight + document.documentElement.scrollTop + 1 >= document.scrollingElement.scrollHeight) && search === '') {
                setAmount(prev => (prev + 20))
            }
        }
        window.addEventListener('scroll', loadMore)

        //if searching for some keywords, page will not load more item when scrolled to the end
        let fetchLink = search === '' ? `https://dummyjson.com/products?limit=${amount}&select=title,price,description,brand,thumbnail` : `https://dummyjson.com/products/search?q=${search}&select=title,price,description,brand,thumbnail`
        fetch(fetchLink)
            .then(res => res.json())
            .then(res => {
            setProducts(res.products)
            })

        //remove event listener when unmount    
        return () => window.removeEventListener('scroll', loadMore)
    }, [amount, search])
    
  return (
    <div className="w-full">
        <div className='flex w-1/5 fixed top-0 left-2 mt-5'>
            <p className='my-auto'>Search: </p>
            <input 
              className='h-10 border-solid border-black border-2 rounded-lg mx-auto flex-1 ml-5 px-2 focus:outline-none' 
              placeholder='Search here ...' 
              value={search} 
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            ></input>
        </div>
        <div className='flex flex-col mt-5'>
            {products.map((product: any, index: number) => (<ContentCard product={product} key={index}/>))}
        </div>
    </div>
  );
}

export default Products;