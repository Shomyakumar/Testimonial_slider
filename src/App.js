import React from "react";
import Testimonial from "./components/Testimonial";
import reviews from './data'
const App = () => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center w-[100vw] min-h-[100vh] bg-[#defcfc]">
            <h1 className="text-4xl font-bold text-[#011A27] my-4">Our Testimonials</h1>
            <div className="h-[3px] w-[20%] bg-[#35b3cd] my-4"></div>
            <Testimonial reviews={reviews}/>
        </div>

    </div>
  );
};

export default App;
