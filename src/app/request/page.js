import Footer from '../footer/footer'
import Navbar from '../navbar/navbar'
import './request.css'
export default function Request() {
    return (
        <>
            <Navbar/>  
            <main>
                <div className="inner-main">
                    <h3>Request A Quote</h3>
                </div>

                <div className='a'>
                    <div className='b'>
                        <p>Have a project?
                            Get in touch!</p>
                        <img src="s9.jpg" height="250px" width="400px" />
                    </div>

                    <div className="form">
                        <form action="#">
                            <div>
                                <label>Name</label>
                                <input type="text" placeholder="Name" />
                            </div>
                            <hr />
                            <div>
                                <label>Phone</label>
                                <input type="text" placeholder="Phone" />
                            </div>
                            <hr />
                            <div>
                                <label>Email</label>
                                <input type="text" placeholder="Email Address" />
                            </div>
                            <hr />
                            <div>
                                <label>Subject</label>
                                <input type="text" placeholder="subject" />
                            </div>
                            <div className='c'>
                                <input type="checkbox" />
                                <p>I agree that my submitted data is collected and stored.</p>
                            </div>

                            <a href="#"><button className="button"><img src="pic.png" height="10px"/>&emsp;Get in Touch</button></a>
                        </form>
                    </div>
                </div>

            </main>

            <Footer/>
        </>
    )
}