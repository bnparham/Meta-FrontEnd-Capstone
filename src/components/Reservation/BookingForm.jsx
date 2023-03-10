import { useState,useRef } from "react";
import reservePhoto from "../../Assets/icons_assets/Mario and Adrian A.jpg"


const BookinghtmlForm = (props) => {

    const [resdate, setResdate] = useState("");
    const [restime, setRestime] = useState("17:00");
    const [guests, setGuests] = useState("1");
    const [occasion, setOccasion] = useState("Birthday");

    const timeId = useRef(0)

    const resDateHandeler = (e) => setResdate(e.target.value)
    const resTimeHandeler = (e) => {
        setRestime(e.target.value)
        timeId.current = e.target.options[e.target.selectedIndex].id
    }
    const guestHandeler = (e) => setGuests(e.target.value)
    const occasionHandeler = (e) => setOccasion(e.target.value)

    const submitHandeler = (e) => {
        e.preventDefault();
        console.log(resdate);
        console.log(restime);
        console.log(guests);
        console.log(occasion);
        props.updateTimes(timeId.current);
    }


    return(
        <div className="container-md">
            <div className="row">
                <div id="reservation-form" className="col-md-6">
                    <h4 id="reserve-title">Reservation Form</h4>
                    <form onSubmit={submitHandeler} className="row">
                        <div className="col-md-6">
                            <label class="form-label" htmlFor="res-date">Choose date</label>
                            <input className="form-control" type="date" id="res-date" value={resdate} onChange={resDateHandeler}/>
                        </div>
                        <div className="col-md-6">
                            <label  class="form-label" htmlFor="res-time">Choose time</label>
                            <select value={restime} onChange={resTimeHandeler} className="form-select" id="res-time">
                            {props.times.map(
                                (obj)=>{
                                    return(
                                    <option value={obj.time} id={obj.id} key={obj.id}>{obj.time}</option>
                                    )
                                }
                            )}
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label class="form-label" htmlFor="guests">Number of guests</label>
                            <input value={guests} onChange={guestHandeler} className="form-control" type="number" placeholder="1" min="1" max="10" id="guests"/>
                        </div>
                        <div className="col-md-12">
                            <label class="form-label" htmlFor="occasion">Occasion</label>
                            <select value={occasion} onChange={occasionHandeler} className="form-select" id="occasion">
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                            </select>
                        </div>
                        <div id="submit-reserve" className="col-md-12">
                            <input className="btn btn-outline-success w-50" type="submit" value="Make Your reservation"/>
                        </div>
                    </form>
                </div>
                <div id="reservation-image" className="col-md-6">
                    <img src={reservePhoto} alt="..."/>
                </div>
            </div>
        </div>
    )
}
export default BookinghtmlForm