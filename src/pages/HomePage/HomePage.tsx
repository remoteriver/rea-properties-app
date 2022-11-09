import { Container, Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import Flex from '../../components/Flex/Flex';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import data from '../../data/data.json';
import { Property } from '../../types/Property';
import usePropertiesList from './hooks/usePropertiesList/usePropertiesList';

const Homepage = () => {
  console.debug(data);

  const [results, addResults, removeResults] = usePropertiesList(data.results);
  const [saved, addSaved, removeSaved] = usePropertiesList(data.saved);

  const handleAddPropertyToSaved = (property: Property) => {
    removeResults(property.id);
    addSaved(property);
  };
  const handleRemovePropertyFromSaved = (property: Property) => {
    removeSaved(property.id);
    addResults(property);
  };

  return (
    <Container>
      <Flex>
        <Box flex={1} px={2}>
          <Typography>Results</Typography>
          {results.map((property) => (
            <PropertyCard
              property={property}
              mode="add"
              onButtonClicked={handleAddPropertyToSaved}
            />
          ))}
        </Box>
        <Box flex={1}>
          <Typography>Saved Properties</Typography>
          {saved.map((property) => (
            <PropertyCard
              property={property}
              mode="remove"
              onButtonClicked={handleRemovePropertyFromSaved}
            />
          ))}
        </Box>
      </Flex>
    </Container>
  );
};

export default Homepage;
