import React from 'react';

// Sample reviews array
const reviews = [
  {
    name: "John Doe",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1lLrFvgnsMNvUcDd83Tpc-s48XBu_NnT89Q&s",
    feedback:
      "The team was incredibly professional and delivered the project on time. I am very happy with the results!",
  },
  {
    name: "Olivia Johnson",
    image:
      "https://img.freepik.com/free-photo/portrait-young-girl-smiling_23-2149260597.jpg?semt=ais_hybrid",
    feedback:
      "Amazing experience working with them! The attention to detail and quick responses made the process seamless.",
  },
  {
    name: "Jane Smith",
    image:
      "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg",
    feedback:
      "Their creativity and technical skills exceeded my expectations. Highly recommend their services!",
  },
];

const Reviews = () => {
  return (
    <section id="reviews">
      <div className="container py-12 mx-auto">
        {/* Header Section */}
        <div className="flex flex-col text-center w-full" data-aos="fade-up">
          
          <h1 className="font-semibold font-lora text-3xl mb-3">
            What Our <span className='text-primary font-lora'>Clients Say?</span>
          </h1>
          <p className='mb-5 px-5'>
            Here are some of our clients review, how our services have made an impact on their journey.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="flex flex-wrap">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-4 lg:w-1/3 md:w-1/2 w-full"
              data-aos="zoom-in"
            >
              <div className="flex rounded-lg h-full border hover:shadow-xl transition-shadow border-primary p-4 flex-col">
                <div className="flex items-center mb-3 gap-2">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                  <h2 className="text-lg text-primary font-lora  tracking-wide">{review.name}</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">{review.feedback}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
