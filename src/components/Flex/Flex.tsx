import { Box } from '@mui/material';
import { BoxProps } from '@mui/system';

const Flex = (props: BoxProps) => {
  return <Box {...props} sx={{ display: 'flex' }}></Box>;
};

export default Flex;
