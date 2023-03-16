import {useRef } from "react";
import reservePhoto from "../../Assets/icons_assets/Mario and Adrian A.jpg"
import {Formik,Form,Field,ErrorMessage} from 'formik'
import { formSchema } from './../Validation/BookingFormValidation';

const BookinghtmlForm = (props) => {

    const timeId = useRef(0)

    const resTimeHandeler = (e) => {
        timeId.current = e.target.options[e.target.selectedIndex].id
    }

    return(
        <div className="container-md">
            <div className="row">
                <div id="reservation-form" className="col-md-6">
                    <h4 id="reserve-title">Reservation Form</h4>
                    <Formik
                        onSubmit={
                            (value)=>{
                                console.log(value)
                                props.submitForm(
                                    {
                                        resDate : value["res-date"],
                                        restime : value["res-time"],
                                        guests : value["guests"],
                                        occasion : value["occasion"]
                                    }
                                )
                                props.updateTimes(timeId.current);
                            }
                        }
                        initialValues={
                            {
                              "res-date" : "",
                              "res-time" : "" ,
                              "guests" : "1",
                              "occasion" : "",
                            }
                        }
                        validationSchema={formSchema}
                    >
                        <Form className="row">
                            <div className="col-md-6">
                                <label class="form-label" htmlFor="res-date">Choose date</label>
                                <Field
                                    name="res-date"
                                    type="date"
                                    className="form-control"
                                />
                                <ErrorMessage name="res-date"
                                    render={(msg)=>
                                    <div 
                                    style={{color:"red",textAlign:"right"}}>
                                    {msg}</div>
                                    }
                                />
                            </div>
                            <div className="col-md-6">
                                <label  class="form-label" htmlFor="res-time">Choose time</label>
                                <Field
                                    name="res-time"
                                    as="select"
                                    className="form-select"
                                    onClick={resTimeHandeler}
                                >
                                <option value={""} selected>-- Select --</option>
                                {props.times.map(
                                    (obj)=>{
                                        return(
                                        <option value={obj.time} id={obj.id} key={obj.id}>{obj.time}</option>
                                        )
                                    }
                                )}
                                </Field>
                                <ErrorMessage name="res-time"
                                    render={(msg)=>
                                    <div 
                                    style={{color:"red",textAlign:"right"}}>
                                    {msg}</div>
                                    }
                                />
                            </div>
                            <div className="col-md-12">
                                <label class="form-label" htmlFor="guests">Number of guests</label>
                                <Field
                                    name="guests"
                                    type="number"
                                    className="form-control"
                                />
                            </div>
                            <div className="col-md-12">
                                <label class="form-label" htmlFor="occasion">Occasion</label>
                                <Field
                                    name="occasion"
                                    as="select"
                                    className="form-select"
                                >
                                    <option value={""} selected>-- Select --</option>
                                    <option value="Birthday">Birthday</option>
                                    <option value="Anniversary">Anniversary</option>
                                </Field>
                                <ErrorMessage name="occasion"
                                    render={(msg)=>
                                    <div 
                                    style={{color:"red",textAlign:"right"}}>
                                    {msg}</div>
                                    }
                                />
                            </div>
                            <div id="submit-reserve" className="col-md-12">
                                <input className="btn btn-outline-success w-50" type="submit" value="Make Your reservation"/>
                            </div>
                        </Form>
                    </Formik>
                </div>
                <div id="reservation-image" className="col-md-6">
                    <img src={reservePhoto} alt="..."/>
                </div>
            </div>
        </div>
    )
}
export default BookinghtmlForm