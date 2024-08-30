// import './App.css';
// import Carousel3d from './components/Carousel3D/Carousel3d';
// import ColorCards from './components/ColorCards';
// import CustomBorder from './components/CustomBorder';
// import InvertedText from './components/InvertedText';
// import SquishyCard from './components/SquishyCard';
// import TiltCard from './components/TiltCard';
// import Word from './components/Word';

// function App() {
//   const cardImg = [
//     "https://picsum.photos/2100/2100",
//     "https://picsum.photos/2200/2200",
//     "https://picsum.photos/2300/2300",
//     "https://picsum.photos/2400/2400",
//     "https://picsum.photos/1900/1900",
//     "https://picsum.photos/1800/1800",
//     "https://picsum.photos/1700/1700",
//     "https://picsum.photos/1600/1600",
//     "https://picsum.photos/1500/1500",
//     "https://picsum.photos/1400/1400",
//   ];

//   return (
//     <section className="flex flex-col scroll-smooth min-h-[100vh] min-w-screen items-center justify-center bg-neutral-900">
//       {/* <SquishyCard /> */}
//       {/* <TiltCard /> */}
//       {/* <InvertedText /> */}
//       {/* <div className='h-[100vh] scroll-smooth flex justify-center items-center text-6xl font-serif'>
//         Hello There
//       </div>
//       <div className='h-[150vh] scroll-smooth'>
//         <Word />
//       </div> */}
//       {/* <CustomBorder /> */}
//       {/* <ColorCards /> */}
//       {/* <Carousel3d
//         images={cardImg}
//       // radius={400} already have a default value but can be changed
//       // duration={15} already have a default value but can be changed
//       // width={250} already have a default value but can be changed
//       // height={300} already have a default value but can be changed
//       /> */}
//       <div className='border flex flex-col w-full'>
//         <div className='flex border p-2 flex-row '>
//           <div className='flex border h-[40vh] p-2 w-5/12 bg-zinc-900'></div>
//           <div className='flex border h-[40vh] p-2 w-7/12 bg-zinc-950'></div>
//         </div>
//         <div className='flex  border p-2 relative'>
//           <div className='size-10 rounded-full right-0 top-0 bg-red-500 cursor-pointer'></div>
//           <Carousel3d
//             images={cardImg}
//           />
//         </div>
//         <div className='flex border p-2 flex-row'>
//           <div className='flex border h-[40vh] p-2 w-4/12 bg-neutral-950'></div>
//           <div className='flex border h-[40vh] p-2 w-8/12 bg-gray-950'></div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default App;





import './App.css';
import React, { useState } from 'react';
import Carousel3d from './components/Carousel3D/Carousel3d';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

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

  const cardImg1 = [
    "https://picsum.photos/2000/2000",
    "https://picsum.photos/2100/2100",
    "https://picsum.photos/2200/2200",
    "https://picsum.photos/2300/2300",
    "https://picsum.photos/2400/2400",
  ];

  const cardImg2 = [
    "https://picsum.photos/2500/2500",
    "https://picsum.photos/2600/2600",
    "https://picsum.photos/2700/2700",
    "https://picsum.photos/2800/2800",
    "https://picsum.photos/2900/2900",
    "https://picsum.photos/3000/3000",
  ];

  const cardImg3 = [
    "https://picsum.photos/3000/3000",
    "https://picsum.photos/3100/3100",
    "https://picsum.photos/3200/3200",
  ];

  const [images, setImages] = useState(cardImg);

  const handleSetImages = (selectedImages) => {
    setImages(0);
    setTimeout(() => setImages(selectedImages), 10);
  };


  return (
    <section className="flex flex-col scroll-smooth min-h-[100vh] min-w-screen items-center justify-center bg-neutral-900">
      <div className='bg-transparent backdrop-blur-sm flex flex-col w-full'>
        <div
          className='flex flex-row border-red-500 border'>
          <div
            className='flex w-5/12 bg-zinc-900 cursor-pointer border'
            onClick={() => handleSetImages(cardImg)}
          ></div>
          <div
            className='flex h-[40vh] p-2 w-7/12 bg-zinc-950 cursor-pointer border'
            onClick={() => handleSetImages(cardImg1)}
          ></div>
        </div>
        <div
          className='flex h-auto w-full relative'>
          <AnimatePresence>
            {images && (
              <motion.div
                key="carousel"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className=' w-full relative'
              >
                <Carousel3d images={images} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div
          className='flex flex-row border-red-500 border'>
          <div
            className='flex h-[40vh] p-2 w-4/12 bg-neutral-950 cursor-pointer border'
            onClick={() => handleSetImages(cardImg2)}
          ></div>
          <div
            className='flex  h-[40vh] p-2 w-8/12 bg-gray-950 cursor-pointer border'
            onClick={() => handleSetImages(cardImg3)}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default App;
