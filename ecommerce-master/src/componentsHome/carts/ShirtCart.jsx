import React from 'react'
import ShirtImage from '../../images/shirt.png'
const ShirtCart = () => {
    return (
        <div className='w-[250px] flex flex-col items-center border p-2 rounded-md'>
            <div>
                <img className=' w-[250px] ' src={ShirtImage} alt="shirt" />
            </div>
            <div>
                <h1 className='text-[25px] font-serif'>Blazer</h1>
            </div>
            <div className='text-center'>
                <p className='font-serif text-[20px] '>Slim fit blazer made of premium linen blend. </p>
            </div>
            <div>
                <p className='font-serif text-[20px] '>$89.00</p>
            </div>
            <div className='flex'>
                <div className=' w-10 h-10 rounded-full bg-black mx-1'></div>
                <div className=' w-10 h-10 rounded-full bg-blue-900 mx-1'></div>
            </div>
        </div>
    )
}

export default ShirtCart