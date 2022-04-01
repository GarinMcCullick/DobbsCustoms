import "./App.css";
import Title from "./Components/Title";
import Carousel from "./Components/Carousel";
import Reviews from "./Components/Reviews";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import OwnerBio from "./Components/OwnerBio";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Carousel />
        <Reviews />
        <Gallery />
        <OwnerBio />
        <Footer />
      </header>
    </div>
  );
}

export default App;
