import React from "react";
import Header from "./Header";
import "../css/comman.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "./Footer";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
window.addEventListener("scroll", () => {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});
function comman() {
  return (
    <div>
      <Header></Header>
      <div className="section0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>Digital Marketing Services</h4>
              <p>
                Grow Your Client Base With Data-Driven and Targeted Strategies
              </p>
              <a href="#" className="btn btn-outline-primary">
                GET MY FREE PROPOSAL{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section1">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p>
                Thrive Internet Marketing Agency is a dynamic, versatile and
                full-service digital marketing agency that doesn’t rely on smoke
                and mirrors to attract new clients. Instead, Thrive trusts its
                own search engine optimization (SEO) and marketing skills to
                drive new customers to our website.
                <br />
                We’re not{" "}
                <b>
                  {" "}
                  a static company. We don’t limit ourselves to specific
                  industries. Thrive has the experience and professionals to
                  build a custom website and use multiple digital marketing
                  services{" "}
                </b>
                to assist any size company in any industry.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4O6VYWZwD-0DzDLUpwi6tqEwvw1QIxCTT0g&usqp=CAU"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-13a52dd/thriveagency.com/wp-content/themes/thrive-agency/images/digital-marketing-service-image-2.svg"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <p>
                So many other agencies rely on a one-size-fits-all approach,
                many times offering you the same strategy and cookie-cutter
                website as your competitor down the street.
                <br />
                Thrive works with you to produce customized{" "}
                <b>internet marketing </b>services and a plan that aligns with
                your unique business needs. We become an extension of your team,
                a partner that understands your market and goals, rather than
                just an agency that executes strategies blindly.
                <br />
                Unlike so many other agencies that use glitz and glamor to close
                sales <b>and then fail to execute,</b> Thrive focuses on client
                relationships and results. We always deliver substance, not
                false promises, ensuring we maximize your budget, so you get the
                most return on investment (ROI).
                <br />
                Our reviews and <b>testimonials speak </b> volumes. We earn your
                business every day with month-to-month contracts.
                <br />
                Take a look below at the wide variety of{" "}
                <b>digital marketing services Thrive offers.</b> Contact us
                today to learn more about how we can help your business!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>How Digital Marketing Services Drive Business Growth</h4>
              <p>
                Engage Your Target Customers at the Right Time on the Right
                Platform
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-13a52dd/thriveagency.com/wp-content/themes/thrive-agency/images/digital-marketing-service-image-24.svg"
                alt=""
              />
            </div>
            <div className="col-md--6">
              <p>
                Digital marketing <b>services provide businesses </b>of all
                sizes with an opportunity to market their brand 24/7 at a low
                cost. From startups to medium-sized enterprises to
                multiple-location companies, a digital marketing company helps
                you expand your niche market reach to offer goods and services
                to your target customers, irrespective of time differences or
                location.
                <br />
                Hiring an internet marketing agency is one{" "}
                <b>of the best ways to </b> reach your prospects while
                maintaining a robust relationship with your existing clients. As
                long as your business has a strong digital presence, your
                customers will always find you.
                <br />
                Since 2005, <b>our digital marketing </b>company has been
                partnering with hundreds of businesses in the United States to
                achieve their conversion goals. Throughout the years, we’ve
                provided an array of custom digital marketing services to our
                clients and generated the following results:
              </p>
              <br />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="section4">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 mt-5">
              <div className="box">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9aCMeX2cx-RFDbk_zNnKZR-lFxvQ_aF4xHA&usqp=CAU"
                  alt=""
                />
                <div className="co">
                  <h6>Multiple-Location Orthodontic Practice Group</h6>
                  <p className="p">Conversion Rate Optimization (CRO)</p>
                </div>
                <div className="row">
                  <div className="col-6">
                    <p>
                      <span>+226%</span>
                      <br />
                      Top 5 Keyword Rankings
                    </p>
                  </div>
                  <div className="col-6">
                    <p>
                      <span>+226%</span>
                      <br />
                      Top 5 Keyword Rankings
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mt-5">
              <div className="box">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9aCMeX2cx-RFDbk_zNnKZR-lFxvQ_aF4xHA&usqp=CAU"
                  alt=""
                />
                <div className="co">
                  <h6>Multiple-Location Orthodontic Practice Group</h6>
                  <p className="p">Conversion Rate Optimization (CRO)</p>
                </div>
                <div className="row">
                  <div className="col-6">
                    <p>
                      <span>+226%</span>
                      <br />
                      Top 5 Keyword Rankings
                    </p>
                  </div>
                  <div className="col-6">
                    <p>
                      <span>+226%</span>
                      <br />
                      Top 5 Keyword Rankings
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mt-5">
              <div className="box">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9aCMeX2cx-RFDbk_zNnKZR-lFxvQ_aF4xHA&usqp=CAU"
                  alt=""
                />
                <div className="co">
                  <h6>Multiple-Location Orthodontic Practice Group</h6>
                  <p className="p">Conversion Rate Optimization (CRO)</p>
                </div>
                <div className="row">
                  <div className="col-6">
                    <p>
                      <span>+226%</span>
                      <br />
                      Top 5 Keyword Rankings
                    </p>
                  </div>
                  <div className="col-6">
                    <p>
                      <span>+226%</span>
                      <br />
                      Top 5 Keyword Rankings
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <p>
                Our digital marketing agency follows a systematic approach to
                ensure all our online marketing efforts deliver profitable
                results. Leverage Thrive’s internet marketing services today and
                let us help you boost your customer acquisition and retention
                rates.
              </p>
              <a href="#" className="btn btn-outline-success">
                LET'S TALK
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>Thrive’s Digital Marketing Services</h4>
              <p className="p">
                Build Brand Recognition as an Industry Leader and Increase
                Profitability
              </p>
            </div>
            <div className="col-md-4 col-sm-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9">
                  <a href="#">Search Engine Optimization (SEO)</a>
                </div>
                <p>
                  Through careful keyword research and white hat SEO practices,
                  we can help you achieve higher organic rankings and increased
                  visibility in search results. Our internet marketing company
                  performs extensive keyword research, conducts on-page and
                  off-page optimization and tracks your results with Google
                  Search Console. These practices allow us to attract
                  high-quality leads and traffic and increase your conversions
                  as part of your digital marketing solutions.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9">
                  <a href="#">Search Engine Optimization (SEO)</a>
                </div>
                <p>
                  Through careful keyword research and white hat SEO practices,
                  we can help you achieve higher organic rankings and increased
                  visibility in search results. Our internet marketing company
                  performs extensive keyword research, conducts on-page and
                  off-page optimization and tracks your results with Google
                  Search Console. These practices allow us to attract
                  high-quality leads and traffic and increase your conversions
                  as part of your digital marketing solutions.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9">
                  <a href="#">Search Engine Optimization (SEO)</a>
                </div>
                <p>
                  Through careful keyword research and white hat SEO practices,
                  we can help you achieve higher organic rankings and increased
                  visibility in search results. Our internet marketing company
                  performs extensive keyword research, conducts on-page and
                  off-page optimization and tracks your results with Google
                  Search Console. These practices allow us to attract
                  high-quality leads and traffic and increase your conversions
                  as part of your digital marketing solutions.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9">
                  <a href="#">Search Engine Optimization (SEO)</a>
                </div>
                <p>
                  Through careful keyword research and white hat SEO practices,
                  we can help you achieve higher organic rankings and increased
                  visibility in search results. Our internet marketing company
                  performs extensive keyword research, conducts on-page and
                  off-page optimization and tracks your results with Google
                  Search Console. These practices allow us to attract
                  high-quality leads and traffic and increase your conversions
                  as part of your digital marketing solutions.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9">
                  <a href="#">Search Engine Optimization (SEO)</a>
                </div>
                <p>
                  Through careful keyword research and white hat SEO practices,
                  we can help you achieve higher organic rankings and increased
                  visibility in search results. Our internet marketing company
                  performs extensive keyword research, conducts on-page and
                  off-page optimization and tracks your results with Google
                  Search Console. These practices allow us to attract
                  high-quality leads and traffic and increase your conversions
                  as part of your digital marketing solutions.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9">
                  <a href="#">Search Engine Optimization (SEO)</a>
                </div>
                <p>
                  Through careful keyword research and white hat SEO practices,
                  we can help you achieve higher organic rankings and increased
                  visibility in search results. Our internet marketing company
                  performs extensive keyword research, conducts on-page and
                  off-page optimization and tracks your results with Google
                  Search Console. These practices allow us to attract
                  high-quality leads and traffic and increase your conversions
                  as part of your digital marketing solutions.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9">
                  <a href="#">Search Engine Optimization (SEO)</a>
                </div>
                <p>
                  Through careful keyword research and white hat SEO practices,
                  we can help you achieve higher organic rankings and increased
                  visibility in search results. Our internet marketing company
                  performs extensive keyword research, conducts on-page and
                  off-page optimization and tracks your results with Google
                  Search Console. These practices allow us to attract
                  high-quality leads and traffic and increase your conversions
                  as part of your digital marketing solutions.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9">
                  <a href="#">Search Engine Optimization (SEO)</a>
                </div>
                <p>
                  Through careful keyword research and white hat SEO practices,
                  we can help you achieve higher organic rankings and increased
                  visibility in search results. Our internet marketing company
                  performs extensive keyword research, conducts on-page and
                  off-page optimization and tracks your results with Google
                  Search Console. These practices allow us to attract
                  high-quality leads and traffic and increase your conversions
                  as part of your digital marketing solutions.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9">
                  <a href="#">Search Engine Optimization (SEO)</a>
                </div>
                <p>
                  Through careful keyword research and white hat SEO practices,
                  we can help you achieve higher organic rankings and increased
                  visibility in search results. Our internet marketing company
                  performs extensive keyword research, conducts on-page and
                  off-page optimization and tracks your results with Google
                  Search Console. These practices allow us to attract
                  high-quality leads and traffic and increase your conversions
                  as part of your digital marketing solutions.
                </p>
              </div>
            </div>
            <div className="col-12">
              <a href="#" className="btn btn-outline-success">
                GET STARTED NOW
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>
                Why Your Business Should Be Using Digital Marketing Services
              </h4>
              <p>Engage More Clients and Rank High On Search Results</p>
            </div>
            <div className="col-md-6">
              <img
                src="https://thriveagency.com/wp-content/themes/thrive-agency/images/digital-marketing-service-image-221.png"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <p>
                The online marketing industry is growing at an unprecedented
                rate. According to eMarketer, businesses in the U.S. spend more
                than $110 billion on digital advertising. With more companies
                investing their time and resources in online marketing, relying
                on your old advertising tactics is not enough to win over
                customers.
                <br />
                Increase your sales volume and build a robust digital foundation
                with value-driven internet marketing services. Digital marketing
                helps you:
              </p>
              <br />{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="section6">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <li>Save time, money and resources</li>
              <li>Acquire huge ROI</li>
              <li>Track your campaign results</li>
              <li>Adjust your strategies based on analytics and data</li>
              <li>Leverage precise audience targeting</li>
            </div>
            <div className="col-sm-6 ">
              <li>Build your brand reputation across online channels</li>
              <li>Maximize various customer touchpoints</li>
              <li>Promote greater consumer engagement</li>
              <li>Drive profitable long-term growth</li>
              <li>Improve your conversion rates</li>
            </div>

            <div className="col-md-6 six">
              <p>
                A study presented by BrightTALK shows that 42 percent of
                marketing professionals find the lack of quality data their
                biggest barrier to lead generation. With the help of a trusted
                internet marketing company, you can gain a holistic view of your
                customer journey and competition.
                <br />
                Don’t <b>waste your investment </b>in marketing techniques that
                do not deliver measurable results. Partner with Thrive Internet
                Marketing Agency today and establish your market dominance with
                our targeted digital marketing solutions.
              </p>
            </div>
            <div className="col-md-6 six">
              <img
                src="https://thriveagency.com/wp-content/themes/thrive-agency/images/digital-marketing-inner-custom-image0012.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>
                Why Choose Thrive As Your Digital Marketing Services Agency
              </h4>
              <p>Boost Your Revenue Growth Rate and Achieve Online Success</p>
            </div>

            <div className="col-md-6">
              <p>
                Thrive Internet Marketing Agency is an award-winning internet
                marketing company that provides goal-oriented advertising
                solutions. Our primary focus is to help businesses increase
                their client retention rate and maximize conversion
                opportunities.
                <br />
                Trust us to give our full commitment to your brand’s digital
                success. Choose Thrive and gain the following advantages (and so
                many more digital marketing solutions):
              </p>
              <br />{" "}
            </div>
            <div className="col-md-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc-gWQEn9XYZmoS-OLNNBnlx0NySa9n-eNEfdIo31zBtn5TTiAYjxPnx3lEZcDZ8s-_To&usqp=CAU"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="comman">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <img
                src="https://thriveagency.com/files/awardimage2020.jpg"
                alt=""
              />
              <a href="#" className="btn btn-outline-success">
                GROW MY LEADS NOW
              </a>
            </div>
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
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Accordion Item #2
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>This is the second item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. It's also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Accordion Item #3
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>This is the third item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
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
      <div className="animation">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-3">
                  <h1>
                    Our <br /> <span>Awards</span>
                  </h1>
                </div>
                <div className="col-9">
                  <Carousel
                    swipeable={true}
                    draggable={true}
                    responsive={responsive}
                  >
                    <div>
                      <img
                        src="https://delante.co/wp-content/uploads/2022/09/ipma-logo-black.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://delante.co/wp-content/uploads/2022/09/ipma-logo-black.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://delante.co/wp-content/uploads/2022/09/ipma-logo-black.png"
                        alt=""
                      />
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default comman;
