import React from 'react';

const services1 = [
  {
    id: 1,
    title: 'Business Solution Provider',
    description:
      'We offer comprehensive solutions to streamline your business processes, leveraging cutting-edge technologies to enhance productivity and efficiency.',
    color: 'bg-indigo-600',
    borderColor: 'border-indigo-600',
    textColor: 'text-indigo-600',
  },
  {
    id: 2,
    title: 'Website Development',
    description:
      'Our website development services focus on creating responsive, user-friendly, and secure websites tailored to meet the unique needs of your business.',
    color: 'bg-purple-600',
    borderColor: 'border-purple-600',
    textColor: 'text-purple-600',
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
    textColor: 'text-blue-400',
  },
  {
    id: 2,
    title: 'Mobile Application Development',
    description:
      'Mobile app development involves creating applications for mobile devices that offer seamless and innovative user experiences.',
    color: 'bg-yellow-400',
    borderColor: 'border-yellow-400',
    textColor: 'text-yellow-400',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description:
      'UI/UX design is the process of enhancing user satisfaction by improving the usability, accessibility, and pleasure in the interaction with the product.',
    color: 'bg-green-600',
    borderColor: 'border-green-600',
    textColor: 'text-green-600',
  },
];

const Services2 = () => {
  const renderServices = (services) => {
    return services.map((service) => (
      <div
        key={service.id}
        className="w-full sm:w-1/2 mb-10 cursor-pointer"
        data-aos="zoom-in"
      >
        <div className="relative h-full group">
          <span
            className={`absolute top-0 left-0 w-full h-full mt-1 ml-1 rounded-lg ${service.color}`}
          />
          <div
            className={`relative h-full p-5 bg-white border-2 rounded-lg ${service.borderColor} transition-transform transform group-hover:scale-105`}
          >
            <div className="flex items-center -mt-1">
              <h3 className={`my-2 text-lg font-semibold ${service.textColor}`}>
                {service.title}
              </h3>
            </div>
            <p className={`mt-3 mb-1 text-xs font-medium uppercase ${service.textColor}`}>
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
      <div className=" relative flex flex-col justify-between h-full max-w-7xl px-5 mx-auto ">
        <h2 className="mb-2 text-4xl font-teko font-semibold" data-aos="fade-up">
          Our <span className="text-primary font-teko">Services</span>
        </h2>
        <p className="mb-12 text-lg" data-aos="fade-up">
          Here are a few of the awesome services we provide.
        </p>
        <div className="w-full">
          {/* Render services 1 */}
          <div className="flex flex-col lg:gap-10 gap-5 w-full sm:flex-row">
            {renderServices(services1)}
          </div>
          {/* Render services 2 */}
          <div className="flex flex-col gap-5 w-full mb-5 sm:flex-row">
            {renderServices(services2)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services2;
