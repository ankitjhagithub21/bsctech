import React from 'react'

const Services = () => {
    return (
        <section id="whatwedo" data-aos="fade-up">
            <div className="py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className=" mb-4 bg-primary text-white  px-4 py-2 rounded-lg md:w-64 md:mx-auto text-sm font-semibold tracking-widest  uppercase  w-fit">
                            What We Do?
                        </h2>
                        <p className=" mt-4 font-teko text-3xl font-semibold sm:text-4xl">
                            We know tech, we know finance. We are fintech experts.
                        </p>
                        <p className="mt-4  max-w-2xl text-lg lg:mx-auto" data-aos="fade-up">
                            We know how to handle taxation for all the countried we operate in. We
                            care for our customers and help them manage cashflows.
                        </p>
                    </div>
                    <div className="mt-16">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <div className="relative" data-aos="fade-up">
                                <dt>
                                    <div className="md:absolute p-3 md:p-0 flex items-center justify-center md:h-12 h-auto w-20 md:w-12 rounded-md bg-primary-500 text-white">
                                        <img src="https://www.svgrepo.com/show/530439/api-interface.svg" />
                                    </div>
                                    <p className=" md:ml-16 ml-5 text-lg leading-6 font-semibold ">
                                        Powerful API
                                    </p>
                                </dt>
                                <dd className="mt-2 md:ml-16 ml-5 text-base ">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
                                    impedit perferendis suscipit eaque, iste dolor cupiditate
                                    blanditiis ratione.
                                </dd>
                            </div>
                            <div className="relative" data-aos="fade-up">
                                <dt>
                                    <div className="md:absolute p-3 md:p-0 flex items-center justify-center md:h-12 h-auto w-20 md:w-12 rounded-md bg-primary-500 text-white">
                                        <img src="https://www.svgrepo.com/show/331785/website-generic.svg" />
                                    </div>
                                    <p className=" md:ml-16 ml-5 text-lg leading-6 font-semibold ">
                                        Website Development
                                    </p>
                                </dt>
                                <dd className="mt-2 md:ml-16 ml-5 text-base ">
                                    {" "}
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
                                    impedit perferendis suscipit eaque, iste dolor cupiditate
                                    blanditiis ratione.
                                </dd>
                            </div>
                            <div className="relative" data-aos="fade-up">
                                <dt>
                                    <div className="md:absolute p-3 md:p-0 flex items-center justify-center md:h-12 h-auto w-20 md:w-12 rounded-md bg-primary-500 text-white">
                                        <img src="https://www.svgrepo.com/show/261947/seo-search.svg" className='' />
                                    </div>
                                    <p className=" md:ml-16 ml-5 text-lg leading-6 font-semibold ">
                                        Improve SEO
                                    </p>
                                </dt>
                                <dd className="mt-2 md:ml-16 ml-5 text-base ">
                                    {" "}
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
                                    impedit perferendis suscipit eaque, iste dolor cupiditate
                                    blanditiis ratione.
                                </dd>
                            </div>
                            <div className="relative" data-aos="fade-up">
                                <dt>
                                    <div className="md:absolute p-3 md:p-0 flex items-center justify-center md:h-12 h-auto w-20 md:w-12 rounded-md bg-primary-500 text-white">
                                        <img src="https://www.svgrepo.com/show/499816/database.svg" />
                                    </div>
                                    <p className=" md:ml-16 ml-5 text-lg leading-6 font-semibold ">
                                        Database Management
                                    </p>
                                </dt>
                                <dd className="mt-2 md:ml-16 ml-5 text-base">
                                    {" "}
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
                                    impedit perferendis suscipit eaque, iste dolor cupiditate
                                    blanditiis ratione.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Services
