import React from 'react'

const About = () => {
    return (
        <section id='about' >
           <div className="sm:flex items-center max-w-7xl mx-auto w-full  py-24 px-5">
           <div className="sm:w-1/2 p-5">
                <div className="image object-center text-center" data-aos="fade-up">
                    <img src="https://i.imgur.com/WbQnbas.png" />
                </div>
            </div>
            <div className="sm:w-1/2">
                <div className="text" >
                    <p className="border-b-2 border-primary uppercase w-fit" data-aos="fade-up">
                        About us
                    </p>
                    <h2 className="my-4 font-semibold font-teko text-4xl " data-aos="fade-up">
                        About <span className="text-primary font-teko">Our Company</span>
                    </h2>
                    <p data-aos="fade-up">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
                        commodi doloremque, fugiat illum magni minus nisi nulla numquam
                        obcaecati placeat quia, repellat tempore voluptatum.
                    </p>
                    <p className='mt-5' data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit accusamus praesentium consectetur voluptates porro molestias ab adipisci quis deserunt quo architecto modi beatae optio impedit itaque eligendi, aut totam iste!</p>
                </div>
            </div>
           </div>
        </section>

    )
}

export default About
