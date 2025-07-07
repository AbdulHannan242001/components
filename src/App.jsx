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
import ColumnParallax from "./components/ColumnParallax/ColumnParallax";
import BorderButton from "./components/Button/BorderButton";
import SlidingNav from "./components/Navbar/SlidingNav";
import ArrowButton from "./components/Button/ArrowButton";
import OverlapButton from "./components/Button/OverlapButton";
import InvertedCard from "./components/InvertedCard/InvertedCard";
import BentoGrid from "./components/Bento/BentoGrid";
import ShutterCard from "./components/ShutterCard/ShutterCard";
import TextButton from "./components/Button/TextButton";
import CircularButton from "./components/Button/CircularButton";
import TextMask from "./components/TextMask/TextMask";
import SeperateBanner from "./components/Banner/SeperateBanner";
import Card from "./components/ParallaxCard/Card";
import Grid from "./components/ReflectiveGrid/Grid";
import ScaleSection from "./components/ScaleSection/ScaleSection";
import RevealGallery from "./components/Gallery/RevealGallery";
import StickyGallery from "./components/Gallery/StickyGallery";
import ImageTrail from "./components/ImageTrail/ImageTrail";
import TextAnimation from "./components/TextAnimation/TextAnimation";

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
        <SlidingNav />
        <Button />
        <ArrowButton text={"Lit Button"} />
        <BorderButton text={"Border Button"} color={"#ffffff"} />
        <BallSwitchSlider />
        <ShinyButton />
        <OverlapButton />
        <TextButton />
        <CircularButton text={"Circular Button"} />
        <SquishyCard />
        <TiltCard />
        <CustomBorder />
        <ColorCards />
        <InvertedCard />
        <ShutterCard
          heading="Some Heading"
          description="This can be a description about the service or product or pretty much anything you can use this card for. Its looks real good in terms of these micro interactions."
          topText="Hover me"
          bottomText="A short intimate description"
          imageSrc={image}
        />
        <Card />
        <InvertedText />
        <StickyGallery />
        <ImageTrail />
        <Word />
        <TextAnimation
          text={
            "Short Text Animation"
          }
        />
        <TextMask />
        <ScaleSection />
        <RevealGallery />
        <SkewText />
        {/* <HoverCards
          title={"Hover Cards"}
          description={
            "This is some text or maybe some description. Gotta keep writing in real world cases, descriptions are pretty long. Almost there I think this will be enough."
          }
          svg={svg}
          image={image}
        /> */}
        <Carousel3d
          images={cardImg}
          // radius={400} already have a default value but can be changed
          // duration={15} already have a default value but can be changed
          // width={250} already have a default value but can be changed
          // height={300} already have a default value but can be changed
        />
        <ContactForm />
        <FloatingPhone />
        <SplitVignetteEffect />
        <CallToAction />
        <ParallaxSection />
        <Grid />
        <SeperateBanner />
        <ImageParallax />
        <ColumnParallax />
        <InViewAnimation />
        <SwiperSlider />
        <TwoAxisSlider />
        <InfiniteMarquee />
        <BentoGrid />
        <RevealFooter />
      </section>
    </Lenis>
  );
}

export default App;
