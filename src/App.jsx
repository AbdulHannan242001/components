import React from "react";
import "./App.css";
import { Lenis, useLenis } from "@studio-freight/react-lenis";
import InvertedText from "./components/InvertedText/InvertedText";
import SquishyCard from "./components/SquishyCard/SquishyCard";
import TiltCard from "./components/TiltCard/TiltCard";
import Word from "./components/Word/Word";
import CustomBorder from "./components/CustomBorder/CustomBorder";
import ColorCards from "./components/ColorCards/ColorCards";
import Carousel3d from "./components/Carousel3D/Carousel3d";
import SkewText from "./components/SkewText/SkewText";
import Button from "./components/Button/Button";
import ShinyButton from "./components/ShinyButton/ShinyButton";
import ContactForm from "./components/ContactForm/ContactForm";
import HoverCards from "./components/HoverCards/HoverCards";
import SplitVignetteEffect from "./components/SplitVignetteEffect/SplitVignetteEffect";
import FloatingPhone from "./components/FloatingPhone/FloatingPhone";

import image from "./assets/camera.jpg";
import svg from "./assets/template.svg";
import CallToAction from "./components/CTA/callToAction";
import ParallaxSection from "./components/ParallaxSection/ParallaxSection";
import BallSwitchSlider from "./components/BallSwitch/BallSwitchSlider";
import ImageParallax from "./components/ScrollImageParallax/ImageParallax";
import InViewAnimation from "./components/InViewImage/InViewAnimation";
import SwiperSlider from "./components/SwiperSlider/SwiperSlider";
import TwoAxisSlider from "./components/TwoAxisSlider/TwoAxisSlider";
import InfiniteMarquee from "./components/InfiniteMarquee/InfiniteMarquee";
import RevealFooter from "./components/Footer/RevealFooter";
import VerticalAccordion from "./components/VerticalCards/VerticalCards";
import ColumnParallax from "./components/ColumnParallax/ColumnParallax";
import BorderButton from "./components/Button/BorderButton";
import SlidingNav from "./components/Navbar/SlidingNav";

function App() {
  const cardImg = [
    "https://picsum.photos/2100/2100",
    "https://picsum.photos/2200/2200",
    "https://picsum.photos/2300/2300",
    "https://picsum.photos/2400/2400",
    "https://picsum.photos/1900/1900",
    "https://picsum.photos/1800/1800",
    "https://picsum.photos/1700/1700",
    "https://picsum.photos/1600/1600",
    "https://picsum.photos/1500/1500",
    "https://picsum.photos/1400/1400",
  ];

  return (
    <Lenis root>
      <section className="flex flex-col scroll-smooth min-h-[100vh] min-w-screen bg-gradient-to-t from-neutral-800 to-neutral-900">
        <Button />
        <BorderButton text={"Border Button"} color={"#ffffff"} />
        <SquishyCard />
        <TiltCard />
        <InvertedText />
        <Word />
        <CustomBorder />
        <ColorCards />
        <Carousel3d
          images={cardImg}
          // radius={400} already have a default value but can be changed
          // duration={15} already have a default value but can be changed
          // width={250} already have a default value but can be changed
          // height={300} already have a default value but can be changed
        />
        <SkewText />
        <ShinyButton />
        <ContactForm />
        <HoverCards
          title={"Hover Cards"}
          description={
            "This is some text or maybe some description. Gotta keep writing in real world cases, descriptions are pretty long. Almost there I think this will be enough."
          }
          svg={svg}
          image={image}
        />
        <FloatingPhone />
        <SplitVignetteEffect />
        <CallToAction />
        <ParallaxSection />
        <BallSwitchSlider />
        <ImageParallax />
        <InViewAnimation />
        <SwiperSlider />
        <TwoAxisSlider />
        <InfiniteMarquee />
        <ColumnParallax />
        <SlidingNav />
        {/* <VerticalAccordion /> */}
        <RevealFooter />
      </section>
    </Lenis>
  );
}

export default App;
