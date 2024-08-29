import './App.css';
import Carousel3d from './components/Carousel3D/Carousel3d';
import ColorCards from './components/ColorCards';
import CustomBorder from './components/CustomBorder';
import InvertedText from './components/InvertedText';
import SquishyCard from './components/SquishyCard';
import TiltCard from './components/TiltCard';
import Word from './components/Word';

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
    <section className="flex flex-col scroll-smooth h-[100vh] w-[100vw] items-center justify-center bg-neutral-900">
      {/* <SquishyCard /> */}
      {/* <TiltCard /> */}
      {/* <InvertedText /> */}
      {/* <div className='h-[100vh] scroll-smooth flex justify-center items-center text-6xl font-serif'>
        Hello There
      </div>
      <div className='h-[150vh] scroll-smooth'>
        <Word />
      </div> */}
      {/* <CustomBorder /> */}
      {/* <ColorCards /> */}
      <Carousel3d
        images={cardImg}
      // radius={400}
      // duration={15}
      // width={250}
      // height={300}
      />
    </section>
  );
}

export default App;
