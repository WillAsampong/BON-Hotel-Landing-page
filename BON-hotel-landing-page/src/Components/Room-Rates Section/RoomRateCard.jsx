import PropTypes from 'prop-types'


const RoomRateCard = ({ src, cardTitle }) => {
  return (
    <div className="card relative">
      <img src={src} alt="" className='w-full h-full object-cover rounded-xl'/>
      <div className="card-content text-center flex flex-col gap-y-2 absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h3 className='text-white text-2xl'>{cardTitle}</h3>
        <button className="px-8 py-3 rounded-lg bg-gold text-white">Check Rates</button>
      </div>
    </div>
  )
}

RoomRateCard.propTypes = {
    src: PropTypes.string,
    cardTitle: PropTypes.string,
}

export default RoomRateCard
