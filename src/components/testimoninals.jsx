import img from "../Assets/icons_assets/restaurant.jpg"
const Testimoninals = () =>{
    return(
        <section id="testimoninals" className="container-md">
            <div id="testimoninals-header" className="row">
                <h3>Testimoninals</h3>
            </div>
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    {/* article section */}
                    <article>
                        <div className="row">
                            <div className="col-md-4 first-side">
                                <h5>Rating</h5>
                                <img src={img} alt="resturant-img"/>
                            </div>
                            <div className="col-md-8 second-side">
                                <h5>Name</h5>
                            </div>
                        </div>
                        <div className="row article-desc">
                            <p>Review text</p>
                        </div>
                    </article>
                    {/* article section */}
                </div>
                <div className="col-md-3 col-sm-6">
                    {/* article section */}
                    <article>
                        <div className="row">
                            <div className="col-md-4 first-side">
                                <h5>Rating</h5>
                                <img src={img} alt="resturant-img"/>
                            </div>
                            <div className="col-md-8 second-side">
                                <h5>Name</h5>
                            </div>
                        </div>
                        <div className="row article-desc">
                            <p>Review text</p>
                        </div>
                    </article>
                    {/* article section */}
                </div>
                <div className="col-md-3 col-sm-6">
                    {/* article section */}
                    <article>
                        <div className="row">
                            <div className="col-md-4 first-side">
                                <h5>Rating</h5>
                                <img src={img} alt="resturant-img"/>
                            </div>
                            <div className="col-md-8 second-side">
                                <h5>Name</h5>
                            </div>
                        </div>
                        <div className="row article-desc">
                            <p>Review text</p>
                        </div>
                    </article>
                    {/* article section */}
                </div>
                <div className="col-md-3 col-sm-6">
                    {/* article section */}
                    <article>
                        <div className="row">
                            <div className="col-md-4 first-side">
                                <h5>Rating</h5>
                                <img src={img} alt="resturant-img"/>
                            </div>
                            <div className="col-md-8 second-side">
                                <h5>Name</h5>
                            </div>
                        </div>
                        <div className="row article-desc">
                            <p>Review text</p>
                        </div>
                    </article>
                    {/* article section */}
                </div>
            </div>
        </section>
    )
}
export default Testimoninals