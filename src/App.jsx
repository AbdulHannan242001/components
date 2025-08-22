import React, { useState, useRef, useEffect, Suspense, lazy } from "react";
import "./App.css";
import { Lenis } from "@studio-freight/react-lenis";
import { motion } from "framer-motion";
import logo from "./assets/Logo.svg";
import image from "./assets/camera.jpg";

// Import Layout and HeroSection components
import Layout from "./components/Layout/Layout";
import HeroSection from "./components/HeroSection/HeroSection";
import ComponentWrapper from "./components/ComponentWrapper/ComponentWrapper";
import { componentCodes, getDefaultCode } from "./data/componentCodes";
import IntroAnimation from "./components/IntroAnimation/IntroAnimation";

// Lazy load heavy components
const Carousel3d = lazy(() => import("./components/Carousel3D/Carousel3d"));
const SwiperSlider = lazy(() => import("./components/SwiperSlider/SwiperSlider"));
const ParticleSection = lazy(() => import("./components/ParticleSection/ParticleSection"));
const ImageTrail = lazy(() => import("./components/ImageTrail/ImageTrail"));

// Import all components (keeping essential ones for first render)
import InvertedText from "./components/InvertedText/InvertedText";
import SquishyCard from "./components/SquishyCard/SquishyCard";
import TiltCard from "./components/TiltCard/TiltCard";
import Word from "./components/Word/Word";
import CustomBorder from "./components/CustomBorder/CustomBorder";
import ColorCards from "./components/ColorCards/ColorCards";
import SkewText from "./components/SkewText/SkewText";
import Button from "./components/Button/Button";
import ShinyButton from "./components/ShinyButton/ShinyButton";
import ContactForm from "./components/ContactForm/ContactForm";
import SplitVignetteEffect from "./components/SplitVignetteEffect/SplitVignetteEffect";
import FloatingPhone from "./components/FloatingPhone/FloatingPhone";
import CallToAction from "./components/CTA/callToAction";
import ParallaxSection from "./components/ParallaxSection/ParallaxSection";
import BallSwitchSlider from "./components/BallSwitch/BallSwitchSlider";
import ImageParallax from "./components/ScrollImageParallax/ImageParallax";
import InViewAnimation from "./components/InViewImage/InViewAnimation";
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
import TextAnimation from "./components/TextAnimation/TextAnimation";
import CapsuleButton from "./components/Button/CapsuleButton";
import CircularBanner from "./components/Banner/CircularBanner";
import SlideTabsExample from "./components/SlideTabs/SlideTabs";

