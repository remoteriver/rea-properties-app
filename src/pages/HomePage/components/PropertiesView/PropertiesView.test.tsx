import { render, screen } from '@testing-library/react';
import PropertiesView from './PropertiesView';
import PropertyCard from 'components/PropertyCard/PropertyCard';

jest.mock('components/PropertyCard/PropertyCard', () => jest.fn());

describe('PropertiesView', () => {
  beforeEach(() => {
    (PropertyCard as jest.Mock).mockImplementation(() => (
      <div>PropertyCard</div>
    ));
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('it renders', () => {
    render(
      <PropertiesView
        data={{
          results: [],
          saved: [],
        }}
      />,
    );

    expect(screen.getByText('Saved Properties')).toBeInTheDocument();
    expect(screen.getByText('Results')).toBeInTheDocument();
  });

  test('it renders PropertyCard for saved Properties', () => {
    const mockProperty = {
      price: 'price',
      agency: undefined,
      id: '1',
      mainImage: '',
    };

    render(
      <PropertiesView
        data={{
          results: [],
          saved: [mockProperty],
        }}
      />,
    );

    expect(PropertyCard).toBeCalledWith(
      {
        mode: 'remove',
        property: mockProperty,
        onButtonClicked: expect.any(Function),
      },
      expect.anything(),
    );
    expect(screen.getAllByText('PropertyCard').length).toBe(1);
  });

  test('it renders PropertyCard for results', () => {
    const mockProperty = {
      price: 'price',
      agency: undefined,
      id: '1',
      mainImage: '',
    };

    render(
      <PropertiesView
        data={{
          results: [mockProperty],
          saved: [],
        }}
      />,
    );

    expect(PropertyCard).toBeCalledWith(
      {
        mode: 'add',
        property: mockProperty,
        onButtonClicked: expect.any(Function),
      },
      expect.anything(),
    );
    expect(screen.getAllByText('PropertyCard').length).toBe(1);
  });
});
