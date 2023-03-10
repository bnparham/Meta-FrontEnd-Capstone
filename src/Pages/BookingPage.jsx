import BookingForm from '../components/Reservation/BookingForm';

const BookingPage = (props) => {
    return(
        <>
            <BookingForm times={props.availableTimes} updateTimes={props.updateTimes}/>
        </>
    )
}
export default BookingPage