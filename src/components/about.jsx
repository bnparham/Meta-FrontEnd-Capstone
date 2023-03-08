import img from "../Assets/icons_assets/Mario and Adrian A.jpg"
const About = () => {
    return (
        <section id="about-section" className="container-md">
            <div className="row">
                <div id="first-side" className="col-md-6">
                    <h4 id="title">Little Lemon</h4>
                    <p id="city">Chicago</p>
                    <p id="about-desc">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                    </p>
                </div>
                <div id="second-side" className="col-md-6">
                    <img className="" src={img} alt="..."/>
                </div>
            </div>
        </section>
    )
}
export default About