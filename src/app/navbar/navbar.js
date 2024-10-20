import "./navbar.css";
export default function Navbar() {
  return (
    <div className="header"> 
      <div className="logo">
        <img src="/logo-2.webp" alt=""/>
      </div>

      <div className="right">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
        <a href="/request">Request</a>
        {/* <div className="plus">
        <a href="#">+</a>
        </div>
        <div className="child">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
        <a href="/request">Request</a>
        </div> */}
        

        </div>
      </div>
    // </div>
  );
}
