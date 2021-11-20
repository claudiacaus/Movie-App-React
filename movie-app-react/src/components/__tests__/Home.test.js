import React from 'react';
import Home from '../Home';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('header renders with correct text', () => {
  const headerEl = getByTestId('header');

  expect(headerEl.textContent).toBe('Popular Movies');
});
