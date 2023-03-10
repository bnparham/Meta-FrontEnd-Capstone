import { Routes,Route, Navigate,useNavigate} from "react-router-dom"
import Home from "./Home"
import BookingPage from './BookingPage';
import { useState} from "react";
import ConfirmedBooking from "../components/Reservation/ConfirmedBooking ";


// get Date API
const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}
const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
// get Date API

// submit API
const submitAPI = function(formData) {
    return true;
}
// submit API

const Pages = () => {

    const updateTimes = (id) => {
        const newTime = availableTimes.filter((item) => item.id !== parseInt(id))
        setAvailableTimes(newTime)
    }
    const initializeTimes = () => {
        const today_date = new Date()
        const d = fetchAPI(today_date)
        const myList = d.map((item, index) => {
            return { id: index + 1, time: item };
          });
        return(
            myList
            // [{id:0,time:"17:00"},
            // {id:1,time:"18:00"},
            // {id:2,time:"19:00"},
            // {id:3,time:"20:00"},
            // {id:4,time:"21:00"},
            // {id:5,time:"22:00"},]
            )
        }
        const [availableTimes ,setAvailableTimes] = useState(initializeTimes)
        const [showConfirmComponent, setshowConfirmComponent] = useState(false);
        const navigate = useNavigate()
        
        const submitForm = (formData) => {
            const checkForm = submitAPI(formData)
            if(checkForm){
                setshowConfirmComponent(true)
                return(
                    navigate("/confirmReservation",{state:formData})
                )
            }
        }

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/reserve" element={<BookingPage availableTimes={availableTimes} updateTimes={updateTimes} submitForm={submitForm} />} />
            <Route path="/confirmReservation" element={showConfirmComponent ? <ConfirmedBooking /> : <Navigate to="/" />} />
        </Routes>
    )
}
export default Pages