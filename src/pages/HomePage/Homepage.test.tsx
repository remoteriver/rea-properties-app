import { render, screen } from '@testing-library/react';
import PropertiesView from './components/PropertiesView';
import { Homepage } from './';

jest.mock('./components/PropertiesView', () => jest.fn());
describe('HomePage', () => {
  beforeEach(() => {
    (PropertiesView as jest.Mock).mockImplementation(() => (
      <div>PropertiesView</div>
    ));
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('it renders', () => {
    render(<Homepage />);

    expect(PropertiesView).toBeCalled();
    expect(screen.getByText('PropertiesView')).toBeInTheDocument();
  });
});
