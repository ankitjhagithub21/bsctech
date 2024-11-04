import React from 'react';

// Sample services array
const services = [
  {
    title: "Powerful API",
    description:
      "Our API allows seamless integration and access to financial services, enabling businesses to grow efficiently.",
    icon: "https://www.svgrepo.com/show/530439/api-interface.svg",
  },
  {
    title: "Website Development",
    description:
      "We design and develop fast, responsive, and secure websites tailored to meet your business goals.",
    icon: "https://www.svgrepo.com/show/331785/website-generic.svg",
  },
  {
    title: "Improve SEO",
    description:
      "Boost your website's visibility and search ranking with our expert SEO services, driving more traffic to your site.",
    icon: "https://www.svgrepo.com/show/261947/seo-search.svg",
  },
  {
    title: "Database Management",
    description:
      "We offer robust database management services to store and organize data securely and efficiently.",
    icon: "https://www.svgrepo.com/show/499816/database.svg",
  },
];

const Services = () => {
  return (
    <section id="whatwedo" data-aos="fade-up">
      <div className="py-10">
        <div className="max-w-7xl w-full mx-auto px-5">
          {/* Header Section */}
          <div className="lg:text-center">
            <h2 className="mb-4 bg-primary text-white px-4 py-2 rounded-lg md:w-64 md:mx-auto text-sm font-semibold tracking-widest uppercase w-fit">
              What We Do?
            </h2>
            <p className="mt-4 font-lora text-3xl font-semibold ">
              We know tech, we know finance. We are fintech experts.
            </p>
            <p className="mt-4 max-w-2xl  lg:mx-auto" data-aos="fade-up">
              We handle taxation for all countries we operate in. We care for our customers and help them manage cashflows effectively.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mt-12">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {services.map((service, index) => (
                <div className="relative" key={index} data-aos="fade-up">
                  <dt>
                    <div className="md:absolute mb-3 lg:mb-0 flex items-center justify-center w-12 rounded-md bg-primary-500 text-white">
                      <img src={service.icon} alt={service.title} />
                    </div>
                    <p className="md:ml-16 ml-0 text-xl text-primary font-lora font-semibold">
                      {service.title}
                    </p>
                  </dt>
                  <dd className="mt-2 md:ml-16 ml-0">
                    {service.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
