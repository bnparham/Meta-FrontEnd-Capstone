import { Routes,Route } from "react-router-dom"
import Home from "./Home"
import BookingPage from './BookingPage';

const Pages = () => {
    return(
        
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/reserve" element={<BookingPage/>}/>
        </Routes>
    )
}
export default Pages