import { Container, Box, Typography } from "@mui/material";
import React from "react";
import Flex from "../../components/Flex/Flex";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import data from "../../data/data.json";

console.log(data);

const Homepage = () => {
  const properties = data.results;
  return (
    <Container>
      <Flex>
        <Box flex={1} px={2}>
          <Typography>Results</Typography>
          {properties.map((property) => (
            <PropertyCard property={property} />
          ))}
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
