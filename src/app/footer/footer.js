import './footer.css'
export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer_dis">
                    <div>
                        <h3>Office</h3>
                        <hr />
                        <br />
                        <br />
                        <p>Germany —
                            785 15h Street, Office 478, Berlin, De 81566</p>
                        <p>+1 840 841 25 69</p>

                    </div>
                    <div className="dis">
                        <h3>Link</h3>
                        <hr />
                        <a href="/" className="col">Home</a>
                        <a href="/about" className="col">About</a>
                        <a href="/services" className="col">Services</a>
                        <a href="/contact" className="col">Contact</a>
                        <a href="/request" className="col">Request</a>

                    </div>
                    <div className="dis">
                        <h3>Social</h3>
                        <hr />
                        <a href="#" className="col">Facebook</a>
                        <a href="#" className="col">Twitter</a>
                        <a href="#" className="col">Instagram</a>
                    </div>
                    <div>
                        <h3>Newsletter</h3>
                        <hr />
                        <br />

                        <div className="color">
                            <img src="./pic.png" width="28px" />
                            <input type="text" name="" id="" placeholder="Enter Your Email" className='' />
                            <button className="arrow">-</button>
                        </div>
                    </div>

                </div>
                <hr />
            </footer>
        </>
    )
}