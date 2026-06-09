// __tests__/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('Pengujian judul dan sub judul di App.js', () => {
  test('Judul utama dan sub judul muncul dengan benar', () => {
    render(<App />);
    const mainTitle = screen.getByRole('heading', { level: 1 });
    const subTitle = screen.getByRole('heading', { level: 2 });

    expect(mainTitle).toHaveTextContent("Hello Jayjay Student!"); // ganti sesuai judul di App.js
    expect(subTitle).toHaveTextContent("Let's create unit test");  // ganti sesuai sub judul di App.js
  });
});