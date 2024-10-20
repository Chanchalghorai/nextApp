import Footer from '../footer/footer'
import Navbar from '../navbar/navbar'
import './contact.css'
export default function Contact(){
    return(
        <>
        <Navbar/>

        <main>
        <div class="inner-main">
         <h3>Contact Us</h3>
        </div>
        <div  class="im">
            <div className='a'>
                <div>
                    <h3>Fast and reliable car repair services</h3>
                    <br/>
                        <h6>Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste perspiciatis ut perspiciatis unde omnis iste natus.</h6>
                    </div>
                <img src="r1.avif" height="300px" alt=""/>
                
               </div>

               <div class="add">
                  <div class="co">
                    <h3>Address</h3>
                   <hr/>
                    <p>Germany —
                        785 15h Street,</p> <br/><p> Office 478, Berlin, De 81566</p>
                  </div>
                  <br/>
                  <br/>
                  <div class="co">
                    <h3>Contact Details</h3>
                    <hr/>
                    <p>Email:info@yoursite.com
                        <br/>
                       Phone: +1 840 841 25 69</p>
                  </div>
               </div>
        </div>
      </main>

        <Footer/>
        </>
    )
}