import React, { useEffect, useRef } from "react";
import neckBackPain from "../assets/neck-back-pain.jpg";
import kneePain from "../assets/kneePain.jpg";
import ArthritisJointStiffness from "../assets/ArthritisJointStiffness.jpg";
import PostSurgeryRehabilitation from "../assets/PostSurgeryRehabilitation.jpg";
import Sciatica from "../assets/Sciatica.jpg";
import SportsInjuries from "../assets/SportsInjuries.jpg";
import StrokeParalysisRecovery from "../assets/StrokeParalysisRecovery.jpg";
import { HeartHandshake } from "lucide-react";

const conditions = [
  { title: "Neck & Back Pain", icon: neckBackPain },
  { title: "Knee & Shoulder Pain", icon: kneePain },
  { title: "Sciatica", icon: Sciatica },
  { title: "Sports Injuries", icon: SportsInjuries },
  { title: "Post-Surgery Rehabilitation", icon: PostSurgeryRehabilitation },
  { title: "Arthritis & Joint Stiffness", icon: ArthritisJointStiffness },
  { title: "Stroke & Paralysis Recovery", icon: StrokeParalysisRecovery },
];

// ✅ Memoized Card (prevents unnecessary re-renders)
const ConditionCard = React.memo(({ item }) => (
  <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition">
    <div className="relative w-full mb-4">
      <span className="absolute -top-3 -left-3 bg-indigo-900 text-white text-xs px-2 py-1 rounded-full">
        <HeartHandshake size={16} />
      </span>

      {/* ✅ Lazy loaded + fixed size image */}
      <img
        src={item.icon}
        alt={item.title}
        loading="lazy"
        width="160"
        height="120"
        className="w-40 h-28 object-cover rounded-xl"
      />
    </div>

    <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>

    <p className="text-gray-600 text-sm">
      Get expert physiotherapy care with personalized treatment and professional
      guidance.
    </p>
  </div>
));

function ConditionsWeTreat() {
  const sectionRef = useRef(null);

  // ✅ Observer runs ONCE (no state updates → no re-renders)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          obs.disconnect(); // stop observing once visible
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-50 py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          Conditions We Treat
        </h2>
        <p className="text-gray-600 mt-3">
          We provide expert physiotherapy for a wide range of conditions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {conditions.map((item, index) => (
          <ConditionCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

export default ConditionsWeTreat;
