// import

import { useState } from "react";
import User from "../components/UserDetails";
import Cookies from "js-cookie";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BookAppointment from "../components/BookAppointment";
import ConditionsWeTreat from "../components/ConditionsWeTreat";
import Testimonials from "../components/Testimonials";
import MeetTherapist from "../components/MeetTherapist";
function Home() {
  // console.log(Cookies.get("authToken"));
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* <ConditionsWeTreat /> */}
      <MeetTherapist />
      <BookAppointment />
      <Testimonials />
    </div>
  );
}

export default Home;
