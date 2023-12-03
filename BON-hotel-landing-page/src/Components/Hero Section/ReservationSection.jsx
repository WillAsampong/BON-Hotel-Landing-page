import Selector from "./Selector"


const ReservationSection = () => {
  return (
    <section className="reservation-section bg-black p-6 flex justify-center mt-4 ">
        <div className="reservation-input-fields flex gap-x-4">
            <div className="select-city">
                <Selector />
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
