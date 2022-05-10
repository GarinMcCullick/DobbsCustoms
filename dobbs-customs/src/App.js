import "./App.css";
import Title from "./Components/Title";
import Reviews from "./Components/Reviews";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import OwnerBio from "./Components/OwnerBio";
import ImageSlider from "./Components/ImageSlider";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <ImageSlider />
        <Reviews />
        <Gallery />
        <OwnerBio />
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
