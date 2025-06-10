
import React from 'react'
import AddToCart from './AddToCart'


const ProductCard = () => {
  
  return (
     //<div className={styles.card}> using CSS module for styling
    //tailwindcss for styling be1low
    <div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-600'>
   
      <AddToCart />
      
    </div>
  )
}

export default ProductCard
