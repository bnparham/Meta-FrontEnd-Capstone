import BookingForm from '../components/Reservation/BookingForm';
import { useState } from 'react';

const BookingPage = () => {
    const [availableTimes ,setAvailableTimes] = useState(
        [{id:0,time:"17:00"},
        {id:1,time:"18:00"},
        {id:2,time:"19:00"},
        {id:3,time:"20:00"},
        {id:4,time:"21:00"},
        {id:5,time:"22:00"},]
    )

    const updateTimes = (id) => {
        const newTime = availableTimes.filter((item) => item.id !== parseInt(id))
        setAvailableTimes(newTime)
    }

    return(
        <>
            <BookingForm times={availableTimes} updateTimes={updateTimes}/>
        </>
    )
}
export default BookingPage