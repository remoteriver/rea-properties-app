import { Box, Card, Typography } from "@mui/material";
import { BoxProps } from "@mui/system";
import { Property } from "../../types/Property";
import Flex from "../Flex/Flex";

const placeholderImgSrc =
  "https://via.placeholder.com/560x240?text=placeholder";

interface Props {
  property: Property;
}

const PropertyCard = (props: Props) => {
  const { property } = props;
  return (
    <Box my={2} boxShadow={1} borderRadius={2} overflow="hidden">
      <Flex
        height="36px"
        justifyContent="space-between"
        bgcolor={property.agency.brandingColors.primary}
        p={1}
      >
        <Box>
          <img height="100%" width="100%" src={property.agency.logo} />
        </Box>
      </Flex>
      <Box height="360px">
        <img
          height="100%"
          width="100%"
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
