import Footer from '../footer/footer'
import Navbar from '../navbar/navbar'
import './services.css'
export default function Services() {
    return (
        <>
            <Navbar />

            <main>
                <div className="inner-main">
                    <h3>Our Services</h3>
                </div>

                <div className="box">
                    <a href="#"><div className="box1"><img src="./s1.png" alt="" className="img"/></div></a>
                    <a href="#"><div className="box1"><img src="./s2.jpg" alt="" className="img"/></div></a>
                    <a href="#"><div className="box1"><img src="./s3.jpg" alt="" className="img"/></div></a>
                    <a href="#"><div className="box1"><img src="./s4.webp" alt="" className="img"/></div></a>
                    <a href="#"><div className="box1"><img src="./s5.jpeg" alt="" className="img"/></div></a>
                    <a href="#"><div className="box1"><img src="./bg-img.png" alt="" className="img"/></div></a>
                    <a href="#"><div className="box1"><img src="./s7.jpeg" alt="" className="img"/></div></a>
                    <a href="#"><div className="box1"><img src="./s8.jpeg" alt="" className="img"/></div></a>
                    <a href="#"><div className="box1"><img src="./s8.webp" alt="" className="img"/></div></a>
                    <a href="#"><div className="box1"><img src="./s9.jpg" alt="" className="img"/></div></a>
                    <a href="#"><div className="box1"><img src="./s10.jpg" alt="" className="img"/></div></a>
                    <a href="#"><div className="box1"><img src="s11.webp" alt="" className="img"/></div></a>
                    <a href="#"><div className="box1"><img src="s12.jpeg" alt="" className="img"/></div></a>
                    <a href="#"><div className="box1"><img src="s13.webp" alt="" className="img"/></div></a>
                </div>


                <div className="box2">
                    <img src="banner.jpg" height="300px" alt="" className="img-radius" />
                    <div>
                        <h3>Fast and reliable car repair services</h3>
                        <br />
                        <h6>Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste perspiciatis ut perspiciatis unde omnis iste natus.</h6>
                        <div className="inner">
                            <p>1) Lorem ipsum dolor sit amet</p>
                            <p>2) Adipiscing elit sed</p>
                            <p>3) Labore et dolore consectetur</p>
                        </div>
                        <div>
                            <button className="button">About Us</button>
                        </div>
                    </div>
                </div>
                <br />


                <div className='a'>
                    <br />
                    <h2>Our Popular Services</h2>
                    <br />
                    <h6>Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste perspiciatis ut perspiciatis unde omnis iste natus.</h6>
                    <br />
                    <br />
                    <div className="box4">
                        <a href="#"><div className="box3">Complete Wash</div></a>
                        <a href="#"><div className="box3">Repairing</div></a>
                        <a href="#"><div className="box3">Interior Wash</div></a>
                        <a href="#"><div className="box3">Rubber Blacking</div></a>
                        <a href="#"><div className="box3">Engine Wash</div></a>
                    </div>
                </div>

                <hr />
                <div className="logo">
                    <img src="client-3.1-copyright.png" alt="" className="pic" />
                    <img src="client-3.2-copyright.png" alt="" className="pic" />
                    <img src="client-3.3-copyright.png" alt="" className="pic" />
                    <img src="client-3.4-copyright.png" alt="" className="pic" />
                    <img src="client-3.6-copyright.png" alt="" className="pic" />
                </div>
            </main>

            <Footer />
        </>
    )
}