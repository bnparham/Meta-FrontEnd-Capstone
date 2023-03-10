import { useLocation } from "react-router-dom"

const ConfirmedBooking = () => {
    const location = useLocation()
    const {resDate,restime,guests,occasion} = location.state
    return(
        <div className="container-md">
            <div class="alert alert-success d-flex align-items-center" role="alert">
                <div>
                    <h3>Your reservation has been successfully registered.</h3>
                    <div>Your date is {resDate}</div>
                    <div>Your time is {restime}</div>
                    <div>number of Your guests are {guests}</div>
                    <div>Your occasion type is {occasion}</div>
                </div>
            </div>
        </div>
    )
}
export default ConfirmedBooking