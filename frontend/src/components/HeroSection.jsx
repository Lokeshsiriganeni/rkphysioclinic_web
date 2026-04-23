import React from "react";
import Counter from "./Counter";
import ConditionsWeTreat from "./ConditionsWeTreat";

function HeroSection() {
  const scrollToNext = () => {
    document.getElementById("next-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-indigo-100 rounded-3xl shadow-md overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 flex flex-col-reverse lg:flex-row items-center gap-14">
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 space-y-7 text-center lg:text-left">
            {/* Trust badge */}
            <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full">
              Trusted by 1,000+ Patients
            </span>

            <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight">
              Heal Better with <br />
              <span className="text-indigo-800">Expert Physiotherapy Care</span>
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Personalized physiotherapy programs designed to reduce pain,
              improve mobility, and help you return to an active life—safely and
              confidently.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button
                onClick={scrollToNext}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-900 text-white text-lg font-semibold rounded-xl shadow hover:bg-indigo-800 transition"
              >
                Explore Services →
              </button>

              <button className="inline-flex items-center justify-center px-8 py-4 border border-indigo-300 text-indigo-800 text-lg font-semibold rounded-xl hover:bg-indigo-50 transition">
                Book Consultation
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1648638810948-f3bf2cccdde9?q=80&w=1170&auto=format&fit=crop"
                alt="Physiotherapy session"
                className="w-full h-[320px] md:h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div id="next-section">
        <ConditionsWeTreat />
      </div>

      {/* STATS SECTION */}
      {/* <section className="mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { end: 10, suffix: "+", label: "Years of Experience" },
              { end: 1000, suffix: "+", label: "Happy Patients" },
              { end: 100, suffix: "%", label: "Personalized Care" },
            ].map((stat, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                  <Counter end={stat.end} suffix={stat.suffix} />
                </div>

                <p className="mt-3 text-gray-600 tracking-wide">{stat.label}</p>

                <div className="mt-4 h-1 w-10 mx-auto bg-indigo-500 rounded-full group-hover:w-16 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section id="next-section" className="mt-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Results That Speak for Themselves
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We focus on long-term recovery through evidence-based
              physiotherapy and truly personalized care.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
            {/* STAT 1 */}
            <div className="group">
              <div className="text-6xl font-extrabold text-gray-900 tracking-tight">
                <Counter end={10} suffix="+" />
              </div>

              <p className="mt-3 text-gray-600 text-lg">Years of Experience</p>

              {/* subtle underline */}
              <div className="mt-4 h-[2px] w-12 mx-auto bg-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* STAT 2 */}
            <div className="group">
              <div className="text-6xl font-extrabold text-gray-900 tracking-tight">
                <Counter end={1000} suffix="+" />
              </div>

              <p className="mt-3 text-gray-600 text-lg">Happy Patients</p>

              <div className="mt-4 h-[2px] w-12 mx-auto bg-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* STAT 3 */}
            <div className="group">
              <div className="text-6xl font-extrabold text-gray-900 tracking-tight">
                <Counter end={100} suffix="%" />
              </div>

              <p className="mt-3 text-gray-600 text-lg">Personalized Care</p>

              <div className="mt-4 h-[2px] w-12 mx-auto bg-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
