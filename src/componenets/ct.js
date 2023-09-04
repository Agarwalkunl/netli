import React from "react";
import Header from "./Header";
import "../css/ct.css";
import Footer from "./Footer";
function ct() {
  return (
    <div>
      {" "}
      <Header></Header>
      <div className="section0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>Client Testimonials</h4>
              <p>See what people are saying about us.</p>
              <a href="/#" className="btn btn-outline-primary">
                GET MY FREE PROPOSAL{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="imggs">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              <div className="box">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <div className="box">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <div className="box">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <div className="box">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <div className="box">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 mt-5">
              <div className="box">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rang">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              <div className="box">
                <p>
                  Since having our new website built by Thrive, we have seen a
                  200% increase in the number of online contact forms being
                  filled out and returned to us. Matt and his team worked
                  closely with us to provide a site that met all of the criteria
                  that we were looking for. The end result was a website that is
                  attractive, organized and effective. Thanks to Thrive for all
                  of your hard work and support!
                </p>
              </div>
              <img
                src="https://thriveagency.com/files/Brandon-O-e1482942080144.jpg"
                alt=""
              />
              <p>
                <b>Brandon O’Brien</b>
              </p>
              <p>Demilec (USA), LLC</p>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div className="col-md-6 mt-5">
              <div className="box">
                <p>
                  Since having our new website built by Thrive, we have seen a
                  200% increase in the number of online contact forms being
                  filled out and returned to us. Matt and his team worked
                  closely with us to provide a site that met all of the criteria
                  that we were looking for. The end result was a website that is
                  attractive, organized and effective. Thanks to Thrive for all
                  of your hard work and support!
                </p>
              </div>
              <img
                src="https://thriveagency.com/files/Brandon-O-e1482942080144.jpg"
                alt=""
              />
              <p>
                <b>Brandon O’Brien</b>
              </p>
              <p>Demilec (USA), LLC</p>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div className="col-md-6 mt-5">
              <div className="box">
                <p>
                  Since having our new website built by Thrive, we have seen a
                  200% increase in the number of online contact forms being
                  filled out and returned to us. Matt and his team worked
                  closely with us to provide a site that met all of the criteria
                  that we were looking for. The end result was a website that is
                  attractive, organized and effective. Thanks to Thrive for all
                  of your hard work and support!
                </p>
              </div>
              <img
                src="https://thriveagency.com/files/Brandon-O-e1482942080144.jpg"
                alt=""
              />
              <p>
                <b>Brandon O’Brien</b>
              </p>
              <p>Demilec (USA), LLC</p>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div className="col-md-6 mt-5">
              <div className="box">
                <p>
                  Since having our new website built by Thrive, we have seen a
                  200% increase in the number of online contact forms being
                  filled out and returned to us. Matt and his team worked
                  closely with us to provide a site that met all of the criteria
                  that we were looking for. The end result was a website that is
                  attractive, organized and effective. Thanks to Thrive for all
                  of your hard work and support!
                </p>
              </div>
              <img
                src="https://thriveagency.com/files/Brandon-O-e1482942080144.jpg"
                alt=""
              />
              <p>
                <b>Brandon O’Brien</b>
              </p>
              <p>Demilec (USA), LLC</p>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div className="col-md-6 mt-5">
              <div className="box">
                <p>
                  Since having our new website built by Thrive, we have seen a
                  200% increase in the number of online contact forms being
                  filled out and returned to us. Matt and his team worked
                  closely with us to provide a site that met all of the criteria
                  that we were looking for. The end result was a website that is
                  attractive, organized and effective. Thanks to Thrive for all
                  of your hard work and support!
                </p>
              </div>
              <img
                src="https://thriveagency.com/files/Brandon-O-e1482942080144.jpg"
                alt=""
              />
              <p>
                <b>Brandon O’Brien</b>
              </p>
              <p>Demilec (USA), LLC</p>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div className="col-md-6 mt-5">
              <div className="box">
                <p>
                  Since having our new website built by Thrive, we have seen a
                  200% increase in the number of online contact forms being
                  filled out and returned to us. Matt and his team worked
                  closely with us to provide a site that met all of the criteria
                  that we were looking for. The end result was a website that is
                  attractive, organized and effective. Thanks to Thrive for all
                  of your hard work and support!
                </p>
              </div>
              <img
                src="https://thriveagency.com/files/Brandon-O-e1482942080144.jpg"
                alt=""
              />
              <p>
                <b>Brandon O’Brien</b>
              </p>
              <p>Demilec (USA), LLC</p>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ct;
