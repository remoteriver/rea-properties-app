import { Container } from '@mui/material';
import data from 'data/data.json';
import PropertiesView from './components/PropertiesView';

const Homepage = () => {
  return (
    <Container>
      <PropertiesView data={data} />
    </Container>
  );
};

export default Homepage;
