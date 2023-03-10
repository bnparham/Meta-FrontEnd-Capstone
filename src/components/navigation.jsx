import logo from '../Assets/icons_assets/Logo.svg'
import { NavLink } from 'react-router-dom'


const Navigation = () => {
    return(
        <nav className='container-md'>
            <div className='row'>
                <div id='logo' 
                className='col-lg-4 col-md-12
                d-flex justify-content-lg-end
                '>
                    <img className='img-fluid' alt="logo" src={logo}/>
                </div>
                <div className='offset-lg-1 col-lg-7 col-md-12'>
                    <ul id='nav-links' 
                        className='
                        d-flex justify-content-lg-start
                        justify-content-md-center
                        '>
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li><a href="link">About</a></li>
                        <li><a href="link">Menu</a></li>
                        <li>
                            <NavLink to={"/reserve"}>Reservation</NavLink>
                        </li>
                        <li><a href="link">Order Online</a></li>
                        <li><a href="link">Login</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navigation