import Services2 from "./component/servicces";
import Footer from "./footer/footer";
import "./page.css";
export default function Home() {
  return (
    <>
      <div className="main1">
        <div className="header">
          <div className="logo">
            <img src="/logo-2.webp" alt="" />
          </div>

          <div className="right">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
            <a href="/request">Request</a>
          </div>
        </div>

        <div className="main">
          <div className="caption">
            <h3>FUELED BY PASSION</h3>
            <h3>Discover The Ultimate Car Care Experience</h3>
            <a href="/request"><button class="button">Get Started Now</button></a>
          </div>
        </div>
      </div>

      <Services2 />

      <Footer />
    </>
  );
}
