import React from 'react';
import { render } from '@testing-library/react';
import App from './App';




test('App page renders correctly', () =>{
  // const mockEpisodes = jest.fn();
  // const { } = render(
  //   <Episodes episodes={episodes}/>
  // );
  const { getByText } = render(
    <App/>  
  )

  getByText(/Fetching data/i);
  




})