function App() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const scrollTimeoutRef = useRef(null);
  const lenisRef = useRef(null);
  const loadingStartedRef = useRef(false);

  // Dynamic tab title functionality
  useEffect(() => {
    const originalTitle = "ICL - Interactive Components Library";
    const hiddenTitle = "ICL - I'm Batman";
    
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = hiddenTitle;
      } else {
        document.title = originalTitle;
      }
    };

    // Listen for visibility change events
    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    // Set initial title
    document.title = originalTitle;

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const cardImg = React.useMemo(() => [
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
  ], []);

  useEffect(() => {
    // Prevent multiple loading processes
    if (loadingStartedRef.current) {
      return;
    }
    
    loadingStartedRef.current = true;
    
    const loadImages = async () => {
      // Only load essential images for first render
      const essentialAssets = [logo]; // Only logo is essential for intro
      const totalAssets = essentialAssets.length;
      let loadedAssets = 0;

      const updateProgress = () => {
        loadedAssets += 1;
        const progress = (loadedAssets / totalAssets) * 100;
        setLoadingProgress(progress);

        if (loadedAssets === totalAssets) {
          setLoadingComplete(true);
        }
      };

      // Load only essential assets first
      const essentialPromises = essentialAssets.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            updateProgress();
            resolve();
          };
          img.onerror = () => {
            updateProgress();
            resolve();
          };
        });
      });

      try {
        await Promise.all(essentialPromises);
        
        // Load remaining images in background after essential assets
        setTimeout(() => {
          const remainingAssets = [...cardImg, image];
          remainingAssets.forEach((src) => {
            const img = new Image();
            img.src = src;
            // No need to track progress for background loading
          });
        }, 100);
        
      } catch (error) {
        console.error("Error loading images:", error);
        setLoadingComplete(true);
      }
    };

    loadImages();

    return () => {
      loadingStartedRef.current = false;
    };
  }, []);

  // Create wrapper components for components that need props - memoized for performance
  const ShutterCardWrapper = React.useMemo(() => () => (
    <ShutterCard
      heading="Some Heading"
      description="This can be a description about the service or product or pretty much anything you can use this card for. Its looks real good in terms of these micro interactions."
      topText="Hover me"
      bottomText="A short intimate description"
      imageSrc={image}
    />
  ), [image]);

  const ArrowButtonWrapper = React.useMemo(() => () => <ArrowButton text={"Lit Button"} />, []);
  const BorderButtonWrapper = React.useMemo(() => () => (
    <BorderButton text={"Border Button"} color={"#ffffff"} />
  ), []);
  const CircularButtonWrapper = React.useMemo(() => () => (
    <CircularButton text={"Circular Button"} />
  ), []);
  const TextAnimationWrapper = React.useMemo(() => () => (
    <TextAnimation text={"Short Text Animation"} />
  ), []);
  const Carousel3dWrapper = React.useMemo(() => () => (
    <Suspense fallback={<div className="h-64 bg-neutral-800 rounded-lg flex items-center justify-center text-white">Loading...</div>}>
      <Carousel3d images={cardImg} />
    </Suspense>
  ), [cardImg]);

  const componentCategories = React.useMemo(() => ({
    Buttons: {
      "Basic Button": Button,
      "Arrow Button": ArrowButtonWrapper,
      "Border Button": BorderButtonWrapper,
      "Overlap Button": OverlapButton,
      "Text Button": TextButton,
      "Circular Button": CircularButtonWrapper,
      "Capsule Button": CapsuleButton,
      "Shiny Button": ShinyButton,
    },
    Cards: {
      "Squishy Card": SquishyCard,
      "Tilt Card": TiltCard,
      "Inverted Card": InvertedCard,
      "Shutter Card": ShutterCardWrapper,
      "Parallax Card": Card,
      "Color Cards": ColorCards,
    },
    "Text Effects": {
      "Inverted Text": InvertedText,
      "Word Animation": Word,
      "Skew Text": SkewText,
      "Text Animation": TextAnimationWrapper,
      "Text Mask": TextMask,
    },
    Navigation: {
      "Sliding Nav": SlidingNav,
      "Slide Tabs": SlideTabsExample,
    },
    "Galleries & Sliders": {
      "3D Carousel": Carousel3dWrapper,
      "Swiper Slider": () => (
        <Suspense fallback={<div className="h-64 bg-neutral-800 rounded-lg flex items-center justify-center text-white">Loading...</div>}>
          <SwiperSlider />
        </Suspense>
      ),
      "Two Axis Slider": TwoAxisSlider,
      "Reveal Gallery": RevealGallery,
      "Sticky Gallery": StickyGallery,
      "Ball Switch Slider": BallSwitchSlider,
    },
    "Layout & Sections": {
      "Bento Grid": BentoGrid,
      "Reflective Grid": Grid,
      "Scale Section": ScaleSection,
      "Parallax Section": ParallaxSection,
      "Column Parallax": ColumnParallax,
      "Image Parallax": ImageParallax,
      "Particle Section": () => (
        <Suspense fallback={<div className="h-64 bg-neutral-800 rounded-lg flex items-center justify-center text-white">Loading...</div>}>
          <ParticleSection />
        </Suspense>
      ),
    },
    "Interactive Elements": {
      "Contact Form": ContactForm,
      "Custom Border": CustomBorder,
      "Image Trail": () => (
        <Suspense fallback={<div className="h-64 bg-neutral-800 rounded-lg flex items-center justify-center text-white">Loading...</div>}>
          <ImageTrail />
        </Suspense>
      ),
      "Infinite Marquee": InfiniteMarquee,
      "In View Animation": InViewAnimation,
    },
    "Banners & CTAs": {
      "Circular Banner": CircularBanner,
      "Separate Banner": SeperateBanner,
      "Call To Action": CallToAction,
      "Reveal Footer": RevealFooter,
    },
    "Special Effects": {
      "Split Vignette Effect": SplitVignetteEffect,
      "Floating Phone": FloatingPhone,
    },
  }), [ArrowButtonWrapper, BorderButtonWrapper, CircularButtonWrapper, ShutterCardWrapper, TextAnimationWrapper, Carousel3dWrapper]);

  const scrollToComponent = (componentName) => {
    // Add a small delay to ensure DOM is fully rendered
    setTimeout(() => {
      const sanitizedId = componentName.replace(/\s+/g, "-").toLowerCase();
      const element = document.getElementById(sanitizedId);

      if (element && lenisRef.current && lenisRef.current.lenis) {
        setIsScrolling(true);
        lenisRef.current.lenis.scrollTo(element, {
          offset: -80, // Offset to account for the fixed header
          lerp: 0.1, // Smoothness factor
          duration: 1, // Duration of scroll animation
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
        });
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      } else {
        console.error(
          `Element with id "${sanitizedId}" not found or Lenis not initialized for component "${componentName}"`
        );
        // Fallback to native scroll if Lenis is not available
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    }, 100);
  };

  return (
    <IntroAnimation
      onAnimationComplete={() => console.log("Intro animation completed")}
      loadingComplete={loadingComplete}
      loadingProgress={loadingProgress}
    >
      <Lenis root ref={lenisRef}>
        <Layout
          componentCategories={componentCategories}
          scrollToComponent={scrollToComponent}
        >
          {/* Hero Section */}
          <HeroSection scrollToComponent={scrollToComponent} />

          {/* Components Section */}
          <section className="relative">
            {Object.entries(componentCategories).map(
              ([category, components]) => (
                <div key={category}>
                  {/* Category Header */}
                  <div
                    id={category.toLowerCase().replace(/\s+/g, "-")}
                    className="pt-20 pb-8 px-4 sm:px-6 lg:px-8"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        {category}
                      </h2>
                      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                    </motion.div>
                  </div>

                  {/* Components */}
                  {Object.entries(components).map(
                    ([name, Component], index) => {
                      const codes =
                        componentCodes[name] || getDefaultCode(name);
                      return (
                        <ComponentWrapper
                          key={name}
                          componentName={name}
                          Component={Component}
                          index={index}
                          totalComponents={Object.keys(components).length}
                          reactCode={codes.react}
                          nextjsCode={codes.nextjs}
                        />
                      );
                    }
                  )}
                </div>
              )
            )}
          </section>

          {/* Footer */}
          <footer className="bg-neutral-900 border-t border-neutral-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Interactive Component Library
              </h3>
              <p className="text-neutral-400 mb-6">
                Built with React, Framer Motion, and Tailwind CSS
              </p>
              <div className="flex justify-center gap-4">
                <span className="text-sm text-neutral-500">
                  Scroll-driven animations • Interactive effects • Responsive
                  design
                </span>
              </div>
            </div>
          </footer>
        </Layout>
      </Lenis>
    </IntroAnimation>
  );
}

export default App;
