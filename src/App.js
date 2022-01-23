import "swiper/swiper.min.css";
import "./App.scss";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/header/Header";

import Routes from "./config/Routes";

function App() {
  return (
    <BrowserRouter>
      <Route
        render={() => (
          <>
            <Header />
            <Routes />
          </>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
