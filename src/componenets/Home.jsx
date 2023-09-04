import React, { useEffect } from "react";
import Header from "./Header";
import "../css/home.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
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
function Home() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="maind">
      <Header></Header>
      <div className="section0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>
                RESULTS <span style={{ color: "#0f752a" }}>DRIVEN</span>
              </h4>
              <p>DIGITAL MARKETING AGENCY</p>
              <a href="#" className="btn btn-outline-primary">
                GET MY FREE PROPOSAL{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section00">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>
                Our Clients <b>Get Results</b>
              </h4>
            </div>
            <div className="col-lg-6" data-aos="flip-left">
              <div className="box">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4O6VYWZwD-0DzDLUpwi6tqEwvw1QIxCTT0g&usqp=CAU"
                  alt=""
                />
                <h6>“The results speak for themselves”</h6>
                <div className="row">
                  <div className="col-6">
                    <h4>
                      <span>+664% </span>
                      <br />
                      Organic Traffic
                    </h4>
                  </div>
                  <div className="col-6">
                    <h4>
                      <span>+664% </span>
                      <br />
                      Organic Traffic
                    </h4>
                  </div>
                </div>
                <p>
                  Thrive used SEO & PPC to increase the overall traffic to the
                  new Farah website by +664% and along with the new CRO focused
                  Website were able to increase online leads by over +360%.
                </p>
                <a href="#">Read Farah’s Case Study »</a>
              </div>
            </div>
            <div className="col-lg-6" data-aos="flip-left">
              <div className="box">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4O6VYWZwD-0DzDLUpwi6tqEwvw1QIxCTT0g&usqp=CAU"
                  alt=""
                />
                <h6>“The results speak for themselves”</h6>
                <div className="row">
                  <div className="col-6">
                    <h4>
                      <span>+664% </span>
                      <br />
                      Organic Traffic
                    </h4>
                  </div>
                  <div className="col-6">
                    <h4>
                      <span>+664% </span>
                      <br />
                      Organic Traffic
                    </h4>
                  </div>
                </div>
                <p>
                  Thrive used SEO & PPC to increase the overall traffic to the
                  new Farah website by +664% and along with the new CRO focused
                  Website were able to increase online leads by over +360%.
                </p>
                <a href="#">Read Farah’s Case Study »</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section22">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>
                What Our <b>Clients Are Saying</b>
              </h4>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuxynzmiMERtfH__YdPHKPyqJ6UHI9HYO-gFiZYH2Muw&s"
                  alt=""
                />
                <h6>Marci Wiersma</h6>
                <p>Broker – About Roatan Real Estate</p>
                <p className="p">
                  <b>“They do everything they ”</b>
                </p>
                <p>
                  “Thrive is a much needed blessing and exceeded our
                  expectations in every way. They are honest, straightforward,
                  they take care of ALL your needs quickly, they are reliable,
                  you can count on them and most of all, they do everything they
                  say they will do, no BS.”
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuxynzmiMERtfH__YdPHKPyqJ6UHI9HYO-gFiZYH2Muw&s"
                  alt=""
                />
                <h6>Marci Wiersma</h6>
                <p>Broker – About Roatan Real Estate</p>
                <p className="p">
                  <b>“They do everything they ”</b>
                </p>
                <p>
                  “Thrive is a much needed blessing and exceeded our
                  expectations in every way. They are honest, straightforward,
                  they take care of ALL your needs quickly, they are reliable,
                  you can count on them and most of all, they do everything they
                  say they will do, no BS.”
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="zoom-in">
              <div className="box">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuxynzmiMERtfH__YdPHKPyqJ6UHI9HYO-gFiZYH2Muw&s"
                  alt=""
                />
                <h6>Marci Wiersma</h6>
                <p>Broker – About Roatan Real Estate</p>
                <p className="p">
                  <b>“They do everything they ”</b>
                </p>
                <p>
                  “Thrive is a much needed blessing and exceeded our
                  expectations in every way. They are honest, straightforward,
                  they take care of ALL your needs quickly, they are reliable,
                  you can count on them and most of all, they do everything they
                  say they will do, no BS.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section22">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>
                Why Choose Thrive For <b> Your Digital Marketing Agency?</b>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="section33">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>
                Thrive is a full-service digital marketing agency. We’ve been
                providing a wide range of services to clients of all industries
                since 2005. Our digital marketing services include consulting
                and management options for a variety of online marketing tactics
                including search engine optimization (SEO), pay-per-click (PPC)
                ads, Amazon store optimization, copywriting, conversion rate
                optimization (CRO), and more. We also offer expert web design
                and development services for both eCommerce and B2B companies.
                Don’t just partner with any digital marketing agency; work with
                a company you can trust.
              </p>
            </div>
            <div className="col-lg-6">
              <p>
                Meet our team of digital <b>marketing experts</b>
                <b>You might have a website,</b> but it isn’t doing your
                business much good if it isn’t being picked up by the search
                engines. To make sure customers find your site online, we can
                take your online presence to the next level — your website
                design, copywriting, keywords, social media presence and more.
                Working with us, you get the most from your return on marketing
                investment. Here are some reasons why:
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS00Llc2aqE6AfkbxFk1CYE5N8Hlwtbr76CuGtFH_nkEw&s"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section22">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>
                Award-winning <b> digital marketing agency</b>
              </h4>
              <p className="p2">
                Thrive is a WordPress web design and SEO company with proven
                results.
              </p>
            </div>
            <div className="col-12">
              <img
                src="https://thriveagency.com/files/awardimage2020.jpg"
                alt=""
              />
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
      <div className="section22">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>
                Thrive <b> Growth Insider</b>
              </h4>
              <p className="p2">
                join over 3,000 subscribers who get fresh content from us on a
                weekly basis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section44">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mt-5">
              <div className="box">
                <p>
                  <b>
                    Google Ads Unveils New Design and Google Analytics 4 &
                    AdSense Integration
                  </b>{" "}
                </p>

                <p> AUGUST 31, 2023</p>
                <p> It’s a busy month for Google as it rolls out… </p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-5">
              <div className="box">
                <p>
                  <b>
                    Google Ads Unveils New Design and Google Analytics 4 &
                    AdSense Integration
                  </b>{" "}
                </p>

                <p> AUGUST 31, 2023</p>
                <p> It’s a busy month for Google as it rolls out… </p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-5">
              <div className="box">
                <p>
                  <b>
                    Google Ads Unveils New Design and Google Analytics 4 &
                    AdSense Integration
                  </b>{" "}
                </p>

                <p> AUGUST 31, 2023</p>
                <p> It’s a busy month for Google as it rolls out… </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section22">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>
                Our <b> Digital Marketing Expertise</b>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="section5 section55">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9">
                  <a href="#">Search Engine Optimization (SEO)</a>
                </div>
                <p>
                  Through careful keyword research and white hat SEO practices,
                  traffic and increase your conversions as part of your digital
                  marketing solutions.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9">
                  <a href="#">Search Engine Optimization (SEO)</a>
                </div>
                <p>
                  Through careful keyword research and white hat SEO practices,
                  traffic and increase your conversions as part of your digital
                  marketing solutions.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9">
                  <a href="#">Search Engine Optimization (SEO)</a>
                </div>
                <p>
                  Through careful keyword research and white hat SEO practices,
                  traffic and increase your conversions as part of your digital
                  marketing solutions.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9">
                  <a href="#">Search Engine Optimization (SEO)</a>
                </div>
                <p>
                  Through careful keyword research and white hat SEO practices,
                  traffic and increase your conversions as part of your digital
                  marketing solutions.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9">
                  <a href="#">Search Engine Optimization (SEO)</a>
                </div>
                <p>
                  Through careful keyword research and white hat SEO practices,
                  traffic and increase your conversions as part of your digital
                  marketing solutions.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9">
                  <a href="#">Search Engine Optimization (SEO)</a>
                </div>
                <p>
                  Through careful keyword research and white hat SEO practices,
                  traffic and increase your conversions as part of your digital
                  marketing solutions.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9">
                  <a href="#">Search Engine Optimization (SEO)</a>
                </div>
                <p>
                  Through careful keyword research and white hat SEO practices,
                  traffic and increase your conversions as part of your digital
                  marketing solutions.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9">
                  <a href="#">Search Engine Optimization (SEO)</a>
                </div>
                <p>
                  Through careful keyword research and white hat SEO practices,
                  traffic and increase your conversions as part of your digital
                  marketing solutions.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9">
                  <a href="#">Search Engine Optimization (SEO)</a>
                </div>
                <p>
                  Through careful keyword research and white hat SEO practices,
                  traffic and increase your conversions as part of your digital
                  marketing solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section66">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>
                READY{" "}
                <span>
                  <b>TO GROW YOUR BUSINESS?</b>
                </span>
              </h4>
              <p>
                Contact us to work with a results-driven digital marketing
                agency
              </p>
            </div>
            <div className="col-5">
              <a href="#" className="btn btn-outline-success">
                GET MY FREE PROPOSAL{" "}
              </a>
            </div>
            <div className="col-1">
              <p>OR</p>
            </div>
            <div className="col-5">
              <a href="#" className="btn btn-outline-success">
                CALL 935-114-8907
              </a>
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
                    Featured <br /> <span>In</span>
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

export default Home;
