import { Box, Card, Typography } from "@mui/material";
import { BoxProps } from "@mui/system";
import Flex from "../Flex/Flex";

interface Props {}

const PropertyCard = (props: Props) => {
  return (
    <Box my={2} boxShadow={1} borderRadius={2} height="350px">
      <Flex height="40px" justifyContent="space-between">
        <Box>Logo</Box>
        <Box>BG</Box>
      </Flex>
      <Box height="240px">
        <img
          height="100%"
          width="100%"
          src="https://via.placeholder.com/560x240?text=placeholder"
        />
      </Box>
      <Box>
        <Typography>Price</Typography>
      </Box>
    </Box>
  );
};

export default PropertyCard;
