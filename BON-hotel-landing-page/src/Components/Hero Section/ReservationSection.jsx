import { useState } from "react";
import Selector from "./Selector"
import { Country } from 'country-state-city'


const ReservationSection = () => {
    const citiesData = Country.getAllCountries();
    const [city, setCity] = useState(citiesData[0]);
    console.log(citiesData);

  return (
    <section className="reservation-section bg-black p-6 flex justify-center mt-4 ">
        <div className="reservation-input-fields flex gap-x-4">
            <div className="select-city">
                <Selector data={citiesData} selected={city} setSelected={setCity}/>
            </div>
            <div className="check-in">
                <input type="date" className="appearance-none w-full text-gray-700 py-2 px-3 leading-tight focus:outline-none rounded-lg" />
            </div>
            <div className="check-out">
                <input type="date" className="appearance-none w-full text-gray-700 py-2 px-3 leading-tight rounded-lg" />
            </div>
            <div className="check-availabilty">
                <button className="text-white bg-gold rounded-lg px-2 py-2">Check Availability</button>
            </div>
        </div>
    </section>
  )
}

export default ReservationSection
