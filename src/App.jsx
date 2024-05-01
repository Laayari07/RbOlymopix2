import { lazy, Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import LandingPage from "./components/LandingPage.jsx";
import About from "./components/About.jsx";
import Particles from "./components/particles.jsx";
import Axis from "./components/Axis.jsx";
import ImageSlider from "./components/ImageSlider.jsx";
import Challenges from "./components/Challenges.jsx";
import Eurobot from "./components/Eurobot.jsx";
import Team from "./components/Team.jsx";
import Planning from "./components/Planning.jsx";

function App() {
  const LazyEurobot = lazy(() => import("./components/Eurobot.jsx"));
  const LazyTeam = lazy(() => import("./components/Team.jsx"));
  const LazyEvents = lazy(() => import("./components/Challenges.jsx"));
  return (
    <>
      <ChakraProvider>
        <Header />
        <LandingPage />
        <About />
        <ImageSlider />
        <Eurobot />
        <Challenges />
        <Planning />

        {/*   <Suspense fallback={<div>Loading...</div>}>
                    <LazyEurobot/>
    </Suspense> 
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyEvents/>
                    <LazyTeam/>
                </Suspense>*/}
        <Team />
        <Particles />
        <Footer />
      </ChakraProvider>
      <Analytics />
    </>
  );
}

export default App;
