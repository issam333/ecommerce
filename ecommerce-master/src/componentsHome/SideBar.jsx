import React, { useRef, useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";

const SideBar = () => {

    const [value, setValue] = useState(2000);
    const sliderRef = useRef(null);
    const handleSliderChange = (e) => {
        const slider = sliderRef.current;
        const rect = slider.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const newValue = Math.min(Math.max(offsetX / rect.width, 0), 1) * 4000;
        setValue(Math.round(newValue));
    };

    return (
        <div className=' w-[20%] bg-[#ECECECB5] mx-3 px-3 '>
            <div className=' border-b'>
                <div className='px-2 mb-8'>
                    <h1 className='font-serif text-[20px]'>Categories</h1>
                </div>
                <div className=' flex my-2'>
                    <input className=' w-8' type="checkbox" />
                    <p className='font-serif'>categories</p>
                </div>
                <div className=' flex my-2'>
                    <input className=' w-8' type="checkbox" />
                    <p className='font-serif'>categories</p>
                </div>
                <div className=' flex my-2'>
                    <input className=' w-8' type="checkbox" />
                    <p className='font-serif'>categories</p>
                </div>
                <div className=' flex my-2'>
                    <input className=' w-8' type="checkbox" />
                    <p className='font-serif'>categories</p>
                </div>
            </div>
            <div className='  border-b'>
                <div className='px-2 mb-8'>
                    <h1 className='font-serif text-[20px]'>Brand</h1>
                </div>
                <div className=' flex my-2'>
                    <input className=' w-8' type="checkbox" />
                    <p className='font-serif'>categories</p>
                </div>
                <div className=' flex my-2'>
                    <input className=' w-8' type="checkbox" />
                    <p className='font-serif'>categories</p>
                </div>
                <div className=' flex my-2'>
                    <input className=' w-8' type="checkbox" />
                    <p className='font-serif'>categories</p>
                </div>
                <div className=' flex my-2'>
                    <input className=' w-8' type="checkbox" />
                    <p className='font-serif'>categories</p>
                </div>
            </div>
            <div className='  border-b'>
                <div className='px-2 mb-8'>
                    <h1 className='font-serif text-[20px]'>Color</h1>
                </div>
                <div className=' flex my-3 '>
                    <div className=' w-8 h-8 border rounded-full mr-2 flex justify-center items-center'>
                        <FaPlus />
                    </div>
                    <div className=' w-8 h-8 border rounded-full mr-2 bg-[#31A6B6]'></div>
                    <div className=' w-8 h-8 border rounded-full mr-2 bg-[#75478B]'></div>
                    <div className=' w-8 h-8 border rounded-full mr-2 bg-[#488945]'></div>
                    <div className=' w-8 h-8 border rounded-full mr-2 bg-[#D93C65]'></div>
                    <div className=' w-8 h-8 border rounded-full mr-2 bg-[#006EF0] flex justify-center items-center'>
                        <IoMdCheckmark color=' white' fontWeight={'bold'} />
                    </div>
                </div>
            </div>
            <div className='  border-b'>
                <div className='px-2 mb-8'>
                    <h1 className='font-serif text-[20px]'>Price</h1>
                </div>
                <div className="w-full flex flex-col items-center">
                    <div className="flex justify-between w-full text-red-500 text-sm font-semibold mb-4">
                        <span className='font-serif'>-0</span>
                        <span className='font-serif'>+4000</span>
                    </div>
                    <div
                        ref={sliderRef}
                        className="relative w-full h-[5px] bg-red-600 rounded-lg cursor-pointer "
                        onMouseDown={(e) => handleSliderChange(e)} // Handle mouse click to change slider value
                        onMouseMove={(e) => {
                            if (e.buttons === 1) handleSliderChange(e); // Handle drag by checking if the mouse button is down
                        }}
                    >
                        <div
                            className="absolute h-full bg-red-600 "
                            style={{ width: `${(value / 4000) * 100}%`}} // Dynamic width based on value
                        ></div>

                        <div
                            className="absolute top-1/2 transform -translate-y-1/2 w-1 h-4 bg-red-600 border-white shadow"
                            style={{ left: `calc(${(value / 4000) * 100}%)`}} // Position thumb based on value
                        ></div>
                    </div>
                    <div className="mt-4 text-sm font-semibold text-gray-600 font-serif">
                        Value: {value}
                    </div>
                </div>
            </div>
            <div className='  border-b'>
                <div className='px-2 mb-8'>
                    <h1 className='font-serif text-[20px]'>Fabric</h1>
                </div>
                <div className=' flex my-2'>
                    <input className=' w-8' type="checkbox" />
                    <p className='font-serif'>categories</p>
                </div>
                <div className=' flex my-2'>
                    <input className=' w-8' type="checkbox" />
                    <p className='font-serif'>categories</p>
                </div>
                <div className=' flex my-2'>
                    <input className=' w-8' type="checkbox" />
                    <p className='font-serif'>categories</p>
                </div>
                <div className=' flex my-2'>
                    <input className=' w-8' type="checkbox" />
                    <p className='font-serif'>categories</p>
                </div>
            </div>
        </div>
    )
}

export default SideBar