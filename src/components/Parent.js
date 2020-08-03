import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams
} from "react-router-dom";
import '../App.css';
import image from "../images/walkingshoes.jpg" 
const shoes = {
  "air-jordan-3-valor-blue": {
    "name": "VALOUR BLUE",
    "img":
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "jordan-mars-270-london": {
    "name": "JORDAN MARS 270 LONDON",
    "img":
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "air-jordan-1-zoom-racer-blue": {
    "name": "RACER BLUE",
    "img":
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "air-jordan-3-valor-blue1": {
    "name": "VALOUR BLUE",
    "img":
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "jordan-mars-270-london2": {
    "name": "JORDAN MARS 270 LONDON",
    "img":
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "air-jordan-1-zoom-racer-blue3": {
    "name": "RACER BLUE",
    "img":
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  }
};
export default function Parent() {
  return (
    <Router>
      <nav className = "nav">
        <Link to="/">
          <button className = "button">
            Home
          </button>
        </Link>
        <Link to="/productitems">
          <button >
            Product Items
          </button>
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="productitems" element={<Launch />}>
          <Route path="/" element={<LaunchIndex />} />
          <Route path=":slug" element={<LaunchShoe />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

function NotFound() {
  return (
    <div>
      <h1>Not found!</h1>
      <p>Sorry your page was not found!</p>
    </div>
  );
}

function Home() {
  return (
    <div>
    <h1 className = "welcomemsg">Welcome to the Online Shoe Store</h1>
    <h3 className = 'details'> we assure you to give more comfort with innovative style. Checkout the products in product items.</h3>
    <img className= "image1" src = {image} alt = "walkingimg"/>
    </div>
  );
}

function Launch() {
  return (
    <div className = "products">
      <h1 className = "producttext">Here are the products for you. Select your favourite color, design and category.</h1>
      <h2 className = "inst"> Walk with Comfort</h2>
      <h2 className = "inst"> Jogg with passion</h2>
      <h2 className = "inst"> Be competitive in running</h2>

      <Outlet />
    </div>
  );
}

function LaunchIndex() {
  return (
    <div className = "row">
      {Object.entries(shoes).map(([slug, { name, img }]) => (
        <div className = "column" key={slug}>
          <Link to={`/productitems/${slug}`}>
            <img className = "indeximages" src={img} alt={name} />
            <h2 className = "imagename">{name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

function LaunchShoe() {
  const { slug } = useParams();
  const shoe = shoes[slug];

  if (!shoe) {
    return <h2>Not Found!</h2>;
  }

  const { name, img } = shoe;

  return (
    <div>
      <h2 className = "textindividual">{name}</h2>
      <img className = "image2 " src={img} alt={name} />
    </div>
  );
}
