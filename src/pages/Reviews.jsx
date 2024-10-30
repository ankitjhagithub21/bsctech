import React from 'react'

const Reviews = () => {
    return (
        <section id="reveiws">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20" data-aos="fade-up">
                <h2 className=" mb-4 bg-primary text-white  mx-auto px-4 py-2 rounded-lg md:mx-auto text-sm font-semibold tracking-widest  uppercase  w-fit">
                            Reviews
                        </h2>
                    <h1 class="text-3xl font-semibold tracking-wide font-teko">What Our Client Says ? </h1>
                </div>
                <div class="flex flex-wrap">
                    <div class="p-4 lg:w-1/3 md:w-1/2 w-full" data-aos="zoom-in">
                        <div class="flex rounded-lg h-full border border-primary  p-4 flex-col">
                            <div class="flex items-center mb-3 gap-2">
                               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1lLrFvgnsMNvUcDd83Tpc-s48XBu_NnT89Q&s" alt="man" className='w-12 h-12 object-cover rounded-full'/>
                                <h2 class="text-lg  ">John Doe</h2>
                            </div>
                            <div class="flex-grow">
                                <p class="leading-relaxed text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, sit! Vitae iure qui ad amet, natus reiciendis labore dolorem ducimus obcaecati.</p>
                               
                            </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/3 md:w-1/2 w-full" data-aos="zoom-in">
                        <div class="flex rounded-lg h-full border border-primary  p-4 flex-col">
                            <div class="flex items-center mb-3 gap-2">
                               <img src="https://img.freepik.com/free-photo/portrait-young-girl-smiling_23-2149260597.jpg?semt=ais_hybrid" alt="man" className='w-12 h-12 object-cover rounded-full'/>
                                <h2 class="text-lg">Olivia Johnson</h2>
                            </div>
                            <div class="flex-grow">
                                <p class="leading-relaxed text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, sit! Vitae iure qui ad amet, natus reiciendis labore dolorem ducimus obcaecati.</p>
                               
                            </div>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/3 md:w-1/2 w-full" data-aos="zoom-in">
                        <div class="flex rounded-lg h-full border border-primary  p-4 flex-col">
                            <div class="flex items-center mb-3 gap-2">
                               <img src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg" alt="man" className='w-12 h-12 object-cover rounded-full'/>
                                <h2 class="text-lg  ">Jane Smith</h2>
                            </div>
                            <div class="flex-grow">
                                <p class="leading-relaxed text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, sit! Vitae iure qui ad amet, natus reiciendis labore dolorem ducimus obcaecati.</p>
                               
                            </div>
                        </div>
                    </div>
                    
                   
                </div>
            </div>
        </section>
    )
}

export default Reviews
