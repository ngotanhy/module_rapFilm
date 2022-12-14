import React from 'react'
import InfoBookChair from './InfoChair'
import Seats from './Seats'
import arrSeats from '../../data/positionSeat/arrSeats.json';

export default function BookingTicket() {

    return (
        <div className='container max-w-6xl mx-auto flex flex-row font-montserrat gap-14'>
            <div className='basis-2/3'>
                <div className='grid grid-cols-11 grid-rows-11'>
                    <Seats arrSeats={arrSeats} />
                </div>
            </div>
            <div className='basis-1/3 '>
                <InfoBookChair />
            </div>
        </div>
    )
}
