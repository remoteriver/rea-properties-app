import { Container, Box, Typography } from "@mui/material";
import React from "react";
import Flex from "../../components/Flex/Flex";
import PropertyCard from "../../components/PropertyCard/PropertyCard";

const Homepage = () => {
  return (
    <Container>
      <Flex>
        <Box flex={1} px={2}>
          <Typography>Results</Typography>
          <Box>
            <PropertyCard />
          </Box>
        </Box>
        <Box flex={1}>
          <Typography>Saved Properties</Typography>
          <Box></Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Homepage;
