import FullScreenSection from "./FullScreenSection.jsx";
import { Heading, Image, VStack } from "@chakra-ui/react";

const LandingPage = () => {
  const width = window.innerWidth;
  return (
    <FullScreenSection
      zIndex={1}
      id="landing-section"
      backgroundColor="#ffffff"
      justifyContent="center"
      alignItems="center"
    >
      {width > 760 && (
        <video
          preload={"auto"}
          rel={"preload"}
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "6.5%",
            height: "100%",
            objectFit: "contain",
            transform: "translate(-50.05%, -50%)",
          }}
          autoPlay
          muted
          loop
          id="myVideo"
        >
          <source
            src="RobOlympiX 1.0 _ Official Aftermovie.mp4"
            type="video/mp4"
          />
        </video>
      )}
      {width < 760 && (
        <video
          preload={"auto"}
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "2.5%",
            height: "100%",
            objectFit: "contain",
            transform: "translate(-50%, -50%)",
          }}
          autoPlay
          muted
          loop
          id="myVideo"
        >
          <source
            src="RobOlympiX 1.0 _ Official Aftermovie.mp4"
            type="video/mp4"
          />
        </video>
      )}
      <VStack
        height={["100px", "100vh"]}
        justifyContent="-moz-initial"
        alignItems="center"
        spcaing={24}
        zIndex={2}
      >
        {/*  <Image marginTop={["30%", "15%"]} src="\public\logo-white.webp" alt="Aerobotix" width={["150px", "550px"]}
                       height={["75px", "180px"]}/>
        <Heading fontSize={["l", "5xl"]} color="white" fontFamily={'Mr Dafoe'}></Heading> */}
      </VStack>
    </FullScreenSection>
  );
};

export default LandingPage;
