import reservePhoto from "../../Assets/icons_assets/Mario and Adrian A.jpg"
const BookinghtmlForm = () => {
    return(
        <div className="container-md">
            <div className="row">
                <div id="reservation-form" className="col-md-6">
                    <h4 id="reserve-title">Reservation Form</h4>
                    <form className="row">
                        <div className="col-md-6">
                            <label class="form-label" htmlFor="res-date">Choose date</label>
                            <input className="form-control" type="date" id="res-date"/>
                        </div>
                        <div className="col-md-6">
                            <label  class="form-label" htmlFor="res-time">Choose time</label>
                            <select className="form-select" id="res-time ">
                                <option>17:00</option>
                                <option>18:00</option>
                                <option>19:00</option>
                                <option>20:00</option>
                                <option>21:00</option>
                                <option>22:00</option>
                            </select>
                        </div>
                        <div className="col-md-12">
                            <label class="form-label" htmlFor="guests">Number of guests</label>
                            <input className="form-control" type="number" placeholder="1" min="1" max="10" id="guests"/>
                        </div>
                        <div className="col-md-12">
                            <label class="form-label" htmlFor="occasion">Occasion</label>
                            <select className="form-select" id="occasion">
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>
                        <div id="submit-reserve" className="col-md-12">
                            <input  className="btn btn-outline-success w-50" type="submit" value="Make Your reservation"/>
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