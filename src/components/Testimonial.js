import {FiChevronLeft,FiChevronRight} from 'react-icons/fi';
import Card from "./Card";
import { useState } from 'react';
export default function Testimonial(props){
    let reviews=props.reviews;
    const[index,setIndex]=useState(0);
    function leftShiftHandler(){
        if(index-1<0)
        {
            setIndex(reviews.length -1);
        }
        else
        {
            setIndex(index - 1);
        }
    }
    function rightShiftHandler(){
        if(index+1>=reviews.length)
        {
            setIndex(0);
        }
        else
        {
            setIndex(index+1);
        }
    }
    function surpriseHandler(){
        let ind=Math.floor(Math.random()*reviews.length);
        setIndex(ind);
    }
    
    return(
        <div className='flex flex-col items-center  bg-[#063852] max-w-[80%] md:max-w-[55%] p-4 rounded-md  my-10 gap-2 hover:shadow-lg'>
            <Card review={reviews[index]}></Card>
            <div className='flex text-2xl mt-5 gap-4 text-blue-400 font-bold'>
                <button onClick={leftShiftHandler} className='cursor-pointer hover:text-blue-600'><FiChevronLeft/></button>
                <button onClick={rightShiftHandler} className='cursor-pointer hover:text-blue-600'><FiChevronRight/></button>
            </div>
            <div>
                <button onClick={surpriseHandler} className='bg-blue-600 hover:bg-blue-800 transition-all duration-200 
                font-semibold px-10 py-2 rounded-lg my-4 text-white'>Surprise me</button>
            </div>
        </div>
    )
}