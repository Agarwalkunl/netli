import React from "react";
import Header from "./Header";
import "../css/webde.css";
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
function webde() {
  return (
    <div className="mainc">
      {" "}
      <Header></Header>
      <div className="section0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>Web Design Services</h4>
              <p>
                Get Found Online and Turn Clicks Into Customers With a
                Well-Optimized Website
              </p>
              <a href="/#" className="btn btn-outline-primary">
                GET MY FREE PROPOSAL{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section000 section0000">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>
                Showcase Your Thought Leadership Brand with Robust Web Design
              </h1>
            </div>
            <div className="col-lg-6">
              <p>
                <b>An SEO Marketing Company That Gets It</b> <br />
                Let’s face it. You know what you need but you just don’t know
                how to get it. Our SEO specialists hear that over and over from
                SEO clients who contact Thrive Internet Marketing Agency.
                <br />
                You’re likely here because of one or more of the following
                reasons:
                <br />
                • Your website isn’t being found online. <br />
                • Your website traffic has diminished recently and you don’t
                know why. <br />
                • Suddenly, your volume of incoming calls and leads has
                declined. <br />• You’re starting a new website and want to ramp
                up new business quickly.
              </p>
              <br />
            </div>
            <div className="col-lg-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXNaLcNmt30ukyvF_P4m7pFgHaCa0ePSJlhkFV8CLXxA&s"
                alt=""
              />
            </div>
            <div className="col-12">
              <p>
                {" "}
                If any of these four pain points ring a bell, rest assured,
                you’ve come to the right SEO company. There’s a reason why
                Thrive is
                <b>currently </b>serving hundreds of SEO clients and providing
                optimization solutions to answer Google’s ever-changing
                algorithm.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section000 section0000">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>
                Superior Web Design Represents Your Company and Grows Your
                Business
              </h1>
              <p>
                Creating a digital presence doesn’t mean simply building a
                website and waiting for customers to approach your brand. Your
                website is your company’s online foundation. It serves as your
                primary customer touchpoint and conversion machine. As such, you
                must ensure it ranks high in search engines, stands out from the
                competition and relates to your visitors' intentions.
              </p>
            </div>
            <div className="col-lg-6">
              <p>
                Statistics reveal that website design and navigation influence
                94 percent of first impressions. Search engines also favor
                websites with responsive web design and well-structured web
                content. What’s more, 75 percent of site credibility comes from
                web page design.
                <br />
                As a business owner, it is critical that you maintain a
                responsive website design to appeal to search engines and online
                users. You must ensure your target customers see a legit
                business platform when they search for your company online.
                Otherwise, you risk losing trust from your prospective clients
                and dissuade them from engaging with your brand.
                <br />
                Invest in responsive website design and build trust and
                confidence in your brand offerings. Our web design company
                provides SEO-friendly website design services that aim to boost
                your search rankings, increase your online exposure and convert
                page visitors into paying customers.
              </p>
              <br />
            </div>
            <div className="col-lg-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvxpf6MjfsbXIY5P02gPfeX394la0YpfFNg&usqp=CAU"
                alt=""
              />
            </div>
            <div className="col-12">
              <p>
                Schedule a consultation with our website design agency today and
                let us help you build a web page design that drives qualified
                traffic and increases your conversion rate.
              </p>
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
          <div className="col-12 btnn">
            <h3>
              Ready to chat about how our website design <br />
              company can grow your business?
            </h3>
            <a href="/#" className="btn btn-outline-success">
              GET FREE QUOTE
            </a>
          </div>
        </div>
      </div>
      <div className="section000 section0000 section0l">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Why Your Business Needs Responsive Web Design</h1>
              <p className="pp">
                Future-Proof Your Website and Increase Your Mobile Traffic
              </p>
            </div>
            <div className="col-lg-6">
              <p>
                Still on the fence about creating your website or optimizing
                your existing website design? It doesn’t matter if you own a
                startup or a large enterprise, you need responsive website
                design to promote your brand and create a strong digital
                footprint in this competitive marketplace.
                <br />
                Today, several businesses have adopted responsive web design to
                gain more page visitors and maximize their conversion
                opportunities. Despite its growing popularity, however, many
                companies still settle for static web page design. Don’t fall
                behind the competition. Capitalize on personalized web design
                services and deliver the best possible online experience to your
                target customers.
              </p>
              <br />
            </div>
            <div className="col-lg-6">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
            <div className="col-12">
              <p>
                Studies show that there are approximately 3.5 billion smartphone
                users globally. An eMarketer survey also revealed that adults in
                the U.S. spend an average of 2 hours and 55 minutes on their
                mobile devices every day. With the increasing prevalence of
                mobile usage among different locations and age groups, it is
                imperative that you optimize your existing web design to cater
                to a wide range of internet users.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section5 section555 sectiono5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>Competitive Advantages of Responsive Web Design</h4>
              <p className="p">
                A multitude of different screen sizes exists across devices. As
                such, it is important that your web page design can adapt to any
                screen size today or in the future. With responsive website
                design, you can ensure your website responds to customer needs
                and the capabilities of the devices they are using.
                <br />
                Here are more reasons Thrive’s web design services are worth
                your investment:
              </p>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9">
                  <p className="pp">Keyword Research & Strategy</p>
                </div>
                <p>
                  Thrive is an SEO agency that understands your niche and can
                  boost your ranking for specific search terms. Your dedicated
                  SEO specialist will review the keywords your website is
                  currently ranking for, take your keyword wishlist and conduct
                  additional keyword research to build a list that makes the
                  most sense for your website and the competitive landscape.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9">
                  <p className="pp">Keyword Research & Strategy</p>
                </div>
                <p>
                  Thrive is an SEO agency that understands your niche and can
                  boost your ranking for specific search terms. Your dedicated
                  SEO specialist will review the keywords your website is
                  currently ranking for, take your keyword wishlist and conduct
                  additional keyword research to build a list that makes the
                  most sense for your website and the competitive landscape.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9">
                  <p className="pp">Keyword Research & Strategy</p>
                </div>
                <p>
                  Thrive is an SEO agency that understands your niche and can
                  boost your ranking for specific search terms. Your dedicated
                  SEO specialist will review the keywords your website is
                  currently ranking for, take your keyword wishlist and conduct
                  additional keyword research to build a list that makes the
                  most sense for your website and the competitive landscape.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9">
                  <p className="pp">Keyword Research & Strategy</p>
                </div>
                <p>
                  Thrive is an SEO agency that understands your niche and can
                  boost your ranking for specific search terms. Your dedicated
                  SEO specialist will review the keywords your website is
                  currently ranking for, take your keyword wishlist and conduct
                  additional keyword research to build a list that makes the
                  most sense for your website and the competitive landscape.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9">
                  <p className="pp">Keyword Research & Strategy</p>
                </div>
                <p>
                  Thrive is an SEO agency that understands your niche and can
                  boost your ranking for specific search terms. Your dedicated
                  SEO specialist will review the keywords your website is
                  currently ranking for, take your keyword wishlist and conduct
                  additional keyword research to build a list that makes the
                  most sense for your website and the competitive landscape.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9">
                  <p className="pp">Keyword Research & Strategy</p>
                </div>
                <p>
                  Thrive is an SEO agency that understands your niche and can
                  boost your ranking for specific search terms. Your dedicated
                  SEO specialist will review the keywords your website is
                  currently ranking for, take your keyword wishlist and conduct
                  additional keyword research to build a list that makes the
                  most sense for your website and the competitive landscape.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9">
                  <p className="pp">Keyword Research & Strategy</p>
                </div>
                <p>
                  Thrive is an SEO agency that understands your niche and can
                  boost your ranking for specific search terms. Your dedicated
                  SEO specialist will review the keywords your website is
                  currently ranking for, take your keyword wishlist and conduct
                  additional keyword research to build a list that makes the
                  most sense for your website and the competitive landscape.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9">
                  <p className="pp">Keyword Research & Strategy</p>
                </div>
                <p>
                  Thrive is an SEO agency that understands your niche and can
                  boost your ranking for specific search terms. Your dedicated
                  SEO specialist will review the keywords your website is
                  currently ranking for, take your keyword wishlist and conduct
                  additional keyword research to build a list that makes the
                  most sense for your website and the competitive landscape.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9">
                  <p className="pp">Keyword Research & Strategy</p>
                </div>
                <p>
                  Thrive is an SEO agency that understands your niche and can
                  boost your ranking for specific search terms. Your dedicated
                  SEO specialist will review the keywords your website is
                  currently ranking for, take your keyword wishlist and conduct
                  additional keyword research to build a list that makes the
                  most sense for your website and the competitive landscape.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9">
                  <p className="pp">Keyword Research & Strategy</p>
                </div>
                <p>
                  Thrive is an SEO agency that understands your niche and can
                  boost your ranking for specific search terms. Your dedicated
                  SEO specialist will review the keywords your website is
                  currently ranking for, take your keyword wishlist and conduct
                  additional keyword research to build a list that makes the
                  most sense for your website and the competitive landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="award">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Award-Winning Web Design Company</h1>
              <img
                src="https://thriveagency.com/files/Badge-Website.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section000 section0000 sectionl">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>How Responsive Web Design Improves User Experience</h1>
              <p>
                Boost Your Site Performance And Create Unparalleled Brand
                Interaction
              </p>
            </div>
            <div className="col-lg-6">
              <p>
                Statistics reveal that website design and navigation influence
                94 percent of first impressions. Search engines also favor
                websites with responsive web design and well-structured web
                content. What’s more, 75 percent of site credibility comes from
                web page design.
                <br />
                As a business owner, it is critical that you maintain a
                responsive website design to appeal to search engines and online
                users. You must ensure your target customers see a legit
                business platform when they search for your company online.
                Otherwise, you risk losing trust from your prospective clients
                and dissuade them from engaging with your brand.
                <br />
                Invest in responsive website design and build trust and
                confidence in your brand offerings. Our web design company
                provides SEO-friendly website design services that aim to boost
                your search rankings, increase your online exposure and convert
                page visitors into paying customers.
              </p>
              <br />
            </div>
            <div className="col-lg-6">
              <img
                src="https://thriveagency.com/wp-content/themes/thrive-agency/images/web-design-img.svg"
                alt=""
              />
            </div>
            <div className="col-12">
              <p>
                Schedule a consultation with our website design agency today and
                let us help you build a web page design that drives qualified
                traffic and increases your conversion rate.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="fra fraa">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>
                {" "}
                We can do the same for your business. Maximize your conversion
                opportunities with help from our web design agency.
              </h1>

              <a href="/#" className="btn btn-outline-success">
                GET MY FREE PROPOSAL{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section000 section0000 sectionl">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>WordPress Web Design Experts</h1>
              <p>Build A Custom Website That Reflects Your Brand</p>
            </div>
            <div className="col-lg-6">
              <p>
                Statistics reveal that website design and navigation influence
                94 percent of first impressions. Search engines also favor
                websites with responsive web design and well-structured web
                content. What’s more, 75 percent of site credibility comes from
                web page design.
                <br />
                As a business owner, it is critical that you maintain a
                responsive website design to appeal to search engines and online
                users. You must ensure your target customers see a legit
                business platform when they search for your company online.
                Otherwise, you risk losing trust from your prospective clients
                and dissuade them from engaging with your brand.
                <br />
                Invest in responsive website design and build trust and
                confidence in your brand offerings. Our web design company
                provides SEO-friendly website design services that aim to boost
                your search rankings, increase your online exposure and convert
                page visitors into paying customers.
              </p>
              <br />
            </div>
            <div className="col-lg-6">
              <img
                src="https://thriveagency.com/wp-content/themes/thrive-agency/images/web-design-img2.svg"
                alt=""
              />
            </div>
            <div className="col-12">
              <p>
                Schedule a consultation with our website design agency today and
                let us help you build a web page design that drives qualified
                traffic and increases your conversion rate.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section000 section0000 sectionl">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Custom Web Design Solutions</h1>
              <p>
                Establish Your Authentic Brand Identity With A Personalized
                Website
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="https://thriveagency.com/wp-content/themes/thrive-agency/images/web-design-img3.svg"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <p>
                Statistics reveal that website design and navigation influence
                94 percent of first impressions. Search engines also favor
                websites with responsive web design and well-structured web
                content. What’s more, 75 percent of site credibility comes from
                web page design.
                <br />
                As a business owner, it is critical that you maintain a
                responsive website design to appeal to search engines and online
                users. You must ensure your target customers see a legit
                business platform when they search for your company online.
                Otherwise, you risk losing trust from your prospective clients
                and dissuade them from engaging with your brand.
                <br />
                Invest in responsive website design and build trust and
                confidence in your brand offerings. Our web design company
                provides SEO-friendly website design services that aim to boost
                your search rankings, increase your online exposure and convert
                page visitors into paying customers.
              </p>
              <br />
            </div>

            <div className="col-12">
              <p>
                Schedule a consultation with our website design agency today and
                let us help you build a web page design that drives qualified
                traffic and increases your conversion rate.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="key">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>5 Keys to Expert Web Design</h1>
              <p>
                Our years of experience in building websites have taught us that
                to build a superior website for our clients that positions them
                above the competition, we need the following ingredients:
              </p>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH3aRzUx4lYkR4r_iXAvJe6xvywzkQb_C7-6J_rsvChQ&s"
                alt=""
              />
              <p>
                <b>1. Visual Appeal</b> <br />
                You only have one chance to make a great first impression. Are
                your site visitors saying WOW! or OW!? when they see your site
                for the first time? People make immediate decisions about the
                credibility of your company, brand and products when they see
                your website. As a business owner, you must ensure your web
                design captures your target audience’s attention and entices
                them to explore your website.
                <br />
                <br />
                <b>2. Ease of Use</b> <br />
                If your site can't be easily navigated and your valuable content
                can't be easily found, then your users will go elsewhere. Don’t
                let this be the case. At Thrive, we work hard to plan and build
                intuitive, simple and easy to navigate websites. We want our
                users to feel like everything is right where they expect it to
                be.
                <br />
                <br />
                <b>3. High-Quality, Optimized Content </b> <br />
                Investing in beautiful website design and neglecting the content
                is like buying a car without an engine. A superior website has
                compelling and concise content with clear CTAs. When you work
                with us, our website design experts work closely with you to
                ensure your site content is well-written, search
                engine-optimized and created with clear business objectives in
                mind.
                <br />
                <br />
                <b>4. Conversion of Visitors into Customers</b> <br />
                Early on in the planning process, we determine what a
                "conversion" or CTA looks like for your website. It could be to
                submit a lead form, make a phone call or purchase a product. We
                then keep that goal in mind for the entire process, from design
                and coding to content writing. We want your website to be the
                primary tool for growth in your company.
                <br />
                <br />
                <b>5. Traffic Growth Over Time</b> <br />
                At Thrive, we want to see your new website rise to the next
                level. To do that, we need lots of quality traffic. Our
                WordPress web design agency works with you to establish an
                ongoing internet marketing plan that includes SEO, social media
                marketing, email marketing and more.
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="award">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Award-Winning Web Design Company</h1>
              <img
                src="https://thriveagency.com/files/Badge-Website.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="comman kl">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Website Design Services FAQs</h2>
            </div>
            <div className="col-12">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="/#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Accordion Item /#1
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="/#accordionExample"
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
                      data-bs-target="/#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Accordion Item /#2
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="/#accordionExample"
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
                      data-bs-target="/#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Accordion Item /#3
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="/#accordionExample"
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
      <Footer></Footer>
    </div>
  );
}

export default webde;
