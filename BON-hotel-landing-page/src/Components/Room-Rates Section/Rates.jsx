import RoomRateCard from "./RoomRateCard"
import CardImg1 from '../../assets/CardImg1.png'
import CardImg2 from '../../assets/CardImg2.png'
import CardImg3 from '../../assets/CardImg3.png'
import CardImg4 from '../../assets/CardImg4.png'


const Rates = () => {
  return (
    <div className="min-h-screen relative w-11/12 -translate-x-1/2 left-1/2 mt-10">
        <h2 className="text-3xl text-[#957554] mb-8 text-center font-medium border-b border-[50px] border-transparent">Room Rates</h2>
        <div className="grid grid-cols-2 gap-8 w-full">
            <RoomRateCard src={CardImg1} cardTitle='Standard Twin Room'/>
            <RoomRateCard src={CardImg2} cardTitle='Standard Room'/>
            <RoomRateCard src={CardImg3} cardTitle='Standard View Room'/>
            <RoomRateCard src={CardImg4} cardTitle='Deluxe Room'/>
        </div>
        <div className="flex flex-col items-center mt-20 mb-20">
            <h3 className="text-2xl text-center text-[#957554] mb-4 font-medium">Get a room already!</h3>
            <button className="px-16 py-2 rounded-lg text-white bg-gold">Book Now</button>
        </div>
    </div>
  )
}

export default Rates
