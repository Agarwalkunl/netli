import React from "react";
import Header from "./Header";
import "../css/whycu.css";
import Footer from "./Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2, // Number of slides to show at once
  slidesToScroll: 1, // Number of slides to scroll at a time
  // You can add more settings and customize it further
};

function whycu() {
  return (
    <div className="hoo">
      {" "}
      <Header></Header>
      <div className="section0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>Why Choose Us?</h4>
              <p>We Empower Your Brand and Grow Together</p>
            </div>
          </div>
        </div>
      </div>
      <div className="par parr">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>
                Thrive Internet Marketing Agency is an award-winning digital
                marketing company that offers a full spectrum of data-driven web
                marketing services. We develop growth-oriented online marketing
                campaigns that make a positive impact on businesses.
              </p>
            </div>

            <div className="col-4">
              <div className="bo">
                <img
                  src="https://thriveagency.com/wp-content/themes/thrive-agency/images/we-image1.svg"
                  alt=""
                />
                <h6>OPTIMIZE</h6>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mt-5">
              <div className="bo">
                <img
                  src="https://thriveagency.com/wp-content/themes/thrive-agency/images/we-image1.svg"
                  alt=""
                />
                <h6>OPTIMIZE</h6>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mt-5">
              <div className="bo">
                <img
                  src="https://thriveagency.com/wp-content/themes/thrive-agency/images/we-image1.svg"
                  alt=""
                />
                <h6>OPTIMIZE</h6>
              </div>
            </div>
            <div className="col-12 imd-m col-sm-6 mt-5">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx4dlUfOh-mCqG7yp3Xn3f-rJ5O5CKxLuibw&usqp=CAU"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flag">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10">
              <div className="row">
                <div className="col-md-6">
                  <h3>We Lead From the Front</h3>
                  <p>
                    Thrive Internet Marketing Agency is a recognized leader in
                    the digital marketing industry. Since 2005, we have been
                    helping thousands of local and international businesses
                    across industries maximize their online revenue by
                    implementing growth-driven digital marketing strategies.
                    <br /> <br />
                    To provide our clients with a clear path to success, we stay
                    up to date with the latest trends and innovations, explore
                    various marketing tactics and test them through our internal
                    campaigns to determine which strategies would generate the
                    best results.
                    <br /> <br />
                    We know how to get you more leads because we do it for
                    ourselves every month. Our expert in-house marketing team
                    generates almost all our leads through organic search
                    results.
                  </p>
                  <br />{" "}
                </div>
                <div className="col-md-6">
                  <img
                    src="https://thriveagency.com/wp-content/themes/thrive-agency/images/lead-front-image.svg"
                    alt=""
                  />
                </div>
                <div className="col-12">
                  <p>
                    In 2020, Thrive ranked No. 1 among all digital marketing
                    companies in the United States for first page Google Search
                    results based on an independent SEO market-share analysis
                    conducted by SEOlium. As a recognized SEO leader, we
                    continue to improve our processes to help more brands gain
                    higher search visibility. Our team’s dedication and
                    perseverance have allowed us to achieve remarkable growth in
                    2021:
                  </p>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="par">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>We’re a Results-Driven Digital Marketing Agency</h2>
              <p>
                Thrive Internet Marketing Agency is an award-winning digital
                marketing company that offers a full spectrum of data-driven web
                marketing services. We develop growth-oriented online marketing
                campaigns that make a positive impact on businesses.
              </p>
            </div>
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="bo">
                <img
                  src="https://thriveagency.com/wp-content/themes/thrive-agency/images/we-image1.svg"
                  alt=""
                />
                <a href="/#">OPTIMIZE</a>

                <p>Marketing Processes</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="bo">
                <img
                  src="https://thriveagency.com/wp-content/themes/thrive-agency/images/we-image1.svg"
                  alt=""
                />
                <a href="/#">OPTIMIZE</a>

                <p>Marketing Processes</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="bo">
                <img
                  src="https://thriveagency.com/wp-content/themes/thrive-agency/images/we-image1.svg"
                  alt=""
                />
                <a href="/#">OPTIMIZE</a>

                <p>Marketing Processes</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="bo">
                <img
                  src="https://thriveagency.com/wp-content/themes/thrive-agency/images/we-image1.svg"
                  alt=""
                />
                <a href="/#">OPTIMIZE</a>

                <p>Marketing Processes</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="bo">
                <img
                  src="https://thriveagency.com/wp-content/themes/thrive-agency/images/we-image1.svg"
                  alt=""
                />
                <a href="/#">OPTIMIZE</a>

                <p>Marketing Processes</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="bo">
                <img
                  src="https://thriveagency.com/wp-content/themes/thrive-agency/images/we-image1.svg"
                  alt=""
                />
                <a href="/#">OPTIMIZE</a>

                <p>Marketing Processes</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="bo">
                <img
                  src="https://thriveagency.com/wp-content/themes/thrive-agency/images/we-image1.svg"
                  alt=""
                />
                <a href="/#">OPTIMIZE</a>

                <p>Marketing Processes</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="bo">
                <img
                  src="https://thriveagency.com/wp-content/themes/thrive-agency/images/we-image1.svg"
                  alt=""
                />
                <a href="/#">OPTIMIZE</a>

                <p>Marketing Processes</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="bo">
                <img
                  src="https://thriveagency.com/wp-content/themes/thrive-agency/images/we-image1.svg"
                  alt=""
                />
                <a href="/#">OPTIMIZE</a>

                <p>Marketing Processes</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="bo">
                <img
                  src="https://thriveagency.com/wp-content/themes/thrive-agency/images/we-image1.svg"
                  alt=""
                />
                <a href="/#">OPTIMIZE</a>

                <p>Marketing Processes</p>
              </div>
            </div>{" "}
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="bo">
                <img
                  src="https://thriveagency.com/wp-content/themes/thrive-agency/images/we-image1.svg"
                  alt=""
                />
                <a href="/#">OPTIMIZE</a>

                <p>Marketing Processes</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mt-5">
              <div className="bo">
                <img
                  src="https://thriveagency.com/wp-content/themes/thrive-agency/images/we-image1.svg"
                  alt=""
                />
                <a href="/#">OPTIMIZE</a>

                <p>Marketing Processes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="caro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Our Latest Web Design Projects</h2>
            </div>
            <div className="col-12">
              <div className="row">
                <Slider {...settings} className="slide">
                  <div className="col-4">
                    <div>
                      <img
                        src="https://miro.medium.com/v2/resize:fit:871/1*9YJw0zVY1pIK41eTErjzgQ.jpeg"
                        alt=""
                      />
                      <h3>Softroc</h3>
                    </div>
                  </div>
                  <div className="col-4">
                    <div>
                      <img
                        src="https://miro.medium.com/v2/resize:fit:871/1*9YJw0zVY1pIK41eTErjzgQ.jpeg"
                        alt=""
                      />
                      <h3>Softroc</h3>
                    </div>
                  </div>
                  <div className="col-4">
                    <div>
                      <img
                        src="https://miro.medium.com/v2/resize:fit:871/1*9YJw0zVY1pIK41eTErjzgQ.jpeg"
                        alt=""
                      />
                      <h3>Softroc</h3>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cli clii">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>
                What Our{" "}
                <span style={{ color: "/#738942" }}> Clients Are Saying</span>
              </h1>
            </div>
            <div className="col-md-4 col-sm-6 mt-5">
              <div className="box">
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXwBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAIIAggMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAwIBBAYF/8QAJhABAQACAgEEAQQDAAAAAAAAAAECEQMxIRIyQVFhEyKBkQQUcf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD7MAAAAAAAAAAAAAAAAAAAAAAGMuTXQNubk+Ublb3XLddgvufcdeaWXq7als+QXE8eT7bl3PAOgAAAAAAAAxyZamgZzz34nTAA5bqbRtuV3VOX2pALYZeqee4i3x+4FXccrjXAF5dzcdS48tXX2qAAAAAAAhld5WrXqoAAAxyz9qT0WbmqjlhcfzAZb4p+7bMxt6i2OPpgOgAL43clQV4/aDYAAAAAOXqoPQhZq0HAYz5PjH+wbtk7rP6mP5RAV/Un5amUvVQAegSx5Nd+YqArx+3+UlsJrGA0AAAAAAnyY/Kjlm5qg83Jlqf9RU5sbjn56+KmAAAAApx5edfCbuMtynp7B6cJ6qszjj6Y0AAAAAAAADmWMymrPDy8nBlj5x8x6wH5492WGOXuxlYv+PhfuA8g9X+vh+f7bx4sMesQeXDiyz6mp916uPjnHPHf22AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z"
                  alt=""
                />
                <p>
                  <b>Marci Wiersma</b> <br />
                  Broker - About Roatan Real Estate
                </p>
                <h6>“They do everything they say...no BS”</h6>
                <p>
                  “Thrive is a much-needed blessing and exceeded our
                  expectations in every way. They are honest, straightforward,
                  they take care of ALL your needs quickly, they are reliable,
                  you can count on them and most of all, they do everything they
                  say they will do, no BS.”
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mt-5">
              <div className="box">
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXwBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAIIAggMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAwIBBAYF/8QAJhABAQACAgEEAQQDAAAAAAAAAAECEQMxIRIyQVFhEyKBkQQUcf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD7MAAAAAAAAAAAAAAAAAAAAAAGMuTXQNubk+Ublb3XLddgvufcdeaWXq7als+QXE8eT7bl3PAOgAAAAAAAAxyZamgZzz34nTAA5bqbRtuV3VOX2pALYZeqee4i3x+4FXccrjXAF5dzcdS48tXX2qAAAAAAAhld5WrXqoAAAxyz9qT0WbmqjlhcfzAZb4p+7bMxt6i2OPpgOgAL43clQV4/aDYAAAAAOXqoPQhZq0HAYz5PjH+wbtk7rP6mP5RAV/Un5amUvVQAegSx5Nd+YqArx+3+UlsJrGA0AAAAAAnyY/Kjlm5qg83Jlqf9RU5sbjn56+KmAAAAApx5edfCbuMtynp7B6cJ6qszjj6Y0AAAAAAAADmWMymrPDy8nBlj5x8x6wH5492WGOXuxlYv+PhfuA8g9X+vh+f7bx4sMesQeXDiyz6mp916uPjnHPHf22AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z"
                  alt=""
                />
                <p>
                  <b>Marci Wiersma</b> <br />
                  Broker - About Roatan Real Estate
                </p>
                <h6>“They do everything they say...no BS”</h6>
                <p>
                  “Thrive is a much-needed blessing and exceeded our
                  expectations in every way. They are honest, straightforward,
                  they take care of ALL your needs quickly, they are reliable,
                  you can count on them and most of all, they do everything they
                  say they will do, no BS.”
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mt-5">
              <div className="box">
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXwBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAIIAggMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAwIBBAYF/8QAJhABAQACAgEEAQQDAAAAAAAAAAECEQMxIRIyQVFhEyKBkQQUcf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD7MAAAAAAAAAAAAAAAAAAAAAAGMuTXQNubk+Ublb3XLddgvufcdeaWXq7als+QXE8eT7bl3PAOgAAAAAAAAxyZamgZzz34nTAA5bqbRtuV3VOX2pALYZeqee4i3x+4FXccrjXAF5dzcdS48tXX2qAAAAAAAhld5WrXqoAAAxyz9qT0WbmqjlhcfzAZb4p+7bMxt6i2OPpgOgAL43clQV4/aDYAAAAAOXqoPQhZq0HAYz5PjH+wbtk7rP6mP5RAV/Un5amUvVQAegSx5Nd+YqArx+3+UlsJrGA0AAAAAAnyY/Kjlm5qg83Jlqf9RU5sbjn56+KmAAAAApx5edfCbuMtynp7B6cJ6qszjj6Y0AAAAAAAADmWMymrPDy8nBlj5x8x6wH5492WGOXuxlYv+PhfuA8g9X+vh+f7bx4sMesQeXDiyz6mp916uPjnHPHf22AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z"
                  alt=""
                />
                <p>
                  <b>Marci Wiersma</b> <br />
                  Broker - About Roatan Real Estate
                </p>
                <h6>“They do everything they say...no BS”</h6>
                <p>
                  “Thrive is a much-needed blessing and exceeded our
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
      <div className="sectiono9">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Choose Thrive and Improve Your Technical SEO</h1>
              <p>
                Achieve Top Search Engine Rankings with Our Robust Technical SEO
                Strategy
              </p>
              <a href="/#" className="btn btn-outline-success">
                GET MY FREE PROPOSAL{" "}
              </a>
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

export default whycu;
