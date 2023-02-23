import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from './Components/Nav/Nav';
import Banner from "./Components/Banner/Banner"
import Checkout from './Components/Checkout/Checkout';
import Ads from './Components/Ads/Ads';
// import Products from "./Components/Products/Products"
import StateProvider from './Components/StateProvider/StateProvider';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/" exact
            element={
              <>
                <Header />
                <Nav />
                <Banner />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Ads />
                <Checkout />
              </>
            }
          />
        </Routes>
      </Router>
      {/* <Products /> */}
    </div>
  );
}

export default App;
