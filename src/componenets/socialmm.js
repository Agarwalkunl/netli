import React from "react";
import Header from "./Header";
import "../css/socialmm.css";
import Footer from "./Footer";
function socialmm() {
  return (
    <div className="mainee">
      {" "}
      <Header></Header>
      <div className="section0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>Social Media Marketing</h4>
              <p>Share Your Unique Brand Story Across Online Channels</p>
              <a href="#" className="btn btn-outline-success">
                GET MY FREE PROPOSAL{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="wordp wwordp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Social Media Marketing Basics</h2>
              <p className="pp">
                Promote Your Company Story and News on the Right Platform
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <p>
                If you’ve performed a Google search on “what is WordPress,” you
                most likely did so after having experienced a WordPress website.
                WordPress is a website creation tool that powers more than 38
                percent of the web — that means approximately 1 in 3 websites
                trust WordPress services. If you searched “how to design a
                WordPress website,” then you’ll find that this platform is
                considered incredibly user-friendly and easy to understand.
                <br />
                <br />
                The vision of the original WordPress development team was to
                create a digital space where users can share their story freely.
                The team ensured that users could:
              </p>
            </div>

            <div className="col-12">
              <p>
                In WordPress terms, themes decide your website’s look and feel
                while plugins add functionality, such as adding a contact form
                or installing search engine optimization (SEO) tools. Generally,
                a WordPress web designer focuses on your branding and visual
                elements while a WordPress web developer deals with the code.
                <br />
                The possibilities are endless with a WordPress website, but you
                need a professional WordPress design and development team to
                make your vision come to life.
              </p>
            </div>
            <div className="col-12">
              <h2>What Is Social Media Marketing?</h2>
            </div>

            <div className="col-12">
              <p>
                In WordPress terms, themes decide your website’s look and feel
                while plugins add functionality, such as adding a contact form
                or installing search engine optimization (SEO) tools. Generally,
                a WordPress web designer focuses on your branding and visual
                elements while a WordPress web developer deals with the code.
                <br />
                The possibilities are endless with a WordPress website, but you
                need a professional WordPress design and development team to
                make your vision come to life.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="wordp wwwordp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>
                Digital Marketing vs. Social Media Marketing: What’s the
                Difference?
              </h2>
              <p className="pp">
                Drive Results With the Most Popular Content Management System
              </p>
            </div>
            <div className="col-md-6">
              <p>
                If you’ve performed a Google search on “what is WordPress,” you
                most likely did so after having experienced a WordPress website.
                WordPress is a website creation tool that powers more than 38
                percent of the web — that means approximately 1 in 3 websites
                trust WordPress services. If you searched “how to design a
                WordPress website,” then you’ll find that this platform is
                considered incredibly user-friendly and easy to understand.
                <br />
                <br />
                The vision of the original WordPress development team was to
                create a digital space where users can share their story freely.
                The team ensured that users could:
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXNaLcNmt30ukyvF_P4m7pFgHaCa0ePSJlhkFV8CLXxA&s"
                alt=""
              />
            </div>
            <div className="col-12">
              <p>
                In WordPress terms, themes decide your website’s look and feel
                while plugins add functionality, such as adding a contact form
                or installing search engine optimization (SEO) tools. Generally,
                a WordPress web designer focuses on your branding and visual
                elements while a WordPress web developer deals with the code.
                <br />
                The possibilities are endless with a WordPress website, but you
                need a professional WordPress design and development team to
                make your vision come to life.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="wordp wwordp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>
                Are Digital and Social Media Marketing Essential to Business?
              </h2>
              <p className="pp">
                Promote Your Company Story and News on the Right Platform
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnia0zwH95G-r8kLAbr3iGVlanS2iqixee7w&usqp=CAU"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <p>
                If you’ve performed a Google search on “what is WordPress,” you
                most likely did so after having experienced a WordPress website.
                WordPress is a website creation tool that powers more than 38
                percent of the web — that means approximately 1 in 3 websites
                trust WordPress services. If you searched “how to design a
                WordPress website,” then you’ll find that this platform is
                considered incredibly user-friendly and easy to understand.
                <br />
                <br />
                The vision of the original WordPress development team was to
                create a digital space where users can share their story freely.
                The team ensured that users could:
              </p>
            </div>

            <div className="col-12">
              <p>
                In WordPress terms, themes decide your website’s look and feel
                while plugins add functionality, such as adding a contact form
                or installing search engine optimization (SEO) tools. Generally,
                a WordPress web designer focuses on your branding and visual
                elements while a WordPress web developer deals with the code.
                <br />
                The possibilities are endless with a WordPress website, but you
                need a professional WordPress design and development team to
                make your vision come to life.
              </p>
            </div>
            <div className="col-12">
              <h2>What Are the Benefits of Social Media Marketing Services</h2>
            </div>

            <div className="col-12">
              <p>
                In WordPress terms, themes decide your website’s look and feel
                while plugins add functionality, such as adding a contact form
                or installing search engine optimization (SEO) tools. Generally,
                a WordPress web designer focuses on your branding and visual
                elements while a WordPress web developer deals with the code.
                <br />
                The possibilities are endless with a WordPress website, but you
                need a professional WordPress design and development team to
                make your vision come to life.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section5 section555 sectiono55 jak">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>What Are the Benefits of Social Media Marketing Services</h4>
              <p>
                Social media marketing services have numerous advantages for
                startups and established brands. With the right social media
                marketing plan and campaign monitoring system, social media
                content marketing can lead to increased search traffic, better
                SEO, healthier customer engagement and improved brand loyalty.
                <br />
                Still on the fence about investing in social media marketing
                services? Here are the key benefits of social media marketing to
                facilitate your decision-making process:
              </p>
            </div>
            <div className="col-lg-4 col-md-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9 mt-5">
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
            <div className="col-lg-4 col-md-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9 mt-5">
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
            <div className="col-lg-4 col-md-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9 mt-5">
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
            <div className="col-lg-4 col-md-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9 mt-5">
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
            <div className="col-lg-4 col-md-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9 mt-5">
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
            <div className="col-lg-4 col-md-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9 mt-5">
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
            <div className="col-lg-4 col-md-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9 mt-5">
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
            <div className="col-lg-4 col-md-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9 mt-5">
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
            <div className="col-lg-4 col-md-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9 mt-5">
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
      <div className="section4  sectionn44">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Social Media Marketing Services for Businesses</h2>
              <p className="pp">Gain More Votes of Confidence Online</p>
              <p>
                As the internet community grows and changes, social media
                campaigns and tactics have to stay one step ahead. Whether
                you're looking to increase the likes or follows of your brand's
                page or you need a targeted campaign to generate revenue and new
                customers, our social media marketing consultants have got you
                covered.
                <br />
                <br />
                Thrive Internet Marketing Agency is a social media marketing
                company with extensive experience in social media marketing
                services. Our specialists know how to creatively design and
                implement effective social media marketing campaigns for
                businesses of all types and sizes.
                <br />
                <br />
                Explore our social media client case studies to discover what
                makes our social media marketing agency different from other
                social media marketing companies:
              </p>
            </div>
            <div className="col-md-4 col-sm-6 mt-5">
              <div className="box">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9aCMeX2cx-RFDbk_zNnKZR-lFxvQ_aF4xHA&usqp=CAU"
                  alt=""
                />
                <div className="co">
                  <h6>
                    <a href="#">CONSTRUCTION COMPANY</a>
                  </h6>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p>
                      <span> +800%</span>
                      <br />
                      Online Leads
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p>
                      <span> +800%</span>
                      <br />
                      Online Leads
                    </p>
                  </div>
                </div>
                <p>
                  Thrive has gone above and beyond and it’s allowed me to focus
                  on other aspects of business development. Thrive understands
                  the intricate needs of what we want to accomplish.”
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mt-5">
              <div className="box">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9aCMeX2cx-RFDbk_zNnKZR-lFxvQ_aF4xHA&usqp=CAU"
                  alt=""
                />
                <div className="co">
                  <h6>
                    <a href="#">CONSTRUCTION COMPANY</a>
                  </h6>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p>
                      <span> +800%</span>
                      <br />
                      Online Leads
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p>
                      <span> +800%</span>
                      <br />
                      Online Leads
                    </p>
                  </div>
                </div>
                <p>
                  Thrive has gone above and beyond and it’s allowed me to focus
                  on other aspects of business development. Thrive understands
                  the intricate needs of what we want to accomplish.”
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mt-5">
              <div className="box">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9aCMeX2cx-RFDbk_zNnKZR-lFxvQ_aF4xHA&usqp=CAU"
                  alt=""
                />
                <div className="co">
                  <h6>
                    <a href="#">CONSTRUCTION COMPANY</a>
                  </h6>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p>
                      <span> +800%</span>
                      <br />
                      Online Leads
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p>
                      <span> +800%</span>
                      <br />
                      Online Leads
                    </p>
                  </div>
                </div>
                <p>
                  Thrive has gone above and beyond and it’s allowed me to focus
                  on other aspects of business development. Thrive understands
                  the intricate needs of what we want to accomplish.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wordp wwordp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Social Media Advertising</h2>
            </div>

            <div className="col-12">
              <p>
                In WordPress terms, themes decide your website’s look and feel
                while plugins add functionality, such as adding a contact form
                or installing search engine optimization (SEO) tools. Generally,
                a WordPress web designer focuses on your branding and visual
                elements while a WordPress web developer deals with the code.
                <br />
                The possibilities are endless with a WordPress website, but you
                need a professional WordPress design and development team to
                make your vision come to life.
              </p>
            </div>
            <div className="col-12">
              <h2>
                What Is Social Media Advertising and
                <br />
                Why Is It Important?
              </h2>
            </div>

            <div className="col-md-6">
              <p>
                If you’ve performed a Google search on “what is WordPress,” you
                most likely did so after having experienced a WordPress website.
                WordPress is a website creation tool that powers more than 38
                percent of the web — that means approximately 1 in 3 websites
                trust WordPress services. If you searched “how to design a
                WordPress website,” then you’ll find that this platform is
                considered incredibly user-friendly and easy to understand.
                <br />
                <br />
                The vision of the original WordPress development team was to
                create a digital space where users can share their story freely.
                The team ensured that users could:
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://thriveagency.com/wp-content/themes/thrive-agency/images/social-media-advertising.svg"
                alt=""
              />
            </div>

            <div className="col-12">
              <p>
                In WordPress terms, themes decide your website’s look and feel
                while plugins add functionality, such as adding a contact form
                or installing search engine optimization (SEO) tools. Generally,
                a WordPress web designer focuses on your branding and visual
                elements while a WordPress web developer deals with the code.
                <br />
                The possibilities are endless with a WordPress website, but you
                need a professional WordPress design and development team to
                make your vision come to life.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="wordp wwwordp wod">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Social Media Brand Management</h2>
              <p className="pp">
                Connect With Your Target Audience Across Your Social Platforms
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://thriveagency.com/wp-content/themes/thrive-agency/images/social-media-brand.svg"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <p>
                If you’ve performed a Google search on “what is WordPress,” you
                most likely did so after having experienced a WordPress website.
                WordPress is a website creation tool that powers more than 38
                percent of the web — that means approximately 1 in 3 websites
                trust WordPress services. If you searched “how to design a
                WordPress website,” then you’ll find that this platform is
                considered incredibly user-friendly and easy to understand.
                <br />
                <br />
                The vision of the original WordPress development team was to
                create a digital space where users can share their story freely.
                The team ensured that users could:
              </p>
            </div>

            <div className="col-12">
              <p>
                In WordPress terms, themes decide your website’s look and feel
                while plugins add functionality, such as adding a contact form
                or installing search engine optimization (SEO) tools. Generally,
                a WordPress web designer focuses on your branding and visual
                elements while a WordPress web developer deals with the code.
                <br />
                The possibilities are endless with a WordPress website, but you
                need a professional WordPress design and development team to
                make your vision come to life.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section5 section555 sectiono55">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>Social Media Marketing Services</h4>
              <p className="p">
                Supercharge Your SMM Campaigns and Drive More Sales
              </p>
            </div>
            <div className="col-lg-4 col-md-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9 mt-5">
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
            <div className="col-lg-4 col-md-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9 mt-5">
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
            <div className="col-lg-4 col-md-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9 mt-5">
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
            <div className="col-lg-4 col-md-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9 mt-5">
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
            <div className="col-lg-4 col-md-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9 mt-5">
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
            <div className="col-lg-4 col-md-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9 mt-5">
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
            <div className="col-lg-4 col-md-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9 mt-5">
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
            <div className="col-lg-4 col-md-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9 mt-5">
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
            <div className="col-lg-4 col-md-6 mt-5">
              <div className="row">
                <div className="col-3">
                  <i class="fa-solid fa-laptop"></i>
                </div>
                <div className="col-9 mt-5">
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
      <div className="comman commann">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <a href="#" className="btn btn-outline-success">
                GROW MY LEADS NOW
              </a>
              <p className="pp">
                <b>Search Engine Optimization FAQs</b>
              </p>
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
      <Footer></Footer>
    </div>
  );
}

export default socialmm;
