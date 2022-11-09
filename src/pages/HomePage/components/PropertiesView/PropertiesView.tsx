import { Box, Typography } from '@mui/material';
import Flex from 'components/Flex/Flex';
import PropertyCard from 'components/PropertyCard/PropertyCard';
import { Property } from 'types/Property';
import usePropertiesList from '../../hooks/usePropertiesList/usePropertiesList';

interface Props {
  data: {
    results: Property[];
    saved: Property[];
  };
}

const PropertiesView = (props: Props) => {
  const { data } = props;

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
    <Flex p={2}>
      <Box flex={1} px={1}>
        <Typography variant="h5">Results</Typography>
        {results.map((property) => (
          <PropertyCard
            property={property}
            mode="add"
            onButtonClicked={handleAddPropertyToSaved}
          />
        ))}
      </Box>
      <Box flex={1} px={1}>
        <Typography variant="h5">Saved Properties</Typography>
        {saved.map((property) => (
          <PropertyCard
            property={property}
            mode="remove"
            onButtonClicked={handleRemovePropertyFromSaved}
          />
        ))}
      </Box>
    </Flex>
  );
};

export default PropertiesView;
