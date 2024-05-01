import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, HStack, Image } from "@chakra-ui/react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    name: "Facebook",
    icon: faFacebook,
    url: "https://www.facebook.com/RobOlympiX",
  },
  {
    name: "Mail",
    icon: faEnvelope,
    url: "mailto:contact@robolympix.tn",
  },
  {
    name: "Linkedin",
    icon: faLinkedin,
    url: "https://www.linkedin.com/company/robolympix/",
  },
];

const Header = () => {
  let translation = useRef(null);
  let prevScrollY = 0;

  const handleScroll = () => {
    const scrollY = window.scrollY;
    let scrolling = scrollY - prevScrollY <= 0 ? 0 : -200;
    translation.current.style.transform = "translateY(" + scrolling + "px)";
    prevScrollY = scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [translation]);

  const windowWidth = window.outerWidth;

  return (
    <Box
      id="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".1s"
      transitionTimingFunction="ease"
      backgroundColor="#2d2d2d" // Change the background color
      ref={translation}
      zIndex={5}
    >
      <Box
        color="white"
        maxWidth={["400px", "1280px"]}
        margin={["0 0", "0 auto"]}
      >
        <HStack
          px={[4, 16]}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          {/*  <Box>
            
            <Image
              src="\public\cool-robot.png"
              alt="Logo"
              width="50px" // Set the desired width
              height="auto" // Maintain the aspect ratio
            />
  </Box> */}
          <HStack id="header-socials" spacing={[2, 8]}>
            {socials.map((social) => (
              <a
                aria-label={"Reachout using " + social.name}
                key={social.name}
                href={social.url}
              >
                {windowWidth > 760 && (
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                )}
                {windowWidth <= 760 && (
                  <FontAwesomeIcon icon={social.icon} size="sm" />
                )}
              </a>
            ))}
          </HStack>
          <HStack id="header-links" spacing={[2, 8]} fontSize={[10, 20]}>
            <a href="#intro-section">A propos de l'evenement</a>
            <a href="#image-section">Galerie</a>
            <a href="#eurobot-section">Eurobot</a>
            <a href="#challenges-section">Challenges</a>
            <a href="#planning-section">Planning</a>
            <a href="#team-section">Notre Equipe</a>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
