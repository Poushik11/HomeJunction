import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";
// import Footer from "../components/footer";
// import { PiBuildingApartmentFill } from "react-icons/pi";

function Explore() {
  return (
    <div className="explore">
      <header>
        <div class="site-header">
          {/* <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBoXBfoeN4xR2RjWD6rpo4hqtTMpXwZiTZCg&s"
            alt="Logo"
            class="site-logo"
          /> */}
          {/* <PiBuildingApartmentFill /> */}
          <h1 class="site-title">Home Junction</h1>
        </div>
        <p className="pageHeader">Explore </p>
      </header>

      <main>
        <Slider />

        <p className="exploreCategoryHeading">Categories</p>
        <div className="exploreCategories">
          <Link to="/category/rent">
            <img
              src={rentCategoryImage}
              alt="rent"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Places for rent</p>
          </Link>
          <Link to="/category/sale">
            <img
              src={sellCategoryImage}
              alt="sell"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Places for sale</p>
          </Link>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default Explore;
