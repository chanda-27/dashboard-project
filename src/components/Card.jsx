import React, { useState } from 'react';
import { ImCross } from 'react-icons/im';

const Card = ({mobile}) => {
    let {id,image,title,description,price}=mobile
const[buyItems,setBuyItems]=useState([])
    
    return (
        <div className='flex justify-between items-center gap-4 bg-white shadow-sm rounded-xl p-4 my-4 '>
            <div className='flex items-center'>
                <img  src={image} alt="" className='w-20 h-20' />
                <div className='ml-4 space-y-2'>
                    <h1 className='text-3xl font-bold'>{title}</h1>
                    <p>{description}</p>
                    <span className='text-xl font-semibold'>Price$ : {price.amount}</span><br />
                    <button onClick={()=>{setBuyItems(...buyItems,id)}} className='text-white text-sm bg-purple-600 px-4 py-1  mt-2 rounded-xl'>Buy now</button>
                </div>
            </div>
            <div className=''><ImCross /></div>
            
        </div>
    );
};

export default Card;