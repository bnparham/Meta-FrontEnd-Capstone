import ResturantFood from '../Assets/icons_assets/restauranfood.jpg'

const Hero = () => {
    return(
        <div id='c-hero-c' className='container-md'>
            <div id='hero-container' className='row'>
                <div id='hero-text' className='col-md-7 col-sm-12'>
                    <h2 id='title'>Little Lemon</h2>
                    <h4 id='city'>chicago</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button id='hero-btn' className='w-50'>
                        Reserve a Table
                    </button>
                </div>
                <div id='img-container' className='col-md-5 col-sm-12'>
                    <img alt="ResturantFood" src={ResturantFood}/>
                </div>
            </div>
        </div>
    )
}
export default Hero