import Facilities from "../Facilities Section/Facilities";
import ReservationSection from "./ReservationSection";

const Hero = () => {
  return (
    <section className="relative mb-10 h-full">
      <ReservationSection />
      <section className="hero-section h-screen w-full bg-heroImg bg-center bg-cover flex items-center justify-center flex-col gap-y-6">
        <div className="heading">
          <h1 className="uppercase text-white text-6xl text-center font-bold">
            Welcome to bon hotel
          </h1>
          <p className="text-white text-center">
            Good People. Good Thinking. Good Feeling
          </p>
        </div>
        <div className="cta">
          <button className="bg-gold w-44 px-10 py-3 rounded-md text-white font-medium uppercase">
            Explore
          </button>
        </div>
      </section>
      <Facilities />
    </section>
  );
};

export default Hero;
