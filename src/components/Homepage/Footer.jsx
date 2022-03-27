import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="aboutapp">
        <h1>Taste</h1>
        <div className="subhead">
          <p>
            our job is to filling your tummy with delicious food and with fast
            and free delivery
          </p>
        </div>
      </div>
      <div className="about">
        <h3>About</h3>
        <div className="subhead">
          <p> About us</p>
          <p> Features</p>
          <p> news</p>
        </div>
      </div>

      <div className="company">
        <h3>Company</h3>
        <div className="subhead">
          <p> Why taste?</p>
          <p> FAQ</p>
          <p> Blog</p>
        </div>
      </div>
      <div className="support">
        <h3>Support</h3>

        <div className="subhead">
          <p> Account</p>
          <p> support center</p>
          <p> feeedback</p>
        </div>
      </div>
      <div className="intouch">
        <h3>Get in touch</h3>
        <div className="subhead">
          <p>Question or feedback?</p>
          <p> we'd love to hear from you</p>
          <input type="text" placeholder="email address" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
