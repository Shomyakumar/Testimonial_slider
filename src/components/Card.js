import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa';


export default function Card(props){
    let review=props.review;
    return (
        <div className='flex flex-col items-center relative bg-[#063852] text-white  gap-2'>
            <div className='lg:absolute top-[-4rem] left-[1rem] z-10'>
                <img className='aspect-square rounded-full w-[140px] h-[140px] z-20' src={review.image} alt="im"/>
            </div>
            <div>
                <p className='text-3xl font-semibold text-[#fa9908]'>{review.name}</p>
            </div>
            <div>
                <p className='uppercase '>{review.job}</p>
            </div>
            <div className='text-[#838180]'>
                <FaQuoteLeft></FaQuoteLeft>
            </div>
            <div className="text-center text-slate-300">
                {review.text}
            </div>
            <div  className='text-[#838180]'>
                <FaQuoteRight></FaQuoteRight>
            </div>
            
        </div>
    )
}