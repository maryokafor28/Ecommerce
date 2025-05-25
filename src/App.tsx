import Header from "./Component/Header/Header";
import FurnitureGallery from "./Pages/HeroSection/Furniture";
import ProductGallery from "./Pages/BestSeller/ProductGallery";
import BestServices from "./Pages/BestServices/BestServices";
import FeaturedPosts from "./Pages/FeaturedPost/FeaturedPosts";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ProblemSection from "./Pages/ProblemSection/ProblemSection";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <FurnitureGallery />
      <ProductGallery />
      <BestServices />
      <FeaturedPosts />
      <AboutUs />
      <ProblemSection />
      <Footer />
    </div>
  );
}

export default App;
