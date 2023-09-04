import React from "react";
import Header from "./Header";
import "../css/ecommerce.css";
import Footer from "./Footer";

function ecommerce() {
  return (
    <div>
      {" "}
      <Header></Header>
      <div className="section0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4> eCommerce Web Design</h4>
              <p>
                Utilize cutting-edge eCommerce web design to increase sales.
              </p>
              <a href="/#" className="btn btn-outline-primary">
                GET MY FREE PROPOSAL{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="eco">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>
                The design and functionality of your eCommerce website design
                could make or break conversions and affect your bottom line. An
                eCommerce site has several layers of functionality that aren’t
                on standard websites, including a web server to host a
                storefront, payment processing, an inventory database and a
                complicated dispatch system used to send products.
                <br />
                <br />
                Thrive Internet Marketing Agency has designed top quality
                eCommerce sites for more than a decade. We partner with clients
                to develop a high-functioning eCommerce website that drives
                sales quickly, easily and efficiently. Learn how our digital
                marketing experts can help you increase ROI with a fresh,
                innovative eCommerce website design.
              </p>
            </div>
            <div className="col-12 bb">
              <a href="/#" className="btn btn-outline-success">
                LETS STARTED
              </a>
              <img
                src="https://thriveagency.com/files/ecommerce-1992281_1280-e1528995284892.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="comman commann">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Accordion Item #1
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>This is the first item's accordion body.</strong>{" "}
                      It is shown by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ecoo">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>
                <b>
                  Why choose Thrive? <br />
                </b>
                Thrive has a team of expert digital marketing experts, from web
                designers and creative writers to SEO specialists and video
                producers, all who have one goal in mind - to help you grow your
                business.
                <br />
                <br />
                Longevity: Thrive has been in business since 2005. <br />
                Experience: We have launched over 350 websites. <br />
                Integrity: We do business with honesty, integrity and a sincere
                heart for others. <br />
                We listen: We take the time to understand your business goals.{" "}
                <br />
                Deliver on time: We set realistic deadlines and stick to them.{" "}
                <br />
                No templates: We create original, quality web designs. <br />
              </p>
              <img
                src="https://thriveagency.com/files/awardimage2022-1-1.jpeg"
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

export default ecommerce;
