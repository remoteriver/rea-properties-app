import { render, screen } from '@testing-library/react';
import Flex from './';

describe('Flex', () => {
  test('it renders', () => {
    render(<Flex>flex</Flex>);

    expect(screen.getByText('flex')).toBeInTheDocument();
    expect(screen.getByText('flex')).toHaveStyle({ display: 'flex' });
  });
});
