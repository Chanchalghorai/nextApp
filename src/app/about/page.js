import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import './about.css'



export default function about() {
    return (
        <>
            <Navbar />

            <div class="plus">
        <a href="#"><button class="click">+</button></a>
        </div>
        <div class='child'>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <a href="#">Request</a>
        </div>

            
            <main>
                <div class="inner-main">
                    <h3>About Us</h3>
                </div>

                <br />
                <br />

                <div className="a">
                    <img src="s1.png" height="300px" alt="" />
                    <div>
                        <h3 className='h3'>Fast and reliable car repair services</h3>
                        <br />
                        <h6 className='h6'>Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste perspiciatis ut perspiciatis unde omnis iste natus.</h6>
                    </div>
                </div>

                <br />
                <hr />
                <div className="b">
                    <div>
                        <h3 className='h3'>Fast and reliable car repair services</h3>
                        <br />
                        <h6 className='h6'>Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste perspiciatis ut perspiciatis unde omnis iste natus.</h6>
                    </div>
                    <img src="s3.jpg" height="300px" alt="" />

                </div>

                <br />

                <hr />
                <div className="c">
                    <img src="s9.jpg" height="300px" alt="" />
                    <div>
                        <h3 class="h3">Fast and reliable car repair services</h3>
                        <br />
                        <h6 class="h6">Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste perspiciatis ut perspiciatis unde omnis iste natus.</h6>
                    </div>
                </div>

                <div className="d">
                    <h3 className="h4">Our Services</h3>
                    <br />
                    <h6 className="h5">Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste perspiciatis ut perspiciatis unde omnis iste natus.</h6>
                    <div class="box">
                        <a href="#"><div className="box1">Complete Wash</div></a>
                        <a href="#"><div className="box1">Interior Wash</div></a>
                        <a href="#"><div className="box1">Interior Wash</div></a>
                        <a href="#"><div className="box1">Rubber Blacking</div></a>
                        <a href="#"><div className="box1">Engine Wash</div></a>
                    </div>
                </div>
                <div className="e">

                    <marquee behavior="alternate" >
                        <h3>
                            Car washing *   Car washing *   Car washing
                        </h3>
                    </marquee>
                    <marquee behavior="alternate" direction="right">
                        <h3>
                            Interior Detailing * Interior Detailing * Interior Detailing
                        </h3>
                    </marquee>
                </div>
            </main>

           

            <Footer/>
        </>

    )
}

//    var a=document.querySelector(".click");
//    a.addEventListener("click",()=>{
//     // alert("clicked");
//     document.querySelector(".child").classList.toggle("show");
//    });