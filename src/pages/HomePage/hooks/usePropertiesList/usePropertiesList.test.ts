import { act, render, renderHook, screen } from '@testing-library/react';
import usePropertiesList from './usePropertiesList';

describe('usePropertiesList', () => {
  test('it sets properties', () => {
    const mockInitState = [
      {
        price: 'price',
        agency: undefined,
        id: '',
        mainImage: '',
      },
    ];

    const { result } = renderHook(() => usePropertiesList(mockInitState));

    expect(result.current[0]).toBe(mockInitState);
  });

  test('it adds a property', () => {
    const mockProperty = {
      price: 'price',
      agency: undefined,
      id: '1',
      mainImage: '',
    };
    const { result } = renderHook(() => usePropertiesList());

    const addProperty = result.current[1];

    expect(result.current[0]).toEqual([]);

    act(() => {
      addProperty(mockProperty);
    });

    expect(result.current[0]).toEqual([mockProperty]);
  });

  test('it removes a property', () => {
    const mockInitState = [
      {
        price: 'price',
        agency: undefined,
        id: '1',
        mainImage: '',
      },
      {
        price: 'price',
        agency: undefined,
        id: '2',
        mainImage: '',
      },
    ];

    const { result } = renderHook(() => usePropertiesList(mockInitState));

    const removeProperty = result.current[2];

    expect(result.current[0]).toEqual(mockInitState);

    act(() => {
      removeProperty('2');
    });

    expect(result.current[0]).toEqual([mockInitState[0]]);
  });

  test('it will not remove a property if the id doesnt esxit', () => {
    const mockInitState = [
      {
        price: 'price',
        agency: undefined,
        id: '1',
        mainImage: '',
      },
      {
        price: 'price',
        agency: undefined,
        id: '2',
        mainImage: '',
      },
    ];

    const { result } = renderHook(() => usePropertiesList(mockInitState));

    const removeProperty = result.current[2];

    expect(result.current[0]).toEqual(mockInitState);

    act(() => {
      removeProperty('3');
    });

    expect(result.current[0]).toEqual(mockInitState);
  });
});
