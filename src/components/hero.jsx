import { Link } from 'react-router-dom'
import ResturantFood from '../Assets/icons_assets/restauranfood.jpg'

const Hero = () => {
    return(
        <header id='c-hero-c' className='container-md'>
            <div id='hero-container' className='row'>
                <div id='hero-text' className='col-md-7 col-sm-12'>
                    <h2 id='title'>Little Lemon</h2>
                    <h4 id='city'>chicago</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button id='hero-btn' className='w-50'>
                        <Link style={{textDecorationLine:'none',color:"#000"}} to={"/reserve"}>Reserve a Table</Link>
                    </button>
                </div>
                <div id='img-container' className='col-md-5 col-sm-12'>
                    <img alt="ResturantFood" src={ResturantFood}/>
                </div>
            </div>
        </header>
    )
}
export default Hero