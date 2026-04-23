import React from "react";

const MeetTherapist = () => {
  return (
    <section className="bg-blue-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Image Section */}
          <div className="relative w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
              alt="Physiotherapist"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />

            {/* Experience Badge */}
            <div className="absolute -bottom-6 left-6 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold">10+</h3>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2">

            <h2 className="text-4xl font-bold text-blue-900 mb-3">
              Meet Your Physiotherapist
            </h2>

            <h3 className="text-xl text-blue-600 font-semibold mb-6">
              Dr. Priya Sharma, MPT (Orthopedics)
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Dr. Priya Sharma is a certified and highly experienced
              physiotherapist dedicated to helping patients recover faster,
              move better, and live pain-free. With over 10 years of clinical
              experience, she specializes in orthopedic rehabilitation,
              sports injuries, and post-surgical recovery.
            </p>

            <ul className="space-y-3 mb-8 text-gray-800">
              <li>✔ Orthopedic Physiotherapy</li>
              <li>✔ Sports Injury Rehabilitation</li>
              <li>✔ Back & Neck Pain Management</li>
              <li>✔ Post-Surgery Recovery Programs</li>
            </ul>

            <button className="bg-blue-600 hover:bg-blue-800 transition duration-300 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg">
              Book Appointment
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MeetTherapist;