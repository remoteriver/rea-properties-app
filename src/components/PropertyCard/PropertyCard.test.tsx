import React from 'react';
import { render, screen } from '@testing-library/react';
import PropertyCard from './PropertyCard';
import { Property } from 'types/Property';

describe('PropertyCard', () => {
  describe('with empty property', () => {
    const mockProperty: Property = {
      price: 'price',
      agency: undefined,
      id: '',
      mainImage: '',
    };

    test('it renders', () => {
      render(<PropertyCard property={mockProperty} />);
      expect(screen.getByTestId('PROPERTY_CARD')).toBeInTheDocument();
      expect(screen.getByText('price')).toBeInTheDocument();
    });

    test('it renders with correct border styles', () => {
      render(<PropertyCard property={mockProperty} />);
      expect(screen.getByTestId('PROPERTY_CARD')).toBeInTheDocument();
      expect(screen.getByTestId('PROPERTY_CARD')).toHaveStyle({
        'box-shadow':
          '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
        'border-radius': '8px',
      });
    });
  });

  describe('with valid property obj', () => {
    const mockProperty: Property = {
      price: '$102,000',
      agency: {
        logo: 'logo_src',
        brandingColors: {
          primary: 'yellow',
        },
      },
      id: '1',
      mainImage: 'main_src',
    };

    test('it renders logo', () => {
      render(<PropertyCard property={mockProperty} />);
      expect(screen.getByAltText('logo')).toBeInTheDocument();
      expect(screen.getByAltText('logo')).toHaveAttribute('src', 'logo_src');
    });

    test('it renders main img', () => {
      render(<PropertyCard property={mockProperty} />);
      expect(screen.getByAltText('main')).toBeInTheDocument();
      expect(screen.getByAltText('main')).toHaveAttribute('src', 'main_src');
    });

    test('it renders price tag', () => {
      render(<PropertyCard property={mockProperty} />);
      expect(screen.getByText('$102,000')).toBeInTheDocument();
    });
  });
});
