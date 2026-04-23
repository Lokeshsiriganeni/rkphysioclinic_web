import React from "react";
import tailwindConfig from "../../tailwind.config";
import useInViewAnimation from "../hooks/useInView";
const testimonials = [
  {
    name: "Ravi Kumar",
    role: "Software Engineer",
    feedback:
      "The physiotherapy sessions helped me recover faster than expected. Very professional and caring approach.",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Anita Sharma",
    role: "Homemaker",
    feedback:
      "I had chronic back pain for years. After a few sessions, I finally feel normal again. Highly recommended!",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Vikram Reddy",
    role: "Athlete",
    feedback:
      "Personalized rehab plan and great guidance. Helped me return to training safely.",
    rating: 4,
    image: "https://i.pravatar.cc/100?img=45",
  },
];

export default function Testimonials() {
  const [sectionRef, isVisible] = useInViewAnimation();

  return (
    <section ref={sectionRef} className="m-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          What Our Patients Say
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Real experiences from people who trusted us with their recovery
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`
                bg-white rounded-2xl p-6 border border-gray-100
                transform transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl
                ${isVisible ? "animate-fadeUp" : ""}
              `}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* content unchanged */}
              {/* User */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>

              {/* Feedback */}
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                “{item.feedback}”
              </p>

              {/* Rating */}
              <div className="mt-4 flex gap-1 text-yellow-400">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
