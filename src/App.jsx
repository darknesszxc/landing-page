import About from "./components/About";
import MainPage from "./components/MainPage";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
          <MainPage />
          <About />
          <GetInTouch />
          <Footer />
      </div>
    </>
  );
}

export default App;
