import React from 'react';
import './footer.css'; // Import the CSS file for styling


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="image">
            <img src="/Images/footer_image.png" />
        </div>
        <div className="team_name">
            <h2>TechEoniX</h2>
            <p>IIIT Delhi, Okhla</p>
        </div>
        <div className="connectwithus">
        <h2>Connect with us</h2>
            <div className="icons">
                <a href="">
            <i class="fa-brands fa-instagram">
                </i>
                </a>
                <a href="https://www.linkedin.com/in/sushant-arora-8a2a4828a" target='_blank'>
                <i class="fa-brands fa-linkedin-in"></i>
                </a>
                </div>
        </div>
        <div className="options">
            <p>Donate</p>
            <p>Sell</p>
            <p>Exchange</p>
            <p>Buy</p>
        </div>
        <div className="contactus">
            <h2>Contact Us</h2>
            <p>987xxxxxxx</p>
            <p>xxx@iiitd.ac.in</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
