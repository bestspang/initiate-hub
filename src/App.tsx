
import "swiper/css";
import "swiper/css/pagination";
import "./marquee.css";
import "./global.css";

import HomePage from "./pages/HomePage";
import { Analytics } from "@vercel/analytics/react";

const App = (): JSX.Element => {
  return (
    <>
      <HomePage />
      <Analytics />
    </>
  );
};

export default App;
