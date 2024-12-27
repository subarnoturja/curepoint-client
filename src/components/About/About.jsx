import aboutImg from "../../assets/images/about.png"
import aboutCardImg from "../../assets/images/about-card.png"
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section>
            <div className="container">
                <div className="flex justify-between gap-[50px] md:gap-[130px] xl:gap-0 flex-col md:flex-row">
                    <div className="relative w-3/4 md:w-1/2 xl:w-[770px] z-10 order-2 md:order-1">
                        <img src={aboutImg} alt="" />
                        <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-15%] md:top-[35%] lg:right-[22%] lg:top-[50%]">
                            <img src={aboutCardImg} alt="" />
                        </div>
                    </div>
                    {/* About content */}
                    <div className="w-full md:w-1/2 xl-w-[670px] order-1  md:order-2">
                        <h2 className="heading">Proud to be one of the nation best</h2>
                        <p className="text__para">Delivering exceptional healthcare with compassion, innovation, and expertise. Trusted by millions across the nation for providing world-class medical services that prioritize your well-being and peace of mind.</p>

                        <p className="text__para mt-[30px]">Recognized for excellence in healthcare, we combine advanced medical expertise with personalized care. Millions trust us to provide compassionate, cutting-edge treatment for a healthier tomorrow.</p>
                        <Link to='/'><button className="btn">Learn More</button></Link>
                    </div>
                </div>        
            </div>
        </section>
    );
};

export default About;