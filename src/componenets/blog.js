import React, { useState } from "react";
import Header from "./Header";
import "../css/blog.css";
import Footer from "./Footer";
import InfiniteScroll from "react-infinite-scroll-component";

function Blog() {
  const [a, sa] = useState(Array.from({ length: 20 }));
  const [aa, saa] = useState(true);
  function moree() {
    if (a.length < 200) {
      setTimeout(() => {
        sa(a.concat(Array.from({ length: 20 })));
      }, 1000);
    } else {
      saa(false);
    }
  }
  return (
    <div>
      {" "}
      <Header></Header>
      <div className="section0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>Our Blog</h4>
              <p>
                News From Thrive And Around The World Of Web Design And Online
                Marketing.
              </p>
              <a href="/#" className="btn btn-outline-success">
                GET MY FREE PROPOSAL{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="form">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 ">
              <h1>JOIN OVER 3,000</h1>
            </div>
            <div className="col-lg-3 col-md-6 ">
              <p>
                Subscribers who get fresh content to help their business weekly.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 ">
              <label>Email</label>
              <input type="text" />
            </div>
            <div className="col-lg-3 col-md-6 ">
              <a href="/#" className="btn btn-outline-success">
                SUBSCRIBE
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="sel">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <input type="text" placeholder="Search the website" />
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="col-md-6">
              <select id="fruitSelect" name="fruits">
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="cherry">Cherry</option>
                <option value="grape">Grape</option>
                <option value="orange">Orange</option>
              </select>
            </div>
            <div className="col-12">
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div className="boxes">
        <div className="container">
          <InfiniteScroll
            dataLength={a.length}
            next={moree}
            hasMore={aa}
            loader={<p>Loading...</p>}
            endMessage={<p>you are all set</p>}
          >
            <div className="row">
              {a.map((item, index) => {
                return (
                  <div className="col-xl-4 col-md-6">
                    <div className="box">
                      <img
                        src="https://thriveagency.com/files/What-Elon-Musks-Twitter-Takeover-and-Blue-Check-Subscription_1280x720-331x186.png"
                        alt=""
                      />
                      <a href="/#">
                        What Elon Musk’s Twitter Takeover and Blue Check
                        Description Means f...
                      </a>
                      <p>
                        September 1, <b>2023 BY Arrabon Toribio</b> <br />
                        Forty-four billion dollars{" "}
                        <b>
                          sounds like a large sum, but Tesla and SpaceX owner
                          Elon Musk was{" "}
                        </b>
                        willing to shell it out to buy one of the world’s
                        largest social media platforms, with over 556 million
                        ...
                        <br />
                        Filed Under: Internet Marketing, Thrive News, Social
                        Media, Online Marketing
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Blog;
