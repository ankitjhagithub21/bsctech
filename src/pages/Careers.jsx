
import React from "react";

const jobListings = [
  {
    title: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    description: "Work with modern frameworks like React and TailwindCSS.",
  },
  {
    title: "Backend Developer",
    location: "Bangalore, India",
    type: "Full-time",
    description: "Develop APIs and handle database operations.",
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Part-time",
    description: "Design intuitive and user-friendly interfaces.",
  },
];

const Careers = () => {
  return (
    <section id="careers" className="max-w-7xl mx-auto p-5">
      {/* Hero Section */}
      <div className="text-center mb-10">
   
        <h1 className="text-4xl font-semibold font-teko mb-4">
          Join <span className="font-teko text-secondary">Our Team</span>
        </h1>
        <p className="text-lg">
          We are looking for passionate individuals to help us grow and shape the future.
        </p>
      </div>

      {/* Job Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobListings.map((job, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="border-secondary border rounded-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-3xl font-semibold text-secondary font-teko tracking-wider mb-2">
              {job.title}
            </h2>
            <p className="text-sm mb-1">
              📍 {job.location}
            </p>
            <p className="text-sm mb-3">💼 {job.type}</p>
            <p>{job.description}</p>
            <button className="btn btn-secondary btn-sm mt-4">
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="my-16 text-center shadow-xl  w-fit  mx-auto md:p-10 p-5 rounded-xl" data-aos="zoom-in">
        <h2 className="text-2xl md:text-3xl font-semibold   mb-4">
          Don't see the right role?
        </h2>
        <p className="mb-4">
          Send us your resume, and we'll reach out if something opens up!
        </p>
        <button className="btn btn-secondary">
          Submit Your Resume
        </button>
      </div>
    </section>
  );
};

export default Careers;
