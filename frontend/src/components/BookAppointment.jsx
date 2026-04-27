import React, { useState } from "react";
import axios from "axios";
import appointment from "../assets/appointment_img.jpg";

export default function BookAppointment() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    reason: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const bookAppointment = async () => {
    try {
      await axios.post("https://rkphysioclinic-web.onrender.com/api/appointment", form);
      alert("Appointment booked successfully!");
    } catch (err) {
      alert("Something went wrong");
    }
  };

  return (
    <section className="py-16 flex justify-center bg-gradient-to-br via-whitepx-4">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* IMAGE SIDE */}
        <div className="relative bg-indigo-50 flex items-center justify-center p-8">
          <img
            src={appointment}
            alt="Physiotherapy appointment"
            loading="lazy"
            className="w-full max-w-sm object-contain"
          />

          {/* soft overlay text */}
        </div>

        {/* FORM SIDE */}
        <div className="p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Book an Appointment
            </h2>
            <p className="mt-2 text-gray-600">
              Schedule your consultation with our physiotherapy experts
            </p>
          </div>

          <div className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  onChange={handleChange}
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Time
                </label>
                <input
                  type="time"
                  name="time"
                  onChange={handleChange}
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Reason */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Reason for Visit
              </label>
              <textarea
                name="reason"
                rows={3}
                onChange={handleChange}
                placeholder="Briefly describe your concern"
                className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none resize-none"
              />
            </div>

            {/* CTA */}
            <button
              onClick={bookAppointment}
              className="w-full bg-indigo-900 text-white py-4 rounded-xl font-semibold text-lg hover:bg-indigo-800 transition-all active:scale-95"
            >
              Confirm Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
