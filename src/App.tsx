import { NavigationBar } from "./components/NavigationBar";

import { Home } from "./views/Home";
import { Work } from "./views/Work";
import { Clients } from "./views/Clients";
import { About } from "./views/About";
import { Testimonials } from "./views/Testimonials";

import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <NavigationBar />
      <Home />
      <Work />
      <Clients />
      <About />
      <Testimonials />
      <Footer />
    </>
  );
};
