
import "swiper/css";
import "swiper/css/pagination";
import "./marquee.css";
import "./global.css";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
};

export default App;
