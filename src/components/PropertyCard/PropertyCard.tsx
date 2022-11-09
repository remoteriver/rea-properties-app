import React, { useState } from 'react';
import { Box, Button, Card, Typography } from '@mui/material';
import { BoxProps } from '@mui/system';
import { Property } from '../../types/Property';
import Flex from '../Flex';

const placeholderImgSrc =
  'https://via.placeholder.com/560x240?text=placeholder';

interface Props {
  property: Property;
  mode?: 'add' | 'remove';
  onButtonClicked?: (property: Property) => void;
}

const PropertyCard = (props: Props) => {
  const { property, mode, onButtonClicked } = props;

  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <Box
      key={property.id}
      my={2}
      boxShadow={1}
      borderRadius={2}
      overflow="hidden"
      data-testid="PROPERTY_CARD"
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <Flex
        height="36px"
        justifyContent="space-between"
        bgcolor={property.agency?.brandingColors?.primary}
        p={1}
      >
        <Box>
          <img
            height="100%"
            width="100%"
            alt="logo"
            src={property.agency?.logo}
          />
        </Box>
      </Flex>
      <Box height="360px" position="relative">
        <Flex
          position="absolute"
          width="100%"
          justifyContent="center"
          bottom="36px"
        >
          {hover &&
            mode &&
            {
              add: (
                <Button
                  variant="contained"
                  onClick={() => onButtonClicked(property)}
                >
                  Add Property
                </Button>
              ),
              remove: (
                <Button
                  variant="contained"
                  onClick={() => onButtonClicked(property)}
                >
                  Remove Property
                </Button>
              ),
            }[mode]}
        </Flex>
        <img
          height="100%"
          width="100%"
          alt="main"
          src={property.mainImage || placeholderImgSrc}
        />
      </Box>
      <Box height="50px" p={1}>
        <Typography>{property.price}</Typography>
      </Box>
    </Box>
  );
};

export default PropertyCard;
