import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Heading, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection.jsx";
import aero1 from "/Gallery/1.webp";
import aero2 from "/Gallery/2.webp";
import aero3 from "/Gallery/3.webp";
import aero4 from "/Gallery/4.webp";
import aero5 from "/Gallery/5.webp";
import aero6 from "/Gallery/6.webp";
import aero7 from "/Gallery/7.webp";
import aero8 from "/Gallery/8.webp";
import aero9 from "/Gallery/9.webp";
import aero10 from "/Gallery/10.webp";
import aero11 from "/Gallery/11.webp";
import aero12 from "/Gallery/12.webp";
import aero13 from "/Gallery/13.webp";
import aero14 from "/Gallery/14.webp";
import aero15 from "/Gallery/15.webp";
import aero16 from "/Gallery/16.webp";
import aero17 from "/Gallery/17.webp";
import aero18 from "/Gallery/18.webp";
import aero19 from "/Gallery/19.webp";
import aero20 from "/Gallery/20.webp";
import aero21 from "/Gallery/21.webp";
import aero22 from "/Gallery/22.webp";
import aero23 from "/Gallery/23.webp";
import aero24 from "/Gallery/24.webp";
import aero25 from "/Gallery/25.webp";
import aero26 from "/Gallery/26.webp";
import aero27 from "/Gallery/27.webp";
import aero28 from "/Gallery/28.webp";

const GalleryContainer = styled.div`
  display: flex;
  zIndex:1;

  flex-direction: column;
  align-items: center;
  max-width:100%;
  max-height:80%;
`;

const GalleryImage = styled(Image)`
  transition: transform 0.5s ease-in-out;
  zIndex:1;

  border-radius: 10px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.75);
  max-width:100%;
  max-height:100%;
  &:hover {
    transform: scale(1.1);
  }
`;

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    aero1,
    aero2,
    aero3,
    aero4,
    aero5,
    aero6,
    aero7,
    aero8,
    aero9,
    aero10,
    aero11,
    aero12,
    aero13,
    aero14,
    aero15,
    aero16,
    aero17,
    aero18,
    aero19,
    aero20,
    aero21,
    aero22,
    aero23,
    aero24,
    aero25,
    aero26,
    aero27,
    aero28,
];
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const windowWidth = window.innerWidth;

  const imageMemoized = useMemo(
    () => (
      <GalleryImage
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
      />
    ),
    [images, currentImageIndex]
  );

  useEffect(() => {
    const intervalId = setInterval(handleNextImage, 3500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <FullScreenSection
      
      id="image-section"
      width={window.innerWidth - window.innerWidth / 10}
      height="100vh"
      justifyContent="center"
      alignItems="center"
      zIndex={10} 
      backgroundColor="#ffffff"
    > <Heading color="var(--title)" as="h1" size={["xl", "2xl"]} padding="0% 2% 2% 2%" >
    Galerie
  </Heading>
      <GalleryContainer style={{ zIndex: 1 }}> {/* Change this line */}
       
        {imageMemoized}
      </GalleryContainer>
    </FullScreenSection>
  );
};
export default ImageSlider;
