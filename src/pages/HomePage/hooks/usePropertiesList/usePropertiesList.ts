import { useState } from 'react';
import { Property } from '../../../../types/Property';

const usePropertiesList = (
  initState: Property[] = []
): [Property[], (property: Property) => void, (id: string) => void] => {
  const [properties, setProperties] = useState(initState);

  const addProperty = (property: Property) => {
    setProperties([...properties, property]);
  };

  const removeProperty = (id: string) => {
    setProperties([...properties.filter((property) => property.id !== id)]);
  };

  return [properties, addProperty, removeProperty];
};

export default usePropertiesList;
