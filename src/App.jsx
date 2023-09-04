import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componenets/comman";
import FirstHome from "./componenets/Home";
import SEO from "./componenets/SEO";
import Localseo from "./componenets/Localseo";
import Techseo from "./componenets/techseo";
import Digitalstr from "./componenets/digitalstr";
import Googlean from "./componenets/googlean";
import Franchseo from "./componenets/frachseo";
import Webde from "./componenets/webde";
import Custom from "./componenets/custom";
import Ecom from "./componenets/ecommerce";
import Casest from "./componenets/casest";
import Webd from "./componenets/webd";
import Logod from "./componenets/logod";
import Video from "./componenets/video";
import Blog from "./componenets/blog";
import Webinars from "./componenets/webinars";
import Contact from "./componenets/contact";
import Whowa from "./componenets/whowa";
import Whycu from "./componenets/whycu";
import Awar from "./componenets/awar";
import Tgb from "./componenets/tgb";
import Sce from "./componenets/sce";
import Ct from "./componenets/ct";
import Mediap from "./componenets/mediap";
import Career from "./componenets/career";
import Tgf from "./componenets/tgf";
import Gp from "./componenets/gp";
// import Try from "./componenets/try";
import Wwd from "./componenets/wwd";
import Socialmm from "./componenets/socialmm";
import Ecommercema from "./componenets/ecommercema";
import Ecommerces from "./componenets/ecommerceseo";
import Ecommercep from "./componenets/ecommerceppc";
import Shopify from "./componenets/shopify";
import Amazonm from "./componenets/amazonmarket";
import Abranding from "./componenets/abranding";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstHome></FirstHome>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/seo" element={<SEO></SEO>}></Route>
        <Route path="/localseo" element={<Localseo></Localseo>}></Route>
        <Route path="/techseo" element={<Techseo></Techseo>}></Route>
        <Route path="/digitalstr" element={<Digitalstr></Digitalstr>}></Route>
        <Route path="/googlean" element={<Googlean></Googlean>}></Route>
        <Route path="/franchseo" element={<Franchseo></Franchseo>}></Route>
        <Route path="/webde" element={<Webde></Webde>}></Route>
        <Route path="/custom" element={<Custom></Custom>}></Route>
        <Route path="/ecom" element={<Ecom></Ecom>}></Route>
        <Route path="/casestudy" element={<Casest></Casest>}></Route>
        <Route path="/webd" element={<Webd></Webd>}></Route>
        <Route path="/logodesign" element={<Logod></Logod>}></Route>
        <Route path="/video" element={<Video></Video>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/webinars" element={<Webinars></Webinars>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>

        <Route path="/whoweare" element={<Whowa></Whowa>}></Route>
        <Route path="/whycu" element={<Whycu></Whycu>}></Route>
        <Route path="/awar" element={<Awar></Awar>}></Route>
        <Route path="/tgb" element={<Tgb></Tgb>}></Route>
        <Route path="/Sce" element={<Sce></Sce>}></Route>
        <Route path="/clienttest" element={<Ct></Ct>}></Route>
        <Route path="/mediapress" element={<Mediap></Mediap>}></Route>
        <Route path="/career" element={<Career></Career>}></Route>
        <Route path="/growthformula" element={<Tgf></Tgf>}></Route>
        <Route path="/googlepage" element={<Gp></Gp>}></Route>
        {/* <Route path="/try" element={<Try></Try>}></Route> */}
        <Route path="/wordpress" element={<Wwd></Wwd>}></Route>
        <Route path="/socialmedia" element={<Socialmm></Socialmm>}></Route>
        <Route path="/ecommerceseo" element={<Ecommerces></Ecommerces>}></Route>
        <Route path="/ecommerceppc" element={<Ecommercep></Ecommercep>}></Route>
        <Route path="/shopify" element={<Shopify></Shopify>}></Route>
        <Route path="/amazonmarket" element={<Amazonm></Amazonm>}></Route>
        <Route path="/amazonbranding" element={<Abranding></Abranding>}></Route>
        <Route
          path="/ecommercema"
          element={<Ecommercema></Ecommercema>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
