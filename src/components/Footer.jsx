import { Box, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box zIndex={10} backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Robolympix 2.0</p>
          <p style={{ marginLeft: "10px" }}>Phone: (96 747 668)</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
