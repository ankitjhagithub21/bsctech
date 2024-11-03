import React from 'react';

const services1 = [
  {
    id: 1,
    title: 'Business Solution Provider',
    description:
      'A decentralized application (dapp) is an application built on a decentralized network that combines a smart contract and a frontend user interface.',
    color: 'bg-indigo-500',
    borderColor: 'border-indigo-500',
  },
  {
    id: 2,
    title: 'Website Development',
    description:
      'Web 3.0 is the third generation of Internet services that will focus on understanding and analyzing data to provide a semantic web.',
    color: 'bg-purple-500',
    borderColor: 'border-purple-500',
  },
];

const services2 = [
  {
    id: 1,
    title: 'Web Application Development',
    description:
      'A project audit is a formal review of a project, intended to assess the extent to which project management standards are being upheld.',
    color: 'bg-blue-400',
    borderColor: 'border-blue-400',
  },
  {
    id: 2,
    title: 'Mobile Application Development',
    description:
      'Mobile app development involves creating applications for mobile devices that offer seamless and innovative user experiences.',
    color: 'bg-yellow-400',
    borderColor: 'border-yellow-400',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description:
      'UI/UX design is the process of enhancing user satisfaction by improving the usability, accessibility, and pleasure in the interaction with the product.',
    color: 'bg-green-500',
    borderColor: 'border-green-500',
  },
];

const Services2 = () => {
  const renderServices = (services) => {
    return services.map((service) => (
      <div
        key={service.id}
        className="w-full sm:w-1/2 mb-10"
        data-aos="zoom-in"
      >
        <div className="relative h-full ml-0 mr-0 sm:mr-10 group">
          <span
            className={`absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg ${service.color}`}
          />
          <div
            className={`relative h-full p-5 bg-white border-2 rounded-lg ${service.borderColor} transition-transform transform group-hover:scale-105`}
          >
            <div className="flex items-center -mt-1">
              <h3 className="my-2  text-lg font-semibold text-primary">
                {service.title}
              </h3>
            </div>
            <p className={`mt-3 mb-1 text-xs font-medium uppercase ${service.color.replace('bg-', 'text-')}`}>
              ------------
            </p>
            <p className="mb-2 text-gray-800">{service.description}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section id="services">
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-5 mx-auto xl:px-0 mt-5">
        <h2 className="mb-2 text-4xl font-teko font-semibold" data-aos="fade-up">
          Our <span className="text-secondary font-teko">Services</span>
        </h2>
        <p className="mb-12 text-lg" data-aos="fade-up">
          Here are a few of the awesome services we provide.
        </p>
        <div className="w-full">
          {/* Render services 1 */}
          <div className="flex flex-col w-full sm:flex-row">
            {renderServices(services1)}
          </div>
          {/* Render services 2 */}
          <div className="flex flex-col w-full mb-5 sm:flex-row">
            {renderServices(services2)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services2;
