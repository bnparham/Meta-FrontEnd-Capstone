import pic1 from "../Assets/icons_assets/greek salad.jpg"
import pic2 from "../Assets/icons_assets/bruchetta.svg"
import pic3 from "../Assets/icons_assets/lemon dessert.jpg"

import basket from "../Assets/icons_assets/Basket.svg"

const Highlight = () => {
    return(
        <main id="highlight-main" className="container-md">
            <div id="highlight-header" className="row mb-5">
                <div id="special" className="col-md-5">
                    <h2 className="fw-semibold fs-1">This week specials!</h2>
                </div>
                <div id="online-menu" className="offset-md-2 col-md-5">
                    <button className="btn fs-4 w-50">Online Menu</button>
                </div>
            </div>
            <div id="highlight-menus" className="row row-cols-1 row-cols-md-3 g-4">
                {/* --- article --- */}
                <div class="col">
                    <div class="card h-100">
                        <img src={pic1} class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <div className="header">
                            <h5>Greek salad</h5>
                            <h5 className="highlight-price">$ 12.99</h5>
                        </div>
                            <p class="card-text">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        </div>
                        <div className="order-secton">
                            <h5><a href="...">Order a delivery</a></h5>
                            <img className="basket-icon" src={basket}/>
                        </div>
                    </div>
                </div>
                {/* --- article --- */}
                {/* --- article --- */}
                <div class="col">
                    <div class="card h-100">
                        <img src={pic2} class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <div className="header">
                            <h5>Bruchetta</h5>
                            <h5 className="highlight-price">$ 5.99</h5>
                        </div>
                            <p class="card-text">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                        </div>
                        <div className="order-secton">
                            <h5><a href="...">Order a delivery</a></h5>
                            <img className="basket-icon" src={basket}/>
                        </div>
                    </div>
                </div>
                {/* --- article --- */}
                {/* --- article --- */}
                <div class="col">
                    <div class="card h-100">
                        <img src={pic2} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <div className="header">
                                <h5>Lemon Dessert</h5>
                                <h5 className="highlight-price">$ 5.00</h5>
                            </div>
                            <p class="card-text">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        </div>
                        <div className="order-secton">
                            <h5><a href="...">Order a delivery</a></h5>
                            <img className="basket-icon" src={basket}/>
                        </div>
                    </div>
                </div>
                {/* --- article --- */}

            </div>
        </main>
    )
}
export default Highlight