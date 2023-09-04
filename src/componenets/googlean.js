import React from "react";
import Header from "./Header";
import "../css/googlean.css";
import Footer from "./Footer";
function googlean() {
  return (
    <div>
      {" "}
      <Header></Header>
      <div className="section0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>Google Analytics Services</h4>
              <p>Let us help you accurately track your online performance.</p>
              <a href="#" className="btn btn-outline-primary">
                GET MY FREE PROPOSAL{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="goo">
        <div className="container">
          <div className="row">
            <div className="col-12 ii">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6LL0dYGzA7dDwKIL6aTljR4300zHo39FIcA&usqp=CAU"
                alt=""
              />
            </div>
            <div className="col-12">
              <p>
                <b>Our Google Analytics services</b>
                Over 72% of websites in the Quantcast Top 100K have chosen
                Google Analytics as their analytics platform of choice. Thrive
                Internet Marketing Agency has also made that choice. We use
                Google Analytics on all of our client's sites to help provide
                insight into their online marketing efforts. Our marketing team
                members are Google Analytics certified and Thrive is a Google
                Certified Partner.
                <br />
                <br />
                <b>Google Analytics audit services</b> <br />
                In need of a health check for your Google Analytics account?
                Thrive can provide a comprehensive Google Analytics audit to
                make sure there are no errors or gaps in the data collection
                process. Our team of certified Google Analytics experts will
                audit the tracking code, configuration, data integrity,
                conversion tracking, and account linking.
                <br />
                <br />
                <b>Google Analytics account setup</b>
                <br />
                Our team can assist you with the proper setup and implementation
                of a new or existing Google Analytics account. We make certain
                that the analytics account is configured correctly and that you
                are capturing the necessary business data to use in your data
                analysis.
                <br />
                <br />
                <b>Google Analytics consulting services</b> <br />
                Already have Google Analytics set up, but need help getting your
                analytics to do more? Our team of Google Analytics experts can
                consult with you to determine your data goals. We can interpret
                your existing data, recommend solutions to aggregate data across
                multiple websites, create customizable reports, set up
                conversion funnels and more.
                <br />
                <br />
                Let Thrive provide you with Google Analytics services that will
                help you make better data-driven decisions.
                <b>Ready to get started?</b> <br />
                Request a proposal <br />
                Call us at <a href="#">935.116.4343 </a>with any questions
              </p>
            </div>
            <div className="col-12 im">
              <img
                src="https://thriveagency.com/files/awardimage2022-1-1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default googlean;
